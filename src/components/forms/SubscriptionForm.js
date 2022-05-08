import React, { useState } from 'react';
import validator from 'validator';
import { useApi } from '../../hooks/useApi';
import { useForm } from '../../hooks/useForm';
import './subscriptionForm.scss';

export const SubscriptionForm = () => {
  //
  // API
  //
  const { newsLetterSubscription } = useApi();
  //
  //FORM
  //
  const [form, handleInputChange] = useForm({
    name: '',
    email: '',
  });
  const { name, email } = form;
  // const [form, setForm] = useState({});
  // const handleChange = (e) => {
  //   if (e.target.name === 'email' && emailError.error) {
  //     validateEmail(e.target.value);
  //   }

  //   validRequired(e.target.validity.valid, e.target.name);
  // };
  //
  // SUBMIT
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    // validateEmail(form.user.email);
    validName();
    if (validator.isEmpty(name)) {
      setNameError({ msg: '*campo obligatorio', error: true });
      return;
    }
    if (validator.isEmpty(email)) {
      setEmailError({ msg: '*campo obligatorio', error: true });
      return;
    }
    if (!validator.isEmail(email)) {
      setEmailError({ msg: '*email incorrecto', error: true });
      return;
    }
    console.log(form);
  };

  //
  // HANDLE ERRORS
  //
  const [emailError, setEmailError] = useState({ msg: '', error: false });
  const [nameError, setNameError] = useState({ msg: '', error: false });
  const validateEmail = (email) => {
    return validator.isEmail(email);
  };
  const validName = () => {};
  // const validRequired = (valid, input) => {
  //   if (input === 'email') {
  //     if (!valid) {
  //       setEmailError({ msg: '*campo obligatorio', error: true });
  //     } else {
  //       setEmailError({ msg: '', error: false });
  //     }
  //   } else if (input === 'name') {
  //     if (!valid) {
  //       setNameError({ msg: '*campo obligatorio', error: true });
  //     } else {
  //       setNameError({ msg: '', error: false });
  //     }
  //   }
  // };
  return (
    <section className="subscribe">
      <div className="subscribe__title">
        <h2>¡Únete a nuestras novedades y promociones!</h2>
      </div>
      <form className="form subscribe__form">
        <div className="form__item">
          <input
            className="form__item--input"
            placeholder="Ingresa tu nombre"
            type="text"
            onChange={handleInputChange}
            value={name}
            name="name"
            required
          />
          <span className="form__item--alert">{nameError.msg}</span>
        </div>
        <div className="form__item">
          <input
            className="form__item--input"
            placeholder="Ingresa tu mail"
            type="mail"
            value={email}
            onChange={handleInputChange}
            name="email"
            required
          />
          <span className="form__item--alert">{emailError.msg}</span>
        </div>
        <div className="subscribe__btns">
          <button onClick={handleSubmit} className="myBtn myBtn__primary-xl">
            Suscribirme
          </button>
        </div>
      </form>
    </section>
  );
};
