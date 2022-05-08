import React, { useEffect, useState } from 'react';
import validator from 'validator';
import { Loader } from '../loader/Loader';
import { useApi } from '../../hooks/useApi';
import { useForm } from '../../hooks/useForm';
import './subscriptionForm.scss';

export const SubscriptionForm = () => {
  //
  // API
  //
  const { newsLetterSubscription, loading, setLoading } = useApi();
  //
  //FORM
  //
  const [form, handleInputChange, reset] = useForm({
    name: '',
    email: '',
  });
  const { name, email } = form;
  useEffect(() => {
    setNameError({ msg: '', error: false });
    setEmailError({ msg: '', error: false });
  }, [form]);

  //
  // SUBMIT
  //
  const handleSubmit = (e) => {
    e.preventDefault();
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
    setLoading(true);
    newsLetterSubscription(form);
    reset();
  };

  //
  // HANDLE ERRORS
  //
  const [emailError, setEmailError] = useState({ msg: '', error: false });
  const [nameError, setNameError] = useState({ msg: '', error: false });

  return (
    <section className="subscribe">
      {loading && (
        <div className="subscribe__loader">
          <Loader />
        </div>
      )}
      <div
        className={!loading ? 'subscribe__title' : 'subscribe__title filter'}
      >
        <h2>¡Únete a nuestras novedades y promociones!</h2>
      </div>
      <form
        className={
          !loading ? 'form subscribe__form' : 'form subscribe__form filter'
        }
      >
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
