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
import TopicsPage from '../TopicsPage/TopicsPage';
import ChatRoomPage from '../ChatRoomPage/ChatRoomPage';
import userService from '../../utils/userService';
import socket from '../../utils/socket';
import tokenService from '../../utils/tokenService';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      user: userService.getUser()
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
    if (this.state.user) socket.emit('register', null);
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
    if (this.state.user) socket.emit('register', tokenService.getToken());
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
    if (this.state.user) socket.emit('register', tokenService.getToken());
  }

  componentDidMount() {
    if (this.state.user) socket.emit('register', tokenService.getToken());
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" render={(props) => (
              <LandingPage
                login={this.state.login} 
                updateLogin={this.updateLogin} 
                handleSignup={this.handleSignup}
                handleLogin={this.handleLogin}
                {...props}
              />
            )} />

            <Route exact path="/topics" render={(props) => (
              <TopicsPage 
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            )} />

            <Route path='/chatroom/:namespace' render={(props) => (
              <ChatRoomPage {...props} />
            )} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
