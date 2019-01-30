"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CheckboxWithLabel = function CheckboxWithLabel(props) {
  var onChange = function onChange(e) {
    props.handleChange(_defineProperty({}, props.name, e.currentTarget.checked));
  };

  return _react.default.createElement("div", {
    className: "checkbox-with-label label-right ".concat(props.classes)
  }, _react.default.createElement("input", {
    type: "checkbox",
    name: props.name,
    id: props.id || props.name,
    onChange: onChange,
    checked: props.checked,
    style: {
      marginRight: '10px'
    }
  }), _react.default.createElement("label", {
    htmlFor: props.name
  }, props.label), props.errorMessage && _react.default.createElement("div", {
    className: 'error-message minicaps'
  }, props.errorMessage));
};

var _default = CheckboxWithLabel;
exports.default = _default;