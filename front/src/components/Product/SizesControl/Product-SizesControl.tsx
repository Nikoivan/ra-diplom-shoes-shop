import { FormEvent } from 'react';
import ProductQuantity, {
  ProductQuantityProps,
} from '../Quantity/Product-Quantity';
import ProductSizes, { ProductSizesProps } from '../Sizes/Product-Sizes';

type ProductSizesControlProps = ProductSizesProps &
  ProductQuantityProps & {
    onAddBtnClick(e: FormEvent<HTMLButtonElement>): void;
  };

const ProductSizesControl = ({
  sizes,
  selectedSize,
  quantity,
  onPlus,
  onMinus,
  onAddBtnClick,
  onSizeClick,
}: ProductSizesControlProps) => {
  return (
    <>
      <div className='text-center'>
        <ProductSizes
          sizes={sizes}
          selectedSize={selectedSize}
          onSizeClick={onSizeClick}
        />
        <ProductQuantity
          onMinus={onMinus}
          onPlus={onPlus}
          quantity={quantity}
        />
      </div>
      {sizes.some((el) => el.available) && (
        <button
          className='btn btn-danger btn-block btn-lg'
          onClick={onAddBtnClick}
        >
          В корзину
        </button>
      )}
    </>
  );
};

export default ProductSizesControl;
