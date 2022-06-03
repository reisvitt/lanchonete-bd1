import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../box';

export function Html({ html, mb = 30, ...props }) {
  if (!html) return null;
  return <Box mb={mb} {...props} dangerouslySetInnerHTML={{ __html: html }} />;
}

Html.propTypes = {
  html: PropTypes.string.isRequired,
  mb: PropTypes.number.isRequired,
};
