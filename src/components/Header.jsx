import React from 'react';

export default function Header() {
  return (
    <header className='sticky-top'>
      <ul className='nav justify-content-center nova'>
        <li className='nav-item'>
          <a className='nav-link' href='#resume'>Resumo</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#about'>Sobre</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#skills'>Habilidades</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#projects'>Projetos</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#contact'>Contato</a>
        </li>
      </ul>
    </header>
  );
}