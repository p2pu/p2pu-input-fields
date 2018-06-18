'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRangeslider = require('react-rangeslider');

var _reactRangeslider2 = _interopRequireDefault(_reactRangeslider);

require('react-rangeslider/lib/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RangeSliderWithLabel = function RangeSliderWithLabel(props) {
  var disabledClass = props.disabled ? 'disabled' : '';
  var onChangeFunction = props.disabled ? null : props.handleChange;

  return _react2.default.createElement(
    'div',
    { className: 'range-slider-with-label label-left ' + props.classes + ' ' + disabledClass },
    _react2.default.createElement(
      'label',
      { htmlFor: props.name },
      props.label
    ),
    _react2.default.createElement(_reactRangeslider2.default, {
      value: props.value,
      name: props.name,
      min: props.min,
      max: props.max,
      step: props.step,
      onChange: onChangeFunction
    })
  );
};

exports.default = RangeSliderWithLabel;