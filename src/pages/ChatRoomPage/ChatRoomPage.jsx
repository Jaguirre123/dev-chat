import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import socket from '../../utils/socket';

class ChatRoomPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: null
        }
    }

    getTopicByNamespace = () => {
        fetch(`/api/topics/${this.props.match.params.namespace}`)
        .then(res => res.json()) 
        .then(topic => {
            this.setState({topic});
            socket.on('new-chat', (chat) => {
                let topic = {...this.state.topic};
                topic.chats.push(chat);
                this.setState({topic});
            });
        });
    }

    handleSendChat = () => {
        var content = this.chatInput.value;
        if (!this.chatInput) return;
        socket.emit('new-chat', {content, userId: this.props.user._id, userName: this.props.user.firstName});
        this.chatInput.value = "";
        this.forceUpdate();
    }

    componentDidMount() {
        this.getTopicByNamespace();
        socket.emit('join-topic', this.props.match.params.namespace);
    }

    componentWillUnmount() {
        socket.emit('leave-topic', this.props.match.params.namespace);
        socket.off('new-chat');
    }

    render() {
        return (
            this.state.topic ?
                <div style={{backgroundColor: 'white'}}>
                    <NavBar />
                    <h1>{this.state.topic.title}</h1>
                    <p>route param {this.props.match.params.namespace}</p>
                    <ul>
                        {this.state.topic.chats.map((chat, idx )=> <p key={idx}>{chat.content}</p>)}
                    </ul>
                    <textarea ref={(ta) => this.chatInput = ta}></textarea>
                    <button className='btn btn-outline-secondary' onClick={this.handleSendChat}><i className="fas fa-paper-plane"></i></button>
                </div>
            :
                null
        );
    }
}

export default ChatRoomPage;