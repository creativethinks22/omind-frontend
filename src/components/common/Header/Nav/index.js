import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import { Navbar as NavbarBootstrap, Nav as NavBootstrap, Container } from 'react-bootstrap';

import { LogoWhite, LogoBlack } from '@components/common/Logo';

import { Hamburguer, Content } from './components';

const Logo = styled(NavbarBootstrap.Brand)`
  padding: 0;
`;

const Navbar = styled(NavbarBootstrap)`
  padding: 2.2rem;

  .container-fluid {
    z-index: 1000;
  }
`;

const Nav = props => {
  const { isAuthenticated, isOpen, dispatch } = props;

  return (
    <Navbar className="fixed-top" bg="transparent">
      <Container fluid="true">
        <Logo href="/">{isOpen ? <LogoBlack /> : <LogoWhite />}</Logo>
        <NavBootstrap className="ml-auto d-flex flex-column justify-content-center">
          <Hamburguer isOpen={isOpen} dispatch={dispatch} />
        </NavBootstrap>
      </Container>
      <CSSTransition in={isOpen} timeout={300} classNames="fade" unmountOnExit>
        <Content dispatch={dispatch} isAuthenticated={isAuthenticated} />
      </CSSTransition>
    </Navbar>
  );
};

Nav.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Nav;
