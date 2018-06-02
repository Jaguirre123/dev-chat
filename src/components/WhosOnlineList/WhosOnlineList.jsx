import React, { Component } from 'react';
import './WhosOnlineList.css';

class WhosOnlineList extends Component {
    render() {
        return (
            <ul>
                {this.props.membersInChatroom.length ?
                    this.props.membersInChatroom.map((member, idx) => <WhosOnlineListItem key={idx} member={member} user={this.props.user}/>)
                :
                <p>Loading...</p>
                }
            </ul>
        );
    }
}

const WhosOnlineListItem = (props) => {
    const styles = {
        li: {
            display: 'flex',
            alignItems: 'center',
            marginTop: 5,
            marginBottom: 5,
            paddingTop: 2,
            paddingBottom: 2,
        },
        div: {
            borderRadius: '50%',
            width: 11,
            height: 11,
            marginRight: 10,
        },
    };

    
    return props.member._id === props.user._id ?
        <li style={styles.li}>
            <div style={styles.div}>
                <p className='userName'><span>{props.member.firstName} {props.member.lastName}</span> {props.member.email}</p>(you)
            </div>
        </li>
        :
        <li style={styles.li}>
        <div style={styles.div}>
            <p className='userName'><span>{props.member.firstName} {props.member.lastName}</span> {props.member.email}</p>
        </div>
        </li>;

    
};

export default WhosOnlineList;