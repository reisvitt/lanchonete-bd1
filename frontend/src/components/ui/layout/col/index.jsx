/* eslint-disable radix */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../components';
import { propTypesStyledHTML } from '../../../../utils/styled_helpers';

function Col({ children, ...rest }) {
  const positions = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
  const numColumns = 12;
  const colValue = 100 / numColumns;
  const size = new Array(positions.length).fill('100%');

  positions.forEach((value, index) => {
    if (rest[value]) {
      size.fill(`${parseFloat((rest[value] * colValue).toFixed(5))}%`, index);
      Reflect.deleteProperty(rest, value);
    }
  });

  return (
    <Box px="10px" mb={`${10 * 2}px`} w={size} {...rest}>
      {children}
    </Box>
  );
}

Col.propTypes = {
  children: PropTypes.node.isRequired,
  ...propTypesStyledHTML,
};

export default Col;
