"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _axios = _interopRequireDefault(require("axios"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _timezoneNames = _interopRequireDefault(require("./timezone-names.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var GEONAMES_ENDPOINT = 'https://secure.geonames.org/timezoneJSON';

var TimeZoneSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(TimeZoneSelect, _Component);

  function TimeZoneSelect(props) {
    var _this;

    _classCallCheck(this, TimeZoneSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimeZoneSelect).call(this, props));
    _this.state = {
      value: _this.props.timezone
    };

    _this.onChange = function (s) {
      return _this._onChange(s);
    };

    _this.detectTimeZone = function () {
      return _this._detectTimeZone();
    };

    return _this;
  }

  _createClass(TimeZoneSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.detectTimeZone();
    }
  }, {
    key: "_onChange",
    value: function _onChange(selected) {
      var timezone = !!selected ? selected.value : null;
      this.props.handleChange({
        timezone: timezone
      });
      this.setState({
        value: selected
      });
    }
  }, {
    key: "_detectTimeZone",
    value: function _detectTimeZone() {
      var _this2 = this;

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
        var url = "".concat(GEONAMES_ENDPOINT, "?lat=").concat(this.props.latitude, "&lng=").concat(this.props.longitude, "&username=p2pu");

        _axios.default.get(url).then(function (res) {
          var timezone = res.data.timezoneId;

          _this2.props.handleChange({
            timezone: timezone
          });

          _this2.setState({
            value: {
              value: timezone,
              label: timezone
            }
          });
        }).catch(function (err) {
          return console.log(err);
        });
      } else {
        // detect timezone from browser
        var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.props.handleChange({
          timezone: timezone
        });
        this.setState({
          value: {
            value: timezone,
            label: timezone
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _React$createElement;

      var timezoneOptions = _timezoneNames.default.map(function (tz) {
        return {
          value: tz,
          label: tz
        };
      });

      return _react.default.createElement("div", {
        className: "".concat(this.props.classes)
      }, this.props.label && _react.default.createElement("label", {
        htmlFor: this.props.name
      }, "".concat(this.props.label, " ").concat(this.props.required ? '*' : '')), _react.default.createElement(_reactSelect.default, (_React$createElement = {
        name: this.props.name,
        className: "form-group input-with-label ".concat(this.props.selectClasses),
        value: this.state.value,
        onChange: this.onChange,
        options: timezoneOptions
      }, _defineProperty(_React$createElement, "name", 'timezone'), _defineProperty(_React$createElement, "id", 'id_timezone'), _defineProperty(_React$createElement, "isClearable", this.props.isClearable), _defineProperty(_React$createElement, "theme", function theme(_theme) {
        return _objectSpread({}, _theme, {
          colors: _objectSpread({}, _theme.colors, {
            primary: '#05c6b4',
            primary75: '#D3D8E6',
            primary50: '#e0f7f5',
            primary25: '#F3F4F8'
          })
        });
      }), _React$createElement)), this.props.errorMessage && _react.default.createElement("div", {
        className: "error-message minicaps"
      }, this.props.errorMessage));
    }
  }]);

  return TimeZoneSelect;
}(_react.Component);

exports.default = TimeZoneSelect;
TimeZoneSelect.propTypes = {
  handleChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  classes: _propTypes.default.string,
  timezone: _propTypes.default.string,
  latitude: _propTypes.default.string,
  longitude: _propTypes.default.string,
  errorMessage: _propTypes.default.string,
  isClearable: _propTypes.default.bool
};
TimeZoneSelect.defaultProps = {
  classes: "",
  name: "select-timezone",
  handleChange: function handleChange(selected) {
    return console.log("Implement a function to save selection", selected);
  },
  isClearable: true
};