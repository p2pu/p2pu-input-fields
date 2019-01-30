"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRangeslider = _interopRequireDefault(require("react-rangeslider"));

require("react-rangeslider/lib/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RangeSliderWithLabel = function RangeSliderWithLabel(props) {
  var disabledClass = props.disabled ? 'disabled' : '';
  var onChangeFunction = props.disabled ? null : props.handleChange;
  return _react.default.createElement("div", {
    className: "range-slider-with-label label-left ".concat(props.classes, " ").concat(disabledClass)
  }, _react.default.createElement("label", {
    htmlFor: props.name
  }, props.label), _react.default.createElement(_reactRangeslider.default, {
    value: props.value,
    name: props.name,
    min: props.min,
    max: props.max,
    step: props.step,
    onChange: onChangeFunction
  }));
};

var _default = RangeSliderWithLabel;
exports.default = _default;