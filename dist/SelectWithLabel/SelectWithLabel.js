"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

require("react-select/dist/react-select.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    onChange: props.onChange,
    onInputChange: props.onInputChange,
    noResultsText: props.noResultsText,
    placeholder: props.placeholder,
    multi: props.multi || false
  }), props.errorMessage && _react.default.createElement("div", {
    className: 'error-message minicaps'
  }, props.errorMessage));
};

var _default = SelectWithLabel;
exports.default = _default;