import { ChangeEvent, useContext, useState } from 'react';
import cartOrderFormValidator from '../../../../assets/services/validators/validators';
import CartForm from '../Form/Cart-Form';
import Preloader from '../../../Preloader/Preloader';
import Context from '../../../../context/Context';
import { RequestMethods } from '../../../../assets/services/customHooks/useJsonFetch';
import ErrorMessage from '../../../ErrorMessage/ErrorMessage';
import OrderSuccess from './Success/Order-Success';

export type CartOrderFormState = {
  phone: string;
  address: string;
};

export type CartOrderStateProps = {
  send: boolean;
  isLoading: boolean;
  error: string | null;
  agreement: boolean;
  success: boolean;
};

export default function CartOrder() {
  const [state, setState] = useState<CartOrderStateProps>({
    send: false,
    isLoading: false,
    error: null,
    agreement: false,
    success: false,
  });
  const [formState, setFormState] = useState<CartOrderFormState>({
    phone: '',
    address: '',
  });
  const { baseUrl } = useContext(Context);

  const onChangeHadler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onAgreement = () => {
    setState((prev) => ({ ...prev, agreement: true }));
  };

  const onSubmitHadler = async () => {
    if (state.agreement && cartOrderFormValidator(formState)) {
      setState((prev) => ({ ...prev, send: true, isLoading: true }));

      const body = {
        owner: formState,
        items: [
          {
            id: 1,
            price: 34000,
            count: 1,
          },
        ], //взять из localStorage компонента CartList
      };
      const options = {
        method: RequestMethods.POST,
        body: JSON.stringify(body),
      };

      const response = await fetch(baseUrl + '/api/order', options);
      if (response.status < 300) {
        setState((prev) => ({ ...prev, isLoading: false, success: true }));
        return;
      }
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: 'Ошибка отправки заказа. Попробуйте снова',
      }));

      // добавить очистку после отправки заказа при успехе
    }
  };

  return (
    <>
      {!state.send && (
        <CartForm
          state={formState}
          agreement={state.agreement}
          onChangeHadler={onChangeHadler}
          onAgreement={onAgreement}
          onSubmitHadler={onSubmitHadler}
        />
      )}
      {state.success && <OrderSuccess />}
      {state.isLoading && <Preloader />}
      {state.error && <ErrorMessage errorText={state.error} />}
    </>
  );
}
