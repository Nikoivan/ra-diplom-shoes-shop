import CartList from './List/Cart-List';
import CartOrder from './Order/Cart-Order';
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
