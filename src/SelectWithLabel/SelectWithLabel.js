import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const SelectWithLabel = (props) => {
  return(
    <div className={`${props.classes}`} >
      <label htmlFor={props.name}>{`${props.label} ${props.required ? '*' : ''}`}</label>
      <Select
        name={ props.name }
        className={ props.selectClasses }
        value={ props.value }
        options={ props.options }
        onChange={ props.handleChange }
        onInputChange={ props.onInputChange }
        noResultsText={ props.noResultsText }
        placeholder={ props.placeholder }
        isMulti={ props.isMulti }
        isClearable={ props.isClearable }
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#05c6b4',
            primary75: '#D3D8E6',
            primary50: '#e0f7f5',
            primary25: '#F3F4F8'
          },
        })}
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

SelectWithLabel.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func,
  classes: PropTypes.string,
  selectClasses: PropTypes.string,
  required: PropTypes.bool,
  noResultsText: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  errorMessage: PropTypes.string,
  isClearable: PropTypes.bool,
  isMulti: PropTypes.bool,
}

SelectWithLabel.defaultProps = {
  noResultsText: "No results",
  classes: "",
  name: "select-with-label",
  label: "Select one",
  options: [],
  handleChange: (selected) => console.log("Implement a function to save selection", selected),
  isClearable: true,
  isMulti: false,
}

export default SelectWithLabel;