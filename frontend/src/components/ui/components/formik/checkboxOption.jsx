import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import styled from 'styled-components';
import { TplGroup } from '.';

function CheckboxOption({
  name, title, tabIndex, options = [], isRequired, ...el
}) {
  const [check, setCheck] = useState(options);

  const handleChange = (event) => {
    setCheck((prev) => prev.map((option) => {
      if (option.attribute === event.attribute) {
        return ({
          ...option,
          value: !option?.value,
        });
      }

      return option;
    }));
  };

  useEffect(() => {
    if (el.setFieldValue) {
      el.setFieldValue(name, check);
    }
  }, [check]);

  return (
    <TplGroup name={name} title={title} isRequired={isRequired}>
      <Field name={name}>
        {({ field }) => (
          <Container>
            {
                  check.map((option, index) => (
                    <Item className="checkbox" key={`${name}-${index}`}>
                      <input
                        type="checkbox"
                        {...field}
                        tabIndex={tabIndex}
                        checked={option?.value}
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

CheckboxOption.propTypes = {
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

export default CheckboxOption;

const Span = styled.span`
  color: '#000'dd !important;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;
const Item = styled.div`
  font-size: 14px;
`;
