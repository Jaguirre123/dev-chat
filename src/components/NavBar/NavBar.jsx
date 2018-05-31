import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  return (
    <div>
      {/* <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME</span> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to='/topics' className="navbar-brand" > > DevChat</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to='/topics' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item logout">
                        <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  );
};

export default NavBar;

