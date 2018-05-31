import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <ul className='footerUl'>
                <li className='footerLi'><a className='links' href='https://github.com/Jaguirre123' target='_blank'><i className="fab fa-github-square"></i></a></li>
                <li className='footerLi'><a className='links' href='https://www.linkedin.com/in/jesseaguirre93/' target='_blank'><i className="fab fa-linkedin"></i></a></li>
            </ul>
            <p>&copy; DevChat by Jesse Aguirre WDI-DT-57</p>
        </footer>
    )
}


export default Footer;