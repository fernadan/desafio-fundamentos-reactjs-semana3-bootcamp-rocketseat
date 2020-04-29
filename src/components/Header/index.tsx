import React from 'react';

import { useLocation, NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { pathname } = useLocation();

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <NavLink activeClassName={pathname === '/' ? 'active' : ''} to="/">
            Listagem
          </NavLink>
          <NavLink to="/import">Importar</NavLink>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
