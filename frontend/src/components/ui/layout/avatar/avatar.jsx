import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Image } from '../../components/image';

function Avatar({ src, alt }) {
  return <CustomAvatar src={src} alt={alt} />;
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Avatar;

const CustomAvatar = styled(Image)`
  object-fit: cover;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
