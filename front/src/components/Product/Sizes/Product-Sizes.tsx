export type ProductItemSize = {
  size: string;
  available: boolean;
};

export type ProductSizesProps = {
  sizes: ProductItemSize[];
  selectedSize: number | undefined;
  onSizeClick(idx: number): void;
};

const ProductSizes = ({
  sizes,
  selectedSize,
  onSizeClick,
}: ProductSizesProps) => {
  return (
    <p>
      Размеры в наличии:
      {sizes.map(
        (item, idx) =>
          item.available && (
            <span
              className={`catalog-item-size${
                selectedSize === idx ? ' selected' : ''
              }`}
              key={idx}
              onClick={() => {
                onSizeClick(idx);
              }}
            >
              {item.size}
            </span>
          )
      )}
    </p>
  );
};

export default ProductSizes;
