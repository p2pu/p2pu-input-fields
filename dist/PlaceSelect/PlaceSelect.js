import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { compact, uniqBy, sortBy } from 'lodash';

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
  babelHelpers.inherits(PlaceSelect, _Component);

  function PlaceSelect(props) {
    babelHelpers.classCallCheck(this, PlaceSelect);

    var _this = babelHelpers.possibleConstructorReturn(this, (PlaceSelect.__proto__ || Object.getPrototypeOf(PlaceSelect)).call(this, props));

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

  babelHelpers.createClass(PlaceSelect, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!!this.props.place_id) {
        this.fetchPlaceById();
      } else if (this.props.city === 'Kansas City') {
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
          city: selected.value.locale_names ? selected.value.locale_names.default[0] : selected.value,
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
        'type': 'city',
        'hitsPerPage': '10',
        'query': query
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
        React.createElement(Select.AsyncCreatable, {
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