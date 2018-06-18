import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compact, uniqBy, sortBy } from 'lodash';
import Select from 'react-select';
import jsonp from 'jsonp';

import 'react-select/dist/react-select.css';

var CitySelect = function (_Component) {
  babelHelpers.inherits(CitySelect, _Component);

  function CitySelect(props) {
    babelHelpers.classCallCheck(this, CitySelect);

    var _this = babelHelpers.possibleConstructorReturn(this, (CitySelect.__proto__ || Object.getPrototypeOf(CitySelect)).call(this, props));

    _this.state = {};
    _this.handleChange = function (s) {
      return _this._handleChange(s);
    };
    _this.handleInputChange = function (s) {
      return _this._handleInputChange(s);
    };
    _this.populateCities = function () {
      return _this._populateCities();
    };
    _this.convertCityToSelectOption = function (city) {
      return _this._convertCityToSelectOption(city);
    };
    _this.filterCitiesFromResults = function (r) {
      return _this._filterCitiesFromResults(r);
    };
    _this.populateCities();
    return _this;
  }

  babelHelpers.createClass(CitySelect, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props !== nextProps) {
        var value = !nextProps.value ? this.state.value : this.convertCityToSelectOption(nextProps.value);
        this.setState({ value: value });
      }
    }
  }, {
    key: '_convertCityToSelectOption',
    value: function _convertCityToSelectOption(city) {
      return {
        label: city,
        value: city.split(',')[0].toLowerCase().replace(/ /, '_')
      };
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(selected) {
      var query = selected ? selected.label : selected;

      this.props.handleSelect(query);
      this.setState({ value: selected });
    }
  }, {
    key: '_populateCities',
    value: function _populateCities() {
      var _this2 = this;

      var url = 'https://learningcircles.p2pu.org/api/learningcircles/?active=true&signup=open';
      jsonp(url, null, function (err, res) {
        if (err) {
          console.log(err);
        } else {
          _this2.filterCitiesFromResults(res.items);
        }
      });
    }
  }, {
    key: '_filterCitiesFromResults',
    value: function _filterCitiesFromResults(courses) {
      var _this3 = this;

      var cities = courses.map(function (course) {
        if (course.city.length > 0) {
          return _this3.convertCityToSelectOption(course.city);
        }
      });

      cities = compact(cities);
      cities = uniqBy(cities, 'value');
      cities = sortBy(cities, 'label');

      this.setState({ cities: cities });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(Select, {
        name: this.props.name,
        className: 'city-select ' + this.props.classes,
        value: this.state.value,
        options: this.state.cities,
        onChange: this.handleChange,
        onInputChange: this.props.handleInputChange,
        noResultsText: 'No results for this city',
        placeholder: 'Start typing a city name...'
      });
    }
  }]);
  return CitySelect;
}(Component);

export default CitySelect;


CitySelect.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  classes: PropTypes.string
};