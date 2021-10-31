import React from 'react';
import './style.css';

const CallLabel = () => {
  return (
    <div className="call-label">
      <div className="call-item-status"></div>
      <div className="call-item-number"><p>Número</p></div>
      <div className="call-item-title"><p>Título</p></div>
      <div className="call-item-description"><p>Descrição</p></div>
      <div className="call-item-open"><p>Abertura</p></div>
      <div className="call-item-close"><p>Vencimento</p></div>
      <div className="call-item-view"><p>Viu</p></div>
    </div>
  );
}
 
export default CallLabel;