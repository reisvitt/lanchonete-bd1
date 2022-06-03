import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Image = styled.img`
  width: ${({ full }) => (full ? '100%' : 'auto')};
  max-width: ${({ maxW }) => maxW || '100%'};
`;
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
