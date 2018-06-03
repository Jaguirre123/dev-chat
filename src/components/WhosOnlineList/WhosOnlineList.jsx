import React, { Component } from 'react';
import './WhosOnlineList.css';

class WhosOnlineList extends Component {
    render() {
        return (
            <ul>
                {this.props.membersInChatroom.length ?
                    this.props.membersInChatroom.map((member, idx) => <WhosOnlineListItem key={idx} member={member} user={this.props.user}/>)
                    
                :
                <p className='loading'>Loading...</p>
                }
            </ul>
        );
    }
}

const WhosOnlineListItem = (props) => {
    const styles = {
        li: {
            display: 'table-row',
            alignItems: 'center',
            marginTop: 50,
            marginBottom: 50,
            paddingTop: 2,
            paddingBottom: 2,
        },
        div: {
            borderRadius: '50%',
            width: 11,
            marginRight: 10,
        },
    };
    
    return props.member._id === props.user._id ?
        <li style={styles.li}>
            <div style={styles.div}>
                <p className='userName'><span className='fullName'>> {props.member.firstName} {props.member.lastName}</span>&nbsp;{props.member.email}</p>
            </div>
        </li>
        :
        <li style={styles.li}>
        <div style={styles.div}>
            <p className='otherUsers'><span className='fullName'>> {props.member.firstName} {props.member.lastName}</span>&nbsp;<a className='email' href={`mailto:${props.member.email}`}>{props.member.email}</a></p>
        </div>
        </li>;

    
};

export default WhosOnlineList;