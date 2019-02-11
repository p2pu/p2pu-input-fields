"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _rcTimePicker = _interopRequireDefault(require("rc-time-picker"));

var _moment = _interopRequireDefault(require("moment"));

require("rc-time-picker/assets/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TimePickerWithLabel = function TimePickerWithLabel(props) {
  var saveFormat = 'HH:mm';
  var displayFormat = 'h:mm a';

  var onChange = function onChange(value) {
    var time = !!value ? value.format(saveFormat) : null;
    props.handleChange(_defineProperty({}, props.name, time));
  };

  var time = !!props.value ? (0, _moment.default)(props.value, saveFormat) : null;
  return _react.default.createElement("div", {
    className: "input-with-label form-group ".concat(props.classes)
  }, _react.default.createElement("label", {
    htmlFor: props.name
  }, "".concat(props.label, " ").concat(props.required ? '*' : '')), _react.default.createElement(_rcTimePicker.default, {
    showSecond: false,
    use12Hours: true,
    value: time,
    format: displayFormat,
    name: props.name,
    id: props.id,
    onChange: onChange,
    minuteStep: 15,
    allowEmpty: true,
    disabled: props.disabled
  }), props.errorMessage && _react.default.createElement("div", {
    className: 'error-message minicaps'
  }, props.errorMessage));
};

var _default = TimePickerWithLabel;
exports.default = _default;