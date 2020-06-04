"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _InputWrapper = _interopRequireDefault(require("../InputWrapper"));

const SelectWithLabel = props => {
  const onChange = selected => {
    const value = selected ? selected.value : null;
    props.handleChange({
      [props.name]: value
    });
  };

  const selectedOption = props.options.find(opt => opt.value === props.value);
  const {
    name,
    label,
    required,
    errorMessage,
    helpText,
    classes,
    selectClasses,
    options,
    onInputChange,
    noResultsText,
    placeholder,
    isMulti,
    isClearable
  } = props;
  return _react.default.createElement(_InputWrapper.default, {
    label: label,
    name: name,
    required: required,
    errorMessage: errorMessage,
    helpText: helpText,
    classes: classes
  }, _react.default.createElement(_reactSelect.default, {
    name: name,
    className: selectClasses,
    value: selectedOption,
    options: options,
    onChange: onChange,
    onInputChange: onInputChange,
    noResultsText: noResultsText,
    placeholder: placeholder,
    isMulti: isMulti,
    isClearable: isClearable,
    theme: theme => ({ ...theme,
      colors: { ...theme.colors,
        primary: '#05c6b4',
        primary75: '#D3D8E6',
        primary50: '#e0f7f5',
        primary25: '#F3F4F8'
      }
    })
  }));
};

SelectWithLabel.propTypes = {
  handleChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  handleInputChange: _propTypes.default.func,
  classes: _propTypes.default.string,
  selectClasses: _propTypes.default.string,
  required: _propTypes.default.bool,
  noResultsText: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  options: _propTypes.default.array,
  errorMessage: _propTypes.default.string,
  isClearable: _propTypes.default.bool,
  isMulti: _propTypes.default.bool
};
SelectWithLabel.defaultProps = {
  noResultsText: "No results",
  classes: "",
  name: "select-with-label",
  label: "Select one",
  options: [],
  handleChange: selected => console.log("Implement a function to save selection", selected),
  isClearable: true,
  isMulti: false
};
var _default = SelectWithLabel;
exports.default = _default;