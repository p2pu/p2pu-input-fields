import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import Select from 'react-select';
import timezones from './timezone-names.js';
import InputWrapper from '../InputWrapper'

const GEONAMES_ENDPOINT = 'https://secure.geonames.org/timezoneJSON'

export default class TimeZoneSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.timezone };
  }

  componentDidMount() {
    this.detectTimeZone()
  }

  onChange = (selected) => {
    const timezone = !!selected ? selected.value : null;
    this.props.handleChange({ [this.props.name]: timezone });
    this.setState({ value: selected });
  }

  detectTimeZone = () => {
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
    const { label, name, required, errorMessage, helpText, classes, selectClasses, isClearable, isMulti } = this.props
    const { value } = this.state;

    return(
      <InputWrapper
        label={label}
        name={name}
        required={required}
        errorMessage={errorMessage}
        helpText={helpText}
        classes={classes}
      >
        <Select
          name={ name }
          id={ name }
          className={ `form-group input-with-label ${selectClasses}` }
          value={ value }
          onChange={ this.onChange }
          options={timezoneOptions}
          isClearable={ isClearable }
          isMulti={ isMulti }
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
      </InputWrapper>
    )
  }
}

TimeZoneSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
  selectClasses: PropTypes.string,
  timezone: PropTypes.string,
  latitude: PropTypes.string,
  longitude: PropTypes.string,
  errorMessage: PropTypes.string,
  isClearable: PropTypes.bool,
  isMulti: PropTypes.bool,
}

TimeZoneSelect.defaultProps = {
  classes: "",
  selectClasses: "",
  name: "id_timezone",
  handleChange: (selected) => console.log("Implement a function to save selection", selected),
  isClearable: true,
  isMulti: false,
}

