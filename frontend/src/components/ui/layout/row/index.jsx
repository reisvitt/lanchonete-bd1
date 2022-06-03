import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '../../components';

function Row({ children, ...rest }) {
  return (
    <Flex flexWrap="wrap" {...rest} mx={rest?.noGutters ? '0' : `-10px`}>
      {children}
    </Flex>
  );
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
