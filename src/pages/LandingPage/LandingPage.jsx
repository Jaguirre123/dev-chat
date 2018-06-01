import React from 'react';
// import {Link} from 'react-router-dom';
import Authenticate from '../../components/Authenticate/Authenticate';
import './LandingPage.css';

const LandingPage = (props) => {
    return (
        <div className='Wrapper'>
          <div className='Welcome'>
              <h4 className='welcome'>Welcome to</h4>
              <h1 className='mainH1'> > DevChat</h1>
              <p className='intro'>Are you a web developer? Do you have questions? Or do you have advice for those with questions? The best site to ask questions and give advice.</p>
          </div>
          <div className='LoginPage'>
              <Authenticate {...props}/> 
          </div>
        </div>
    );
  };
  
  export default LandingPage;