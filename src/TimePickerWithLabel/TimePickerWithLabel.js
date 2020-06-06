import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import InputWrapper from '../InputWrapper'

import 'react-datepicker/dist/react-datepicker.css';

const saveFormat = 'HH:mm';
const displayFormat = 'h:mm a';

const formatTimeString = date => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
}

const generateDateTime = value => {
  const [hours, minutes] = value.split(':')
  const date = new Date()
  date.setHours(hours)
  date.setMinutes(minutes)
  return date
}

const TimePickerWithLabel = (props) => {
  const onChange = (value) => {
    const time = !!value ? formatTimeString(value) : null;
    props.handleChange({ [props.name]: time })
  }

  const time = !!props.value ? generateDateTime(props.value) : new Date();

  return(
    <InputWrapper
      label={props.label}
      name={props.name}
      required={props.required}
      errorMessage={props.errorMessage}
      classes={props.classes}
    >
      <div>
        <DatePicker
          selected={time}
          onChange={onChange}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          timeCaption="Time"
          dateFormat={displayFormat}
          name={props.name}
          id={props.id}
          className="form-control"
        />
      </div>
    </InputWrapper>
  )
}

TimePickerWithLabel.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  value: PropTypes.string,
}

TimePickerWithLabel.defaultProps = {
  classes: "",
  label: "Time picker",
  handleChange: (input) => console.log("Implement a function to save selection", input),
  required: false,
  disabled: false,
  errorMessage: null,
  value: "",
}

export default TimePickerWithLabel;
