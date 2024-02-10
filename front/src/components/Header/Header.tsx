import './Header.css';
import NavBar from './NavBar/NavBar';

const Header = () => {
  return (
    <header className='container'>
      <div className='row'>
        <div className='col'>
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
