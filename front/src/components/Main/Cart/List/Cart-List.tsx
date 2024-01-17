import CartItem from '../Item/CartItem';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { cartActions } from '../../../../store/slices/cartSlice';

export default function CartList() {
  const { items } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();

  const totalPrice = items.length
    ? items
        .map((item) => item.price * item.count)
        .reduce((acc, item) => acc + item)
    : 0;

  const removeHadler = (id: number) => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <section className='cart'>
      <h2 className='text-center'>Корзина</h2>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Название</th>
            <th scope='col'>Размер</th>
            <th scope='col'>Кол-во</th>
            <th scope='col'>Стоимость</th>
            <th scope='col'>Итого</th>
            <th scope='col'>Действия</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <CartItem key={idx} {...item} removeHadler={removeHadler} />
          ))}
          <tr>
            <td colSpan={5} className='text-right'>
              Общая стоимость
            </td>
            <td>{totalPrice} руб.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
