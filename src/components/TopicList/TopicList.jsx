import React from 'react';
import Topic from '../Topic/Topic';

const TopicList = (props) => {
    let topicCards = props.pageOfTopics.map(topic => (
        <Topic key={topic._id} topic={topic} />
    ));
  
    return (
        <div className="container">
            <div className="row">
                {topicCards}
            </div>
        </div>
    );
}

export default TopicList;