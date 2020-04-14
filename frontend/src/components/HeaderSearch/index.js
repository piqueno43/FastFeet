import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';
import { Content } from '~/styles/global';

export default function HeaderSearch({
  children,
  title,
  link,
  placeholder,
  handleChangeSearch,
}) {
  return (
    <Content>
      <header>
        <h2>{title}</h2>
        <nav>
          <label htmlFor="search">
            <MdSearch color="#999" size={24} />
            <input
              id="search"
              type="text"
              placeholder={placeholder}
              onChange={handleChangeSearch}
            />
          </label>
          <Link to={link}>
            <MdAdd color="#fff" size={24} /> CADASTRAR
          </Link>
        </nav>
      </header>
      {children}
    </Content>
  );
}
