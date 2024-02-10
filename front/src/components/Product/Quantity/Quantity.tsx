import { FormEvent } from 'react';

export type ProductQuantityProps = {
  quantity: number;
  onPlus(): void;
  onMinus(): void;
};

const ProductQuantity = ({
  quantity,
  onPlus,
  onMinus,
}: ProductQuantityProps) => (
  <p>
    Количество:
    <span className='btn-group btn-group-sm pl-2'>
      <button
        onClick={(e: FormEvent<HTMLButtonElement>) => {
          e.preventDefault();
          onMinus();
        }}
        className='btn btn-secondary'
      >
        -
      </button>
      <span className='btn btn-outline-primary'>{quantity}</span>
      <button
        onClick={(e: FormEvent<HTMLButtonElement>) => {
          e.preventDefault();
          onPlus();
        }}
        className='btn btn-secondary'
      >
        +
      </button>
    </span>
  </p>
);

export default ProductQuantity;
