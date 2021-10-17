import React, { useEffect, useState } from 'react';
import {
  RiNotification2Line,
  RiCheckboxBlankCircleLine
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './style.css';

const Notification = () => {
  const [displayNotification, setDisplayNotification] = useState('flex');
  const [displayContent, setDisplayContent] = useState('none');

  // Simulação de dados
  const getNotification = [
    /*{
      id: '000001',
      title: 'Solicitação de acesso',
      description: 'Eu estou precisando de um novo usuário para AuthenticatorResponse.'
    },
    {
      id: '000002',
      title: 'Problema de conexão',
      description: 'Eu estou precisando de um novo usuário para AuthenticatorResponse.'
    }
    */
  ]

  const value = getNotification.length;

  const resultNotification = getNotification.map((value) => {
    return(
      <Link
        className="notification-link"
        to="/mycalls"
        key={ value.id }
      >
        <RiCheckboxBlankCircleLine size={ 25 }/>
        <p className="notification-link-item">
          {
            value.title.length > 21 ?
            value.title.substr(0, 22) + '...' :
            value.title
          }
        </p>
      </Link>
    );
  });

  useEffect(() => {
    if(value <= 0){
      setDisplayNotification('none');
    }
  }, [ value ]);

  function handleNotification() {
    displayContent === 'none' ? setDisplayContent('flex') : setDisplayContent('none');
    setDisplayNotification('none');
  }

  return (
    <div className="notification-container">
      <button
        className="notification-body"
        onClick={ handleNotification }
      >
        <RiNotification2Line />
      </button>
      <div
        className="notification-number"
        style={{ display: displayNotification }}
      >
        <p className="notification-number-value">
          { value > 99 ? '+99' : value }
        </p>
      </div>
      <div
        className="notification-content"
        style={{ display: displayContent }}
      >
        {
          getNotification.length < 1 ?
          <p>Nenhuma notificação encontrada.</p> :
          resultNotification
        }
      </div>
    </div>
  );
}
 
export default Notification;