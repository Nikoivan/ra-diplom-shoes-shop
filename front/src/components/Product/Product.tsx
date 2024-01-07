import { FormEvent, useContext, useState } from 'react';
import Context from '../../context/Context';
import { useNavigate, useParams } from 'react-router';

import useJsonFetch from '../../assets/services/customHooks/useJsonFetch';
import { ProductCardProps } from './Card/Product-Card';
import ProductSizesControl from './SizesControl/Product-SizesControl';
import { ProductItemSize } from './Sizes/Product-Sizes';
import PreloadAndErrorControl from '../PreloadAndErrorControl/PreloadAndErrorControl';
import './Product.css';

export type ProductProps = {
  category: number;
  color: string;
  heelSize: string;
  manufacturer: string;
  material: string;
  oldPrice: number;
  reason: string;
  season: string;
  sizes: ProductItemSize[];
  sku: string;
} & ProductCardProps;

export default function Product() {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<number>();
  const { baseUrl } = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, hasError } = useJsonFetch<ProductProps>(
    `${baseUrl}/api/items/${id}`
  );

  const onAddBtnClick = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(e);
    //add to Cart in store
    navigate('/cart');
  };

  const onPlus = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onSizeClick = (idx: number) => {
    if (selectedSize === idx) {
      setSelectedSize(undefined);
      return;
    }
    setSelectedSize(idx);
  };

  return (
    <section className='catalog-item'>
      {data && (
        <>
          <h2 className='text-center'>{data.title}</h2>
          <div className='row'>
            <div className='col-5'>
              <img
                src={data.images[0]}
                className='img-fluid'
                alt={data.title}
              />
            </div>
            <div className='col-7'>
              <table className='table table-bordered'>
                <tbody>
                  <tr>
                    <td>Артикул</td>
                    <td>{data.sku}</td>
                  </tr>
                  <tr>
                    <td>Производитель</td>
                    <td>{data.manufacturer}</td>
                  </tr>
                  <tr>
                    <td>Цвет</td>
                    <td>{data.color}</td>
                  </tr>
                  <tr>
                    <td>Материалы</td>
                    <td>{data.material}</td>
                  </tr>
                  <tr>
                    <td>Сезон</td>
                    <td>{data.season}</td>
                  </tr>
                  <tr>
                    <td>Повод</td>
                    <td>{data.reason}</td>
                  </tr>
                </tbody>
              </table>
              {data.sizes.some((item) => item.available) && (
                <ProductSizesControl
                  sizes={data.sizes}
                  quantity={quantity}
                  onMinus={onMinus}
                  onPlus={onPlus}
                  onAddBtnClick={onAddBtnClick}
                  onSizeClick={onSizeClick}
                  selectedSize={selectedSize}
                />
              )}
            </div>
          </div>
        </>
      )}
      <PreloadAndErrorControl isLoading={isLoading} hasError={hasError} />
    </section>
  );
}
