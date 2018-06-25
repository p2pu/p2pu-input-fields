function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

var DatePickerWithLabel = function DatePickerWithLabel(props) {
  var onChange = function onChange(value) {
    var date = !!value ? value.format('YYYY-MM-DD') : null;
    props.handleChange(_defineProperty({}, props.name, date));
  };

  var date = !!props.value ? moment(props.value) : null;

  return React.createElement(
    'div',
    { className: 'input-with-label form-group ' + props.classes },
    React.createElement(
      'label',
      { htmlFor: props.name },
      props.label + ' ' + (props.required ? '*' : '')
    ),
    React.createElement(DatePicker, {
      selected: date,
      name: props.name,
      id: props.id,
      onChange: onChange,
      className: 'form-control'
    }),
    props.errorMessage && React.createElement(
      'div',
      { className: 'error-message minicaps' },
      props.errorMessage
    )
  );
};

export default DatePickerWithLabel;