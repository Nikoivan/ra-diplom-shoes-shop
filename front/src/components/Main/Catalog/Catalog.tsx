import { FormEvent, useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import useJsonFetch from '../../../assets/services/customHooks/useJsonFetch';
import Context from '../../../context/Context';
import PreloadAndErrorControl from '../../PreloadAndErrorControl/PreloadAndErrorControl';
import CatalogCategories, {
  CategoriesProps,
} from './Categories/Catalog-Categories';

import CatalogProductsList from './ProductsList/Catalog-ProductsList';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { ProductCardProps } from '../../Product/Card/Product-Card';
import { catalogActions } from '../../../store/slices/catalogSlice';
import './Catalog.css';

type ProductsStateType = {
  products: ProductCardProps[];
  isLoading: boolean;
  hasError: {
    status: boolean;
  };
};
export default function Catalog() {
  const [state, setState] = useState<ProductsStateType>({
    products: [],
    isLoading: false,
    hasError: {
      status: false,
    },
  });
  const [prevProducts, setPrevProducts] = useState<ProductCardProps[]>([]);

  const { baseUrl } = useContext(Context);
  const { selected: selectedCategory, offset } = useAppSelector(
    (store) => store.catalog
  );
  const dispatch = useAppDispatch();

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    hasError: hasCategoriesError,
  } = useJsonFetch<CategoriesProps>(baseUrl + '/api/categories');

  const onBtnClick = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(catalogActions.addOffset());
    setPrevProducts(state.products);
  };

  const urlForProductList = `${baseUrl}/api/items${
    selectedCategory || offset.status ? '?' : ''
  }${selectedCategory ? 'categoryId=' + selectedCategory : ''}${
    selectedCategory ? '&' : ''
  }${offset.status ? 'offset=' + offset.count : ''}`;

  useEffect(() => {
    (async () => {
      setState((prev) => ({ ...prev, products: [], isLoading: true }));
      try {
        const response = await fetch(urlForProductList);
        if (response.status >= 300) {
          setState((prev) => ({
            ...prev,
            hasError: {
              status: true,
              errorText: `Ошибка ${response.statusText}`,
            },
          }));
        }
        const data = await response.json();
        if (!data) {
          setState((prev) => ({
            ...prev,
            hasError: {
              status: true,
              errorText: 'Ошибка загрузки карточек товара',
            },
          }));
        }
        if (data.length < 6) {
          dispatch(catalogActions.overflowed());
        }
        setState((prev) => ({
          ...prev,
          products: offset.status ? [...prevProducts, ...data] : data,
          isLoading: false,
        }));
      } catch (e) {
        setState((prev) => ({
          ...prev,
          hasError: {
            status: true,
            errorText: 'Ошибка загрузки карточек товара',
          },
        }));
      }
    })();
  }, [selectedCategory, offset.status, offset.count]);

  return (
    <section className='catalog'>
      <h2 className='text-center'>Каталог</h2>
      <Outlet />
      {categories && <CatalogCategories categories={categories} />}
      {state.products.length > 0 && (
        <>
          <CatalogProductsList products={state.products} />
          {!offset.overflow && (
            <div className='text-center'>
              <button className='btn btn-outline-primary' onClick={onBtnClick}>
                Загрузить ещё
              </button>
            </div>
          )}
        </>
      )}
      <PreloadAndErrorControl
        isLoading={isCategoriesLoading || state.isLoading}
        hasError={hasCategoriesError || state.hasError}
      />
    </section>
  );
}
