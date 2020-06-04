import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-rangeslider'
import InputWrapper from '../InputWrapper'
import 'react-rangeslider/lib/index.css'
import './rangeslider.scss'

const RangeSliderWithLabel = (props) => {
  const disabledClass = props.disabled ? 'disabled' : '';

  const onChange = value => {
    if (props.disabled) return null;
    props.handleChange({ [props.name]: value })
  }

  const { label, name, required, errorMessage, helpText, classes, value, min, max, step } = props;

  return (
    <InputWrapper
      label={label}
      name={name}
      required={required}
      errorMessage={errorMessage}
      helpText={helpText}
      classes={classes}
    >
      <Slider
        value={value}
        name={name}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      />
    </InputWrapper>
  )
}

RangeSliderWithLabel.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  classes: PropTypes.string,
  noResultsText: PropTypes.string,
  helpText: PropTypes.string,
  errorMessage: PropTypes.string,
}

RangeSliderWithLabel.defaultProps = {
  noResultsText: "No results for this city",
  placeholder: "Start typing a city name...",
  classes: "",
  selectClasses: "",
  handleChange: (selected) => console.log("Implement a function to save selection", selected),
  isClearable: true,
  isMulti: false,
}

export default RangeSliderWithLabel;