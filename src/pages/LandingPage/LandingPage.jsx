import React from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import Authenticate from '../../components/Authenticate/Authenticate';
import './LandingPage.css';

const LandingPage = (props) => {
    return (
      <div className='mainDiv'>
        <div className='Wrapper'>
          <div className='Welcome'>
              <h4 className='welcome'>Welcome to</h4>
              <h1 className='mainH1'> > DevChat</h1>
              <p className='intro'>Are you a web developer? Do you have questions? Or do you have advice for those with questions? The best site to ask questions and give advice.</p>
          </div>
          <div className='LoginPage'>
              {/* <LoginForm 
              {...props}
              /> */}
              <Authenticate {...props}/> 
              <button onClick={props.updateLogin}>update login</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default LandingPage;