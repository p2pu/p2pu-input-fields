import React from 'react'
import PropTypes from 'prop-types'

const InputWrapper = props => {
  const { name, label, labelPosition, required, errorMessage, className, children } = props;
  const wrapperClasses = `form-group ${className ? className : ""}`

  switch (labelPosition) {
    case 'left':
      return(
        <div className={wrapperClasses} style={{ display: 'flex', alignItems: 'center'}}>
          <label
            htmlFor={name}
            className='input-label'
            style={{ marginBottom: 0, marginLeft: '0.5em' }}
          >
            {`${label} ${required ? '*' : ''}`}
          </label>
          { React.cloneElement(children, { id: name, name, required }) }
          <div className='error-message minicaps'>{ errorMessage }</div>
        </div>
      )
    case 'right':
      return(
        <div className={wrapperClasses} style={{ display: 'flex', alignItems: 'center'}}>
          { React.cloneElement(children, { id: name, name, required }) }
          <label
            htmlFor={name}
            className='input-label'
            style={{ marginBottom: 0, marginLeft: '0.5em' }}
          >
            {`${label} ${required ? '*' : ''}`}
          </label>
          <div className='error-message minicaps'>{ errorMessage }</div>
        </div>
      )
    default:
      return(
        <div className={wrapperClasses}>
          <label htmlFor={name} className='input-label'>{`${label} ${required ? '*' : ''}`}</label>
          { React.cloneElement(children, { id: name, name, required }) }
          { errorMessage && <div className='error-message minicaps'>{ errorMessage }</div> }
        </div>
      )
  }
}

InputWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  labelPosition: PropTypes.oneOf(['left', 'right']),
}

export default InputWrapper;
