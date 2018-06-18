'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

require('react-select/dist/react-select.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectWithLabel = function SelectWithLabel(props) {
  return _react2.default.createElement(
    'div',
    { className: '' + props.classes },
    _react2.default.createElement(
      'label',
      { htmlFor: props.name },
      props.label + ' ' + (props.required ? '*' : '')
    ),
    _react2.default.createElement(_reactSelect2.default, {
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
    props.errorMessage && _react2.default.createElement(
      'div',
      { className: 'error-message minicaps' },
      props.errorMessage
    )
  );
};

exports.default = SelectWithLabel;