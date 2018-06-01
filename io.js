var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

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
            socket.join(topicNamespace);
        });
        
        socket.on('leave-topic', function(topicNamespace) {
            socket.room = null;
            socket.leave(topicNamespace);
        });

        socket.on('new-chat', function(chat) {
            console.log(`received new-chat ${JSON.stringify(chat)}`);
            // persist chat in topic document
            chat.topic.push()
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