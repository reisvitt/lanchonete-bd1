import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../box';
import { propTypesStyledHTML } from '../../../../utils/styled_helpers';

function Space({ name, ...el }) {
  const allowsProps = {};
  Object.keys(propTypesStyledHTML).forEach((prop) => {
    if (el[prop]) {
      Object.assign(allowsProps, {
        [prop]: el[prop],
      });
    }
  });

  return (
    <Box {...allowsProps} className={name} />
  );
}

Space.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Space;
