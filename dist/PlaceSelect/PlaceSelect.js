var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

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

var PlaceSelect = function (_Component) {
  _inherits(PlaceSelect, _Component);

  function PlaceSelect(props) {
    _classCallCheck(this, PlaceSelect);

    var _this = _possibleConstructorReturn(this, (PlaceSelect.__proto__ || Object.getPrototypeOf(PlaceSelect)).call(this, props));

    _this.state = { hits: [], value: null };
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
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!!this.props.place_id) {
        this.fetchPlaceById();
      } else if (this.props.city === 'Kansas City, Missouri, United States of America') {
        this.setState({ value: KANSAS_CITY_OPTION });
      } else if (this.props.city) {
        var value = { label: this.props.city, value: this.props.city };
        this.setState({ value: value });
      }
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(selected) {
      var cityData = {};

      if (selected) {
        cityData = {
          city: selected.value.locale_names.default,
          region: selected.value.administrative ? selected.value.administrative[0] : null,
          country: selected.value.country ? selected.value.country.default : null,
          country_en: selected.value.country ? selected.value.country.en : null,
          latitude: selected.value._geoloc ? selected.value._geoloc.lat : null,
          longitude: selected.value._geoloc ? selected.value._geoloc.lng : null,
          place_id: selected.value.objectID ? selected.value.objectID : null
        };
      }

      this.props.handleSelect(cityData);
      this.setState({ value: selected });
    }
  }, {
    key: '_searchPlaces',
    value: function _searchPlaces(query) {
      var _this2 = this;

      var url = ALGOLIA_ENDPOINT + '/query/';
      var data = {
        "type": "city",
        "hitsPerPage": "10",
        "query": query
      };
      var method = 'post';

      return axios({
        data: data,
        url: url,
        method: method
      }).then(function (res) {
        var options = res.data.hits.map(function (place) {
          return _this2.generateCityOption(place);
        });
        // Kansas City, MO is missing from the Algolia places API
        // so we're manually adding it in
        // TODO: don't do this
        if (query.toLowerCase().includes('kansas')) {
          options.unshift(KANSAS_CITY_OPTION);
        }
        return { options: options };
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: '_fetchPlaceById',
    value: function _fetchPlaceById() {
      var _this3 = this;

      var url = ALGOLIA_ENDPOINT + '/' + this.props.place_id;

      axios.get(url).then(function (res) {
        var value = _this3.generateCityOption(res.data);
        _this3.setState({ value: value });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: '_generateCityOption',
    value: function _generateCityOption(place) {
      return {
        label: place.locale_names.default[0] + ', ' + place.administrative[0] + ', ' + place.country.default,
        value: place
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var options = this.state.hits.map(function (place) {
        return _this4.generateCityOption(place);
      });

      return React.createElement(
        'div',
        null,
        React.createElement(Select.Async, {
          name: this.props.name,
          className: 'city-select ' + this.props.classes,
          value: this.state.value,
          options: options,
          onChange: this.handleChange,
          noResultsText: 'No results for this city',
          placeholder: 'Start typing a city name...',
          loadOptions: this.searchPlaces
        }),
        this.props.errorMessage && React.createElement(
          'div',
          { className: 'error-message minicaps' },
          this.props.errorMessage
        )
      );
    }
  }]);

  return PlaceSelect;
}(Component);

export default PlaceSelect;