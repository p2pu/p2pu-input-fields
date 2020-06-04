import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import InputWrapper from '../InputWrapper'

const SelectWithLabel = (props) => {
  const onChange = selected => {
    const value = selected ? selected.value : null
    props.handleChange(
      {[props.name]: value }
    );
  }

  const selectedOption = props.options.find(opt => opt.value === props.value)
  const { name, label, required, errorMessage, helpText, classes, selectClasses, options, onInputChange, noResultsText, placeholder, isMulti, isClearable } = props

  return(
    <InputWrapper
      label={label}
      name={name}
      required={required}
      errorMessage={errorMessage}
      helpText={helpText}
      classes={classes}
    >
      <Select
        name={ name }
        className={ selectClasses }
        value={ selectedOption }
        options={ options }
        onChange={ onChange }
        onInputChange={ onInputChange }
        noResultsText={ noResultsText }
        placeholder={ placeholder }
        isMulti={ isMulti }
        isClearable={ isClearable }
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
    </InputWrapper>
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