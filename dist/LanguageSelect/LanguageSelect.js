"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _InputWrapper = _interopRequireDefault(require("../InputWrapper"));

const LANGUAGES = [{
  label: 'English',
  value: 'en'
}, {
  label: 'German',
  value: 'de'
}, {
  label: 'Polish',
  value: 'pl'
}, {
  label: 'Romanian',
  value: 'ro'
}, {
  label: 'Finnish',
  value: 'fi'
}, {
  label: 'Portuguese',
  value: 'pt'
}];

class LanguageSelect extends _react.default.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(selected) {
    const value = selected ? selected.value : null;
    this.props.handleChange({
      [this.props.name]: value
    });
  }

  render() {
    const {
      label = 'Language'
    } = this.props;
    const props = this.props;
    const selectedValue = LANGUAGES.find(({
      value,
      label
    }) => value === props.value) || null;
    return /*#__PURE__*/_react.default.createElement(_InputWrapper.default, {
      label: props.label,
      name: props.name,
      required: props.required,
      errorMessage: props.errorMessage,
      helpText: props.helpText,
      classes: props.classes
    }, /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
      name: props.name,
      className: props.selectClasses,
      value: selectedValue,
      options: LANGUAGES,
      onChange: this.onChange,
      onInputChange: props.onInputChange,
      noResultsText: props.noResultsText,
      placeholder: props.placeholder,
      isMulti: props.isMulti,
      isClearable: props.isClearable,
      theme: theme => ({ ...theme,
        colors: { ...theme.colors,
          primary: '#05c6b4',
          primary75: '#D3D8E6',
          primary50: '#e0f7f5',
          primary25: '#F3F4F8'
        }
      })
    }));
  }

}

exports.default = LanguageSelect;
LanguageSelect.propTypes = {
  handleChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  handleInputChange: _propTypes.default.func,
  classes: _propTypes.default.string,
  selectClasses: _propTypes.default.string,
  required: _propTypes.default.bool,
  noResultsText: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  options: _propTypes.default.array,
  errorMessage: _propTypes.default.string,
  helpText: _propTypes.default.string,
  id: _propTypes.default.string,
  isClearable: _propTypes.default.bool,
  isMulti: _propTypes.default.bool
};
LanguageSelect.defaultProps = {
  noResultsText: "No results",
  classes: "",
  name: "select-language",
  label: "Select a language",
  handleChange: selected => console.log("Implement a function to save selection", selected),
  isClearable: true,
  isMulti: false
};