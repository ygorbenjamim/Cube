import React, { useEffect, useState } from 'react';
import {
  RiNotification2Line
} from 'react-icons/ri';
import './style.css';

const Notification = () => {
  const [displayNotification, setDisplayNotification] = useState('flex');
  const [displayContent, setDisplayContent] = useState('none');
  const value = 99;

  useEffect(() => {
    if(value <= 0){
      setDisplayNotification('none');
    }
  }, [ value ]);

  function handleNotification() {
    setDisplayNotification('none');
    if(displayContent === 'none'){
      setDisplayContent('flex');
    } else {
      setDisplayContent('none');
    }
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
          { value > 99 ? '99' : value }
        </p>
      </div>
      <div
        className="notification-content"
        style={{ display: displayContent }}
      >
        <p>Label</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Label</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Label</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
}
 
export default Notification;