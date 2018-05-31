import React from 'react';
import {Link} from 'react-router-dom';
import './Topic.css';


const Topic = ({topic}) => {
    return (
        <div className="col-md-3">
        <div className="card mb-4 box-shadow">
            <img className="card-img-top" src={topic.imageUrl} alt="Card image cap" />
            <div className="card-body">
                <p className="card-text text-truncate">{topic.title} ChatRoom</p>
                <div className="d-flex justify-content-between align-items-center">
                        <Link to={`/chatroom/${topic.chatNamespace}`} className="btn btn-block btn-outline-secondary text-truncate">Join ChatRoom</Link>
                </div>
                <small className="text-muted">12 Users</small>
            </div>
        </div>
        </div>
    );
}


export default Topic;