import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../header/logged';
import Footer from '../footer/base';

function LoggedLayout({ children }) {
  return (
    <FullWrapper>
      <Header />
        <Content>
          {children}
        </Content>
      <Footer />
    </FullWrapper>
  );
}

LoggedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoggedLayout;

const FullWrapper = styled.div`
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  align-self: center;
`;