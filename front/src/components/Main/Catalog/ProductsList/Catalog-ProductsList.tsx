import ProductCard, {
  ProductCardProps,
} from '../../../Product/Card/Product-Card';

export default function CatalogProductsList({
  products,
}: {
  products: ProductCardProps[];
}) {
  return (
    <div className='row'>
      {products.map((elem, idx) => (
        <ProductCard key={idx} {...elem} />
      ))}
    </div>
  );
}
