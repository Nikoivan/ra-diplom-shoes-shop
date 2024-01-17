import { Link, useLocation } from 'react-router-dom';

export type ProductCardProps = {
  category: number;
  id: number;
  images: string[];
  title: string;
  price: number;
};

const ProductCard = ({ title, images, price, id }: ProductCardProps) => {
  const location = useLocation();

  return (
    <div className='col-4'>
      <div className='card'>
        <img src={images[0]} className='card-img-top img-fluid' alt={title} />
        <div className='card-body'>
          <p className='card-text'>{title}</p>
          <p className='card-text'>{price} руб.</p>
          <Link
            to={
              location.pathname.includes('catalog') ? `${id}` : `/catalog/${id}`
            }
            className='btn btn-outline-primary'
          >
            Заказать
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
