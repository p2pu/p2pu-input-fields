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

var _reactSelect = _interopRequireDefault(require("react-select"));

var _jsonp = _interopRequireDefault(require("jsonp"));

var _InputWrapper = _interopRequireDefault(require("../InputWrapper"));

class CitySelect extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "convertCityToSelectOption", city => {
      return {
        label: city,
        value: city.split(',')[0].toLowerCase().replace(/ /, '_')
      };
    });
    (0, _defineProperty2.default)(this, "onChange", selected => {
      const query = selected ? selected.label : selected;
      this.props.handleChange({
        [this.props.name]: query
      });
      this.setState({
        value: selected
      });
    });
    (0, _defineProperty2.default)(this, "populateCities", () => {
      const url = 'https://learningcircles.p2pu.org/api/learningcircles/?active=true&signup=open';
      (0, _jsonp.default)(url, null, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          this.filterCitiesFromResults(res.items);
        }
      });
    });
    (0, _defineProperty2.default)(this, "filterCitiesFromResults", courses => {
      let cities = courses.map(course => {
        if (course.city.length > 0) {
          return this.convertCityToSelectOption(course.city);
        }
      });
      cities = cities.filter(city => city);

      const uniqBy = (arr, fn) => [...new Map(arr.reverse().map(x => [typeof fn === 'function' ? fn(x) : x[fn], x])).values()];

      cities = uniqBy(cities, el => el.value);
      cities.sort(el => el.label);
      this.setState({
        cities
      });
    });
    this.state = {};
    this.populateCities();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const value = !this.props.value ? this.state.value : this.convertCityToSelectOption(this.props.value);
      this.setState({
        value
      });
    }
  }

  render() {
    const {
      label,
      name,
      required,
      errorMessage,
      helpText,
      classes,
      selectClasses,
      handleInputChange,
      noResultsText,
      placeholder,
      isClearable,
      isMulti
    } = this.props;
    const {
      value,
      cities
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
      className: `city-select ${selectClasses}`,
      value: value,
      options: cities,
      onChange: this.onChange,
      onInputChange: handleInputChange,
      noResultsText: noResultsText,
      placeholder: placeholder,
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

exports.default = CitySelect;
CitySelect.propTypes = {
  handleChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  handleInputChange: _propTypes.default.func,
  classes: _propTypes.default.string,
  noResultsText: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  helpText: _propTypes.default.string,
  errorMessage: _propTypes.default.string,
  isClearable: _propTypes.default.bool,
  isMulti: _propTypes.default.bool
};
CitySelect.defaultProps = {
  noResultsText: "No results for this city",
  placeholder: "Start typing a city name...",
  classes: "",
  name: "select-city",
  handleChange: selected => console.log("Implement a function to save selection", selected),
  isClearable: true,
  isMulti: false
};