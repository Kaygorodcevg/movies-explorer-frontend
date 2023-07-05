import AuthForm from '../AuthForm/AuthForm';
import { Navigate } from 'react-router-dom';

function Login({ onLogin, loggedIn, message }) {
  return loggedIn ? (
    <Navigate
      to='/movies'
      replace
    />
  ) : (
    <AuthForm
      name='signin'
      linkTo='/signup'
      title='Рады видеть!'
      buttonText='Войти'
      subtitle='Ещё не зарегистрированы?'
      linkName='Регистрация'
      onSubmit={onLogin}
      message={message}
    ></AuthForm>
  );
}

export default Login;
