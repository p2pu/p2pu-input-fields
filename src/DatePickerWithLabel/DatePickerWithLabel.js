import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import InputWrapper from '../InputWrapper'

import 'react-datepicker/dist/react-datepicker.css'

const displayFormat = 'MMMM d, yyyy'

const formatDateString = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${year}-${month}-${day}`
}

const DatePickerWithLabel = (props) => {
  const onChange = (value) => {
    const date = !!value ? formatDateString(value) : null;
    props.handleChange({ [props.name]: date })
  }

  const date = !!props.value ? Date.parse(props.value) : new Date();

  return(
    <InputWrapper
      label={props.label}
      name={props.name}
      required={props.required}
      errorMessage={props.errorMessage}
      helpText={props.helpText}
      classes={props.classes}
    >
      <div>
        <DatePicker
          selected={date}
          id={props.id}
          onChange={onChange}
          className="form-control"
          minDate={props.minDate}
          disabled={props.disabled}
          required={props.required}
          dateFormat={displayFormat}
        />
      </div>
    </InputWrapper>
  )
}

DatePickerWithLabel.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  helpText: PropTypes.string,
  value: PropTypes.string,
}

DatePickerWithLabel.defaultProps = {
  classes: "",
  label: "Time picker",
  handleChange: (input) => console.log("Implement a function to save selection", input),
  required: false,
  disabled: false,
  value: "",
}

export default DatePickerWithLabel;
