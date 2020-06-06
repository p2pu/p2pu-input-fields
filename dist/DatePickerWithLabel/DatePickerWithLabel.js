"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

var _InputWrapper = _interopRequireDefault(require("../InputWrapper"));

require("react-datepicker/dist/react-datepicker.css");

const displayFormat = 'MMMM d, yyyy';

const formatDateString = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};

const DatePickerWithLabel = props => {
  const onChange = value => {
    const date = !!value ? formatDateString(value) : null;
    props.handleChange({
      [props.name]: date
    });
  };

  const date = !!props.value ? Date.parse(props.value) : new Date();
  return /*#__PURE__*/_react.default.createElement(_InputWrapper.default, {
    label: props.label,
    name: props.name,
    required: props.required,
    errorMessage: props.errorMessage,
    helpText: props.helpText,
    classes: props.classes
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    selected: date,
    id: props.id,
    onChange: onChange,
    className: "form-control",
    minDate: props.minDate,
    disabled: props.disabled,
    required: props.required,
    dateFormat: displayFormat
  })));
};

DatePickerWithLabel.propTypes = {
  handleChange: _propTypes.default.func.isRequired,
  label: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  classes: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  helpText: _propTypes.default.string,
  value: _propTypes.default.string
};
DatePickerWithLabel.defaultProps = {
  classes: "",
  label: "Time picker",
  handleChange: input => console.log("Implement a function to save selection", input),
  required: false,
  disabled: false,
  value: ""
};
var _default = DatePickerWithLabel;
exports.default = _default;