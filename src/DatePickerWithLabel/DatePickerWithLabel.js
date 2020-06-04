import React from 'react';
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import InputWrapper from '../InputWrapper'

import 'react-datepicker/dist/react-datepicker.css';

const saveFormat = 'YYYY-MM-DD'
const displayFormat = 'MMMM d, yyyy'

const DatePickerWithLabel = (props) => {
  const onChange = (value) => {
    const date = !!value ? moment(value, displayFormat).format(saveFormat) : null;
    props.handleChange({ [props.name]: date })
  }

  const date = !!props.value ? moment(props.value, saveFormat).toDate() : new Date();

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
