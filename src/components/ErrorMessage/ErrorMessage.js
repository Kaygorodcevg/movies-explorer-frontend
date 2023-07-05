import React, { useState, useEffect } from 'react';
import { SUCCESS, BAD_REQUEST } from '../../utils/const';

function ErrorMessage({ showMessage, text, serverCode }) {
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    if (serverCode === SUCCESS) {
      setMessageText('Данные успешно обновлены');
    } else if (serverCode === BAD_REQUEST) {
      setMessageText(text);
    }
    setMessageText(text);
  }, [serverCode, text]);

  return (
    <div className='message'>
      {showMessage && (
        <p
          className={`message__text ${
            serverCode === SUCCESS && 'message__text-active'
          }`}
        >
          {messageText}
        </p>
      )}
    </div>
  );
}

export default ErrorMessage;
