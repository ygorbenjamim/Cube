import React from 'react';
import { Link } from 'react-router-dom';
import Body from '../Body';
import './style.css';

const Subsector = (props) => {

  // Simulação de dados
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
    <Body
      title={ 'Subsetores do ' + props.sector }
      label={ false }
      render={ resultSubsector }
    />
  );
}
 
export default Subsector;