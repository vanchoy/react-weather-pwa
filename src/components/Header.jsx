import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import logo from '../assets/images/logo.png';

import '../styles/header.scss';

const Header = () => {
  const [, setScrollY] = useState(0);
  const [header, setHeader] = useState('header default-pos clearfix');

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      setScrollY(window.scrollY);

      if (window.scrollY> 10) {
        setHeader('header scrolled-pos clearfix');
        //console.log('window.scrollY', window.scrollY);
      } else {
        setHeader(header);
      }
      //console.log('window.scrollY', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className={header}>
      <div className="logo-container">
        <a href="/" className="logo">
          <img width="50" height="50" src={logo} alt="RP Tools logo" />
          <span className='logo-text'>Weather</span>
        </a>
      </div>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <FontAwesomeIcon className="navicon" icon={solid('bars')} size="1x" />
      </label>
      <ul className="menu">
        <li>
          <Link className="menu_item" to="/">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('house')} size="1x" fixedWidth />
            Home
          </Link>
        </li>
        <li>
          <Link className="menu_item" to="/">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('cloud-sun-rain')} size="1x" fixedWidth />
            Forecast
          </Link>
        </li>
        <li>
          <Link className="menu_item" to="/">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('earth-europe')} size="1x" fixedWidth />
            Map
          </Link>
        </li>
        <li className="dropdown">
          <Link className="menu_item" to="/">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('circle-info')} size="1x" />
            About
          </Link>
          <ul className="dropdown-content">
            <li>
              <Link to="/">
                <FontAwesomeIcon className="icon_menu_li" icon={solid('blog')} size="1x" />
                Blog
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon className="icon_menu_li" icon={solid('people-group')} size="1x" />
                About us
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon className="icon_menu_li" icon={solid('envelope')} size="1x" />
                Contact
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon className="icon_menu_li" icon={solid('file-contract')} size="1x" />
                Terms & Policies
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
}

export default Header;