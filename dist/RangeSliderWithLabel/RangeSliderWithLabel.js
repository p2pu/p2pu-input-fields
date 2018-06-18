import React from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

var RangeSliderWithLabel = function RangeSliderWithLabel(props) {
  var disabledClass = props.disabled ? 'disabled' : '';
  var onChangeFunction = props.disabled ? null : props.handleChange;

  return React.createElement(
    'div',
    { className: 'range-slider-with-label label-left ' + props.classes + ' ' + disabledClass },
    React.createElement(
      'label',
      { htmlFor: props.name },
      props.label
    ),
    React.createElement(Slider, {
      value: props.value,
      name: props.name,
      min: props.min,
      max: props.max,
      step: props.step,
      onChange: onChangeFunction
    })
  );
};

export default RangeSliderWithLabel;