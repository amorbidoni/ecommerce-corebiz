import React from 'react';
import img from '../../assets/images';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer__title">
          <h2 className=" title-primary title-primary--white fz-l">
            Ubicación
          </h2>
        </div>
        <div className="footer__info">
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
          <p>Alphavile SP</p>
          <p> brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>
      </div>
      <div className="footer__btns">
        <button className="btn-icon btn-icon__secondary--white">
          <img src={img.mailIcon} />
          <p>Contáctanos</p>
        </button>
        <button className="btn-icon btn-icon__secondary--white">
          <img src={img.headfones} />
          <p>Habla con un consultor</p>
        </button>
      </div>
      <div className="footer__logo">
        <div className="footer__logo--corebiz">
          <p>Desarrollado por</p>
          <img src={img.corebizWhite} />
        </div>
        <div className="footer__logo--vtex">
          <p>Powered by</p>
          <img src={img.vtexLogo} />
        </div>
      </div>
    </footer>
  );
};
