import React from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

var SelectWithLabel = function SelectWithLabel(props) {
  return React.createElement(
    'div',
    { className: '' + props.classes },
    React.createElement(
      'label',
      { htmlFor: props.name },
      props.label + ' ' + (props.required ? '*' : '')
    ),
    React.createElement(Select, {
      name: props.name,
      className: props.selectClasses,
      value: props.value,
      options: props.options,
      onChange: props.onChange,
      onInputChange: props.onInputChange,
      noResultsText: props.noResultsText,
      placeholder: props.placeholder,
      multi: props.multi || false
    }),
    props.errorMessage && React.createElement(
      'div',
      { className: 'error-message minicaps' },
      props.errorMessage
    )
  );
};

export default SelectWithLabel;