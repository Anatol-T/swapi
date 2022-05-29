import React from 'react';
import spinner from "../assets/DoubleRingSpinner.svg";

export const Spinner = () => {
  return (
    <div className={'loading'}>
      <img src={spinner} alt="loading..."/>
    </div>
  );
};

