import React from 'react';
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import InputWrapper from '../InputWrapper'

import 'react-datepicker/dist/react-datepicker.css';

const TimePickerWithLabel = (props) => {
  const saveFormat = 'HH:mm';
  const displayFormat = 'h:mm a';

  const onChange = (value) => {
    const time = !!value ? moment(value).format(saveFormat) : null;
    props.handleChange({ [props.name]: time })
  }

  const time = !!props.value ? moment(props.value, displayFormat).toDate() : new Date();

  return(
    <InputWrapper
      label={props.label}
      name={props.name}
      required={props.required}
      errorMessage={props.errorMessage}
      className="timpickerbaby"
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
