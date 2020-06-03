import React from 'react'
import InputWrapper from '../InputWrapper'

const InputWithLabel = (props) => {
  const onChange = e => {
    props.handleChange({ [props.name]: e.currentTarget.value })
  }

  return (
    <InputWrapper
      label={props.label}
      name={props.name}
      required={props.required}
      errorMessage={props.errorMessage}
    >
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={onChange}
        placeholder={props.placeholder}
        min={props.min}
        max={props.max}
        disabled={props.disabled}
        className="form-control"
      />
    </InputWrapper>
  )
}

InputWithLabel.defaultProps = {
  type: 'text',
  value: "",
  required: false,
  disabled: false,
  label: 'Text input',
  handleChange: (input) => console.log("Implement a function to save input", input),
}

export default InputWithLabel;
