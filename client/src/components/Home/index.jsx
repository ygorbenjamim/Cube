import React from 'react';
import {
  RiComputerLine,
  RiSendPlaneFill,
  RiLayoutFill,
  RiBarChartFill,
  RiPhoneFindLine,
  RiBankLine,
  RiInboxArchiveLine,
  RiInboxUnarchiveLine,
  RiExchangeBoxLine
} from "react-icons/ri";
import { Link } from 'react-router-dom';
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
      name: 'Marketing',
      status: 'flex'
    },
    {
      name: 'Logística',
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
    getSector[6].status,
    getSector[7].status,
    getSector[8].status
  ];

  return (
    <div className="container">
      <div className="body-home">
        <div className="top-body-home">
          <p>Abrir novo chamado</p>
        </div>
        <div className="mid-body-home">
          <Link
            className="call-option"
            style={{ display: sector[0] }}
            to='/subsector-ti'
          >
            <RiComputerLine
              size={30}
              color={'#1e88e5'}
            />
            <p>TI</p>
          </Link>
          <Link
            className="call-option"
            style={{ display: sector[1] }}
            to='/subsector-financial'
          >
            <RiBankLine
              size={30}
              color={'#1e88e5'}
            />
            <p>Financeiro</p>
          </Link>
          <Link
            className="call-option"
            style={{ display: sector[2] }}
            to='/subsector-supervisor'
          >
            <RiPhoneFindLine
              size={30}
              color={'#1e88e5'}
            />
            <p>Fiscal</p>
          </Link>
          <Link
            className="call-option"
            style={{ display: sector[3] }}
            to='/subsector-bi'
          >
            <RiBarChartFill
              size={30}
              color={'#1e88e5'}
            />
            <p>BI</p>
          </Link>
          <Link
            className="call-option"
            style={{ display: sector[4] }}
            to='/subsector-purchases'
          >
            <RiInboxArchiveLine
              size={30}
              color={'#1e88e5'}
            />
            <p>Compras</p>
          </Link>
          <Link
            className="call-option"
            style={{ display: sector[5] }}
            to='/subsector-sales'
          >
            <RiInboxUnarchiveLine
              size={30}
              color={'#1e88e5'}
            />
            <p>Vendas</p>
          </Link>
          <Link
            className="call-option"
            style={{ display: sector[6] }}
            to='/subsector-marketing'
          >
            <RiSendPlaneFill
              size={30}
              color={'#1e88e5'}
            />
            <p>Marketing</p>
          </Link>
          <Link
            className="call-option"
            style={{ display: sector[7] }}
            to='/subsector-logistics'
          >
            <RiLayoutFill
              size={30}
              color={'#1e88e5'}
            />
            <p>Logística</p>
          </Link>
          <Link
            className="call-option"
            style={{ display: sector[8] }}
            to='/subsector-commercial'
          >
            <RiExchangeBoxLine
              size={30}
              color={'#1e88e5'}
            />
            <p>Comercial</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;