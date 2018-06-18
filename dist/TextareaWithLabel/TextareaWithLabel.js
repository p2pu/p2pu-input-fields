'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TextareaWithLabel = function TextareaWithLabel(props) {
  var onChange = function onChange(e) {
    props.handleChange(_defineProperty({}, props.name, e.currentTarget.value));
  };

  return _react2.default.createElement(
    'div',
    { className: 'input-with-label form-group ' + props.classes },
    _react2.default.createElement(
      'label',
      { htmlFor: props.name },
      props.label + ' ' + (props.required ? '*' : '')
    ),
    _react2.default.createElement('textarea', {
      className: 'form-control',
      type: props.type || 'text',
      name: props.name,
      id: props.id,
      onChange: onChange,
      value: props.value,
      placeholder: props.placeholder
    }),
    props.errorMessage && _react2.default.createElement(
      'div',
      { className: 'error-message minicaps' },
      props.errorMessage
    )
  );
};

exports.default = TextareaWithLabel;