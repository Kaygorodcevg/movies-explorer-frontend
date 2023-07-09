import { SUCCESS } from '../../utils/const';

function ErrorMessage({ showMessage, text, serverCode }) {
  return (
    <div className='message'>
      {showMessage && (
        <p
          className={`message__text ${
            serverCode === SUCCESS && 'message__text-success'
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

export default ErrorMessage;
