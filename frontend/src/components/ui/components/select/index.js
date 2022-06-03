import React from 'react';
import Select from 'react-select';

export const  SelectOption = ({
  isRequired, options = [], placeholder, noOptionsMessage, tabIndex, hidden, onChangeValue, ...el
}) => {
 
  const getValues = () => {
    if (el.isMulti) {
      return options.filter((item) => item.value === el.value)
    }

    return options.find((item) => item.value === el?.value);
  };

  return (
    <Select
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
        if (el.isMulti) {
          onChangeValue(event)
        } else {
          onChangeValue(event.value)
        }
      }}
    />
  );
}