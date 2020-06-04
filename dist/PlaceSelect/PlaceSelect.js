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

var _async = _interopRequireDefault(require("react-select/async"));

var _InputWrapper = _interopRequireDefault(require("../InputWrapper"));

const ALGOLIA_ENDPOINT = 'https://places-dsn.algolia.net/1/places';
const KANSAS_CITY_OPTION = {
  label: 'Kansas City, Missouri, United States of America',
  value: {
    administrative: ['Missouri'],
    country: {
      default: 'United States of America'
    },
    locale_names: {
      default: ['Kansas City']
    },
    // from https://tools.wmflabs.org
    _geoloc: {
      lat: 39.099722,
      lng: -94.578333
    }
  }
};

class PlaceSelect extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "handleChange", selected => {
      console.log(selected);
      let cityData = {};

      if (selected) {
        const country = selected.value.country ? selected.value.country.default : null;
        const country_en = selected.value.country && selected.value.country.en ? selected.value.country.en : country;
        cityData = {
          city: selected.value.locale_names.default[0],
          region: selected.value.administrative ? selected.value.administrative[0] : null,
          country: country,
          country_en: country_en,
          latitude: selected.value._geoloc ? selected.value._geoloc.lat : null,
          longitude: selected.value._geoloc ? selected.value._geoloc.lng : null,
          place_id: selected.value.objectID ? selected.value.objectID : null
        };
      }

      this.props.handleChange(cityData);
      this.setState({
        value: selected
      });
    });
    (0, _defineProperty2.default)(this, "searchPlaces", query => {
      const url = `${ALGOLIA_ENDPOINT}/query/`;
      const data = {
        "type": "city",
        "hitsPerPage": "10",
        "query": query
      };
      const method = 'post';
      return (0, _axios.default)({
        data,
        url,
        method
      }).then(res => {
        let options = res.data.hits.map(place => this.generateCityOption(place)); // Kansas City, MO is missing from the Algolia places API
        // so we're manually adding it in
        // TODO: don't do this

        if (query.toLowerCase().includes('kansas')) {
          options.unshift(KANSAS_CITY_OPTION);
        }

        return options;
      }).catch(err => {
        console.log(err);
      });
    });
    (0, _defineProperty2.default)(this, "fetchPlaceById", () => {
      const url = `${ALGOLIA_ENDPOINT}/${this.props.place_id}`;

      _axios.default.get(url).then(res => {
        const value = this.generateCityOption(res.data);
        this.setState({
          value
        });
      }).catch(err => {
        console.log(err);
      });
    });
    (0, _defineProperty2.default)(this, "generateCityOption", place => {
      return {
        label: `${place.locale_names.default[0]}, ${place.administrative[0]}, ${place.country.default}`,
        value: place
      };
    });
    this.state = {
      hits: [],
      value: null
    };
  }

  componentDidMount() {
    if (!!this.props.place_id) {
      this.fetchPlaceById();
    } else if (this.props.city === 'Kansas City, Missouri, United States of America') {
      this.setState({
        value: KANSAS_CITY_OPTION
      });
    } else if (this.props.city) {
      const value = {
        label: this.props.city,
        value: this.props.city
      };
      this.setState({
        value
      });
    }
  }

  render() {
    const options = this.state.hits.map(place => this.generateCityOption(place));
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
      value
    } = this.state;
    return _react.default.createElement(_InputWrapper.default, {
      label: label,
      name: name,
      required: required,
      errorMessage: errorMessage,
      helpText: helpText,
      classes: classes
    }, _react.default.createElement(_async.default, {
      name: name,
      className: `city-select ${selectClasses}`,
      value: value,
      options: options,
      onChange: this.handleChange,
      onInputChange: handleInputChange,
      noResultsText: noResultsText,
      placeholder: placeholder,
      loadOptions: this.searchPlaces,
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

exports.default = PlaceSelect;
PlaceSelect.propTypes = {
  handleChange: _propTypes.default.func.isRequired,
  handleInputChange: _propTypes.default.func,
  name: _propTypes.default.string.isRequired,
  classes: _propTypes.default.string,
  noResultsText: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  place_id: _propTypes.default.string,
  city: _propTypes.default.string,
  errorMessage: _propTypes.default.string,
  isClearable: _propTypes.default.bool,
  isMulti: _propTypes.default.bool
};
PlaceSelect.defaultProps = {
  noResultsText: "No results for this city",
  placeholder: "Start typing a city name...",
  classes: "",
  selectClasses: "",
  name: "select-place",
  handleChange: selected => console.log("Implement a function to save selection", selected),
  isClearable: true,
  isMulti: false
};