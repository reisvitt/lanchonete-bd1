import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import { FormControl, FormErrorMessage, FormLabel } from '../form';

function TplGroup({
  name, title, children, isRequired,
}) {
  return (
    <FormControl>
      <div data-name={name}>
        {title && (
        <FormLabel htmlFor={name}>
          {title}
          {isRequired && <span>*</span>}
        </FormLabel>
        )}
        {children}
      </div>
      <ErrorMessage name={name} component={FormErrorMessage} />
    </FormControl>
  );
}

TplGroup.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
};

export default TplGroup;
