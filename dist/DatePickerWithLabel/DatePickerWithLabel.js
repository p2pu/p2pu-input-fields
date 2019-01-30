"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

var _moment = _interopRequireDefault(require("moment"));

require("react-datepicker/dist/react-datepicker.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DatePickerWithLabel = function DatePickerWithLabel(props) {
  var onChange = function onChange(value) {
    var date = !!value ? value.format('YYYY-MM-DD') : null;
    props.handleChange(_defineProperty({}, props.name, date));
  };

  var date = !!props.value ? (0, _moment.default)(props.value) : null;
  return _react.default.createElement("div", {
    className: "input-with-label form-group ".concat(props.classes)
  }, _react.default.createElement("label", {
    htmlFor: props.name
  }, "".concat(props.label, " ").concat(props.required ? '*' : '')), _react.default.createElement(_reactDatepicker.default, {
    selected: date,
    name: props.name,
    id: props.id,
    onChange: onChange,
    className: "form-control",
    minDate: props.minDate
  }), props.errorMessage && _react.default.createElement("div", {
    className: 'error-message minicaps'
  }, props.errorMessage));
};

var _default = DatePickerWithLabel;
exports.default = _default;