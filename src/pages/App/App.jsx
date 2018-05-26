import React, { Component } from 'react';
import logo from '../../logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import userService from '../../utils/userService';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    }
  }

  updateLogin = () => {
    this.setState({
      login: !this.state.login
    })
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div>
        <Route path="/" render={(props) => (
          <LandingPage
            login={this.state.login} 
            updateLogin={this.updateLogin} 
            handleSignup={this.handleSignup}
            handleLogin={this.handleLogin}
            {...props}
          />
        )} />
      </div>
    );
  }
}

export default App;
