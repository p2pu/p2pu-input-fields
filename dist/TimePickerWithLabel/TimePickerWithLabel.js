"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

var _moment = _interopRequireDefault(require("moment"));

var _InputWrapper = _interopRequireDefault(require("../InputWrapper"));

require("react-datepicker/dist/react-datepicker.css");

const TimePickerWithLabel = props => {
  const saveFormat = 'HH:mm';
  const displayFormat = 'h:mm a';

  const onChange = value => {
    const time = !!value ? (0, _moment.default)(value).format(saveFormat) : null;
    props.handleChange({
      [props.name]: time
    });
  };

  const time = !!props.value ? (0, _moment.default)(props.value, displayFormat).toDate() : new Date();
  return _react.default.createElement(_InputWrapper.default, {
    label: props.label,
    name: props.name,
    required: props.required,
    errorMessage: props.errorMessage,
    classes: props.classes
  }, _react.default.createElement("div", null, _react.default.createElement(_reactDatepicker.default, {
    selected: time,
    onChange: onChange,
    showTimeSelect: true,
    showTimeSelectOnly: true,
    timeIntervals: 30,
    timeCaption: "Time",
    dateFormat: displayFormat,
    name: props.name,
    id: props.id,
    className: "form-control"
  })));
};

TimePickerWithLabel.propTypes = {
  handleChange: _propTypes.default.func.isRequired,
  label: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  classes: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  value: _propTypes.default.string
};
TimePickerWithLabel.defaultProps = {
  classes: "",
  label: "Time picker",
  handleChange: input => console.log("Implement a function to save selection", input),
  required: false,
  disabled: false,
  errorMessage: null,
  value: ""
};
var _default = TimePickerWithLabel;
exports.default = _default;