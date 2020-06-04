"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputWrapper = _interopRequireDefault(require("../InputWrapper"));

require("./switch.scss");

class SwitchWithLabels extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "onChange", event => {
      const checked = event.currentTarget.checked;
      this.setState({
        checked
      }, this.props.handleChange({
        [this.props.name]: checked
      }));
    });
    (0, _defineProperty2.default)(this, "onClickLabel", checked => {
      return () => {
        this.setState({
          checked
        }, this.props.handleChange({
          [this.props.name]: checked
        }));
      };
    });
    this.state = {
      checked: this.props.defaultChecked
    };
  }

  render() {
    const {
      falseLabel,
      trueLabel,
      label,
      name,
      required,
      errorMessage,
      helpText,
      classes
    } = this.props;
    const {
      checked
    } = this.state;
    return _react.default.createElement(_InputWrapper.default, {
      label: label,
      name: name,
      required: required,
      errorMessage: errorMessage,
      helpText: helpText,
      classes: classes
    }, _react.default.createElement("div", {
      className: "switch-container"
    }, _react.default.createElement("span", {
      onClick: this.onClickLabel(false)
    }, falseLabel), _react.default.createElement("label", null, _react.default.createElement("input", {
      checked: checked,
      onChange: this.onChange,
      className: "switch",
      type: "checkbox"
    }), _react.default.createElement("div", {
      className: `switch-background ${checked ? 'on' : 'off'}`
    }, _react.default.createElement("div", {
      className: "switch-button"
    }))), _react.default.createElement("span", {
      onClick: this.onClickLabel(true)
    }, trueLabel)));
  }

}

exports.default = SwitchWithLabels;
SwitchWithLabels.propTypes = {
  handleChange: _propTypes.default.func.isRequired,
  falseLabel: _propTypes.default.string.isRequired,
  trueLabel: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  name: _propTypes.default.string,
  errorMessage: _propTypes.default.string,
  helpText: _propTypes.default.string,
  defaultChecked: _propTypes.default.bool,
  required: _propTypes.default.bool
};
SwitchWithLabels.defaultProps = {
  handleChange: checked => `Implement a function to save checked input: ${checked}`,
  falseLabel: "Off",
  trueLabel: "On",
  defaultChecked: true
};