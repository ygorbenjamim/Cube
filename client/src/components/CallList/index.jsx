import React from 'react';
import CallLabel from '../CallLabel';
import CallItem from '../CallItem';
import './style.css';

const CallList = (props) => {

  // Simulação de dados
  const getCalls = [
    {
      id: '000001',
      title: 'Solicitação de acesso',
      description: 'Eu estou precisando de um novo usuário para acesso. Já tentei de todas as formas possíveis e disponíveis, mas não consigo e preciso de ajuda.',
      initialDate: '10/10/2021',
      finalDate: '14/10/2021',
      status: true,
      view: false
    },
    {
      id: '000002',
      title: 'Problema de conexão',
      description: 'Eu não estou conseguindo acessar.',
      initialDate: '09/10/2021',
      finalDate: '15/10/2021',
      status: true,
      view: false
    },
    {
      id: '000003',
      title: 'Alterar a senha',
      description: 'Esqueci a senha de acesso',
      initialDate: '10/10/2021',
      finalDate: '17/10/2021',
      status: false,
      view: false
    }
  ]

  const resultCalls = getCalls.map((value) => {
    return(
      <CallItem
        key={ value.id }
        url={ 'callview/' + value.id }
        id={ value.id }
        title={ value.title }
        description={ value.description }
        initialDate={ value.initialDate }
        finalDate={ value.finalDate }
        status={ value.status }
      />
    );
  });

  return (
    <div className="mycalls-container">
      <div className="mycalls-top">
        <p>{ props.title }</p>
      </div>
        <CallLabel />
        { resultCalls }
    </div>
  );
}
 
export default CallList;