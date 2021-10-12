import React, { useEffect, useState } from 'react';
import {
  RiNotification2Line
} from 'react-icons/ri';
import './style.css';

const Notification = () => {
  const [displayNotification, setDisplayNotification] = useState('flex');
  const value = 89;

  useEffect(() => {
    if(value <= 0){
      setDisplayNotification('none');
    }
  }, [ value ]);

  function handleNotification() {
    var content = document.querySelector('.notification-content');
    content.classList.toggle('hide');
    setDisplayNotification('none');
  }

  return (
    <div className="notification-container">
      <button
        className="notification-body"
        onClick={ handleNotification }
      >
        <RiNotification2Line />
      </button>
      <div
        className="notification-number"
        style={{ display: displayNotification }}
      >
        <p className="notification-number-value">
          { value > 99 ? '+99' : value }
        </p>
      </div>
      <div className="notification-content">
        
      </div>
    </div>
  );
}
 
export default Notification;