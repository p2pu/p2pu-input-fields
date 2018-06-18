import React from 'react';
import TimePicker from 'rc-time-picker';
import moment from 'moment';

import 'rc-time-picker/assets/index.css';

var TimePickerWithLabel = function TimePickerWithLabel(props) {
  var saveFormat = 'HH:mm';
  var displayFormat = 'h:mm a';

  var onChange = function onChange(value) {
    var time = !!value ? value.format(saveFormat) : null;
    props.handleChange(babelHelpers.defineProperty({}, props.name, time));
  };

  var time = !!props.value ? moment(props.value, saveFormat) : null;

  return React.createElement(
    'div',
    { className: 'input-with-label form-group ' + props.classes },
    React.createElement(
      'label',
      { htmlFor: props.name },
      props.label + ' ' + (props.required ? '*' : '')
    ),
    React.createElement(TimePicker, {
      showSecond: false,
      use12Hours: true,
      value: time,
      format: displayFormat,
      name: props.name,
      id: props.id,
      onChange: onChange,
      minuteStep: 15,
      allowEmpty: true
    }),
    props.errorMessage && React.createElement(
      'div',
      { className: 'error-message minicaps' },
      props.errorMessage
    )
  );
};

export default TimePickerWithLabel;