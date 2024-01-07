import { Outlet } from 'react-router';
import Banner from '../Banner/Banner';

const Main = () => {
  return (
    <main className='container'>
      <div className='row'>
        <div className='col'>
          <Banner />
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Main;
