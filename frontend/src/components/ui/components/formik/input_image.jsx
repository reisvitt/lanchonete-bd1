import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { FormInput } from '../form';
import TplGroup from './tpl_group';

function InputImage({
  name, title, type, placeholder, isRequired, tabIndex, disabled, ...el
}) {
  const options = {
    ...(el.max) && { max: el.max },
    ...(el.maxLength) && { max: el.maxLength },
    ...(el.readonly) && { readonly: el.readonly },
    ...(el.accept) && { accept: el.accept },
  };

  const handleChange = (event) => {
    if (type === 'file') {
      const url = URL.createObjectURL(event.target.files[0]);
      console.warn('OPAPA url', url);
      /* if (el.setFieldValue) {
        el.setFieldValue(name, url);
      } */
    } else if (el.setFieldValue) {
      el.setFieldValue(name, event.target.value);
    }
  };

  return (
    <TplGroup name={name} title={title} isRequired={isRequired}>
      <Field
        type={type || 'text'}
        name={name}
        placeholder={placeholder || ''}
        tabIndex={tabIndex}
        disabled={!!disabled}
        {...options}
        onChange={handleChange}
        as={FormInput}
      />
    </TplGroup>
  );
}

InputImage.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  tabIndex: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
};
export default InputImage;
