import AuthForm from "../AuthForm/AuthForm";

function Register() {
    return (
        <AuthForm
        link='/signin'
        linkTo='/signin'
        title='Добро пожаловать!'
        buttonText='Зарегистрироваться'
        subtitle='Уже зарегистрированы?'
        linkName='Войти'
        // onSubmit={handleSubmit}
      >
         <label className='auth__label'>Имя
          <input
            id='name'
            name='name'
            type='name'
            className='auth__input'
            placeholder='Введите имя'
            minLength='2'
            maxLength='40'
            required
            // value={email}
            // onChange={handleChange}
          />
          <span className='auth__input-error'></span>
        </label>
         </AuthForm>
    );
  }
  
  export default Register;