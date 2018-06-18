import React from 'react'

const InputWithLabel = (props) => {
  const onChange = (e) => {
    props.handleChange({ [props.name]: e.currentTarget.value })
  }

  return(
    <div className={`input-with-label form-group ${props.classes}`}>
      <label htmlFor={props.name}>{`${props.label} ${props.required ? '*' : ''}`}</label>
      <input
        className='form-control'
        type={props.type || 'text'}
        name={props.name}
        id={props.id}
        onChange={onChange}
        value={props.value || props.defaultValue}
        placeholder={props.placeholder}
        required={props.required || false}
        min={props.min}
        max={props.max}
      />
      {
        props.errorMessage &&
        <div className='error-message minicaps'>
          { props.errorMessage }
        </div>
      }
    </div>
  )
}

export default InputWithLabel;