import React from 'react'
import PropTypes from 'prop-types'
import InputWrapper from '../InputWrapper'

const TextareaWithLabel = (props) => {
  const onChange = e => {
    props.handleChange({ [props.name]: e.currentTarget.value })
  }

  return (
    <InputWrapper
      label={props.label}
      name={props.name}
      required={props.required}
      errorMessage={props.errorMessage}
      helpText={props.helpText}
      classes={props.classes}
    >
      <textarea
        value={props.value}
        onChange={onChange}
        placeholder={props.placeholder}
        disabled={props.disabled}
        className="form-control"
      />
    </InputWrapper>
  )
}

TextareaWithLabel.defaultProps = {
  type: 'text',
  value: "",
  required: false,
  disabled: false,
  label: 'Textarea input',
  classes: '',
  handleChange: (input) => console.log("Implement a function to save input", input)
}

TextareaWithLabel.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  classes: PropTypes.string,
}

export default TextareaWithLabel;
