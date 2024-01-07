import { Link } from 'react-router-dom';
import { useContext } from 'react';

import Context from '../../../context/Context';
import MenuItem from '../../MenuItem/MenuItem';
import headerLogoUrl from '../../../assets/images/header-logo.png';
import HeaderControls from '../Controls/Header-Controls';

const NavBar = () => {
  const { title, menuMainItems } = useContext(Context);

  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <Link to='/' className='navbar-brand'>
        <img src={headerLogoUrl} alt={title} />
      </Link>
      <div className='collapse navbar-collapse' id='navbarMain'>
        <ul className='navbar-nav  mr-auto'>
          {menuMainItems.map((item, idx) => (
            <MenuItem key={idx} {...item} />
          ))}
        </ul>
        <div>
          <HeaderControls />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
