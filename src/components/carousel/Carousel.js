import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../../assets/images';
import './carouse.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Carrousel = () => {
  return (
    <Carousel controls={false}>
      <Carousel.Item interval={2000}>
        <img className="background-black" src={img.bgBlack} alt="fondo" />
        <div className="image-container">
          <img
            className="carousel-img d-block w-100"
            src={img.bannerUno}
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h3>¡Hola! ¿Qué es lo que buscas?</h3>
          <p>Crear o migrar tu comercio electrónico?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="background-black" src={img.bgBlack} alt="fondo" />
        <div className="image-container">
          <img
            className="carousel-img d-block w-100"
            src={img.bannerUno}
            alt="Second slide"
          />
        </div>
        <Carousel.Caption>
          <h3>¡Hola! ¿Qué es lo que buscas?</h3>
          <p>Crear o migrar tu comercio electrónico?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="background-black" src={img.bgBlack} alt="fondo" />
        <div className="image-container">
          <img
            className="carousel-img d-block w-100"
            src={img.bannerUno}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <h3>¡Hola! ¿Qué es lo que buscas?</h3>
          <p>Crear o migrar tu comercio electrónico?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="background-black" src={img.bgBlack} alt="fondo" />
        <div className="image-container">
          <img
            className="carousel-img d-block w-100"
            src={img.bannerUno}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <h3>¡Hola! ¿Qué es lo que buscas?</h3>
          <p>Crear o migrar tu comercio electrónico?</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
