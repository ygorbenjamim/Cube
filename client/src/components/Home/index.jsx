import React from 'react';
import {
  RiComputerLine,
  RiBarChartFill,
  RiPhoneFindLine,
  RiBankLine,
  RiInboxArchiveLine,
  RiInboxUnarchiveLine,
  RiExchangeBoxLine
} from "react-icons/ri";
import './style.css';

const Home = () => {

  // Variáveis para simular dados
  const getSector = [
    {
      name: 'TI',
      status: 'flex'
    },
    {
      name: 'Finaneceiro',
      status: 'flex'
    },
    {
      name: 'Fiscal',
      status: 'flex'
    },
    {
      name: 'BI',
      status: 'flex'
    },
    {
      name: 'Compras',
      status: 'flex'
    },
    {
      name: 'Vendas',
      status: 'flex'
    },
    {
      name: 'Comercial',
      status: 'flex'
    }
  ];

  const sector = [
    getSector[0].status,
    getSector[1].status,
    getSector[2].status,
    getSector[3].status,
    getSector[4].status,
    getSector[5].status,
    getSector[6].status
  ];

  return (
    <div className="container">
      <div className="body-home">
        <div className="top-body-home">
          <p>Abrir novo chamado</p>
        </div>
        <div className="mid-body-home">
          <button
            className="call-option"
            style={{ display: sector[0] }}
          >
            <RiComputerLine
              size={30}
              color={'#1e88e5'}
            />
            <p>TI</p>
          </button>
          <button
            className="call-option"
            style={{ display: sector[1] }}
          >
            <RiBankLine
              size={30}
              color={'#1e88e5'}
            />
            <p>Financeiro</p>
          </button>
          <button
            className="call-option"
            style={{ display: sector[2] }}
          >
            <RiPhoneFindLine
              size={30}
              color={'#1e88e5'}
            />
            <p>Fiscal</p>
          </button>
          <button
            className="call-option"
            style={{ display: sector[3] }}
          >
            <RiBarChartFill
              size={30}
              color={'#1e88e5'}
            />
            <p>BI</p>
          </button>
          <button
            className="call-option"
            style={{ display: sector[4] }}
          >
            <RiInboxArchiveLine
              size={30}
              color={'#1e88e5'}
            />
            <p>Compras</p>
          </button>
          <button
            className="call-option"
            style={{ display: sector[5] }}
          >
            <RiInboxUnarchiveLine
              size={30}
              color={'#1e88e5'}
            />
            <p>Vendas</p>
          </button>
          <button
            className="call-option"
            style={{ display: sector[5] }}
          >
            <RiInboxUnarchiveLine
              size={30}
              color={'#1e88e5'}
            />
            <p>Marketing</p>
          </button>
          <button
            className="call-option"
            style={{ display: sector[5] }}
          >
            <RiInboxUnarchiveLine
              size={30}
              color={'#1e88e5'}
            />
            <p>Logística</p>
          </button>
          <button
            className="call-option"
            style={{ display: sector[6] }}
          >
            <RiExchangeBoxLine
              size={30}
              color={'#1e88e5'}
            />
            <p>Comercial</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;