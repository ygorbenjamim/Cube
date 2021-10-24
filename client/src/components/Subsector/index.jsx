import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Subsector = (props) => {
  const subsectors = [
    {
      id: 1,
      name: 'Suporte de infraestrutura'
    },
    {
      id: 2,
      name: 'Suporte de sistemas'
    },
    {
      id: 3,
      name: 'Desenvolvimento'
    }
  ]

  const resultSubsector = subsectors.map((value) => {
    if(props.sector === 'TI'){
      return(
        <Link
          key={ value.id }
          className="item-subsector"
          to='/'
        >
          { value.name }
        </Link>
      );
    }
    return null;
  });

  return (
    <div className="subsector-container">
      <div className="body-subsector">
        <div className="top-body-subsector">
          <p>Subsetores do { props.sector }</p>
        </div>
        <div className="mid-body-subsector">
          { resultSubsector }
        </div>
      </div>
    </div>
  );
}
 
export default Subsector;