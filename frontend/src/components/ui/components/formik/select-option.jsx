/* eslint-disable max-len, react/no-unstable-nested-components */
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import Select from 'react-select';
import TplGroup from './tpl_group';
import { FormSelect } from '../form';

function SelectOption({
  name, title, isRequired, options = [], placeholder, noOptionsMessage, tabIndex, hidden, ...el
}) {
  const handleChange = (event) => {
    el.setFieldValue(name, event.currentTarget.value);
  };

  if (hidden && options.length === 1) {
    return <Field type="hidden" name={name} value={options[0].value} />;
  }

  const getValues = () => {
    if (el.isMulti) {
      return el?.values[name];
    }

    return options.find((item) => item.value === el?.values[name]);
  };

  return (
    <TplGroup name={name} title={title} isRequired={isRequired}>
      <Field
        as={FormSelect}
        name={name}
        tabIndex={tabIndex}
        onChange={handleChange}
      >
        {
           ({ field }) => (
             <Select
               {...field}
               {...el}
               styles={{
                 control: (base) => ({
                   ...base,
                   borderRadius: 8,
                   borderWidth: 0.5,
                   borderColor: '#848484',
                   boxShadow: undefined,
                   backgroundColor: 'transparent',
                   paddingTop: 10,
                   paddingBottom: 10,
                   fontFamily: 'Montserrat',
                   fontWeight: 400,
                   ':hover': {
                     borderColor: `#FF6B00`,
                   },
                 }),
                 menu: (base) => ({ ...base, borderRadius: 8, }),
                 placeholder: (base) => ({
                   ...base,
                   fontSize: 14
                 }),
                 option: (base) => ({
                   ...base,
                   fontWeight: 700,
                   fontSize: 14,
                   paddingTop: 15,
                   ':hover': {
                    backgroundColor: `#FF6B00`,
                    color: '#FFF',
                  },
                 }),
                 singleValue: (base) => ({
                   ...base,
                   fontWeight: 700,
                   fontSize: 14,
                 }),

               }}
               options={options}
               placeholder={placeholder}
               noOptionsMessage={() => <h4>{noOptionsMessage}</h4>}
               blurInputOnSelect={false}
               openMenuOnFocus={false}
               isSearchable
               isClearable
               value={getValues()}
               onChange={(event) => {
                 if (el.setFieldValue) {
                   if (el.isMulti) {
                     el.setFieldValue(name, event);
                   } else {
                     el.setFieldValue(name, event?.value);
                   }
                 }
               }}
               name={name}
             />
           )
         }

      </Field>
    </TplGroup>
  );
}

SelectOption.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  tabIndex: PropTypes.number.isRequired,
  hidden: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  noOptionsMessage: PropTypes.string.isRequired,
};

export default SelectOption;
