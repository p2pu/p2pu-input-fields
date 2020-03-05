import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import jsonp from 'jsonp'

import 'react-select/dist/react-select.css'

export default class CitySelect extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleChange = (s) => this._handleChange(s)
    this.handleInputChange = (s) => this._handleInputChange(s)
    this.populateCities = () => this._populateCities()
    this.convertCityToSelectOption = (city) => this._convertCityToSelectOption(city)
    this.filterCitiesFromResults = (r) => this._filterCitiesFromResults(r)
    this.populateCities();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      const value = !nextProps.value ? this.state.value : this.convertCityToSelectOption(nextProps.value);
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

    this.props.handleSelect(query)
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
      <Select
        name={ this.props.name }
        className={ `city-select ${this.props.classes}` }
        value={ this.state.value }
        options={ this.state.cities }
        onChange={ this.handleChange }
        onInputChange={ this.props.handleInputChange }
        noResultsText={ this.props.noResultsText | 'No results for this city'}
        placeholder={ this.props.placeholder }
      />
    )
  }
}

CitySelect.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  classes: PropTypes.string
}
