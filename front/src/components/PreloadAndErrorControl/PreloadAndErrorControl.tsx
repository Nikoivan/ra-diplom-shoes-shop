import { ErrorStatus } from '../../assets/services/customHooks/useJsonFetch';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Preloader from '../Preloader/Preloader';

type ControlProps = {
  isLoading: boolean;
  hasError: ErrorStatus;
};

const PreloadAndErrorControl = ({ isLoading, hasError }: ControlProps) => (
  <>
    {isLoading && <Preloader />}
    {hasError.status && <ErrorMessage errorText={hasError.errorText} />}
  </>
);

export default PreloadAndErrorControl;
