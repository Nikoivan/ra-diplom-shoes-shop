import './ErrorMessage.css';

export default function ErrorMessage({ error }: { error?: string }) {
	return (
		<div className='Error-Message'>
			<h4>{error}</h4>
		</div>
	);
}
