import { FormEvent, useContext } from 'react';
import useJsonFetch from '../../../assets/services/customHooks/useJsonFetch';
import './Catalog.css';
import Context from '../../../context/Context';
import PreloadAndErrorControl from '../../PreloadAndErrorControl/PreloadAndErrorControl';
import CatalogCategories, {
  CategoriesProps,
} from './Categories/Catalog-Categories';
import { ProductCardProps } from '../../Product/Card/Product-Card';
import CatalogProductsList from './ProductsList/Catalog-ProductsList';
import { Outlet } from 'react-router';

export default function Catalog() {
  const { baseUrl } = useContext(Context);
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    hasError: hasCategoriesError,
  } = useJsonFetch<CategoriesProps>(baseUrl + '/api/categories');
  const { data, isLoading, hasError } = useJsonFetch<ProductCardProps[]>(
    baseUrl + '/api/items'
  );

  const onBtnClick = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('добавить еще 6 товаров');
    // учесть массив уже имеющихся товаров и добавить к ним по запросу
    // глобальная переменная хранящая карточки товаров
  };

  return (
    <section className='catalog'>
      <h2 className='text-center'>Каталог</h2>
      <Outlet />
      {categories && data && (
        <>
          <CatalogCategories categories={categories} />
          <CatalogProductsList products={data} />
          <div className='text-center'>
            <button className='btn btn-outline-primary' onClick={onBtnClick}>
              Загрузить ещё
            </button>
          </div>
        </>
      )}
      <PreloadAndErrorControl
        isLoading={isCategoriesLoading || isLoading}
        hasError={hasCategoriesError || hasError}
      />
    </section>
  );
}
