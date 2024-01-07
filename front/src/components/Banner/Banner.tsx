import bannarImgUrl from '../../assets/images/banner.jpg';
import './Banner.css';

export default function Banner() {
  return (
    <div className='banner'>
      <img src={bannarImgUrl} className='img-fluid' alt='К весне готовы!' />
      <h2 className='banner-header'>К весне готовы!</h2>
    </div>
  );
}
