import React from 'react'
import Select from 'react-select'

import 'react-select/dist/react-select.css';

const LANGUAGES = [
  {label: 'English', value: 'en'},
  {label: 'German', value: 'de'},
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
