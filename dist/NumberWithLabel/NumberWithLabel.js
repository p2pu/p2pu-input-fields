var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import CountUp, { startAnimation } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

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
      startAnimation(this.countUpNum);
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

      return React.createElement(
        VisibilitySensor,
        { onChange: this.handleVisibilityChange },
        React.createElement(
          'div',
          { className: 'stat' },
          React.createElement(CountUp, {
            className: 'number',
            start: 0,
            end: this.props.number,
            duration: 2,
            ref: function ref(el) {
              _this2.countUpNum = el;
            }
          }),
          React.createElement(
            'span',
            { className: 'text' },
            this.props.label
          )
        )
      );
    }
  }]);

  return NumberWithLabel;
}(Component);

export default NumberWithLabel;