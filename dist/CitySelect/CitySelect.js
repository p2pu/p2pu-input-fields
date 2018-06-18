'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _jsonp = require('jsonp');

var _jsonp2 = _interopRequireDefault(_jsonp);

require('react-select/dist/react-select.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CitySelect = function (_Component) {
  _inherits(CitySelect, _Component);

  function CitySelect(props) {
    _classCallCheck(this, CitySelect);

    var _this = _possibleConstructorReturn(this, (CitySelect.__proto__ || Object.getPrototypeOf(CitySelect)).call(this, props));

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

  _createClass(CitySelect, [{
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
      (0, _jsonp2.default)(url, null, function (err, res) {
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

      cities = (0, _lodash.compact)(cities);
      cities = (0, _lodash.uniqBy)(cities, 'value');
      cities = (0, _lodash.sortBy)(cities, 'label');

      this.setState({ cities: cities });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactSelect2.default, {
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
}(_react.Component);

exports.default = CitySelect;


CitySelect.propTypes = {
  handleSelect: _propTypes2.default.func.isRequired,
  handleInputChange: _propTypes2.default.func,
  name: _propTypes2.default.string.isRequired,
  classes: _propTypes2.default.string
};