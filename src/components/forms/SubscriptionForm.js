import React, { useState } from 'react';
import validator from 'validator';
import './subscriptionForm.scss';

export const SubscriptionForm = () => {
  const [form, setForm] = useState({
    user: {
      name: '',
      email: '',
    },
  });
  const handleChange = (e) => {
    setForm({
      user: {
        ...form.user,
        [e.target.name]: e.target.value,
      },
    });
    if (e.target.name === 'email' && emailError.error) {
      validateEmail(e.target.value);
    }

    validRequired(e.target.validity.valid, e.target.name);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(form.user.email);
  };

  // validators

  const [emailError, setEmailError] = useState({ msg: '', error: false });
  const [nameError, setNameError] = useState({ msg: '', error: false });
  const validateEmail = (email) => {
    if (!validator.isEmail(email)) {
      setEmailError({ msg: '*email incorrecto', error: true });
    } else {
      setEmailError({ msg: '', error: false });
    }
  };
  const validRequired = (valid, input) => {
    if (input === 'email') {
      if (!valid) {
        setEmailError({ msg: '*campo obligatorio', error: true });
      } else {
        setEmailError({ msg: '', error: false });
      }
    } else if (input === 'name') {
      if (!valid) {
        setNameError({ msg: '*campo obligatorio', error: true });
      } else {
        setNameError({ msg: '', error: false });
      }
    }
  };
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
            onChange={handleChange}
            value={form.user.name}
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
            value={form.user.email}
            onChange={handleChange}
            name="email"
            required
          />
          <span className="form__item--alert">{emailError.msg}</span>
        </div>
        <div className="subscribe__btns">
          <button
            onClick={handleSubmit}
            className="myBtn myBtn__primary-xl"
            disabled={!form.user.name || !form.user.email}
          >
            Suscribirme
          </button>
        </div>
      </form>
    </section>
  );
};
