import React from 'react';
import img from '../../assets/images';
import './header.scss';
export const UserSesion = () => {
  return (
    <div className="user">
      <img src={img.userIcon} alt="Mi cuenta" />
      <p> Mi cuenta</p>
    </div>
  );
};
