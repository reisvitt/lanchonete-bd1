import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import {RiEyeOffFill,RiEyeFill } from 'react-icons/ri'
import { FormInput, IcoView } from '../form';
import TplGroup from './tpl_group';

function InputPassword({
  name, title, placeholder, isRequired, tabIndex, ...el
}) {
  const [viewPass, setViewPass] = useState(false);

  const handleChange = (event) => {
    if (el.setFieldValue) {
      el.setFieldValue(name, event.target.value.replace(/\s/g, ''));
    }
  };

  return (
    <TplGroup name={name} title={title} isRequired={isRequired}>
      <Field
        type={viewPass ? 'text' : 'password'}
        name={name}
        placeholder={placeholder || ''}
        tabIndex={tabIndex}
        onChange={handleChange}
        autoComplete="off"
        
        as={FormInput}
      />
      <IcoView
        type="button"
        alt="Exibir senha"
        onClick={() => setViewPass((prev) => !prev)}
      >
        {
          !viewPass ? (
            <RiEyeOffFill 
              color="#FF6B00"
              size={20}
            />
          ) : (
            <RiEyeFill 
              color="#FF6B00"
              size={20}
            />
          )
        }
      </IcoView>
    </TplGroup>
  );
}

InputPassword.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  tabIndex: PropTypes.number.isRequired,
};
export default InputPassword;
