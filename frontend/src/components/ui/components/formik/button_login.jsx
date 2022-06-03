import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLogin as ButtonLoginUI } from '../index';

function ButtonLogin({
  title, submittingText, isSubmitting, withDisable, ...el
}) {
  const disabledAttr = withDisable
    ? {
      disabled: !(el.isValid && el.dirty),
    }
    : {};

  return (
    <ButtonLoginUI type="submit" {...disabledAttr}>{!isSubmitting ? title : submittingText}</ButtonLoginUI>
  );
}

ButtonLogin.propTypes = {
  title: PropTypes.string.isRequired,
  submittingText: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  withDisable: PropTypes.bool.isRequired,
};

export default ButtonLogin;
