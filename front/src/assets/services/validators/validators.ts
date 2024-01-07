import { CartOrderFormState } from '../../../components/Main/Cart/Order/Cart-Order';

export default function cartOrderFormValidator(formState: CartOrderFormState) {
  return formState.phone !== '' && formState.address !== '';
}
