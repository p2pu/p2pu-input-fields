import React from 'react';

var TextareaWithLabel = function TextareaWithLabel(props) {
  var onChange = function onChange(e) {
    props.handleChange(babelHelpers.defineProperty({}, props.name, e.currentTarget.value));
  };

  return React.createElement(
    'div',
    { className: 'input-with-label form-group ' + props.classes },
    React.createElement(
      'label',
      { htmlFor: props.name },
      props.label + ' ' + (props.required ? '*' : '')
    ),
    React.createElement('textarea', {
      className: 'form-control',
      type: props.type || 'text',
      name: props.name,
      id: props.id,
      onChange: onChange,
      value: props.value,
      placeholder: props.placeholder
    }),
    props.errorMessage && React.createElement(
      'div',
      { className: 'error-message minicaps' },
      props.errorMessage
    )
  );
};

export default TextareaWithLabel;