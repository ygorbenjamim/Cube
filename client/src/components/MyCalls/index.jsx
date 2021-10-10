import React, { useState } from 'react';
import {
  RiEyeFill,
  RiEyeOffFill
} from 'react-icons/ri';
import './style.css';

const MyCalls = () => {
  const [view, setView] = useState(false);
  function handleView() {
    setView(true);
  }

  return (
    <div className="mycalls-container">
      <div className="mycalls-top">
        <p>Meus atendimentos</p>
      </div>
      <button
        className="mycalls-item"
        onClick={ handleView }
      >
        <div
          className="mycalls-item-status"
          style={{ backgroundColor: '#77dd77' }}
        ></div>
        <p className="mycalls-item-number">000000</p>
        <p className="mycalls-item-title">Título</p>
        <p className="mycalls-item-description">Descrição</p>
        <p className="mycalls-item-open">10/10/2021</p>
        <p className="mycalls-item-close">14/10/2021</p>
        <p className="mycalls-item-view">
          {
            view ? <RiEyeFill /> : <RiEyeOffFill />
          }
        </p>
      </button>
      <button
        className="mycalls-item"
        onClick={ handleView }
      >
        <div
          className="mycalls-item-status"
          style={{ backgroundColor: '#77dd77' }}
        ></div>
        <p className="mycalls-item-number">000000</p>
        <p className="mycalls-item-title">Título</p>
        <p className="mycalls-item-description">Descrição</p>
        <p className="mycalls-item-open">10/10/2021</p>
        <p className="mycalls-item-close">14/10/2021</p>
        <p className="mycalls-item-view">
          {
            view ? <RiEyeFill /> : <RiEyeOffFill />
          }
        </p>
      </button>
    </div>
  );
}
 
export default MyCalls;