import { useState, useCallback } from 'react';
import isEmail from 'validator/es/lib/isEmail';

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name' && e.target.validity.patternMismatch) {
      e.target.setCustomValidity(
        'Поле должно быть заполнено и может содержать только латиницу, кириллицу, пробел или дефис'
      );
    } else if (name === 'email' && !isEmail(value)) {
      e.target.setCustomValidity(
       'Необходимо указать e-mail в формате name@domain.region'
      );
    } else {
      e.target.setCustomValidity('');
    }
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
}
