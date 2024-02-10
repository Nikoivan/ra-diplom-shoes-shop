import { ErrorStatus } from '../../assets/services/customHooks/useJsonFetch';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Preloader from '../Preloader/Preloader';

type ControlProps = {
	isLoading: boolean;
	error: string | null;
};

const PreloadAndErrorControl = ({ isLoading, error }: ControlProps) => (
	<>
		{isLoading && <Preloader />}
		{error && <ErrorMessage error={error} />}
	</>
);

export default PreloadAndErrorControl;
