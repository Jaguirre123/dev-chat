var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;
var Topic = require('./models/topic');

var io;

function init(http) {
    io = require('socket.io')(http);

    io.on('connection', function(socket) {
        
        socket.on('register', function(token) {
           jwt.verify(token, SECRET, function(err, decoded) {
                if (!err) socket.user = decoded.user;
           }); 
        });

        socket.on('join-topic', function(topicNamespace) {
            if (!socket.user) return;
            socket.room = topicNamespace;
            socket.join(topicNamespace, () => {
                io.in(topicNamespace).clients((err, clients) => {
                    let sockets = io.of('/').adapter.nsp.sockets;
                    let users = clients.map(client => sockets[client].user);
                    io.to(topicNamespace).emit('topic-user-list', users)
                });
            });
        });
        
        socket.on('leave-topic', function(topicNamespace) {
            socket.room = null;
            socket.leave(topicNamespace, function() {
                io.in(topicNamespace).clients((err, clients) => {
                    let sockets = io.of('/').adapter.nsp.sockets;
                    let users = clients.map(client => sockets[client].user);
                    io.to(topicNamespace).emit('topic-user-list', users)
                });
            });
        });

        socket.on('new-chat', function(chat) {
            console.log(`received new-chat ${JSON.stringify(chat)}`);
            Topic.findOne({chatNamespace: socket.room}).then(topic => {
                topic.chats.push(chat);
                topic.save();
            })
            io.in(socket.room).emit('new-chat', chat);
        })

    });
}

function get() {
    return io;
}

module.exports = {
    init,
    get
}