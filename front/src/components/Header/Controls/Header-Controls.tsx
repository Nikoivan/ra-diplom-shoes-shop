import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { searchActions } from '../../../store/slices/searchSlice';

const HeaderControls = () => {
  const [openedSearchField, setOpenedSearchField] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const search = useAppSelector((store) => store.search);
  const cart = useAppSelector((store) => store.cart);

  const onSearchHandler = () => {
    if (openedSearchField) {
      navigate('./catalog');
    }
    setOpenedSearchField(!openedSearchField);
  };

  const onCartHandler = () => {
    navigate('./cart');
  };

  const onChangeHadler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchActions.change(e.target.value));
  };

  return (
    <>
      <div className='header-controls-pics'>
        <div
          data-id='search-expander'
          className='header-controls-pic header-controls-search'
          onClick={onSearchHandler}
        ></div>
        <div
          className='header-controls-pic header-controls-cart'
          onClick={onCartHandler}
        >
          {cart.itemsCount > 0 && (
            <div className='header-controls-cart-full'>{cart.itemsCount}</div>
          )}
          <div className='header-controls-cart-menu'></div>
        </div>
      </div>
      <form
        data-id='search-form'
        className={`header-controls-search-form form-inline${
          !openedSearchField ? ' invisible' : ''
        }`}
      >
        <input
          name='searchValue'
          className='form-control'
          placeholder='Поиск'
          value={search.value}
          onChange={onChangeHadler}
        />
      </form>
    </>
  );
};

export default HeaderControls;
