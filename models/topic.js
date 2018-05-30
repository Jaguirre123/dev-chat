var mongoose = require('mongoose');

var chatsSchema = new mongoose.Schema({
  usersName: String,
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  content: String
}, {
  timestamps: true
});

var topicSchema = new mongoose.Schema({
  title: String,
  chats: [ chatsSchema ],
  chatNamespace: String,
  imageUrl: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Topic', topicSchema);