import './ErrorMessage.css';

export default function ErrorMessage({ errorText }: { errorText?: string }) {
  return (
    <div className='Error-Message'>
      <h4>{errorText}</h4>
    </div>
  );
}
