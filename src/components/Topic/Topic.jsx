import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Topic.css';


class Topic extends Component {
    state = {count: ''}
    
    componentDidMount() {
        fetch(`/api/topics/count/${this.props.topic.chatNamespace}`)
        .then(res => res.json())
        .then(({count}) => this.setState({count}));
    }
    
    render() {
        let {topic} = this.props;
        return (
            <div className="col-md-3">
                <div className="card mb-4 box-shadow">
                    <img className="card-img-top" src={topic.imageUrl} alt="" />
                    <div className="card-body">
                        <p className="card-text text-truncate">{topic.title} ChatRoom</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to={`/chatroom/${topic.chatNamespace}`} className="btn btn-block btn-outline-secondary text-truncate">Join ChatRoom</Link>
                        </div>
                        {this.state.count >= 1 ?
                            <small className="text-muted">{this.state.count} Current Users</small>
                        :
                            ''
                        }
                    </div>
                </div>
            </div>
        );
    }
}


export default Topic;