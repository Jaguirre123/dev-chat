import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <ul className='footerUl'>
                <li className='footerLi'><a className='links' href='https://github.com/Jaguirre123' rel="noopener noreferrer"  target='_blank'><i className="fab fa-github-square"></i></a></li>
                <li className='footerLi'><a className='links' href='https://www.linkedin.com/in/jesseaguirre93/' rel="noopener noreferrer"  target='_blank'><i className="fab fa-linkedin"></i></a></li>
            </ul>
            <p>&copy; 2018 DevChat by Jesse Aguirre WDI-DT-57</p>
        </footer>
    )
}


export default Footer;