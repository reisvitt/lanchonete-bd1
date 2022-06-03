import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';
import { FormControl, FormLabel } from '../form';
import { FormErrorMessage } from '../form/form_error_message';

function Checkbox({
  name, title, tabIndex, isRequired, checked = false, ...el
}) {
  const [check, setCheck] = useState(false);

  const handleChange = () => {
    setCheck((prev) => !prev);
    if (el.setFieldValue) {
      if (isRequired) el.setFieldValue(name, check ? '' : true);
      else el.setFieldValue(name, !check);
    }
  };

  useEffect(() => {
    if (checked) setCheck(checked);
  }, []);

  return (
    <FormControl style={{ marginBottom: 15 }}>
      {title && (
        <FormLabel htmlFor={name} onClick={handleChange}>
          <Field name={name}>
            {({ field }) => (
              <input
                type="checkbox"
                {...field}
                tabIndex={tabIndex}
                checked={check}
              />
            )}
          </Field>
          {typeof title === 'object' ? title : <Span dangerouslySetInnerHTML={{ __html: title }} />}
        </FormLabel>
      )}
      <ErrorMessage name={name} component={FormErrorMessage} />
    </FormControl>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  tabIndex: PropTypes.number.isRequired,
  isRequired: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Checkbox;

const Span = styled.span`
  color: '#000' !important;
`;
