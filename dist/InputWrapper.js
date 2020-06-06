"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./input_wrapper.scss");

const InputWrapper = props => {
  const {
    name,
    label,
    labelPosition,
    required,
    errorMessage,
    helpText,
    classes,
    children
  } = props;
  const wrapperClasses = `form-group ${classes ? classes : ""}`;

  switch (labelPosition) {
    case 'left':
      return /*#__PURE__*/_react.default.createElement("div", {
        className: wrapperClasses
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        }
      }, /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: name,
        className: "input-label left"
      }, `${label} ${required ? '*' : ''}`), /*#__PURE__*/_react.default.cloneElement(children, {
        id: name,
        name,
        required
      })), helpText && /*#__PURE__*/_react.default.createElement("div", {
        className: "form-text help-text"
      }, helpText), errorMessage && /*#__PURE__*/_react.default.createElement("div", {
        className: "error-message minicaps"
      }, errorMessage));

    case 'right':
      return /*#__PURE__*/_react.default.createElement("div", {
        className: wrapperClasses
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        }
      }, /*#__PURE__*/_react.default.cloneElement(children, {
        id: name,
        name,
        required
      }), /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: name,
        className: "input-label right"
      }, `${label} ${required ? '*' : ''}`)), helpText && /*#__PURE__*/_react.default.createElement("div", {
        className: "form-text help-text"
      }, helpText), errorMessage && /*#__PURE__*/_react.default.createElement("div", {
        className: "error-message minicaps"
      }, errorMessage));

    default:
      return /*#__PURE__*/_react.default.createElement("div", {
        className: wrapperClasses
      }, /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: name,
        className: "input-label"
      }, `${label} ${required ? '*' : ''}`), helpText && /*#__PURE__*/_react.default.createElement("div", {
        className: "form-text help-text"
      }, helpText), /*#__PURE__*/_react.default.cloneElement(children, {
        id: name,
        name,
        required
      }), errorMessage && /*#__PURE__*/_react.default.createElement("div", {
        className: "error-message minicaps"
      }, errorMessage));
  }
};

InputWrapper.propTypes = {
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  errorMessage: _propTypes.default.string,
  helpText: _propTypes.default.string,
  required: _propTypes.default.bool,
  labelPosition: _propTypes.default.oneOf(['left', 'right']),
  classes: _propTypes.default.string
};
var _default = InputWrapper;
exports.default = _default;