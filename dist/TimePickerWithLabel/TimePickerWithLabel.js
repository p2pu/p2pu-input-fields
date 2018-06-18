'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTimePicker = require('rc-time-picker');

var _rcTimePicker2 = _interopRequireDefault(_rcTimePicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('rc-time-picker/assets/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TimePickerWithLabel = function TimePickerWithLabel(props) {
  var saveFormat = 'HH:mm';
  var displayFormat = 'h:mm a';

  var onChange = function onChange(value) {
    var time = !!value ? value.format(saveFormat) : null;
    props.handleChange(_defineProperty({}, props.name, time));
  };

  var time = !!props.value ? (0, _moment2.default)(props.value, saveFormat) : null;

  return _react2.default.createElement(
    'div',
    { className: 'input-with-label form-group ' + props.classes },
    _react2.default.createElement(
      'label',
      { htmlFor: props.name },
      props.label + ' ' + (props.required ? '*' : '')
    ),
    _react2.default.createElement(_rcTimePicker2.default, {
      showSecond: false,
      use12Hours: true,
      value: time,
      format: displayFormat,
      name: props.name,
      id: props.id,
      onChange: onChange,
      minuteStep: 15,
      allowEmpty: true
    }),
    props.errorMessage && _react2.default.createElement(
      'div',
      { className: 'error-message minicaps' },
      props.errorMessage
    )
  );
};

exports.default = TimePickerWithLabel;