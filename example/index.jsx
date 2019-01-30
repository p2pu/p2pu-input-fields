import React from 'react';
import ReactDOM from 'react-dom'

import TimePickerWithLabel from 'TimePickerWithLabel'
import DatePickerWithLabel from 'DatePickerWithLabel'


class DayTimeSection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      start_date: new Date(2019,1,4),
      meeting_time: '12:00'
    }
  }

  render(props){
    return (
      <div>
        <DatePickerWithLabel
          label={'What is the date of the first learning circle?'}
          value={this.state.start_date}
          placeholder={'Eg. 6 January, 2018'}
          handleChange={change => this.setState(change)}
          minDate={new Date(2019,1,3)}
          name={'start_date'}
          id={'id_start_date'}
          type={'date'}
          required={true}
        />
        <TimePickerWithLabel
          label={'What time will your learning circle meet each week?'}
          open={true}
          handleChange={change => this.setState(change)}
          name={'meeting_time'}
          id={'id_meeting_time'}
          value={this.state.meeting_time}
          required={true}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <DayTimeSection/>,
  document.querySelector('.reactRoot')
);
