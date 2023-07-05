import AuthForm from '../AuthForm/AuthForm';
import { Navigate } from 'react-router-dom';

function Register({ onRegister, loggedIn, message }) {
  return loggedIn ? (
    <Navigate
      to='/movies'
      replace
    />
  ) : (
    <AuthForm
      name='signup'
      linkTo='/signin'
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      subtitle='Уже зарегистрированы?'
      linkName='Войти'
      onSubmit={onRegister}
      message={message}
    ></AuthForm>
  );
}

export default Register;
