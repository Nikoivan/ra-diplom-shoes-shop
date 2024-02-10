import { ChangeEvent, FormEvent } from 'react';

export type CartFormProps = {
  state: { phone: string; address: string };
  agreement: boolean;
  onChangeHadler(e: ChangeEvent<HTMLInputElement>): void;
  onAgreement(): void;
  onSubmitHadler(): void;
};

const CartForm = ({
  state,
  onChangeHadler,
  agreement,
  onAgreement,
  onSubmitHadler,
}: CartFormProps) => {
  return (
    <div className='card'>
      <form
        className='card-body'
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
        }}
      >
        <div className='form-group'>
          <label htmlFor='phone'>Телефон</label>
          <input
            className='form-control'
            id='phone'
            placeholder='Ваш телефон'
            name='phone'
            value={state.phone}
            onChange={onChangeHadler}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Адрес доставки</label>
          <input
            className='form-control'
            id='address'
            placeholder='Адрес доставки'
            name='address'
            value={state.address}
            onChange={onChangeHadler}
          />
        </div>
        <div className='form-group form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='agreement'
            name='agreement'
            onChange={onAgreement}
            checked={agreement}
          />
          <label className='form-check-label' htmlFor='agreement'>
            Согласен с правилами доставки
          </label>
        </div>
        <button
          type='submit'
          className='btn btn-outline-secondary'
          onClick={(e: FormEvent<HTMLButtonElement>) => {
            e.preventDefault();
            onSubmitHadler();
          }}
        >
          Оформить
        </button>
      </form>
    </div>
  );
};

export default CartForm;
