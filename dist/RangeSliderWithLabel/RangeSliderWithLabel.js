"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRangeslider = _interopRequireDefault(require("react-rangeslider"));

var _InputWrapper = _interopRequireDefault(require("../InputWrapper"));

require("react-rangeslider/lib/index.css");

require("./rangeslider.scss");

const RangeSliderWithLabel = props => {
  const disabledClass = props.disabled ? 'disabled' : '';

  const onChange = value => {
    if (props.disabled) return null;
    props.handleChange({
      [props.name]: value
    });
  };

  const {
    label,
    name,
    required,
    errorMessage,
    helpText,
    classes,
    value,
    min,
    max,
    step
  } = props;
  return /*#__PURE__*/_react.default.createElement(_InputWrapper.default, {
    label: label,
    name: name,
    required: required,
    errorMessage: errorMessage,
    helpText: helpText,
    classes: classes
  }, /*#__PURE__*/_react.default.createElement(_reactRangeslider.default, {
    value: value,
    name: name,
    min: min,
    max: max,
    step: step,
    onChange: onChange
  }));
};

RangeSliderWithLabel.propTypes = {
  handleChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.number,
  min: _propTypes.default.number,
  max: _propTypes.default.number,
  step: _propTypes.default.number,
  classes: _propTypes.default.string,
  noResultsText: _propTypes.default.string,
  helpText: _propTypes.default.string,
  errorMessage: _propTypes.default.string
};
RangeSliderWithLabel.defaultProps = {
  noResultsText: "No results for this city",
  placeholder: "Start typing a city name...",
  classes: "",
  selectClasses: "",
  handleChange: selected => console.log("Implement a function to save selection", selected),
  isClearable: true,
  isMulti: false
};
var _default = RangeSliderWithLabel;
exports.default = _default;