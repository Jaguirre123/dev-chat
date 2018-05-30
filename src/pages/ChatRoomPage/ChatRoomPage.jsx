import React, {Component} from 'react';


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
        })
    }

    componentDidMount() {
        this.getTopicByNamespace();
    }

    render() {
        return (
            this.state.topic ?
                <div>
                    <h1>{this.props.matchtitle}</h1>
                    <p>route param {this.props.match.params.namespace}</p>
                </div>
            :
                null
        );
    }
}

export default ChatRoomPage;