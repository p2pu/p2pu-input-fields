import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import Select from 'react-select';
import 'lodash';
import TimePicker from 'rc-time-picker';
import moment$1 from 'moment-timezone';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var CheckboxWithLabel = function CheckboxWithLabel(props) {
  var onChange = function onChange(e) {
    props.handleChange(defineProperty({}, props.name, e.currentTarget.checked));
  };

  return React.createElement(
    'div',
    { className: 'checkbox-with-label label-right ' + props.classes },
    React.createElement('input', {
      type: 'checkbox',
      name: props.name,
      id: props.id || props.name,
      onChange: onChange,
      checked: props.checked,
      style: { marginRight: '10px' }
    }),
    React.createElement(
      'label',
      { htmlFor: props.name },
      props.label
    ),
    props.errorMessage && React.createElement(
      'div',
      { className: 'error-message minicaps' },
      props.errorMessage
    )
  );
};

var DatePickerWithLabel = function DatePickerWithLabel(props) {
  var onChange = function onChange(value) {
    var date = !!value ? value.format('YYYY-MM-DD') : null;
    props.handleChange(defineProperty({}, props.name, date));
  };

  var date = !!props.value ? moment(props.value) : null;

  return React.createElement(
    'div',
    { className: 'input-with-label form-group ' + props.classes },
    React.createElement(
      'label',
      { htmlFor: props.name },
      props.label + ' ' + (props.required ? '*' : '')
    ),
    React.createElement(DatePicker, {
      selected: date,
      name: props.name,
      id: props.id,
      onChange: onChange,
      className: 'form-control'
    }),
    props.errorMessage && React.createElement(
      'div',
      { className: 'error-message minicaps' },
      props.errorMessage
    )
  );
};

var API_ENDPOINT = '/api/upload_image/';

var ImageUploader = function (_Component) {
  inherits(ImageUploader, _Component);

  function ImageUploader(props) {
    classCallCheck(this, ImageUploader);

    var _this = possibleConstructorReturn(this, (ImageUploader.__proto__ || Object.getPrototypeOf(ImageUploader)).call(this, props));

    _this.saveImage = function (opts) {
      var url = API_ENDPOINT;
      var data = opts.data;
      var config = opts.config;

      axios({
        url: url,
        data: data,
        config: config,
        method: 'post',
        responseType: 'json'
      }).then(function (res) {
        if (res.data.errors) {
          return opts.onError(res.data);
        }
        opts.onSuccess(res.data);
      }).catch(function (err) {
        console.log(err);
        opts.onFail(err);
      });
    };

    _this.state = { image: _this.props.image };
    _this.onChange = function (e) {
      return _this._onChange(e);
    };
    return _this;
  }

  createClass(ImageUploader, [{
    key: '_onChange',
    value: function _onChange(e) {
      var _this2 = this;

      var file = e.currentTarget.files[0];
      var data = new FormData();
      data.append('image', file);

      var onSuccess = function onSuccess(data) {
        _this2.setState({ image: data.image_url });
        _this2.props.handleChange(defineProperty({}, _this2.props.name, data.image_url));
      };

      var onError = function onError(data) {
        console.log(data.errors);
        _this2.props.handleChange(defineProperty({}, _this2.props.name, null));
      };

      var onFail = function onFail(err) {
        console.log(err);
      };

      var config = { headers: { 'Content-Type': 'multipart/form-data' } };
      var opts = { data: data, config: config, onSuccess: onSuccess, onError: onError, onFail: onFail };

      this.saveImage(opts);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'input-with-label form-group ' + this.props.classes },
        React.createElement(
          'label',
          { htmlFor: this.props.name },
          this.props.label
        ),
        React.createElement('input', {
          className: 'image-upload',
          type: 'file',
          name: this.props.name,
          id: this.props.id,
          onChange: this.onChange
        }),
        this.props.errorMessage && React.createElement(
          'div',
          { className: 'error-message' },
          this.props.errorMessage
        ),
        this.state.image && React.createElement(
          'div',
          { className: 'image-preview', style: { width: '250px' } },
          React.createElement('img', { src: this.state.image, alt: 'Image preview', style: { width: '100%', height: '100%' } })
        )
      );
    }
  }]);
  return ImageUploader;
}(Component);

var InputWithLabel = function InputWithLabel(props) {
  var onChange = function onChange(e) {
    props.handleChange(defineProperty({}, props.name, e.currentTarget.value));
  };

  return React.createElement(
    'div',
    { className: 'input-with-label form-group ' + props.classes },
    React.createElement(
      'label',
      { htmlFor: props.name },
      props.label + ' ' + (props.required ? '*' : '')
    ),
    React.createElement('input', {
      className: 'form-control',
      type: props.type || 'text',
      name: props.name,
      id: props.id,
      onChange: onChange,
      value: props.value || props.defaultValue,
      placeholder: props.placeholder,
      required: props.required || false,
      min: props.min,
      max: props.max
    }),
    props.errorMessage && React.createElement(
      'div',
      { className: 'error-message minicaps' },
      props.errorMessage
    )
  );
};

var ALGOLIA_ENDPOINT = 'https://places-dsn.algolia.net/1/places';

var KANSAS_CITY_OPTION = {
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

var PlaceSelect = function (_Component) {
  inherits(PlaceSelect, _Component);

  function PlaceSelect(props) {
    classCallCheck(this, PlaceSelect);

    var _this = possibleConstructorReturn(this, (PlaceSelect.__proto__ || Object.getPrototypeOf(PlaceSelect)).call(this, props));

    _this.state = { hits: [], value: null };
    _this.handleChange = function (s) {
      return _this._handleChange(s);
    };
    _this.searchPlaces = function (query) {
      return _this._searchPlaces(query);
    };
    _this.fetchPlaceById = function () {
      return _this._fetchPlaceById();
    };
    _this.generateCityOption = function (place) {
      return _this._generateCityOption(place);
    };
    return _this;
  }

  createClass(PlaceSelect, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!!this.props.place_id) {
        this.fetchPlaceById();
      } else if (this.props.city === 'Kansas City') {
        this.setState({ value: KANSAS_CITY_OPTION });
      } else if (this.props.city) {
        var value = { label: this.props.city, value: this.props.city };
        this.setState({ value: value });
      }
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(selected) {
      var cityData = {};

      if (selected) {
        cityData = {
          city: selected.value.locale_names ? selected.value.locale_names.default[0] : selected.value,
          latitude: selected.value._geoloc ? selected.value._geoloc.lat : null,
          longitude: selected.value._geoloc ? selected.value._geoloc.lng : null,
          place_id: selected.value.objectID ? selected.value.objectID : null
        };
      }

      this.props.handleSelect(cityData);
      this.setState({ value: selected });
    }
  }, {
    key: '_searchPlaces',
    value: function _searchPlaces(query) {
      var _this2 = this;

      var url = ALGOLIA_ENDPOINT + '/query/';
      var data = {
        'type': 'city',
        'hitsPerPage': '10',
        'query': query
      };
      var method = 'post';

      return axios({
        data: data,
        url: url,
        method: method
      }).then(function (res) {
        var options = res.data.hits.map(function (place) {
          return _this2.generateCityOption(place);
        });
        // Kansas City, MO is missing from the Algolia places API
        // so we're manually adding it in
        // TODO: don't do this
        if (query.toLowerCase().includes('kansas')) {
          options.unshift(KANSAS_CITY_OPTION);
        }
        return { options: options };
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: '_fetchPlaceById',
    value: function _fetchPlaceById() {
      var _this3 = this;

      var url = ALGOLIA_ENDPOINT + '/' + this.props.place_id;

      axios.get(url).then(function (res) {
        var value = _this3.generateCityOption(res.data);
        _this3.setState({ value: value });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: '_generateCityOption',
    value: function _generateCityOption(place) {
      return {
        label: place.locale_names.default[0] + ', ' + place.administrative[0] + ', ' + place.country.default,
        value: place
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var options = this.state.hits.map(function (place) {
        return _this4.generateCityOption(place);
      });

      return React.createElement(
        'div',
        null,
        React.createElement(Select.AsyncCreatable, {
          name: this.props.name,
          className: 'city-select ' + this.props.classes,
          value: this.state.value,
          options: options,
          onChange: this.handleChange,
          noResultsText: 'No results for this city',
          placeholder: 'Start typing a city name...',
          loadOptions: this.searchPlaces
        }),
        this.props.errorMessage && React.createElement(
          'div',
          { className: 'error-message minicaps' },
          this.props.errorMessage
        )
      );
    }
  }]);
  return PlaceSelect;
}(Component);

var SelectWithLabel = function SelectWithLabel(props) {
  return React.createElement(
    'div',
    { className: '' + props.classes },
    React.createElement(
      'label',
      { htmlFor: props.name },
      props.label + ' ' + (props.required ? '*' : '')
    ),
    React.createElement(Select, {
      name: props.name,
      className: props.selectClasses,
      value: props.value,
      options: props.options,
      onChange: props.onChange,
      onInputChange: props.onInputChange,
      noResultsText: props.noResultsText,
      placeholder: props.placeholder,
      multi: props.multi || false
    }),
    props.errorMessage && React.createElement(
      'div',
      { className: 'error-message minicaps' },
      props.errorMessage
    )
  );
};

var SwitchWithLabels = function (_Component) {
  inherits(SwitchWithLabels, _Component);

  function SwitchWithLabels(props) {
    classCallCheck(this, SwitchWithLabels);

    var _this = possibleConstructorReturn(this, (SwitchWithLabels.__proto__ || Object.getPrototypeOf(SwitchWithLabels)).call(this, props));

    _this.state = { checked: _this.props.defaultChecked };
    _this.handleChange = function (event) {
      return _this._handleChange(event);
    };
    _this.handleClickLabel = function (value) {
      return _this._handleClickLabel(value);
    };
    _this.handleChange = function (event) {
      return _this._handleChange(event);
    };
    return _this;
  }

  createClass(SwitchWithLabels, [{
    key: "_handleChange",
    value: function _handleChange(event) {
      var checked = event.currentTarget.checked;

      this.setState({ checked: checked }, this.props.onChange(checked));
    }
  }, {
    key: "_handleClickLabel",
    value: function _handleClickLabel(value) {
      var _this2 = this;

      return function () {
        _this2.setState({ checked: value }, _this2.props.onChange(value));
      };
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "switch-container" },
        React.createElement(
          "span",
          { onClick: this.handleClickLabel(false) },
          this.props.labelLeft
        ),
        React.createElement(
          "label",
          null,
          React.createElement("input", {
            checked: this.state.checked,
            onChange: this.handleChange,
            className: "switch",
            type: "checkbox"
          }),
          React.createElement(
            "div",
            { className: "switch-background" },
            React.createElement("div", { className: "switch-button" })
          )
        ),
        React.createElement(
          "span",
          { onClick: this.handleClickLabel(true) },
          this.props.labelRight
        )
      );
    }
  }]);
  return SwitchWithLabels;
}(Component);

var TextareaWithLabel = function TextareaWithLabel(props) {
  var onChange = function onChange(e) {
    props.handleChange(defineProperty({}, props.name, e.currentTarget.value));
  };

  return React.createElement(
    'div',
    { className: 'input-with-label form-group ' + props.classes },
    React.createElement(
      'label',
      { htmlFor: props.name },
      props.label + ' ' + (props.required ? '*' : '')
    ),
    React.createElement('textarea', {
      className: 'form-control',
      type: props.type || 'text',
      name: props.name,
      id: props.id,
      onChange: onChange,
      value: props.value,
      placeholder: props.placeholder
    }),
    props.errorMessage && React.createElement(
      'div',
      { className: 'error-message minicaps' },
      props.errorMessage
    )
  );
};

var TimePickerWithLabel = function TimePickerWithLabel(props) {
  var saveFormat = 'HH:mm';
  var displayFormat = 'h:mm a';

  var onChange = function onChange(value) {
    var time = !!value ? value.format(saveFormat) : null;
    props.handleChange(defineProperty({}, props.name, time));
  };

  var time = !!props.value ? moment(props.value, saveFormat) : null;

  return React.createElement(
    'div',
    { className: 'input-with-label form-group ' + props.classes },
    React.createElement(
      'label',
      { htmlFor: props.name },
      props.label + ' ' + (props.required ? '*' : '')
    ),
    React.createElement(TimePicker, {
      showSecond: false,
      use12Hours: true,
      value: time,
      format: displayFormat,
      name: props.name,
      id: props.id,
      onChange: onChange,
      minuteStep: 15,
      allowEmpty: true
    }),
    props.errorMessage && React.createElement(
      'div',
      { className: 'error-message minicaps' },
      props.errorMessage
    )
  );
};

var GEONAMES_ENDPOINT = 'https://secure.geonames.org/timezoneJSON';

var TimeZoneSelect = function (_Component) {
  inherits(TimeZoneSelect, _Component);

  function TimeZoneSelect(props) {
    classCallCheck(this, TimeZoneSelect);

    var _this = possibleConstructorReturn(this, (TimeZoneSelect.__proto__ || Object.getPrototypeOf(TimeZoneSelect)).call(this, props));

    _this.state = { value: _this.props.timezone };
    _this.onChange = function (s) {
      return _this._onChange(s);
    };
    _this.detectTimeZone = function () {
      return _this._detectTimeZone();
    };
    return _this;
  }

  createClass(TimeZoneSelect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.detectTimeZone();
    }
  }, {
    key: '_onChange',
    value: function _onChange(selected) {
      var timezone = !!selected ? selected.value : null;
      this.props.handleChange({ timezone: timezone });
      this.setState({ value: selected });
    }
  }, {
    key: '_detectTimeZone',
    value: function _detectTimeZone() {
      var _this2 = this;

      if (!!this.props.timezone) {
        // use selected timezone
        this.setState({ value: { value: this.props.timezone, label: this.props.timezone } });
      } else if (!!this.props.latitude && !!this.props.longitude) {
        // use selected city to detect timezone
        var url = GEONAMES_ENDPOINT + '?lat=' + this.props.latitude + '&lng=' + this.props.longitude + '&username=p2pu';
        axios.get(url).then(function (res) {
          var timezone = res.data.timezoneId;
          _this2.props.handleChange({ timezone: timezone });
          _this2.setState({ value: { value: timezone, label: timezone } });
        }).catch(function (err) {
          return console.log(err);
        });
      } else {
        // detect timezone from browser
        var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.props.handleChange({ timezone: timezone });
        this.setState({ value: { value: timezone, label: timezone } });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _React$createElement;

      var timezoneOptions = moment$1.tz.names().map(function (tz) {
        return { value: tz, label: tz };
      });

      return React.createElement(
        'div',
        null,
        React.createElement(Select, (_React$createElement = {
          name: this.props.name,
          className: 'form-group input-with-label',
          value: this.state.value,
          onChange: this.onChange,
          options: timezoneOptions
        }, defineProperty(_React$createElement, 'name', 'timezone'), defineProperty(_React$createElement, 'id', 'id_timezone'), _React$createElement)),
        this.props.errorMessage && React.createElement(
          'div',
          { className: 'error-message minicaps' },
          this.props.errorMessage
        )
      );
    }
  }]);
  return TimeZoneSelect;
}(Component);

export { CheckboxWithLabel, DatePickerWithLabel, ImageUploader, InputWithLabel, PlaceSelect, SelectWithLabel, SwitchWithLabels, TextareaWithLabel, TimePickerWithLabel, TimeZoneSelect };
