import React, { useState, useEffect } from 'react';
import {
  RiUser3Line,
  RiSearchLine,
  RiCheckboxBlankCircleLine,
  RiCheckboxBlankCircleFill,
  RiAddBoxLine,
  RiFilter2Fill,
  RiSettings2Line,
  RiAlertLine,
  RiMenuFill,
  RiPieChart2Fill,
  RiListOrdered,
  RiGridLine,
  RiGridFill
} from "react-icons/ri";
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  // Variáveis
  const [submenu, setSubmenu] = useState('none');
  const [displaySearch, setDisplaySearch] = useState('flex');
  const [displayFilter, setDisplayFilter] = useState('none');
  const [filterType, setFilterType] = useState('id');
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
    var searchInput = document.querySelector('.search-call-header-input');
    var filterBtn = document.querySelector('.btn-filter-header');
    searchInput.classList.toggle('hide');
    filterBtn.classList.toggle('hide');
  }

  function showFilter() {
    displayFilter === 'none' ? setDisplayFilter('flex') : setDisplayFilter('none');
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
    if(screenWidth <= 660){
      setDisplaySearch('none');
    } else {
      setDisplaySearch('flex');
    }
  }, [ screenWidth ]);

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
            <Link
              className="btn-menu-item"
              to="/dashboard"
              onClick={ handleMenu }
            >
              <RiGridFill />
              <p className="menu-label">Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              className="btn-menu-item"
              to="/"
              onClick={ handleMenu }
            >
              <RiAddBoxLine />
              <p className="menu-label">Abrir chamado</p>
            </Link>
          </li>
          <li>
            <Link
              className="btn-menu-item"
              to="/calllist"
              onClick={ handleMenu }
            >
              <RiListOrdered />
              <p className="menu-label">Meus atendimentos</p>
            </Link>
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
        <div
          className="search-call-header"
          style={{ display: displaySearch }}
        >
          <div
            className="option-filter"
            style={{ display: displayFilter }}
          >
            <button
              className="option-filter-item"
              onClick={() => {
                setFilterType('id')
                setDisplayFilter('none')
              }}
            >
              {
                filterType === 'id' ?
                <RiCheckboxBlankCircleFill size={ 20 }/> :
                <RiCheckboxBlankCircleLine size={ 20 }/>
              }
              <p>Número</p>
            </button>
            <button
              className="option-filter-item"
              onClick={() => {
                setFilterType('title')
                setDisplayFilter('none')
              }}
            >
              {
                filterType === 'title' ?
                <RiCheckboxBlankCircleFill size={ 20 }/> :
                <RiCheckboxBlankCircleLine size={ 20 }/>
              }
              <p>Título</p>
            </button>
            <button
              className="option-filter-item"
              onClick={() => {
                setFilterType('description')
                setDisplayFilter('none')
              }}
            >
              {
                filterType === 'description' ?
                <RiCheckboxBlankCircleFill size={ 20 }/> :
                <RiCheckboxBlankCircleLine size={ 20 }/>
              }
              <p>Descrição</p>
            </button>
            <button
              className="option-filter-item"
              onClick={() => {
                setFilterType('open')
                setDisplayFilter('none')
              }}
            >
              {
                filterType === 'open' ?
                <RiCheckboxBlankCircleFill size={ 20 }/> :
                <RiCheckboxBlankCircleLine size={ 20 }/>
              }
              <p>Data de abertura</p>
            </button>
          </div>
          <button
            className="btn-filter-header"
            onClick={ showFilter }
          >
            <RiFilter2Fill />
          </button>
          <input
            className="search-call-header-input"
            placeholder="Buscar chamado..."
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
        <Link
          className="header-bottom-item"
          to="/calllist"
        >
          <p>Meus atendimentos</p>
        </Link>
        <Link
          className="header-bottom-item"
          to="/calllist"
        >
          <p>Meu departamento</p>
        </Link>
      </div>
    </div>
  );
}
 
export default Header;