"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _LanguageSelect = _interopRequireDefault(require("p2pu-input-fields/dist/LanguageSelect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var HtmlSelect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HtmlSelect, _React$Component);

  function HtmlSelect(props) {
    var _this;

    _classCallCheck(this, HtmlSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HtmlSelect).call(this, props));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(HtmlSelect, [{
    key: "onChange",
    value: function onChange(event) {
      this.props.handleChange(_defineProperty({}, this.props.name, event.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      return _react.default.createElement("div", {
        className: "input-with-label form-group ".concat(props.classes)
      }, _react.default.createElement("label", {
        htmlFor: "exampleFormControlSelect1"
      }, "".concat(props.label, " ").concat(props.required ? '*' : '')), _react.default.createElement("select", {
        className: "form-control",
        name: props.name,
        id: props.id,
        onChange: this.onChange,
        value: props.value || props.defaultValue,
        placeholder: props.placeholder,
        required: props.required || false,
        disabled: props.disabled
      }, this.props.options.map(function (op) {
        return _react.default.createElement("option", null, op.label);
      })), props.helpText && _react.default.createElement("small", {
        id: props.id + "Help",
        className: "form-text text-muted"
      }, props.helpText), props.errorMessage && _react.default.createElement("div", {
        className: 'error-message minicaps'
      }, props.errorMessage));
    }
  }]);

  return HtmlSelect;
}(_react.default.Component);

;

var LanguageInput =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(LanguageInput, _React$Component2);

  function LanguageInput() {
    _classCallCheck(this, LanguageInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(LanguageInput).apply(this, arguments));
  }

  _createClass(LanguageInput, [{
    key: "render",
    value: function render() {
      var languages = [{
        label: 'English',
        value: 'en'
      }, {
        label: 'German',
        value: 'de'
      }];
      return _react.default.createElement(HtmlSelect, _extends({}, this.props, {
        options: languages
      }));
    }
  }]);

  return LanguageInput;
}(_react.default.Component);

exports.default = LanguageInput;