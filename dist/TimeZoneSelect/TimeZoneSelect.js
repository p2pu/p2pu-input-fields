"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _axios = _interopRequireDefault(require("axios"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _timezoneNames = _interopRequireDefault(require("./timezone-names.js"));

var _InputWrapper = _interopRequireDefault(require("../InputWrapper"));

const GEONAMES_ENDPOINT = 'https://secure.geonames.org/timezoneJSON';

class TimeZoneSelect extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "onChange", selected => {
      const timezone = !!selected ? selected.value : null;
      this.props.handleChange({
        [this.props.name]: timezone
      });
      this.setState({
        value: selected
      });
    });
    (0, _defineProperty2.default)(this, "detectTimeZone", () => {
      if (!!this.props.timezone) {
        // use selected timezone
        this.setState({
          value: {
            value: this.props.timezone,
            label: this.props.timezone
          }
        });
      } else if (!!this.props.latitude && !!this.props.longitude) {
        // use selected city to detect timezone
        const url = `${GEONAMES_ENDPOINT}?lat=${this.props.latitude}&lng=${this.props.longitude}&username=p2pu`;

        _axios.default.get(url).then(res => {
          const timezone = res.data.timezoneId;
          this.props.handleChange({
            timezone
          });
          this.setState({
            value: {
              value: timezone,
              label: timezone
            }
          });
        }).catch(err => console.log(err));
      } else {
        // detect timezone from browser
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.props.handleChange({
          timezone
        });
        this.setState({
          value: {
            value: timezone,
            label: timezone
          }
        });
      }
    });
    this.state = {
      value: this.props.timezone
    };
  }

  componentDidMount() {
    this.detectTimeZone();
  }

  render() {
    const timezoneOptions = _timezoneNames.default.map(tz => ({
      value: tz,
      label: tz
    }));

    const {
      label,
      name,
      required,
      errorMessage,
      helpText,
      classes,
      selectClasses,
      isClearable,
      isMulti
    } = this.props;
    const {
      value
    } = this.state;
    return _react.default.createElement(_InputWrapper.default, {
      label: label,
      name: name,
      required: required,
      errorMessage: errorMessage,
      helpText: helpText,
      classes: classes
    }, _react.default.createElement(_reactSelect.default, {
      name: name,
      id: name,
      className: `form-group input-with-label ${selectClasses}`,
      value: value,
      onChange: this.onChange,
      options: timezoneOptions,
      isClearable: isClearable,
      isMulti: isMulti,
      theme: theme => ({ ...theme,
        colors: { ...theme.colors,
          primary: '#05c6b4',
          primary75: '#D3D8E6',
          primary50: '#e0f7f5',
          primary25: '#F3F4F8'
        }
      })
    }));
  }

}

exports.default = TimeZoneSelect;
TimeZoneSelect.propTypes = {
  handleChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  classes: _propTypes.default.string,
  selectClasses: _propTypes.default.string,
  timezone: _propTypes.default.string,
  latitude: _propTypes.default.string,
  longitude: _propTypes.default.string,
  errorMessage: _propTypes.default.string,
  isClearable: _propTypes.default.bool,
  isMulti: _propTypes.default.bool
};
TimeZoneSelect.defaultProps = {
  classes: "",
  selectClasses: "",
  name: "id_timezone",
  handleChange: selected => console.log("Implement a function to save selection", selected),
  isClearable: true,
  isMulti: false
};