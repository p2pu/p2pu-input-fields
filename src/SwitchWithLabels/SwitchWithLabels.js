import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "./switch.scss"

export default class SwitchWithLabels extends Component {
  constructor(props) {
    super(props)
    this.state = { checked: this.props.defaultChecked }
    this.handleChange = (event) => this._handleChange(event);
    this.handleClickLabel = (value) => this._handleClickLabel(value);
    this.handleChange = (event) => this._handleChange(event);
  }

  _handleChange(event) {
    const checked = event.currentTarget.checked;

    this.setState({ checked }, this.props.handleChange({ [this.props.name]: checked }));
  }

  _handleClickLabel(checked) {
    return () => { this.setState({ checked }, this.props.handleChange({ [this.props.name]: checked })) };
  }

  render() {
    return(
      <div className="switch-container">
        <span onClick={this.handleClickLabel(false)}>{ this.props.falseLabel }</span>
        <label>
          <input
            checked={ this.state.checked }
            onChange={ this.handleChange }
            className="switch"
            type="checkbox"
          />
          <div className={`switch-background ${this.state.checked ? 'on' : 'off'}`}>
            <div className="switch-button"></div>
          </div>
        </label>
        <span onClick={this.handleClickLabel(true)}>{ this.props.trueLabel }</span>
      </div>
    );
  }
}

SwitchWithLabels.propTypes = {
  handleChange: PropTypes.func.isRequired,
  falseLabel: PropTypes.string.isRequired,
  trueLabel: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
}

SwitchWithLabels.defaultProps = {
  handleChange: (checked) => `Implement a function to save checked input: ${checked}`,
  falseLabel: "Off",
  trueLabel: "On",
  defaultChecked: true,
}