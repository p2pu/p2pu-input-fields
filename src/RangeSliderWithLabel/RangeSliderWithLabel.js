import React from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import './rangeslider.scss'

const RangeSliderWithLabel = (props) => {
  const disabledClass = props.disabled ? 'disabled' : '';

  const onChange = value => {
    if (props.disabled) return null;
    props.handleChange({ [props.name]: value })
  }

  return (
    <div className={`range-slider-with-label label-left ${props.classes} ${disabledClass}`} >
      <label htmlFor={props.name}>{props.label}</label>
      <Slider
        value={props.value}
        name={props.name}
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={onChange}
      />
    </div>
  )
}

export default RangeSliderWithLabel;