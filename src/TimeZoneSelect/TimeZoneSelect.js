import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import Select from 'react-select';
import timezones from './timezone-names.js';

const GEONAMES_ENDPOINT = 'https://secure.geonames.org/timezoneJSON'

export default class TimeZoneSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.timezone };
    this.onChange = (s) => this._onChange(s);
    this.detectTimeZone = () => this._detectTimeZone();
  }

  componentDidMount() {
    this.detectTimeZone()
  }

  _onChange(selected) {
    const timezone = !!selected ? selected.value : null;
    this.props.handleChange({ timezone });
    this.setState({ value: selected });
  }

  _detectTimeZone() {
    if (!!this.props.timezone) {
      // use selected timezone
      this.setState({ value: { value: this.props.timezone, label: this.props.timezone } })
    } else if (!!this.props.latitude && !!this.props.longitude) {
      // use selected city to detect timezone
      const url = `${GEONAMES_ENDPOINT}?lat=${this.props.latitude}&lng=${this.props.longitude}&username=p2pu`;
      axios.get(url).then(res => {
        const timezone = res.data.timezoneId;
        this.props.handleChange({ timezone })
        this.setState({ value: { value: timezone, label: timezone } })
      }).catch(err => console.log(err))
    } else {
      // detect timezone from browser
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      this.props.handleChange({ timezone })
      this.setState({ value: { value: timezone, label: timezone } })
    }
  }


  render() {
    const timezoneOptions = timezones.map((tz) => ({value: tz, label: tz }))

    return(
      <div className={`${this.props.classes}`}>
        { this.props.label && <label htmlFor={this.props.name}>{`${this.props.label} ${this.props.required ? '*' : ''}`}</label> }
        <Select
          name={ this.props.name }
          className={ `form-group input-with-label ${this.props.selectClasses}` }
          value={ this.state.value }
          onChange={ this.onChange }
          options={timezoneOptions}
          name={'timezone'}
          id={'id_timezone'}
          isClearable={ this.props.isClearable }
          theme={theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: '#05c6b4',
              primary75: '#D3D8E6',
              primary50: '#e0f7f5',
              primary25: '#F3F4F8'
            },
          })}
        />
        {
          this.props.errorMessage &&
          <div className="error-message minicaps">{this.props.errorMessage}</div>
        }
      </div>
    )
  }
}

TimeZoneSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
  timezone: PropTypes.string,
  latitude: PropTypes.string,
  longitude: PropTypes.string,
  errorMessage: PropTypes.string,
  isClearable: PropTypes.bool,
}

TimeZoneSelect.defaultProps = {
  classes: "",
  name: "select-timezone",
  handleChange: (selected) => console.log("Implement a function to save selection", selected),
  isClearable: true,
}

