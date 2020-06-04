import React, { Component } from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import AsyncSelect from 'react-select/async';
import InputWrapper from '../InputWrapper'

const ALGOLIA_ENDPOINT = 'https://places-dsn.algolia.net/1/places'

const KANSAS_CITY_OPTION = {
  label: 'Kansas City, Missouri, United States of America',
  value: {
    administrative: ['Missouri'],
    country: {
      default: 'United States of America'
    },
    locale_names: {
      default: ['Kansas City']
    },
    // from https://tools.wmflabs.org
    _geoloc: {
      lat: 39.099722,
      lng: -94.578333
    }
  }
};

export default class PlaceSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { hits: [], value: null };
  }

  componentDidMount() {
    if (!!this.props.place_id) {
      this.fetchPlaceById();
    } else if (this.props.city === 'Kansas City, Missouri, United States of America') {
      this.setState({ value: KANSAS_CITY_OPTION });
    } else if (this.props.city) {
      const value = { label: this.props.city, value: this.props.city }
      this.setState({ value });
    }
  }

  handleChange = (selected) => {
    console.log(selected)
    let cityData = {};

    if (selected) {
      const country = selected.value.country ? selected.value.country.default : null;
      const country_en = selected.value.country && selected.value.country.en ? selected.value.country.en : country;
      cityData = {
        city: selected.value.locale_names.default[0],
        region: selected.value.administrative ? selected.value.administrative[0] : null,
        country: country,
        country_en: country_en,
        latitude: selected.value._geoloc ? selected.value._geoloc.lat : null,
        longitude: selected.value._geoloc ? selected.value._geoloc.lng : null,
        place_id: selected.value.objectID ? selected.value.objectID : null,
      }
    }

    this.props.handleChange(cityData)
    this.setState({ value: selected })
  }

  searchPlaces = (query) => {
    const url = `${ALGOLIA_ENDPOINT}/query/`;
    const data = {
      "type": "city",
      "hitsPerPage": "10",
      "query": query
    };
    const method = 'post';

    return axios({
      data,
      url,
      method
    }).then(res => {
      let options = res.data.hits.map(place => this.generateCityOption(place));
      // Kansas City, MO is missing from the Algolia places API
      // so we're manually adding it in
      // TODO: don't do this
      if (query.toLowerCase().includes('kansas')) {
        options.unshift(KANSAS_CITY_OPTION)
      }
      return options
    }).catch(err => {
      console.log(err)
    })
  }

  fetchPlaceById = () => {
    const url = `${ALGOLIA_ENDPOINT}/${this.props.place_id}`;

    axios.get(url)
      .then(res => {
        const value = this.generateCityOption(res.data)
        this.setState({ value })
      })
      .catch(err => {
        console.log(err)
      })
  }

  generateCityOption = (place) => {
    return {
      label: `${place.locale_names.default[0]}, ${place.administrative[0]}, ${place.country.default}`,
      value: place
    }
  }

  render() {
    const options = this.state.hits.map(place => this.generateCityOption(place))
    const { label, name, required, errorMessage, helpText, classes, selectClasses, handleInputChange, noResultsText, placeholder, isClearable, isMulti } = this.props
    const { value } = this.state;

    return(
      <InputWrapper
        label={label}
        name={name}
        required={required}
        errorMessage={errorMessage}
        helpText={helpText}
        classes={classes}
      >
        <AsyncSelect
          name={ name }
          className={ `city-select ${selectClasses}` }
          value={ value }
          options={ options }
          onChange={ this.handleChange }
          onInputChange={ handleInputChange }
          noResultsText={ noResultsText }
          placeholder={ placeholder }
          loadOptions={ this.searchPlaces }
          isClearable={ isClearable }
          isMulti={ isMulti }
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
}

PlaceSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
  noResultsText: PropTypes.string,
  placeholder: PropTypes.string,
  place_id: PropTypes.string,
  city: PropTypes.string,
  errorMessage: PropTypes.string,
  isClearable: PropTypes.bool,
  isMulti: PropTypes.bool,
}

PlaceSelect.defaultProps = {
  noResultsText: "No results for this city",
  placeholder: "Start typing a city name...",
  classes: "",
  selectClasses: "",
  name: "select-place",
  handleChange: (selected) => console.log("Implement a function to save selection", selected),
  isClearable: true,
  isMulti: false,
}

