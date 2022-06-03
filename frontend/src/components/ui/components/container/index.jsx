/* eslint-disable consistent-return */
import styled from 'styled-components';
import PropTypes from 'prop-types';

const sizes = ['sm', 'md', 'lg', 'xl', 'xxl'];
const defaultSize = 'xl';

const getPosSize = (size) => (
  sizes.indexOf(size) >= 0
    ? sizes.indexOf(size)
    : sizes.indexOf(defaultSize)
);

const handleMediaContainer = (value) => {
  switch (value) {
    case 'sm': return '576px';
    case 'md': return '768px';
    case 'lg': return '992px';
    case 'xl': return '1200px';
    case 'xxl': return '1400px';
    default: return 0;
  }
};

const handleMaxWContainer = (value) => {
  switch (value) {
    case 'sm': return '565px';
    case 'md': return '755px';
    case 'lg': return '980px';
    case 'xl': return '1190px';
    case 'xxl': return '1390px';
    default: return 0;
  }
};

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  ${(props) => {
    if (!props.fluid) {
      let html = '';
      for (let i = 0; i <= getPosSize(props.size); i++) {
        html += `
          @media (min-width: ${handleMediaContainer(sizes[i])}) {
            max-width: ${handleMaxWContainer(sizes[i])};
          }      
        `;
      }
      return html;
    }
  }}
`;

Container.defaultProps = {
  size: defaultSize,
  fluid: false,
};

Container.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
  fluid: PropTypes.bool,
};
