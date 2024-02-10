import CartList from './List/List';
import CartOrder from './Order/Order';
import './Cart.css';

const Cart = () => {
  return (
    <>
      <CartList />
      <section className='order'>
        <h2 className='text-center'>Оформить заказ</h2>
        <CartOrder />
      </section>
    </>
  );
};

export default Cart;
