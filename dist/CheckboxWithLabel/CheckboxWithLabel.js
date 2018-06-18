import React from 'react';

var CheckboxWithLabel = function CheckboxWithLabel(props) {
  var onChange = function onChange(e) {
    props.handleChange(babelHelpers.defineProperty({}, props.name, e.currentTarget.checked));
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