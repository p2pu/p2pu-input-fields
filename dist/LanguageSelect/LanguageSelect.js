"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireDefault(require("react-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var LANGUAGES = [{
  label: 'English',
  value: 'en'
}, {
  label: 'German',
  value: 'de'
}, {
  label: 'Polish',
  value: 'po'
}, {
  label: 'Romanian',
  value: 'ro'
}, {
  label: 'Finnish',
  value: 'fi'
}, {
  label: 'Portuguese',
  value: 'pt'
}];

var LanguageSelect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LanguageSelect, _React$Component);

  function LanguageSelect(props) {
    var _this;

    _classCallCheck(this, LanguageSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LanguageSelect).call(this, props));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(LanguageSelect, [{
    key: "onChange",
    value: function onChange(selected) {
      this.props.handleChange(_defineProperty({}, this.props.name, selected.value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$label = this.props.label,
          label = _this$props$label === void 0 ? 'Language' : _this$props$label;
      var props = this.props;
      var value_search = LANGUAGES.filter(function (_ref) {
        var value = _ref.value,
            label = _ref.label;
        return value == _this2.props.value;
      });
      var value = value_search.length == 1 ? value_search[0] : null;
      return _react.default.createElement("div", {
        className: "form-group ".concat(props.classes)
      }, _react.default.createElement("label", {
        htmlFor: props.name
      }, "".concat(props.label, " ").concat(props.required ? '*' : '')), _react.default.createElement(_reactSelect.default, {
        name: props.name,
        className: props.selectClasses,
        value: value,
        options: LANGUAGES,
        onChange: this.onChange,
        onInputChange: props.onInputChange,
        noResultsText: props.noResultsText,
        placeholder: props.placeholder,
        isMulti: props.isMulti,
        isClearable: props.isClearable,
        theme: function theme(_theme) {
          return _objectSpread({}, _theme, {
            colors: _objectSpread({}, _theme.colors, {
              primary: '#05c6b4',
              primary75: '#D3D8E6',
              primary50: '#e0f7f5',
              primary25: '#F3F4F8'
            })
          });
        }
      }), props.helpText && _react.default.createElement("small", {
        id: props.id + "Help",
        className: "form-text text-muted"
      }, props.helpText), props.errorMessage && _react.default.createElement("div", {
        className: 'error-message minicaps'
      }, props.errorMessage));
    }
  }]);

  return LanguageSelect;
}(_react.default.Component);

exports.default = LanguageSelect;
LanguageSelect.propTypes = {
  handleChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  handleInputChange: _propTypes.default.func,
  classes: _propTypes.default.string,
  selectClasses: _propTypes.default.string,
  required: _propTypes.default.bool,
  noResultsText: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  options: _propTypes.default.array,
  errorMessage: _propTypes.default.string,
  helpText: _propTypes.default.string,
  id: _propTypes.default.string,
  isClearable: _propTypes.default.bool,
  isMulti: _propTypes.default.bool
};
LanguageSelect.defaultProps = {
  noResultsText: "No results",
  classes: "",
  name: "select-language",
  label: "Select a language",
  handleChange: function handleChange(selected) {
    return console.log("Implement a function to save selection", selected);
  },
  isClearable: true,
  isMulti: false
};