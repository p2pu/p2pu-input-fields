"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TextareaWithLabel = function TextareaWithLabel(props) {
  var onChange = function onChange(e) {
    props.handleChange(_defineProperty({}, props.name, e.currentTarget.value));
  };

  return _react.default.createElement("div", {
    className: "input-with-label form-group ".concat(props.classes)
  }, _react.default.createElement("label", {
    htmlFor: props.name
  }, "".concat(props.label, " ").concat(props.required ? '*' : '')), _react.default.createElement("textarea", {
    className: 'form-control',
    type: props.type || 'text',
    name: props.name,
    id: props.id,
    onChange: onChange,
    value: props.value,
    placeholder: props.placeholder
  }), props.errorMessage && _react.default.createElement("div", {
    className: 'error-message minicaps'
  }, props.errorMessage));
};

var _default = TextareaWithLabel;
exports.default = _default;