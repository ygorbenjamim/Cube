import React from 'react';
import CallLabel from '../CallLabel';
import './style.css';

const Body = (props) => {
  return (
    <div className="body-container">
      <div className="body-top">
        <p>{ props.title }</p>
      </div>
      <div className="body-mid">
        {
          props.label ?
          <CallLabel /> :
          null
        }
        { props.render }
      </div>
    </div>
  );
}
 
export default Body;