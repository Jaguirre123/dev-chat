import React, {Component} from 'react';
import LoginForm from '../LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';

class Authenticate extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ''}
    }

    updateMessage = (msg) => {
        this.setState({message: msg});
    }

    render() {
        return (
            <div>
            {this.props.login ? <SignupForm {...this.props} 
                        updateMessage={this.updateMessage} 
                        handleSignup={this.handleSignup}/>
                    : 
                        <LoginForm {...this.props}/>}
            </div>
        )
    }
}

export default Authenticate;