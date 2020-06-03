import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import jsonp from 'jsonp'

export default class CitySelect extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleChange = (s) => this._handleChange(s)
    this.populateCities = () => this._populateCities()
    this.convertCityToSelectOption = (city) => this._convertCityToSelectOption(city)
    this.filterCitiesFromResults = (r) => this._filterCitiesFromResults(r)
    this.populateCities();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const value = !this.props.value ? this.state.value : this.convertCityToSelectOption(this.props.value);
      this.setState({ value })
    }
  }

  _convertCityToSelectOption(city) {
    return {
      label: city,
      value: city.split(',')[0].toLowerCase().replace(/ /, '_')
    }
  }

  _handleChange(selected) {
    const query = selected ? selected.label : selected;

    this.props.handleChange({ [this.props.name]: query })
    this.setState({ value: selected })
  }

  _populateCities() {
    const url = 'https://learningcircles.p2pu.org/api/learningcircles/?active=true&signup=open'
    jsonp(url, null, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        this.filterCitiesFromResults(res.items);
      }
    })
  }

  _filterCitiesFromResults(courses) {
    let cities = courses.map(course => {
      if (course.city.length > 0) {
        return this.convertCityToSelectOption(course.city)
      }
    });

    cities = cities.filter( city => city );
    const uniqBy = (arr, fn) => [...new Map(arr.reverse().map((x) => [typeof fn === 'function' ? fn(x) : x[fn], x])).values()]
    cities = uniqBy(cities, el => el.value);
    cities.sort(el => el.label);

    this.setState({ cities });
  }

  render() {
    return(
      <div className={`${this.props.classes}`}>
        { this.props.label && <label htmlFor={this.props.name}>{`${this.props.label} ${this.props.required ? '*' : ''}`}</label> }
        <Select
          name={ this.props.name }
          className={ `city-select ${this.props.selectClasses}` }
          value={ this.state.value }
          options={ this.state.cities }
          onChange={ this.handleChange }
          onInputChange={ this.props.handleInputChange }
          noResultsText={ this.props.noResultsText }
          placeholder={ this.props.placeholder }
          isClearable={ this.props.isClearable }
          isMulti={ this.props.isMulti }
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
      </div>
    )
  }
}


CitySelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func,
  classes: PropTypes.string,
  noResultsText: PropTypes.string,
  placeholder: PropTypes.string,
  isClearable: PropTypes.bool,
  isMulti: PropTypes.bool,
}

CitySelect.defaultProps = {
  noResultsText: "No results for this city",
  placeholder: "Start typing a city name...",
  classes: "",
  name: "select-city",
  handleChange: (selected) => console.log("Implement a function to save selection", selected),
  isClearable: true,
  isMulti: false,
}

