import React, { Component } from 'react';

var SwitchWithLabels = function (_Component) {
  babelHelpers.inherits(SwitchWithLabels, _Component);

  function SwitchWithLabels(props) {
    babelHelpers.classCallCheck(this, SwitchWithLabels);

    var _this = babelHelpers.possibleConstructorReturn(this, (SwitchWithLabels.__proto__ || Object.getPrototypeOf(SwitchWithLabels)).call(this, props));

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

  babelHelpers.createClass(SwitchWithLabels, [{
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