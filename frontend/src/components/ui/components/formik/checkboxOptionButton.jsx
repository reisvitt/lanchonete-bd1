/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import styled from 'styled-components';
import { FormControl, FormLabel } from '../form';

const checkboxOptionButton = ({
  name, title, tabIndex, maxChecked = 3, options = [], isRequired, ...el
}) => {
  const [check, setCheck] = useState(el.value);

  const handleChange = (value) => {
    if (isSelected(value)) {
      const newValues = check.filter((item) => item.value !== value.value);

      setCheck(newValues);
      if (el.setFieldValue) {
        el.setFieldValue(name, newValues);
      }
      return;
    }

    if (check.length >= maxChecked) {
      return;
    }

    setCheck([...check, value]);
    if (el.setFieldValue) {
      el.setFieldValue(name, [...check, value]);
    }
  };

  const isSelected = (option) => check.filter((item) => item.value === option.value).length > 0;

  return (
    <FormControl style={{ marginBottom: 15 }}>
      {title && (
        <FormLabel htmlFor={name}>
          <Field name={name}>
            {({ field }) => (
              <Container>
                {
                  options.map((option, index) => (
                    <Item className="checkbox" key={`${name}-${index}`}>
                      <input
                        type="checkbox"
                        {...field}
                        tabIndex={tabIndex}
                        checked={isSelected(option)}
                        id={index}
                        onChange={() => handleChange(option)}
                      />
                      <label htmlFor={index}>
                        {typeof title === 'object' ? title : <Span dangerouslySetInnerHTML={{ __html: option.text }} />}
                      </label>
                    </Item>
                  ))
                }
              </Container>

            )}
          </Field>
        </FormLabel>
      )}
    </FormControl>
  );
};

checkboxOptionButton.propTypes = {
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
  tabIndex: PropTypes.number,
  maxChecked: PropTypes.number,
  isRequired: PropTypes.bool,
  checked: PropTypes.bool,
};

export default checkboxOptionButton;

const Span = styled.span`
  color: '#000'dd !important;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Item = styled.div`
  margin-bottom: 15px;
`;
