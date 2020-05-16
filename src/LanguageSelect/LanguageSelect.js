import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const LANGUAGES = [
  {label: 'English', value: 'en'},
  {label: 'German', value: 'de'},
  {label: 'Polish', value: 'po'},
  {label: 'Romanian', value: 'ro'},
  {label: 'Finnish', value: 'fi'},
  {label: 'Portuguese', value: 'pt'},
];

export default class LanguageSelect extends React.Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(selected){
    this.props.handleChange(
      {[this.props.name]: selected.value}
    );
  }

  render(){
    const {
      label = 'Language'
    } = this.props;
    const props = this.props;
    let value_search = LANGUAGES.filter(({value, label}) => value == this.props.value);
    let value = value_search.length==1?value_search[0]:null;

    return(
      <div className={`form-group ${props.classes}`} >
        <label htmlFor={props.name}>{`${props.label} ${props.required ? '*' : ''}`}</label>
        <Select
          name={ props.name }
          className={ props.selectClasses }
          value={ value }
          options={ LANGUAGES }
          onChange={ this.onChange }
          onInputChange={ props.onInputChange }
          noResultsText={ props.noResultsText }
          placeholder={ props.placeholder }
          multi={ props.multi || false }
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
        { props.helpText &&
            <small id={props.id + "Help"} className="form-text text-muted">{props.helpText}</small>
        }
        {
          props.errorMessage &&
            <div className='error-message minicaps'>
              { props.errorMessage }
            </div>
        }
      </div>
    )
  }
}

LanguageSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func,
  classes: PropTypes.string,
  selectClasses: PropTypes.string,
  required: PropTypes.bool,
  noResultsText: PropTypes.string,
  placeholder: PropTypes.string,
  multi: PropTypes.bool,
  options: PropTypes.array,
  errorMessage: PropTypes.string,
  helpText: PropTypes.string,
  id: PropTypes.string,
  isClearable: PropTypes.bool,
}

LanguageSelect.defaultProps = {
  noResultsText: "No results",
  classes: "",
  name: "select-language",
  label: "Select a language",
  handleChange: (selected) => console.log("Implement a function to save selection", selected),
  isClearable: true,
}
