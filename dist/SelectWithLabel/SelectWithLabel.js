"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireDefault(require("react-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SelectWithLabel = function SelectWithLabel(props) {
  return _react.default.createElement("div", {
    className: "".concat(props.classes)
  }, _react.default.createElement("label", {
    htmlFor: props.name
  }, "".concat(props.label, " ").concat(props.required ? '*' : '')), _react.default.createElement(_reactSelect.default, {
    name: props.name,
    className: props.selectClasses,
    value: props.value,
    options: props.options,
    onChange: props.handleChange,
    onInputChange: props.onInputChange,
    noResultsText: props.noResultsText,
    placeholder: props.placeholder,
    multi: props.multi || false,
    isClearable: props.isClearable,
    theme: function theme(_theme) {
      return _objectSpread({}, _theme, {
        colors: _objectSpread({}, _theme.colors, {
          primary: '#05c6b4',
          primary75: '#D3D8E6',
          primary50: '#e0f7f5',
          primary25: '#F3F4F8'
        })
      });
    }
  }), props.errorMessage && _react.default.createElement("div", {
    className: 'error-message minicaps'
  }, props.errorMessage));
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
  multi: _propTypes.default.bool,
  options: _propTypes.default.array,
  errorMessage: _propTypes.default.string,
  isClearable: _propTypes.default.bool
};
SelectWithLabel.defaultProps = {
  noResultsText: "No results",
  classes: "",
  name: "select-with-label",
  label: "Select one",
  options: [],
  handleChange: function handleChange(selected) {
    return console.log("Implement a function to save selection", selected);
  },
  isClearable: true
};
var _default = SelectWithLabel;
exports.default = _default;