var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

var SwitchWithLabels = function (_Component) {
  _inherits(SwitchWithLabels, _Component);

  function SwitchWithLabels(props) {
    _classCallCheck(this, SwitchWithLabels);

    var _this = _possibleConstructorReturn(this, (SwitchWithLabels.__proto__ || Object.getPrototypeOf(SwitchWithLabels)).call(this, props));

    _this.state = { checked: _this.props.defaultChecked };
    _this.handleChange = function (event) {
      return _this._handleChange(event);
    };
    _this.handleClickLabel = function (value) {
      return _this._handleClickLabel(value);
    };
    _this.handleChange = function (event) {
      return _this._handleChange(event);
    };
    return _this;
  }

  _createClass(SwitchWithLabels, [{
    key: "_handleChange",
    value: function _handleChange(event) {
      var checked = event.currentTarget.checked;

      this.setState({ checked: checked }, this.props.onChange(checked));
    }
  }, {
    key: "_handleClickLabel",
    value: function _handleClickLabel(value) {
      var _this2 = this;

      return function () {
        _this2.setState({ checked: value }, _this2.props.onChange(value));
      };
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "switch-container" },
        React.createElement(
          "span",
          { onClick: this.handleClickLabel(false) },
          this.props.labelLeft
        ),
        React.createElement(
          "label",
          null,
          React.createElement("input", {
            checked: this.state.checked,
            onChange: this.handleChange,
            className: "switch",
            type: "checkbox"
          }),
          React.createElement(
            "div",
            { className: "switch-background" },
            React.createElement("div", { className: "switch-button" })
          )
        ),
        React.createElement(
          "span",
          { onClick: this.handleClickLabel(true) },
          this.props.labelRight
        )
      );
    }
  }]);

  return SwitchWithLabels;
}(Component);

export default SwitchWithLabels;