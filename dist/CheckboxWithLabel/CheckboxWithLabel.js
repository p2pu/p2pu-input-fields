"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputWrapper = _interopRequireDefault(require("../InputWrapper"));

const CheckboxWithLabel = props => {
  const onChange = e => {
    props.handleChange({
      [props.name]: e.currentTarget.checked
    });
  };

  return _react.default.createElement(_InputWrapper.default, {
    label: props.label,
    name: props.name,
    required: props.required,
    errorMessage: props.errorMessage,
    helpText: props.helpText,
    classes: props.classes,
    labelPosition: props.labelPosition
  }, _react.default.createElement("input", {
    type: "checkbox",
    id: props.id,
    checked: props.checked,
    disabled: props.disabled,
    onChange: onChange
  }));
};

CheckboxWithLabel.propTypes = {
  handleChange: _propTypes.default.func.isRequired,
  label: _propTypes.default.string.isRequired,
  labelPosition: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  classes: _propTypes.default.string,
  checked: _propTypes.default.bool,
  required: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  helpText: _propTypes.default.string
};
CheckboxWithLabel.defaultProps = {
  classes: "",
  label: "Checkbox label",
  labelPosition: "left",
  handleChange: input => console.log("Implement a function to save selection", input)
};
var _default = CheckboxWithLabel;
exports.default = _default;