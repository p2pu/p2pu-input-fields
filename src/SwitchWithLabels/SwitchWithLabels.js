import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputWrapper from '../InputWrapper'
import "./switch.scss"

export default class SwitchWithLabels extends Component {
  constructor(props) {
    super(props)
    this.state = { checked: this.props.defaultChecked }
  }

  onChange = (event) => {
    const checked = event.currentTarget.checked;

    this.setState({ checked }, this.props.handleChange({ [this.props.name]: checked }));
  }

  onClickLabel = (checked) => {
    return () => { this.setState({ checked }, this.props.handleChange({ [this.props.name]: checked })) };
  }

  render() {
    const { falseLabel, trueLabel, label, name, required, errorMessage, helpText, classes } = this.props;
    const { checked } = this.state;

    return(
      <InputWrapper
        label={label}
        name={name}
        required={required}
        errorMessage={errorMessage}
        helpText={helpText}
        classes={classes}
      >
        <div className="switch-container">
          <span onClick={this.onClickLabel(false)}>{ falseLabel }</span>
          <label>
            <input
              checked={ checked }
              onChange={ this.onChange }
              className="switch"
              type="checkbox"
            />
            <div className={`switch-background ${checked ? 'on' : 'off'}`}>
              <div className="switch-button"></div>
            </div>
          </label>
          <span onClick={this.onClickLabel(true)}>{ trueLabel }</span>
        </div>
      </InputWrapper>
    );
  }
}

SwitchWithLabels.propTypes = {
  handleChange: PropTypes.func.isRequired,
  falseLabel: PropTypes.string.isRequired,
  trueLabel: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.name,
  errorMessage: PropTypes.errorMessage,
  helpText: PropTypes.helpText,
  defaultChecked: PropTypes.bool,
  required: PropTypes.bool,
}

SwitchWithLabels.defaultProps = {
  handleChange: (checked) => `Implement a function to save checked input: ${checked}`,
  falseLabel: "Off",
  trueLabel: "On",
  defaultChecked: true,
}