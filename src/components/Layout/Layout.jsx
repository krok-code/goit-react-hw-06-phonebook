import React from 'react';
import { Container } from 'components/Layout/Layout.styled.css';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
