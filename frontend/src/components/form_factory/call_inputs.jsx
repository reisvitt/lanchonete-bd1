import React from 'react';
import PropTypes from 'prop-types';
import ComponentsList from './components_list';

function CallInputs({ component, value, ...rest }) {
  if (component && typeof component === 'object') return component;

  const Component = ComponentsList[component];

  if (!Component) return null;

  return (
    <Component {...rest} value={value || ''} />
  );
}

CallInputs.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  value: PropTypes.string.isRequired,
};

export default CallInputs;
