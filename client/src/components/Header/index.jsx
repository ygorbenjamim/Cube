import React, { useState } from 'react';
import {
  RiUser3Line,
  RiSearchLine,
  RiFilter2Fill,
  RiSettings2Line,
  RiAlertLine,
  RiMenuFill,
  RiPieChart2Fill,
  RiListOrdered,
  RiGridLine,
  RiGridFill
} from "react-icons/ri";
import './style.css';

const Header = () => {
  // Variáveis
  const [submenu, setSubmenu] = useState('none');

  // Funções
  function handleSubmenu() {
    if (submenu === 'none') {
      setSubmenu('flex');
    } else {
      setSubmenu('none');
    }
  }

  function handleMenu() {
    var sidebarName = document.querySelector('.sidebar');
    sidebarName.classList.toggle('hide');
  }

  function handleSearch() {
    var searchInput = document.querySelector('.find-call-header-input');
    var filterBtn = document.querySelector('.btn-filter-header');
    searchInput.classList.toggle('hide');
    filterBtn.classList.toggle('hide');
  }

  return (
    <div className="header-container">
      {/* Submenu flutuante */}
      <div
        className="options-user"
        style={{ display: submenu }}
      >
        <button className="btn-options-user">
          <RiUser3Line
            size={ 20 }
          />
          <p>Minha conta</p>
        </button>
        <button className="btn-options-user">
          <RiAlertLine
            size={ 20 }
          />
          <p>Meus chamados</p>
        </button>
        <button className="btn-options-user">
          <RiSettings2Line
            size={ 20 }
          />
          <p>Configurações</p>
        </button>
      </div>

      { /* Sidebar */ }
      <div
        className="sidebar"
      >
        <div className="logo-content">
          <div className="logo">
            <RiGridLine />
            <p className="logo-name">Cube</p>
          </div>
        </div>
        <ul className="nav-list">
          <li>
            <button className="btn-menu-item">
              <input
                className="find-call"
                type="number"
                placeholder="Buscar chamado..."
              />
            </button>
          </li>
          <li>
            <button className="btn-menu-item">
              <RiGridFill />
              <p className="menu-label">Dashboard</p>
            </button>
          </li>
          <li>
            <button className="btn-menu-item">
              <RiListOrdered />
              <p className="menu-label">Meus atendimentos</p>
            </button>
          </li>
          <li>
            <button className="btn-menu-item">
              <RiPieChart2Fill />
              <p className="menu-label">Meu desempenho</p>
            </button>
          </li>
        </ul>
      </div>

      <div className="header-top">
        <button
          className="btn-menu"
          onClick={ handleMenu }
        >
          <RiMenuFill
            size={30}
            color={'#e3e3e3'}
          />
        </button>
        <h1>Cube</h1>
        <div className="search-call-header">
          <button
            className="btn-filter-header"
          >
            <RiFilter2Fill />
          </button>
          <input
            className="find-call-header-input"
            placeholder="Buscar Chamado..."
          />
          <button
            className="btn-search-header"
            onClick={ handleSearch }
          >
            <RiSearchLine />
          </button>
        </div>
        <div className="user">
          <button
            className="btn-user"
            onClick={ handleSubmenu }
          >
            <img src="https://source.unsplash.com/100x100" alt="perfil"/>
          </button>
        </div>
      </div>
      <div className="header-bottom">
        <button className="header-bottom-item">
          <p>Meus atendimentos</p>
        </button>
        <button className="header-bottom-item">
          <p>Meu departamento</p>
        </button>
      </div>
    </div>
  );
}
 
export default Header;