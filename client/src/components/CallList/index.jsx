import React from 'react';
import {
  RiEyeFill,
  RiEyeOffFill
} from 'react-icons/ri';
import './style.css';

const CallList = (props) => {
  // Data atual
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const yaer = date.getFullYear();

  // Simulação de dados
  const getCalls = [
    {
      id: '000001',
      title: 'Solicitação de acesso',
      description: 'Eu estou precisando de um novo usuário para acesso.',
      initialDate: '10/10/2021',
      finalDate: '14/10/2021',
      status: 'open',
      view: false
    },
    {
      id: '000002',
      title: 'Problema de conexão',
      description: 'Eu não estou conseguindo acessar.',
      initialDate: '09/10/2021',
      finalDate: '15/10/2021',
      status: 'open',
      view: false
    },
    {
      id: '000003',
      title: 'Alterar a senha',
      description: 'Esqueci a senha de acesso',
      initialDate: '10/10/2021',
      finalDate: '17/10/2021',
      status: 'open',
      view: false
    }
  ]

  const resultCalls = getCalls.map((value) => {
    if ( value.finalDate === day + '/' + month + '/' + yaer){
      value.status = 'close';
    }
    return(
      // Verificar como inserir um link na estrutura de tabela
      <tr
        key={ value.id }
        className="mycalls-item"
        onClick={() => {
          // Realizar uma query para alterar o valor da prop view
        }}
      >
        <td
          className="mycalls-item-status"
          style={{ backgroundColor: 
            value.status === 'open' ? '#77dd77' : '#FF6961' 
          }}
        ></td>
        <td className="mycalls-item-number"><p>{ value.id }</p></td>
        <td className="mycalls-item-title">
          <p>{
            value.title.length >= 30 ?
            value.title.substr(0, 30) + '...' :
            value.title
          }</p>
        </td>
        <td className="mycalls-item-description">
          <p>{ 
            value.description.length >= 83 ?
            value.description.substr(0, 83) + '...' :
            value.description
          }</p>
        </td>
        <td className="mycalls-item-open"><p>{ value.initialDate }</p></td>
        <td className="mycalls-item-close"><p>{ value.finalDate }</p></td>
        <td className="mycalls-item-view">
          <p>{
            value.view ? <RiEyeFill /> : <RiEyeOffFill />
          }</p>
        </td>
      </tr>
    );
  });

  return (
    <div className="mycalls-container">
      <div className="mycalls-top">
        <p>{ props.title }</p>
      </div>
      <table>
        <thead>
          <tr className="label-calls">
            <th className="mycalls-item-status"></th>
            <th className="mycalls-item-number"><p>Número</p></th>
            <th className="mycalls-item-title"><p>Título</p></th>
            <th className="mycalls-item-description"><p>Descrição</p></th>
            <th className="mycalls-item-open"><p>Abertura</p></th>
            <th className="mycalls-item-close"><p>Vencimento</p></th>
            <th className="mycalls-item-view"><p>Viu</p></th>
          </tr>
        </thead>
        <tbody>
          { resultCalls }
        </tbody>
      </table>
    </div>
  );
}
 
export default CallList;