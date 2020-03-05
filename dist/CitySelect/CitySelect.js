"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _jsonp = _interopRequireDefault(require("jsonp"));

require("react-select/dist/react-select.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CitySelect =
/*#__PURE__*/
function (_Component) {
  _inherits(CitySelect, _Component);

  function CitySelect(props) {
    var _this;

    _classCallCheck(this, CitySelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CitySelect).call(this, props));
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
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props !== nextProps) {
        var value = !nextProps.value ? this.state.value : this.convertCityToSelectOption(nextProps.value);
        this.setState({
          value: value
        });
      }
    }
  }, {
    key: "_convertCityToSelectOption",
    value: function _convertCityToSelectOption(city) {
      return {
        label: city,
        value: city.split(',')[0].toLowerCase().replace(/ /, '_')
      };
    }
  }, {
    key: "_handleChange",
    value: function _handleChange(selected) {
      var query = selected ? selected.label : selected;
      this.props.handleSelect(query);
      this.setState({
        value: selected
      });
    }
  }, {
    key: "_populateCities",
    value: function _populateCities() {
      var _this2 = this;

      var url = 'https://learningcircles.p2pu.org/api/learningcircles/?active=true&signup=open';
      (0, _jsonp.default)(url, null, function (err, res) {
        if (err) {
          console.log(err);
        } else {
          _this2.filterCitiesFromResults(res.items);
        }
      });
    }
  }, {
    key: "_filterCitiesFromResults",
    value: function _filterCitiesFromResults(courses) {
      var _this3 = this;

      var cities = courses.map(function (course) {
        if (course.city.length > 0) {
          return _this3.convertCityToSelectOption(course.city);
        }
      });
      cities = cities.filter(function (city) {
        return city;
      });

      var uniqBy = function uniqBy(arr, fn) {
        return _toConsumableArray(new Map(arr.reverse().map(function (x) {
          return [typeof fn === 'function' ? fn(x) : x[fn], x];
        })).values());
      };

      cities = uniqBy(cities, function (el) {
        return el.value;
      });
      cities.sort(function (el) {
        return el.label;
      });
      this.setState({
        cities: cities
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactSelect.default, {
        name: this.props.name,
        className: "city-select ".concat(this.props.classes),
        value: this.state.value,
        options: this.state.cities,
        onChange: this.handleChange,
        onInputChange: this.props.handleInputChange,
        noResultsText: this.props.noResultsText | 'No results for this city',
        placeholder: this.props.placeholder
      });
    }
  }]);

  return CitySelect;
}(_react.Component);

exports.default = CitySelect;
CitySelect.propTypes = {
  handleSelect: _propTypes.default.func.isRequired,
  handleInputChange: _propTypes.default.func,
  name: _propTypes.default.string.isRequired,
  classes: _propTypes.default.string
};