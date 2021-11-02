import React, { useState, useEffect } from 'react';
import {
  RiEyeFill,
  RiEyeOffFill
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './style.css';

const CallItem = (props) => {
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
          backgroundColor: props.expired === true ? '#ff6961' : '#77dd77'
        }}
      >
      </div>
      <div className="call-item-number"><p>{ props.id }</p></div>
      <div className="call-item-title"><p>{ props.title }</p></div>
      <div className="call-item-description"><p>{ props.description }</p></div>
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