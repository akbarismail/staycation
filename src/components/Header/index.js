import React from 'react';
import BrandIcon from '../IconText';
import Button from '../Button';
import { useLocation } from 'react-router-dom';
import './index.scss';

const Header = () => {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className='spacing-sm'>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <BrandIcon />
          <Button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarCollapse'
          >
            <span className='navbar-toggler-icon'></span>
          </Button>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav ml-auto'>
              <li className={`nav-item ${getNavLinkClass('/')}`}>
                <Button className='nav-link' type='link' href='/'>
                  Home
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass('/browse-by')}`}>
                <Button className='nav-link' type='link' href='/browse-by'>
                  Browse by
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass('/stories')}`}>
                <Button className='nav-link' type='link' href='/stories'>
                  Stories
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass('/agents')}`}>
                <Button className='nav-link' type='link' href='/agents'>
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
