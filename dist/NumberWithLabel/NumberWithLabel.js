import React, { Component } from 'react';
import CountUp, { startAnimation } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

var NumberWithLabel = function (_Component) {
  babelHelpers.inherits(NumberWithLabel, _Component);

  function NumberWithLabel(props) {
    babelHelpers.classCallCheck(this, NumberWithLabel);

    var _this = babelHelpers.possibleConstructorReturn(this, (NumberWithLabel.__proto__ || Object.getPrototypeOf(NumberWithLabel)).call(this, props));

    _this.triggerCountup = function () {
      return _this._triggerCountup();
    };
    _this.handleVisibilityChange = function (e) {
      return _this._handleVisibilityChange(e);
    };
    return _this;
  }

  babelHelpers.createClass(NumberWithLabel, [{
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