import React from 'react'
import PropTypes from 'prop-types'

import "./input_wrapper.scss"

const InputWrapper = props => {
  const { name, label, labelPosition, required, errorMessage, helpText, classes, children } = props;
  const wrapperClasses = `form-group ${classes ? classes : ""}`

  switch (labelPosition) {
    case 'left':
      return(
        <div className={wrapperClasses}>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <label
              htmlFor={name}
              className='input-label left'
            >
              {`${label} ${required ? '*' : ''}`}
            </label>
            { React.cloneElement(children, { id: name, name, required }) }
          </div>
          { helpText && <div className='form-text help-text'>{ helpText }</div> }
          { errorMessage && <div className='error-message minicaps'>{ errorMessage }</div> }
        </div>
      )
    case 'right':
      return(
        <div className={wrapperClasses}>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            { React.cloneElement(children, { id: name, name, required }) }
            <label
              htmlFor={name}
              className='input-label right'
            >
              {`${label} ${required ? '*' : ''}`}
            </label>
          </div>
          { helpText && <div className='form-text help-text'>{ helpText }</div> }
          { errorMessage && <div className='error-message minicaps'>{ errorMessage }</div> }
        </div>
      )
    default:
      return(
        <div className={wrapperClasses}>
          <label htmlFor={name} className='input-label'>{`${label} ${required ? '*' : ''}`}</label>
          { helpText && <div className='form-text help-text'>{ helpText }</div> }
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
  helpText: PropTypes.string,
  required: PropTypes.bool,
  labelPosition: PropTypes.oneOf(['left', 'right']),
  classes: PropTypes.string,
}

export default InputWrapper;
