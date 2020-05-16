"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _reactSelect = _interopRequireDefault(require("react-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ALGOLIA_ENDPOINT = 'https://places-dsn.algolia.net/1/places';
var KANSAS_CITY_OPTION = {
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

var PlaceSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(PlaceSelect, _Component);

  function PlaceSelect(props) {
    var _this;

    _classCallCheck(this, PlaceSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PlaceSelect).call(this, props));
    _this.state = {
      hits: [],
      value: null
    };

    _this.handleChange = function (s) {
      return _this._handleChange(s);
    };

    _this.searchPlaces = function (query) {
      return _this._searchPlaces(query);
    };

    _this.fetchPlaceById = function () {
      return _this._fetchPlaceById();
    };

    _this.generateCityOption = function (place) {
      return _this._generateCityOption(place);
    };

    return _this;
  }

  _createClass(PlaceSelect, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!!this.props.place_id) {
        this.fetchPlaceById();
      } else if (this.props.city === 'Kansas City, Missouri, United States of America') {
        this.setState({
          value: KANSAS_CITY_OPTION
        });
      } else if (this.props.city) {
        var value = {
          label: this.props.city,
          value: this.props.city
        };
        this.setState({
          value: value
        });
      }
    }
  }, {
    key: "_handleChange",
    value: function _handleChange(selected) {
      console.log(selected);
      var cityData = {};

      if (selected) {
        var country = selected.value.country ? selected.value.country.default : null;
        var country_en = selected.value.country && selected.value.country.en ? selected.value.country.en : country;
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

      this.props.handleSelect(cityData);
      this.setState({
        value: selected
      });
    }
  }, {
    key: "_searchPlaces",
    value: function _searchPlaces(query) {
      var _this2 = this;

      var url = "".concat(ALGOLIA_ENDPOINT, "/query/");
      var data = {
        "type": "city",
        "hitsPerPage": "10",
        "query": query
      };
      var method = 'post';
      return (0, _axios.default)({
        data: data,
        url: url,
        method: method
      }).then(function (res) {
        var options = res.data.hits.map(function (place) {
          return _this2.generateCityOption(place);
        }); // Kansas City, MO is missing from the Algolia places API
        // so we're manually adding it in
        // TODO: don't do this

        if (query.toLowerCase().includes('kansas')) {
          options.unshift(KANSAS_CITY_OPTION);
        }

        return {
          options: options
        };
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "_fetchPlaceById",
    value: function _fetchPlaceById() {
      var _this3 = this;

      var url = "".concat(ALGOLIA_ENDPOINT, "/").concat(this.props.place_id);

      _axios.default.get(url).then(function (res) {
        var value = _this3.generateCityOption(res.data);

        _this3.setState({
          value: value
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "_generateCityOption",
    value: function _generateCityOption(place) {
      return {
        label: "".concat(place.locale_names.default[0], ", ").concat(place.administrative[0], ", ").concat(place.country.default),
        value: place
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var options = this.state.hits.map(function (place) {
        return _this4.generateCityOption(place);
      });
      return _react.default.createElement("div", null, _react.default.createElement(_reactSelect.default.Async, {
        name: this.props.name,
        className: "city-select ".concat(this.props.classes),
        value: this.state.value,
        options: options,
        onChange: this.handleChange,
        noResultsText: this.props.noResultsText || 'No results for this city',
        placeholder: this.props.placeholder || 'Start typing a city name...',
        loadOptions: this.searchPlaces
      }), this.props.errorMessage && _react.default.createElement("div", {
        className: "error-message minicaps"
      }, this.props.errorMessage));
    }
  }]);

  return PlaceSelect;
}(_react.Component);

exports.default = PlaceSelect;