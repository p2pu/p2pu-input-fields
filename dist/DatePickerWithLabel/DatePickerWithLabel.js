'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('react-datepicker/dist/react-datepicker.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DatePickerWithLabel = function DatePickerWithLabel(props) {
  var onChange = function onChange(value) {
    var date = !!value ? value.format('YYYY-MM-DD') : null;
    props.handleChange(_defineProperty({}, props.name, date));
  };

  var date = !!props.value ? (0, _moment2.default)(props.value) : null;

  return _react2.default.createElement(
    'div',
    { className: 'input-with-label form-group ' + props.classes },
    _react2.default.createElement(
      'label',
      { htmlFor: props.name },
      props.label + ' ' + (props.required ? '*' : '')
    ),
    _react2.default.createElement(_reactDatepicker2.default, {
      selected: date,
      name: props.name,
      id: props.id,
      onChange: onChange,
      className: 'form-control'
    }),
    props.errorMessage && _react2.default.createElement(
      'div',
      { className: 'error-message minicaps' },
      props.errorMessage
    )
  );
};

exports.default = DatePickerWithLabel;