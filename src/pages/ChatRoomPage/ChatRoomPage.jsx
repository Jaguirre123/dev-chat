import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import WhosOnlineList from '../../components/WhosOnlineList/WhosOnlineList';
import socket from '../../utils/socket';
import './ChatRoomPage.css';

class ChatRoomPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: null,
            membersInChatroom: []
        }
    }

    getTopicByNamespace = () => {
        fetch(`/api/topics/${this.props.match.params.namespace}`)
            .then(res => res.json())
            .then(topic => {
                this.setState({ topic });
                socket.on('new-chat', (chat) => {
                    let topic = { ...this.state.topic };
                    topic.chats.push(chat);
                    this.setState({ topic });
                });
            });
    }

    handleSendChat = () => {
        var content = this.chatInput.value;
        if (!this.chatInput) return;
        socket.emit('new-chat', { content, userId: this.props.user._id, userName: `${this.props.user.firstName} ${this.props.user.lastName}`});
        this.chatInput.value = "";
        this.forceUpdate();
    }

    componentDidMount() {
        socket.on('topic-user-list', (users) => { 
            this.setState({membersInChatroom: users});
        });
        this.getTopicByNamespace();
        socket.emit('join-topic', this.props.match.params.namespace);
    }

    componentWillUnmount() {
        socket.emit('leave-topic', this.props.match.params.namespace);
        socket.off('new-chat');
        socket.off('topic-user-list');
    }

    render() {
        return (
            this.state.topic ?
                <div>
                    <NavBar />
                    <div className='container-chat-rooms' style={{ backgroundColor: 'white' }}>
                        <div className='chatContainer'>                         
                            <aside className='whosOnlineListContainer'>
                                <h1 className='chatRoomTitle'>{this.state.topic.title} Chatroom</h1>
                                <p className='currentUsers'>Current Users: <span className='badge badge-light'>{this.state.membersInChatroom.length}</span></p>
                                <hr />
                                <WhosOnlineList
                                    membersInChatroom={this.state.membersInChatroom}
                                    user={this.props.user}
                                />
                            </aside>                            
                            <section className='chatListContainer'>
                                <div className='chats'>
                                    {this.state.topic.chats.map((chat, idx) => <div className='chatBox' key={idx}><p className='chatName'><span>{chat.userName}</span> - <a className='emailChat badge badge-dark' href={`mailto:${this.props.user.email}`}>E-mail</a><span className='datetime'>{new Date(chat.createdAt).toLocaleString().replace(/:\d\d /, ' ',).replace(',', ' -')}</span></p><hr /><p className='chatContent'>{chat.content}</p></div>)}
                                </div>
                                <div className="input-group">
                                    <textarea ref={(ta) => this.chatInput = ta} className="form-control custom-control chat-input" rows="3" placeholder='Type here...'></textarea>
                                    <span className="input-group-addon btn btn-dark" onClick={this.handleSendChat}><i className="fas fa-paper-plane"></i></span>
                                </div>
                                
                            </section>
                        </div>
                    </div>
                    <Footer />
                </div>
                :
                null
        );
    }
}

export default ChatRoomPage;