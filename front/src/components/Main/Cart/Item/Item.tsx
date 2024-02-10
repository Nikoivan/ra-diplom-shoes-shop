import { FormEvent, useCallback } from 'react';

export type CartItemProps = {
  title: string;
  id: number;
  size: string;
  count: number;
  price: number;
} & { itemNumber?: number };

type CartItemFullProps = CartItemProps & {
  removeHadler(id: number): void;
};

const CartItem = ({
  itemNumber,
  title,
  id,
  size,
  count,
  price,
  removeHadler,
}: CartItemFullProps) => {
  const onClickHadler = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      removeHadler(id);
    },
    [id, removeHadler]
  );

  return (
    <tr>
      <td scope='row'>{itemNumber || 0}</td>
      <td>
        <a href='/products/1.html'>{title}</a>
      </td>
      <td>{size}</td>
      <td>{count}</td>
      <td>{price} руб.</td>
      <td>{price * count} руб.</td>
      <td>
        <button
          onClick={onClickHadler}
          className='btn btn-outline-danger btn-sm'
        >
          Удалить
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
