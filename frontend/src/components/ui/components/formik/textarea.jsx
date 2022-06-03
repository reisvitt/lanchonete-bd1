import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { TextArea } from '../form';
import { TplGroup } from './index';

function Textarea({
  name, title, placeholder, isRequired, tabIndex, disabled, ...el
}) {
  return (
    <TplGroup name={name} title={title} isRequired={isRequired}>
      <Field
        name={name}
        placeholder={placeholder || ''}
        tabIndex={tabIndex}
        disabled={!!disabled}
        as={TextArea}
        onChange={(val) => {
          if (el.setFieldValue) {
            el.setFieldValue(name, val.target.value);
          }
        }}
      />
    </TplGroup>
  );
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  tabIndex: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Textarea;
