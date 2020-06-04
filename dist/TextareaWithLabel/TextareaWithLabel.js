"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputWrapper = _interopRequireDefault(require("../InputWrapper"));

const TextareaWithLabel = props => {
  const onChange = e => {
    props.handleChange({
      [props.name]: e.currentTarget.value
    });
  };

  return _react.default.createElement(_InputWrapper.default, {
    label: props.label,
    name: props.name,
    required: props.required,
    errorMessage: props.errorMessage,
    helpText: props.helpText,
    classes: props.classes
  }, _react.default.createElement("textarea", {
    value: props.value,
    onChange: onChange,
    placeholder: props.placeholder,
    disabled: props.disabled,
    className: "form-control"
  }));
};

TextareaWithLabel.defaultProps = {
  type: 'text',
  value: "",
  required: false,
  disabled: false,
  label: 'Textarea input',
  classes: '',
  handleChange: input => console.log("Implement a function to save input", input)
};
TextareaWithLabel.propTypes = {
  handleChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  type: _propTypes.default.string,
  value: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  label: _propTypes.default.string,
  classes: _propTypes.default.string
};
var _default = TextareaWithLabel;
exports.default = _default;