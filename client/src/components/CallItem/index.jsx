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
    }
    if(screenWidth >= 1401 && screenWidth <= 1500){
      setLimitChar(60);
    }
    if(screenWidth >= 1501 && screenWidth <= 1600){
      setLimitChar(67);
    }
    if(screenWidth >= 1601 && screenWidth <= 1700){
      setLimitChar(74);
    }
    if(screenWidth >= 1701 && screenWidth <= 1800){
      setLimitChar(81);
    }
    if(screenWidth >= 1801 && screenWidth <= 1900){
      setLimitChar(87);
    }
    if(screenWidth >= 1901 && screenWidth <= 2000){
      setLimitChar(94);
    }
    if(screenWidth >= 2001 && screenWidth <= 2100){
      setLimitChar(99);
    }
    if(screenWidth >= 2101 && screenWidth <= 2200){
      setLimitChar(106);
    }
    if(screenWidth >= 2201 && screenWidth <= 2300){
      setLimitChar(111);
    }
    if(screenWidth >= 2301 && screenWidth <= 2400){
      setLimitChar(116);
    }
    if(screenWidth >= 2401 && screenWidth <= 2500){
      setLimitChar(121);
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