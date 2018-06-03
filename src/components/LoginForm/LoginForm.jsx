import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import userService from '../../utils/userService';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: ''
    }
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userService.login(this.state)
    .then(() => {
      this.props.handleLogin();
      this.props.history.push('/topics');
    })
    .catch(err => alert('Invalid Credentials!'));
  }

  render() {
    return (
      <div className='loginForm'>
        <header className="header-footer"><h3>Log In</h3></header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.pw} onChange={(e) => this.handleChange('pw', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-block btn-dark">Log In</button>&nbsp;&nbsp;&nbsp;
              <p className='signUp'>Don't have and account? <a className='signUpLink' onClick={this.props.updateLogin}><i>Sign Up</i></a></p>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default LoginForm;