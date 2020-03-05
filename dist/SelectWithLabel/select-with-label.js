"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SelectWithLabel = _interopRequireDefault(require("p2pu-input-fields/dist/SelectWithLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var SelectWithLabel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectWithLabel, _React$Component);

  function SelectWithLabel(props) {
    var _this;

    _classCallCheck(this, SelectWithLabel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectWithLabel).call(this, props));
    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SelectWithLabel, [{
    key: "handleSelect",
    value: function handleSelect(selected) {
      this.props.handleChange(_defineProperty({}, this.props.name, selected.value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var value_search = this.props.options.filter(function (_ref) {
        var value = _ref.value,
            label = _ref.label;
        return value == _this2.props.value;
      });
      var value = value_search.length == 1 ? value_search[0] : null; // TODO clearable isn't passed to react-select widget :(

      return _react.default.createElement(_SelectWithLabel.default, {
        label: this.props.label,
        classes: this.props.classes,
        options: this.props.options,
        multi: this.props.multi,
        value: value,
        onChange: this.handleSelect,
        placeholder: this.props.placeholder,
        clearable: false
      });
    }
  }]);

  return SelectWithLabel;
}(_react.default.Component);

exports.default = SelectWithLabel;