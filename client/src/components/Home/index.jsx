import React from 'react';
import Body from '../Body';
import Sectors from '../Setors';

const Home = () => {
  return (
    <Body
      title='Abrir novo chamado'
      label={ false }
      render={ <Sectors /> }
    />
  );
}

export default Home;