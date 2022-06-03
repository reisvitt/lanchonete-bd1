import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import styled from 'styled-components';
import TplGroup from './tpl_group';

function Radio({
  name, title, tabIndex, options = [], isRequired, ...el
}) {
  const handleChange = (event) => {
    el.setFieldValue(name, event.value);
  };

  return (
    <TplGroup name={name} title={title} isRequired={isRequired}>
      <Field name={name}>
        {({ field }) => (
          <Container>
            {
              options.map((option, index) => (
                <Item key={`${name}-${index}`}>
                  <input
                    type="radio"
                    {...field}
                    tabIndex={tabIndex}
                    checked={option.value === el.values[name]}
                    id={`${index}-${name}`}
                    onChange={() => handleChange(option)}
                  />
                  <label htmlFor={`${index}-${name}`}>
                    {typeof title === 'object' ? title : <Span dangerouslySetInnerHTML={{ __html: option.text }} />}
                  </label>
                </Item>
              ))
            }
          </Container>

        )}
      </Field>
    </TplGroup>
  );
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  tabIndex: PropTypes.number.isRequired,
  maxChecked: PropTypes.number.isRequired,
  isRequired: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Radio;

const Span = styled.span`
  color: '#000'dd !important;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;
const Item = styled.div`
  font-size: 14px;

  input {
    margin-bottom: 10px;
    margin-right: 10px;
  }
`;
