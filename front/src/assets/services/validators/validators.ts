import { CartOrderFormState } from '../../../components/Main/Cart/Order/Order';

export default function cartOrderFormValidator(formState: CartOrderFormState) {
  return formState.phone !== '' && formState.address !== '';
}
