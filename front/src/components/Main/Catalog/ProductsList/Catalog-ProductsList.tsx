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
      {products.map((elem) => (
        <ProductCard key={elem.id} {...elem} />
      ))}
    </div>
  );
}
