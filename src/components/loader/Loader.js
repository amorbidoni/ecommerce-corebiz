import React from 'react';
import { Spinner } from 'react-bootstrap';
import './loader.scss';
export const Loader = () => {
  return (
    <div className="loader">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
