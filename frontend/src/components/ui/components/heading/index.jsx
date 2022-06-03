import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const renderHeading = (attr) => {
  switch (attr) {
    case 'h1':
    case 'h2':
      return css`
      font-weight: bold;
      line-height: 2.55rem;
      text-align: center;      
      font-family: 'Poppins';
      color: '#FFF';
    `;
    case 'h3': return css`
      font-size: 16px;
      text-align: center;
      &:after {
        margin-top: 5px !important;
      }
      
      @media (min-width: '992px') {
        text-align: left;
        &:after {
          margin-left: 0 !important;
        }
      }
    `;
    default: return css``;
  }
};

export const Heading = styled.h2.attrs((props) => ({
  as: props.attr,
}))`
  position: relative;
  margin-bottom: 40px;
  color: '#000';
  font-size: 24px;
  ${(props) => renderHeading(props.attr)};
`;

Heading.defaultProps = {
  attr: 'h2',
};

Heading.propTypes = {
  attr: PropTypes.oneOf(['h1', 'h2', 'h3']).isRequired,
};
