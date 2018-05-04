import React from 'react'
import Select from 'react-select'

import 'react-select/dist/react-select.css';

const SelectWithLabel = (props) => {
  return(
    <div className={`${props.classes}`} >
      <label htmlFor={props.name}>{`${props.label} ${props.required ? '*' : ''}`}</label>
      <Select
        name={ props.name }
        className={ props.selectClasses }
        value={ props.value }
        options={ props.options }
        onChange={ props.onChange }
        onInputChange={ props.onInputChange }
        noResultsText={ props.noResultsText }
        placeholder={ props.placeholder }
        multi={ props.multi || false }
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

export default SelectWithLabel;