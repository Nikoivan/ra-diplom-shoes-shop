import { useContext } from 'react';

import Context from '../../context/Context';
import FooterMenu from './Menu/Menu';
import FooterPay from './Pay/Pay';
import './Footer.css';

export default function Footer() {
  const { tel, email } = useContext(Context);
  return (
    <footer className='container bg-light footer'>
      <div className='row'>
        <div className='col'>
          <section>
            <h5>Информация</h5>
            <FooterMenu />
          </section>
        </div>
        <div className='col'>
          <section>
            <h5>Принимаем к оплате:</h5>
            <FooterPay />
          </section>
          <section>
            <div className='footer-copyright'>
              2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров. Все права защищены.
              <br />
              Доставка по всей России!
            </div>
          </section>
        </div>
        <div className='col text-right'>
          <section className='footer-contacts'>
            <h5>Контакты:</h5>
            <a className='footer-contacts-phone' href={`tel:${tel}`}>
              {tel}
            </a>
            <span className='footer-contacts-working-hours'>Ежедневно: с 09-00 до 21-00</span>
            <a className='footer-contacts-email' href={`mailto:${email}`}>
              {email}
            </a>
            <div className='footer-social-links'>
              <div className='footer-social-link footer-social-link-twitter'></div>
              <div className='footer-social-link footer-social-link-vk'></div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
