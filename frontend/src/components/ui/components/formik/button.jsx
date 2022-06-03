import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonUI } from '../index';

function Button({
  title, submittingText, isSubmitting, withDisable, ...el
}) {
  const disabledAttr = withDisable
    ? {
      disabled: !(el.isValid && el.dirty),
    }
    : {};

  return (
    <ButtonUI type="submit" {...disabledAttr} disabled={isSubmitting}>{!isSubmitting ? title : submittingText}</ButtonUI>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  submittingText: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  withDisable: PropTypes.bool.isRequired,
};

export default Button;
