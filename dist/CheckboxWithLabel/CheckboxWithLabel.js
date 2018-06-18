function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';

var CheckboxWithLabel = function CheckboxWithLabel(props) {
  var onChange = function onChange(e) {
    props.handleChange(_defineProperty({}, props.name, e.currentTarget.checked));
  };

  return React.createElement(
    'div',
    { className: 'checkbox-with-label label-right ' + props.classes },
    React.createElement('input', {
      type: 'checkbox',
      name: props.name,
      id: props.id || props.name,
      onChange: onChange,
      checked: props.checked,
      style: { marginRight: '10px' }
    }),
    React.createElement(
      'label',
      { htmlFor: props.name },
      props.label
    ),
    props.errorMessage && React.createElement(
      'div',
      { className: 'error-message minicaps' },
      props.errorMessage
    )
  );
};

export default CheckboxWithLabel;