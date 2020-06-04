"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactCountup = _interopRequireWildcard(require("react-countup"));

var _reactVisibilitySensor = _interopRequireDefault(require("react-visibility-sensor"));

class NumberWithLabel extends _react.Component {
  constructor(props) {
    super(props);

    this.triggerCountup = () => this._triggerCountup();

    this.handleVisibilityChange = e => this._handleVisibilityChange(e);
  }

  _triggerCountup() {
    (0, _reactCountup.startAnimation)(this.countUpNum);
  }

  _handleVisibilityChange(isVisible) {
    if (isVisible) {
      this.triggerCountup();
    }
  }

  render() {
    return _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: this.handleVisibilityChange
    }, _react.default.createElement("div", {
      className: "stat"
    }, _react.default.createElement(_reactCountup.default, {
      className: "number",
      start: 0,
      end: this.props.number,
      duration: 2,
      ref: el => {
        this.countUpNum = el;
      }
    }), _react.default.createElement("span", {
      className: "text"
    }, this.props.label)));
  }

}

exports.default = NumberWithLabel;