'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCountup = require('react-countup');

var _reactCountup2 = _interopRequireDefault(_reactCountup);

var _reactVisibilitySensor = require('react-visibility-sensor');

var _reactVisibilitySensor2 = _interopRequireDefault(_reactVisibilitySensor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberWithLabel = function (_Component) {
  _inherits(NumberWithLabel, _Component);

  function NumberWithLabel(props) {
    _classCallCheck(this, NumberWithLabel);

    var _this = _possibleConstructorReturn(this, (NumberWithLabel.__proto__ || Object.getPrototypeOf(NumberWithLabel)).call(this, props));

    _this.triggerCountup = function () {
      return _this._triggerCountup();
    };
    _this.handleVisibilityChange = function (e) {
      return _this._handleVisibilityChange(e);
    };
    return _this;
  }

  _createClass(NumberWithLabel, [{
    key: '_triggerCountup',
    value: function _triggerCountup() {
      (0, _reactCountup.startAnimation)(this.countUpNum);
    }
  }, {
    key: '_handleVisibilityChange',
    value: function _handleVisibilityChange(isVisible) {
      if (isVisible) {
        this.triggerCountup();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactVisibilitySensor2.default,
        { onChange: this.handleVisibilityChange },
        _react2.default.createElement(
          'div',
          { className: 'stat' },
          _react2.default.createElement(_reactCountup2.default, {
            className: 'number',
            start: 0,
            end: this.props.number,
            duration: 2,
            ref: function ref(el) {
              _this2.countUpNum = el;
            }
          }),
          _react2.default.createElement(
            'span',
            { className: 'text' },
            this.props.label
          )
        )
      );
    }
  }]);

  return NumberWithLabel;
}(_react.Component);

exports.default = NumberWithLabel;