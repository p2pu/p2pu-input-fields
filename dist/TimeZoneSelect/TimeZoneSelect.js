import React, { Component } from 'react';
import { compact, uniqBy, sortBy } from 'lodash';
import axios from 'axios';
import Select from 'react-select';
import timezones from './timezone-names.js';

import 'react-select/dist/react-select.css';

var GEONAMES_ENDPOINT = 'https://secure.geonames.org/timezoneJSON';

var TimeZoneSelect = function (_Component) {
  babelHelpers.inherits(TimeZoneSelect, _Component);

  function TimeZoneSelect(props) {
    babelHelpers.classCallCheck(this, TimeZoneSelect);

    var _this = babelHelpers.possibleConstructorReturn(this, (TimeZoneSelect.__proto__ || Object.getPrototypeOf(TimeZoneSelect)).call(this, props));

    _this.state = { value: _this.props.timezone };
    _this.onChange = function (s) {
      return _this._onChange(s);
    };
    _this.detectTimeZone = function () {
      return _this._detectTimeZone();
    };
    return _this;
  }

  babelHelpers.createClass(TimeZoneSelect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.detectTimeZone();
    }
  }, {
    key: '_onChange',
    value: function _onChange(selected) {
      var timezone = !!selected ? selected.value : null;
      this.props.handleChange({ timezone: timezone });
      this.setState({ value: selected });
    }
  }, {
    key: '_detectTimeZone',
    value: function _detectTimeZone() {
      var _this2 = this;

      if (!!this.props.timezone) {
        // use selected timezone
        this.setState({ value: { value: this.props.timezone, label: this.props.timezone } });
      } else if (!!this.props.latitude && !!this.props.longitude) {
        // use selected city to detect timezone
        var url = GEONAMES_ENDPOINT + '?lat=' + this.props.latitude + '&lng=' + this.props.longitude + '&username=p2pu';
        axios.get(url).then(function (res) {
          var timezone = res.data.timezoneId;
          _this2.props.handleChange({ timezone: timezone });
          _this2.setState({ value: { value: timezone, label: timezone } });
        }).catch(function (err) {
          return console.log(err);
        });
      } else {
        // detect timezone from browser
        var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.props.handleChange({ timezone: timezone });
        this.setState({ value: { value: timezone, label: timezone } });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _React$createElement;

      var timezoneOptions = timezones.map(function (tz) {
        return { value: tz, label: tz };
      });

      return React.createElement(
        'div',
        null,
        React.createElement(Select, (_React$createElement = {
          name: this.props.name,
          className: 'form-group input-with-label',
          value: this.state.value,
          onChange: this.onChange,
          options: timezoneOptions
        }, babelHelpers.defineProperty(_React$createElement, 'name', 'timezone'), babelHelpers.defineProperty(_React$createElement, 'id', 'id_timezone'), _React$createElement)),
        this.props.errorMessage && React.createElement(
          'div',
          { className: 'error-message minicaps' },
          this.props.errorMessage
        )
      );
    }
  }]);
  return TimeZoneSelect;
}(Component);

export default TimeZoneSelect;