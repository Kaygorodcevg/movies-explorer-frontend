import AuthForm from '../AuthForm/AuthForm';
import { Navigate } from "react-router-dom";
// import { useEffect } from "react";

function Login({onLogin,loggedIn, message, setMessage}) {

  // useEffect(() => {
  //   setMessage('');
  // }, [setMessage]);

  return loggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <AuthForm
      name='signin'
      linkTo='/signup'
      title='Рады видеть!'
      buttonText='Войти'
      subtitle='Ещё не зарегистрированы?'
      linkName='Регистрация'
      onSubmit={onLogin}
      // message={message}
    ></AuthForm>
  );
}

export default Login;
