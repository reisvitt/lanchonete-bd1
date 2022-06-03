import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function SubTitle({ title }) {
  return (
    <SubTitleStyled>{title}</SubTitleStyled>
  );
}

SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubTitle;

const SubTitleStyled = styled.h3`
  font-family: Open Sans;
  color: #4F4F4F;
  font-size: 20px;
  font-weight: 700;
  position: relative;
  margin-bottom: 20px;

  &:before {
    position: absolute;
    content: '';
    width: 35px;
    height: 2px;
    background: #AE7576;
    left: 0;
    bottom: -10px;
  }
`;
