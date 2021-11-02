import React from 'react';
import Body from '../Body';
import CallItem from '../CallItem';

const CallList = (props) => {

  // Simulação de dados
  const getCalls = [
    {
      id: '000001',
      title: 'Solicitação de acesso',
      description: 'Eu estou precisando de um novo usuário para acesso. Já tentei de todas as formas possíveis e disponíveis, mas não consigo e preciso de ajuda.',
      initialDate: '10/10/2021',
      finalDate: '14/10/2021',
      department: 'ti',
      responsible: 'Ygor Andrade',
      open: true,
      expired: false,
      view: false
    },
    {
      id: '000002',
      title: 'Problema de conexão',
      description: 'Eu não estou conseguindo acessar.',
      initialDate: '09/10/2021',
      finalDate: '15/10/2021',
      department: 'ti',
      responsible: 'João',
      open: true,
      expired: false,
      view: false
    },
    {
      id: '000003',
      title: 'Alterar a senha',
      description: 'Esqueci a senha de acesso',
      initialDate: '10/10/2021',
      finalDate: '17/10/2021',
      department: 'ti',
      responsible: 'Ygor Andrade',
      open: true,
      expired: true,
      view: false
    }
  ]

  const resultCalls = getCalls.map((value) => {
    if(
      props.title === 'Meus atendimentos' &&
      value.responsible === 'Ygor Andrade' &&
      value.open === true
    ){
      return(
        <CallItem
          key={ value.id }
          url={ 'callview/' + value.id }
          id={ value.id }
          title={ value.title }
          description={ value.description }
          initialDate={ value.initialDate }
          finalDate={ value.finalDate }
          expired={ value.expired }
        />
      );
    }
    if(
      props.title === 'Meu departamento' &&
      value.department === 'ti' &&
      value.open === true
    ){
      return(
        <CallItem
          key={ value.id }
          url={ 'callview/' + value.id }
          id={ value.id }
          title={ value.title }
          description={ value.description }
          initialDate={ value.initialDate }
          finalDate={ value.finalDate }
          expired={ value.expired }
        />
      );
    }
    // Retorno solicitado pelo map
    return(null);
  });

  return (
    <Body
      title={ props.title }
      label={ true }
      render={ resultCalls }
    />
  );
}
 
export default CallList;