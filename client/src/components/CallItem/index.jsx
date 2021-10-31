import React, { useState, useEffect } from 'react';
import {
  RiEyeFill,
  RiEyeOffFill
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './style.css';

const CallItem = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [limitChar, setLimitChar] = useState(45);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
    if(screenWidth <= 1400){
      setLimitChar(45);
    } else {
      //setLimitChar(120);
    }
  }, [ screenWidth ]);

  return (
    <Link
      className="call-item"
      to={
        props.url === 'none' ?
        '#' :
        props.url
      }
    >
      <div
        className="call-item-status"
        style={{
          backgroundColor: props.status === true ? '#77dd77' : '#ff6961'
        }}
      >
      </div>
      <div className="call-item-number"><p>{ props.id }</p></div>
      <div className="call-item-title"><p>{
        props.title.length >= 30 ?
        props.title.substr(0, 30) + '...' :
        props.title
      }</p></div>
      <div className="call-item-description"><p>{
        props.description.length >= limitChar ?
        props.description.substr(0, limitChar) + '...' :
        props.description
      }</p></div>
      <div className="call-item-open"><p>{ props.initialDate }</p></div>
      <div className="call-item-close"><p>{ props.finalDate }</p></div>
      <div className="call-item-view">
        <p>
          { props.view ? <RiEyeFill /> : <RiEyeOffFill /> }
        </p>
      </div>
    </Link>
  );
}
 
export default CallItem;