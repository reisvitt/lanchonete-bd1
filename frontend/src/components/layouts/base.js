import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../header/base';

function Base({ children }) {
  return (
    <FullWrapper>
      <Header />
      {children}
    </FullWrapper>
  );
}

Base.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Base;

const FullWrapper = styled.div`
  min-height: calc(100vh);
`;
