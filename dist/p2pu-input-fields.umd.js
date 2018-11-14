(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('react-dom'), require('jsonp'), require('moment'), require('axios'), require('rc-time-picker'), require('rc-time-picker/assets/index.css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'react-dom', 'jsonp', 'moment', 'axios', 'rc-time-picker', 'rc-time-picker/assets/index.css'], factory) :
  (factory((global.p2puInputFields = {}),global.React,global.PropTypes,global.ReactDOM,global.jsonp,global.moment,global.axios,global['rc-time-picker']));
}(this, (function (exports,React,PropTypes,reactDom,jsonp,moment,axios,TimePicker) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  var reactDom__default = 'default' in reactDom ? reactDom['default'] : reactDom;
  jsonp = jsonp && jsonp.hasOwnProperty('default') ? jsonp['default'] : jsonp;
  moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;
  axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;
  TimePicker = TimePicker && TimePicker.hasOwnProperty('default') ? TimePicker['default'] : TimePicker;

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

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  var CheckboxWithLabel = function CheckboxWithLabel(props) {
    var onChange = function onChange(e) {
      props.handleChange(defineProperty({}, props.name, e.currentTarget.checked));
    };

    return React__default.createElement(
      'div',
      { className: 'checkbox-with-label label-right ' + props.classes },
      React__default.createElement('input', {
        type: 'checkbox',
        name: props.name,
        id: props.id || props.name,
        onChange: onChange,
        checked: props.checked,
        style: { marginRight: '10px' }
      }),
      React__default.createElement(
        'label',
        { htmlFor: props.name },
        props.label
      ),
      props.errorMessage && React__default.createElement(
        'div',
        { className: 'error-message minicaps' },
        props.errorMessage
      )
    );
  };

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var AutosizeInput_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
  	value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(PropTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var sizerStyle = {
  	position: 'absolute',
  	top: 0,
  	left: 0,
  	visibility: 'hidden',
  	height: 0,
  	overflow: 'scroll',
  	whiteSpace: 'pre'
  };

  var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

  var cleanInputProps = function cleanInputProps(inputProps) {
  	INPUT_PROPS_BLACKLIST.forEach(function (field) {
  		return delete inputProps[field];
  	});
  	return inputProps;
  };

  var copyStyles = function copyStyles(styles, node) {
  	node.style.fontSize = styles.fontSize;
  	node.style.fontFamily = styles.fontFamily;
  	node.style.fontWeight = styles.fontWeight;
  	node.style.fontStyle = styles.fontStyle;
  	node.style.letterSpacing = styles.letterSpacing;
  	node.style.textTransform = styles.textTransform;
  };

  var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

  var generateId = function generateId() {
  	// we only need an auto-generated ID for stylesheet injection, which is only
  	// used for IE. so if the browser is not IE, this should return undefined.
  	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
  };

  var AutosizeInput = function (_Component) {
  	_inherits(AutosizeInput, _Component);

  	function AutosizeInput(props) {
  		_classCallCheck(this, AutosizeInput);

  		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

  		_this.inputRef = function (el) {
  			_this.input = el;
  			if (typeof _this.props.inputRef === 'function') {
  				_this.props.inputRef(el);
  			}
  		};

  		_this.placeHolderSizerRef = function (el) {
  			_this.placeHolderSizer = el;
  		};

  		_this.sizerRef = function (el) {
  			_this.sizer = el;
  		};

  		_this.state = {
  			inputWidth: props.minWidth,
  			inputId: props.id || generateId()
  		};
  		return _this;
  	}

  	_createClass(AutosizeInput, [{
  		key: 'componentDidMount',
  		value: function componentDidMount() {
  			this.mounted = true;
  			this.copyInputStyles();
  			this.updateInputWidth();
  		}
  	}, {
  		key: 'componentWillReceiveProps',
  		value: function componentWillReceiveProps(nextProps) {
  			var id = nextProps.id;

  			if (id !== this.props.id) {
  				this.setState({ inputId: id || generateId() });
  			}
  		}
  	}, {
  		key: 'componentDidUpdate',
  		value: function componentDidUpdate(prevProps, prevState) {
  			if (prevState.inputWidth !== this.state.inputWidth) {
  				if (typeof this.props.onAutosize === 'function') {
  					this.props.onAutosize(this.state.inputWidth);
  				}
  			}
  			this.updateInputWidth();
  		}
  	}, {
  		key: 'componentWillUnmount',
  		value: function componentWillUnmount() {
  			this.mounted = false;
  		}
  	}, {
  		key: 'copyInputStyles',
  		value: function copyInputStyles() {
  			if (!this.mounted || !window.getComputedStyle) {
  				return;
  			}
  			var inputStyles = this.input && window.getComputedStyle(this.input);
  			if (!inputStyles) {
  				return;
  			}
  			copyStyles(inputStyles, this.sizer);
  			if (this.placeHolderSizer) {
  				copyStyles(inputStyles, this.placeHolderSizer);
  			}
  		}
  	}, {
  		key: 'updateInputWidth',
  		value: function updateInputWidth() {
  			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
  				return;
  			}
  			var newInputWidth = void 0;
  			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
  				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
  			} else {
  				newInputWidth = this.sizer.scrollWidth + 2;
  			}
  			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
  			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
  			newInputWidth += extraWidth;
  			if (newInputWidth < this.props.minWidth) {
  				newInputWidth = this.props.minWidth;
  			}
  			if (newInputWidth !== this.state.inputWidth) {
  				this.setState({
  					inputWidth: newInputWidth
  				});
  			}
  		}
  	}, {
  		key: 'getInput',
  		value: function getInput() {
  			return this.input;
  		}
  	}, {
  		key: 'focus',
  		value: function focus() {
  			this.input.focus();
  		}
  	}, {
  		key: 'blur',
  		value: function blur() {
  			this.input.blur();
  		}
  	}, {
  		key: 'select',
  		value: function select() {
  			this.input.select();
  		}
  	}, {
  		key: 'renderStyles',
  		value: function renderStyles() {
  			// this method injects styles to hide IE's clear indicator, which messes
  			// with input size detection. the stylesheet is only injected when the
  			// browser is IE, and can also be disabled by the `injectStyles` prop.
  			var injectStyles = this.props.injectStyles;

  			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
  					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
  				} }) : null;
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
  				if (previousValue !== null && previousValue !== undefined) {
  					return previousValue;
  				}
  				return currentValue;
  			});

  			var wrapperStyle = _extends({}, this.props.style);
  			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

  			var inputStyle = _extends({
  				boxSizing: 'content-box',
  				width: this.state.inputWidth + 'px'
  			}, this.props.inputStyle);

  			var inputProps = _objectWithoutProperties(this.props, []);

  			cleanInputProps(inputProps);
  			inputProps.className = this.props.inputClassName;
  			inputProps.id = this.state.inputId;
  			inputProps.style = inputStyle;

  			return _react2.default.createElement(
  				'div',
  				{ className: this.props.className, style: wrapperStyle },
  				this.renderStyles(),
  				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
  				_react2.default.createElement(
  					'div',
  					{ ref: this.sizerRef, style: sizerStyle },
  					sizerValue
  				),
  				this.props.placeholder ? _react2.default.createElement(
  					'div',
  					{ ref: this.placeHolderSizerRef, style: sizerStyle },
  					this.props.placeholder
  				) : null
  			);
  		}
  	}]);

  	return AutosizeInput;
  }(React__default.Component);

  AutosizeInput.propTypes = {
  	className: _propTypes2.default.string, // className for the outer element
  	defaultValue: _propTypes2.default.any, // default field value
  	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
  	_propTypes2.default.number, _propTypes2.default.string]),
  	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
  	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
  	inputClassName: _propTypes2.default.string, // className for the input element
  	inputRef: _propTypes2.default.func, // ref callback for the input element
  	inputStyle: _propTypes2.default.object, // css styles for the input element
  	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
  	_propTypes2.default.number, _propTypes2.default.string]),
  	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
  	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
  	placeholder: _propTypes2.default.string, // placeholder text
  	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
  	style: _propTypes2.default.object, // css styles for the outer element
  	value: _propTypes2.default.any // field value
  };
  AutosizeInput.defaultProps = {
  	minWidth: 1,
  	injectStyles: true
  };

  exports.default = AutosizeInput;
  });

  var AutosizeInput = unwrapExports(AutosizeInput_1);

  var classnames = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2016 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  /* global define */

  (function () {

  	var hasOwn = {}.hasOwnProperty;

  	function classNames () {
  		var classes = [];

  		for (var i = 0; i < arguments.length; i++) {
  			var arg = arguments[i];
  			if (!arg) continue;

  			var argType = typeof arg;

  			if (argType === 'string' || argType === 'number') {
  				classes.push(arg);
  			} else if (Array.isArray(arg)) {
  				classes.push(classNames.apply(null, arg));
  			} else if (argType === 'object') {
  				for (var key in arg) {
  					if (hasOwn.call(arg, key) && arg[key]) {
  						classes.push(key);
  					}
  				}
  			}
  		}

  		return classes.join(' ');
  	}

  	if (module.exports) {
  		module.exports = classNames;
  	} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
  		// register as 'classnames', consistent with npm package name
  		undefined('classnames', [], function () {
  			return classNames;
  		});
  	} else {
  		window.classNames = classNames;
  	}
  }());
  });

  var arrowRenderer = function arrowRenderer(_ref) {
  	var onMouseDown = _ref.onMouseDown;

  	return React__default.createElement('span', {
  		className: 'Select-arrow',
  		onMouseDown: onMouseDown
  	});
  };

  arrowRenderer.propTypes = {
  	onMouseDown: PropTypes.func
  };

  var clearRenderer = function clearRenderer() {
  	return React__default.createElement('span', {
  		className: 'Select-clear',
  		dangerouslySetInnerHTML: { __html: '&times;' }
  	});
  };

  var map = [{ 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { 'base': 'AA', 'letters': /[\uA732]/g }, { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g }, { 'base': 'AO', 'letters': /[\uA734]/g }, { 'base': 'AU', 'letters': /[\uA736]/g }, { 'base': 'AV', 'letters': /[\uA738\uA73A]/g }, { 'base': 'AY', 'letters': /[\uA73C]/g }, { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g }, { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g }, { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { 'base': 'LJ', 'letters': /[\u01C7]/g }, { 'base': 'Lj', 'letters': /[\u01C8]/g }, { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { 'base': 'NJ', 'letters': /[\u01CA]/g }, { 'base': 'Nj', 'letters': /[\u01CB]/g }, { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { 'base': 'OI', 'letters': /[\u01A2]/g }, { 'base': 'OO', 'letters': /[\uA74E]/g }, { 'base': 'OU', 'letters': /[\u0222]/g }, { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { 'base': 'TZ', 'letters': /[\uA728]/g }, { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { 'base': 'VY', 'letters': /[\uA760]/g }, { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { 'base': 'aa', 'letters': /[\uA733]/g }, { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g }, { 'base': 'ao', 'letters': /[\uA735]/g }, { 'base': 'au', 'letters': /[\uA737]/g }, { 'base': 'av', 'letters': /[\uA739\uA73B]/g }, { 'base': 'ay', 'letters': /[\uA73D]/g }, { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g }, { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { 'base': 'hv', 'letters': /[\u0195]/g }, { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { 'base': 'lj', 'letters': /[\u01C9]/g }, { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { 'base': 'nj', 'letters': /[\u01CC]/g }, { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { 'base': 'oi', 'letters': /[\u01A3]/g }, { 'base': 'ou', 'letters': /[\u0223]/g }, { 'base': 'oo', 'letters': /[\uA74F]/g }, { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { 'base': 'tz', 'letters': /[\uA729]/g }, { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { 'base': 'vy', 'letters': /[\uA761]/g }, { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];

  var stripDiacritics = function stripDiacritics(str) {
  	for (var i = 0; i < map.length; i++) {
  		str = str.replace(map[i].letters, map[i].base);
  	}
  	return str;
  };

  var trim = function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
  };

  var isValid = function isValid(value) {
  	return typeof value !== 'undefined' && value !== null && value !== '';
  };

  var filterOptions = function filterOptions(options, filterValue, excludeOptions, props) {
  	if (props.ignoreAccents) {
  		filterValue = stripDiacritics(filterValue);
  	}

  	if (props.ignoreCase) {
  		filterValue = filterValue.toLowerCase();
  	}

  	if (props.trimFilter) {
  		filterValue = trim(filterValue);
  	}

  	if (excludeOptions) excludeOptions = excludeOptions.map(function (i) {
  		return i[props.valueKey];
  	});

  	return options.filter(function (option) {
  		if (excludeOptions && excludeOptions.indexOf(option[props.valueKey]) > -1) return false;
  		if (props.filterOption) return props.filterOption.call(undefined, option, filterValue);
  		if (!filterValue) return true;

  		var value = option[props.valueKey];
  		var label = option[props.labelKey];
  		var hasValue = isValid(value);
  		var hasLabel = isValid(label);

  		if (!hasValue && !hasLabel) {
  			return false;
  		}

  		var valueTest = hasValue ? String(value) : null;
  		var labelTest = hasLabel ? String(label) : null;

  		if (props.ignoreAccents) {
  			if (valueTest && props.matchProp !== 'label') valueTest = stripDiacritics(valueTest);
  			if (labelTest && props.matchProp !== 'value') labelTest = stripDiacritics(labelTest);
  		}

  		if (props.ignoreCase) {
  			if (valueTest && props.matchProp !== 'label') valueTest = valueTest.toLowerCase();
  			if (labelTest && props.matchProp !== 'value') labelTest = labelTest.toLowerCase();
  		}

  		return props.matchPos === 'start' ? valueTest && props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || labelTest && props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : valueTest && props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || labelTest && props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
  	});
  };

  var menuRenderer = function menuRenderer(_ref) {
  	var focusedOption = _ref.focusedOption,
  	    focusOption = _ref.focusOption,
  	    inputValue = _ref.inputValue,
  	    instancePrefix = _ref.instancePrefix,
  	    onFocus = _ref.onFocus,
  	    onOptionRef = _ref.onOptionRef,
  	    onSelect = _ref.onSelect,
  	    optionClassName = _ref.optionClassName,
  	    optionComponent = _ref.optionComponent,
  	    optionRenderer = _ref.optionRenderer,
  	    options = _ref.options,
  	    removeValue = _ref.removeValue,
  	    selectValue = _ref.selectValue,
  	    valueArray = _ref.valueArray,
  	    valueKey = _ref.valueKey;

  	var Option = optionComponent;

  	return options.map(function (option, i) {
  		var isSelected = valueArray && valueArray.some(function (x) {
  			return x[valueKey] === option[valueKey];
  		});
  		var isFocused = option === focusedOption;
  		var optionClass = classnames(optionClassName, {
  			'Select-option': true,
  			'is-selected': isSelected,
  			'is-focused': isFocused,
  			'is-disabled': option.disabled
  		});

  		return React__default.createElement(
  			Option,
  			{
  				className: optionClass,
  				focusOption: focusOption,
  				inputValue: inputValue,
  				instancePrefix: instancePrefix,
  				isDisabled: option.disabled,
  				isFocused: isFocused,
  				isSelected: isSelected,
  				key: 'option-' + i + '-' + option[valueKey],
  				onFocus: onFocus,
  				onSelect: onSelect,
  				option: option,
  				optionIndex: i,
  				ref: function ref(_ref2) {
  					onOptionRef(_ref2, isFocused);
  				},
  				removeValue: removeValue,
  				selectValue: selectValue
  			},
  			optionRenderer(option, i, inputValue)
  		);
  	});
  };

  menuRenderer.propTypes = {
  	focusOption: PropTypes.func,
  	focusedOption: PropTypes.object,
  	inputValue: PropTypes.string,
  	instancePrefix: PropTypes.string,
  	onFocus: PropTypes.func,
  	onOptionRef: PropTypes.func,
  	onSelect: PropTypes.func,
  	optionClassName: PropTypes.string,
  	optionComponent: PropTypes.func,
  	optionRenderer: PropTypes.func,
  	options: PropTypes.array,
  	removeValue: PropTypes.func,
  	selectValue: PropTypes.func,
  	valueArray: PropTypes.array,
  	valueKey: PropTypes.string
  };

  var blockEvent = (function (event) {
  	event.preventDefault();
  	event.stopPropagation();
  	if (event.target.tagName !== 'A' || !('href' in event.target)) {
  		return;
  	}
  	if (event.target.target) {
  		window.open(event.target.href, event.target.target);
  	} else {
  		window.location.href = event.target.href;
  	}
  });

  var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };





  var classCallCheck$1 = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass$1 = function () {
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





  var defineProperty$1 = function (obj, key, value) {
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

  var _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };



  var inherits$1 = function (subClass, superClass) {
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









  var objectWithoutProperties$1 = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  var possibleConstructorReturn$1 = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var Option = function (_React$Component) {
  	inherits$1(Option, _React$Component);

  	function Option(props) {
  		classCallCheck$1(this, Option);

  		var _this = possibleConstructorReturn$1(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

  		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
  		_this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
  		_this.handleMouseMove = _this.handleMouseMove.bind(_this);
  		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
  		_this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
  		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
  		_this.onFocus = _this.onFocus.bind(_this);
  		return _this;
  	}

  	createClass$1(Option, [{
  		key: 'handleMouseDown',
  		value: function handleMouseDown(event) {
  			event.preventDefault();
  			event.stopPropagation();
  			this.props.onSelect(this.props.option, event);
  		}
  	}, {
  		key: 'handleMouseEnter',
  		value: function handleMouseEnter(event) {
  			this.onFocus(event);
  		}
  	}, {
  		key: 'handleMouseMove',
  		value: function handleMouseMove(event) {
  			this.onFocus(event);
  		}
  	}, {
  		key: 'handleTouchEnd',
  		value: function handleTouchEnd(event) {
  			// Check if the view is being dragged, In this case
  			// we don't want to fire the click event (because the user only wants to scroll)
  			if (this.dragging) return;

  			this.handleMouseDown(event);
  		}
  	}, {
  		key: 'handleTouchMove',
  		value: function handleTouchMove() {
  			// Set a flag that the view is being dragged
  			this.dragging = true;
  		}
  	}, {
  		key: 'handleTouchStart',
  		value: function handleTouchStart() {
  			// Set a flag that the view is not being dragged
  			this.dragging = false;
  		}
  	}, {
  		key: 'onFocus',
  		value: function onFocus(event) {
  			if (!this.props.isFocused) {
  				this.props.onFocus(this.props.option, event);
  			}
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			var _props = this.props,
  			    option = _props.option,
  			    instancePrefix = _props.instancePrefix,
  			    optionIndex = _props.optionIndex;

  			var className = classnames(this.props.className, option.className);

  			return option.disabled ? React__default.createElement(
  				'div',
  				{ className: className,
  					onMouseDown: blockEvent,
  					onClick: blockEvent },
  				this.props.children
  			) : React__default.createElement(
  				'div',
  				{ className: className,
  					style: option.style,
  					role: 'option',
  					'aria-label': option.label,
  					onMouseDown: this.handleMouseDown,
  					onMouseEnter: this.handleMouseEnter,
  					onMouseMove: this.handleMouseMove,
  					onTouchStart: this.handleTouchStart,
  					onTouchMove: this.handleTouchMove,
  					onTouchEnd: this.handleTouchEnd,
  					id: instancePrefix + '-option-' + optionIndex,
  					title: option.title },
  				this.props.children
  			);
  		}
  	}]);
  	return Option;
  }(React__default.Component);

  Option.propTypes = {
  	children: PropTypes.node,
  	className: PropTypes.string, // className (based on mouse position)
  	instancePrefix: PropTypes.string.isRequired, // unique prefix for the ids (used for aria)
  	isDisabled: PropTypes.bool, // the option is disabled
  	isFocused: PropTypes.bool, // the option is focused
  	isSelected: PropTypes.bool, // the option is selected
  	onFocus: PropTypes.func, // method to handle mouseEnter on option element
  	onSelect: PropTypes.func, // method to handle click on option element
  	onUnfocus: PropTypes.func, // method to handle mouseLeave on option element
  	option: PropTypes.object.isRequired, // object that is base for that option
  	optionIndex: PropTypes.number // index of the option, used to generate unique ids for aria
  };

  var Value = function (_React$Component) {
  	inherits$1(Value, _React$Component);

  	function Value(props) {
  		classCallCheck$1(this, Value);

  		var _this = possibleConstructorReturn$1(this, (Value.__proto__ || Object.getPrototypeOf(Value)).call(this, props));

  		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
  		_this.onRemove = _this.onRemove.bind(_this);
  		_this.handleTouchEndRemove = _this.handleTouchEndRemove.bind(_this);
  		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
  		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
  		return _this;
  	}

  	createClass$1(Value, [{
  		key: 'handleMouseDown',
  		value: function handleMouseDown(event) {
  			if (event.type === 'mousedown' && event.button !== 0) {
  				return;
  			}
  			if (this.props.onClick) {
  				event.stopPropagation();
  				this.props.onClick(this.props.value, event);
  				return;
  			}
  			if (this.props.value.href) {
  				event.stopPropagation();
  			}
  		}
  	}, {
  		key: 'onRemove',
  		value: function onRemove(event) {
  			event.preventDefault();
  			event.stopPropagation();
  			this.props.onRemove(this.props.value);
  		}
  	}, {
  		key: 'handleTouchEndRemove',
  		value: function handleTouchEndRemove(event) {
  			// Check if the view is being dragged, In this case
  			// we don't want to fire the click event (because the user only wants to scroll)
  			if (this.dragging) return;

  			// Fire the mouse events
  			this.onRemove(event);
  		}
  	}, {
  		key: 'handleTouchMove',
  		value: function handleTouchMove() {
  			// Set a flag that the view is being dragged
  			this.dragging = true;
  		}
  	}, {
  		key: 'handleTouchStart',
  		value: function handleTouchStart() {
  			// Set a flag that the view is not being dragged
  			this.dragging = false;
  		}
  	}, {
  		key: 'renderRemoveIcon',
  		value: function renderRemoveIcon() {
  			if (this.props.disabled || !this.props.onRemove) return;
  			return React__default.createElement(
  				'span',
  				{ className: 'Select-value-icon',
  					'aria-hidden': 'true',
  					onMouseDown: this.onRemove,
  					onTouchEnd: this.handleTouchEndRemove,
  					onTouchStart: this.handleTouchStart,
  					onTouchMove: this.handleTouchMove },
  				'\xD7'
  			);
  		}
  	}, {
  		key: 'renderLabel',
  		value: function renderLabel() {
  			var className = 'Select-value-label';
  			return this.props.onClick || this.props.value.href ? React__default.createElement(
  				'a',
  				{ className: className, href: this.props.value.href, target: this.props.value.target, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown },
  				this.props.children
  			) : React__default.createElement(
  				'span',
  				{ className: className, role: 'option', 'aria-selected': 'true', id: this.props.id },
  				this.props.children
  			);
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			return React__default.createElement(
  				'div',
  				{ className: classnames('Select-value', this.props.value.className),
  					style: this.props.value.style,
  					title: this.props.value.title
  				},
  				this.renderRemoveIcon(),
  				this.renderLabel()
  			);
  		}
  	}]);
  	return Value;
  }(React__default.Component);

  Value.propTypes = {
  	children: PropTypes.node,
  	disabled: PropTypes.bool, // disabled prop passed to ReactSelect
  	id: PropTypes.string, // Unique id for the value - used for aria
  	onClick: PropTypes.func, // method to handle click on value label
  	onRemove: PropTypes.func, // method to handle removal of the value
  	value: PropTypes.object.isRequired // the option object for this value
  };

  /*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/react-select
  */
  var stringifyValue = function stringifyValue(value) {
  	return typeof value === 'string' ? value : value !== null && JSON.stringify(value) || '';
  };

  var stringOrNode = PropTypes.oneOfType([PropTypes.string, PropTypes.node]);
  var stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

  var instanceId = 1;

  var shouldShowValue = function shouldShowValue(state, props) {
  	var inputValue = state.inputValue,
  	    isPseudoFocused = state.isPseudoFocused,
  	    isFocused = state.isFocused;
  	var onSelectResetsInput = props.onSelectResetsInput;


  	if (!inputValue) return true;

  	if (!onSelectResetsInput) {
  		return !(!isFocused && isPseudoFocused || isFocused && !isPseudoFocused);
  	}

  	return false;
  };

  var shouldShowPlaceholder = function shouldShowPlaceholder(state, props, isOpen) {
  	var inputValue = state.inputValue,
  	    isPseudoFocused = state.isPseudoFocused,
  	    isFocused = state.isFocused;
  	var onSelectResetsInput = props.onSelectResetsInput;


  	return !inputValue || !onSelectResetsInput && !isOpen && !isPseudoFocused && !isFocused;
  };

  /**
   * Retrieve a value from the given options and valueKey
   * @param {String|Number|Array} value	- the selected value(s)
   * @param {Object}		 props	- the Select component's props (or nextProps)
   */
  var expandValue = function expandValue(value, props) {
  	var valueType = typeof value === 'undefined' ? 'undefined' : _typeof$1(value);
  	if (valueType !== 'string' && valueType !== 'number' && valueType !== 'boolean') return value;
  	var options = props.options,
  	    valueKey = props.valueKey;

  	if (!options) return;
  	for (var i = 0; i < options.length; i++) {
  		if (String(options[i][valueKey]) === String(value)) return options[i];
  	}
  };

  var handleRequired = function handleRequired(value, multi) {
  	if (!value) return true;
  	return multi ? value.length === 0 : Object.keys(value).length === 0;
  };

  var Select$1 = function (_React$Component) {
  	inherits$1(Select, _React$Component);

  	function Select(props) {
  		classCallCheck$1(this, Select);

  		var _this = possibleConstructorReturn$1(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

  		['clearValue', 'focusOption', 'getOptionLabel', 'handleInputBlur', 'handleInputChange', 'handleInputFocus', 'handleInputValueChange', 'handleKeyDown', 'handleMenuScroll', 'handleMouseDown', 'handleMouseDownOnArrow', 'handleMouseDownOnMenu', 'handleTouchEnd', 'handleTouchEndClearValue', 'handleTouchMove', 'handleTouchOutside', 'handleTouchStart', 'handleValueClick', 'onOptionRef', 'removeValue', 'selectValue'].forEach(function (fn) {
  			return _this[fn] = _this[fn].bind(_this);
  		});

  		_this.state = {
  			inputValue: '',
  			isFocused: false,
  			isOpen: false,
  			isPseudoFocused: false,
  			required: false
  		};
  		return _this;
  	}

  	createClass$1(Select, [{
  		key: 'componentWillMount',
  		value: function componentWillMount() {
  			this._instancePrefix = 'react-select-' + (this.props.instanceId || ++instanceId) + '-';
  			var valueArray = this.getValueArray(this.props.value);

  			if (this.props.required) {
  				this.setState({
  					required: handleRequired(valueArray[0], this.props.multi)
  				});
  			}
  		}
  	}, {
  		key: 'componentDidMount',
  		value: function componentDidMount() {
  			if (typeof this.props.autofocus !== 'undefined' && typeof console !== 'undefined') {
  				console.warn('Warning: The autofocus prop has changed to autoFocus, support will be removed after react-select@1.0');
  			}
  			if (this.props.autoFocus || this.props.autofocus) {
  				this.focus();
  			}
  		}
  	}, {
  		key: 'componentWillReceiveProps',
  		value: function componentWillReceiveProps(nextProps) {
  			var valueArray = this.getValueArray(nextProps.value, nextProps);

  			if (nextProps.required) {
  				this.setState({
  					required: handleRequired(valueArray[0], nextProps.multi)
  				});
  			} else if (this.props.required) {
  				// Used to be required but it's not any more
  				this.setState({ required: false });
  			}

  			if (this.state.inputValue && this.props.value !== nextProps.value && nextProps.onSelectResetsInput) {
  				this.setState({ inputValue: this.handleInputValueChange('') });
  			}
  		}
  	}, {
  		key: 'componentDidUpdate',
  		value: function componentDidUpdate(prevProps, prevState) {
  			// focus to the selected option
  			if (this.menu && this.focused && this.state.isOpen && !this.hasScrolledToOption) {
  				var focusedOptionNode = reactDom.findDOMNode(this.focused);
  				var menuNode = reactDom.findDOMNode(this.menu);

  				var scrollTop = menuNode.scrollTop;
  				var scrollBottom = scrollTop + menuNode.offsetHeight;
  				var optionTop = focusedOptionNode.offsetTop;
  				var optionBottom = optionTop + focusedOptionNode.offsetHeight;

  				if (scrollTop > optionTop || scrollBottom < optionBottom) {
  					menuNode.scrollTop = focusedOptionNode.offsetTop;
  				}

  				// We still set hasScrolledToOption to true even if we didn't
  				// actually need to scroll, as we've still confirmed that the
  				// option is in view.
  				this.hasScrolledToOption = true;
  			} else if (!this.state.isOpen) {
  				this.hasScrolledToOption = false;
  			}

  			if (this._scrollToFocusedOptionOnUpdate && this.focused && this.menu) {
  				this._scrollToFocusedOptionOnUpdate = false;
  				var focusedDOM = reactDom.findDOMNode(this.focused);
  				var menuDOM = reactDom.findDOMNode(this.menu);
  				var focusedRect = focusedDOM.getBoundingClientRect();
  				var menuRect = menuDOM.getBoundingClientRect();
  				if (focusedRect.bottom > menuRect.bottom) {
  					menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
  				} else if (focusedRect.top < menuRect.top) {
  					menuDOM.scrollTop = focusedDOM.offsetTop;
  				}
  			}
  			if (this.props.scrollMenuIntoView && this.menuContainer) {
  				var menuContainerRect = this.menuContainer.getBoundingClientRect();
  				if (window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer) {
  					window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
  				}
  			}
  			if (prevProps.disabled !== this.props.disabled) {
  				this.setState({ isFocused: false }); // eslint-disable-line react/no-did-update-set-state
  				this.closeMenu();
  			}
  			if (prevState.isOpen !== this.state.isOpen) {
  				this.toggleTouchOutsideEvent(this.state.isOpen);
  				var handler = this.state.isOpen ? this.props.onOpen : this.props.onClose;
  				handler && handler();
  			}
  		}
  	}, {
  		key: 'componentWillUnmount',
  		value: function componentWillUnmount() {
  			this.toggleTouchOutsideEvent(false);
  		}
  	}, {
  		key: 'toggleTouchOutsideEvent',
  		value: function toggleTouchOutsideEvent(enabled) {
  			if (enabled) {
  				if (!document.addEventListener && document.attachEvent) {
  					document.attachEvent('ontouchstart', this.handleTouchOutside);
  				} else {
  					document.addEventListener('touchstart', this.handleTouchOutside);
  				}
  			} else {
  				if (!document.removeEventListener && document.detachEvent) {
  					document.detachEvent('ontouchstart', this.handleTouchOutside);
  				} else {
  					document.removeEventListener('touchstart', this.handleTouchOutside);
  				}
  			}
  		}
  	}, {
  		key: 'handleTouchOutside',
  		value: function handleTouchOutside(event) {
  			// handle touch outside on ios to dismiss menu
  			if (this.wrapper && !this.wrapper.contains(event.target)) {
  				this.closeMenu();
  			}
  		}
  	}, {
  		key: 'focus',
  		value: function focus() {
  			if (!this.input) return;
  			this.input.focus();
  		}
  	}, {
  		key: 'blurInput',
  		value: function blurInput() {
  			if (!this.input) return;
  			this.input.blur();
  		}
  	}, {
  		key: 'handleTouchMove',
  		value: function handleTouchMove() {
  			// Set a flag that the view is being dragged
  			this.dragging = true;
  		}
  	}, {
  		key: 'handleTouchStart',
  		value: function handleTouchStart() {
  			// Set a flag that the view is not being dragged
  			this.dragging = false;
  		}
  	}, {
  		key: 'handleTouchEnd',
  		value: function handleTouchEnd(event) {
  			// Check if the view is being dragged, In this case
  			// we don't want to fire the click event (because the user only wants to scroll)
  			if (this.dragging) return;

  			// Fire the mouse events
  			this.handleMouseDown(event);
  		}
  	}, {
  		key: 'handleTouchEndClearValue',
  		value: function handleTouchEndClearValue(event) {
  			// Check if the view is being dragged, In this case
  			// we don't want to fire the click event (because the user only wants to scroll)
  			if (this.dragging) return;

  			// Clear the value
  			this.clearValue(event);
  		}
  	}, {
  		key: 'handleMouseDown',
  		value: function handleMouseDown(event) {
  			// if the event was triggered by a mousedown and not the primary
  			// button, or if the component is disabled, ignore it.
  			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
  				return;
  			}

  			if (event.target.tagName === 'INPUT') {
  				if (!this.state.isFocused) {
  					this._openAfterFocus = this.props.openOnClick;
  					this.focus();
  				} else if (!this.state.isOpen) {
  					this.setState({
  						isOpen: true,
  						isPseudoFocused: false
  					});
  				}

  				return;
  			}

  			// prevent default event handlers
  			event.preventDefault();

  			// for the non-searchable select, toggle the menu
  			if (!this.props.searchable) {
  				// This code means that if a select is searchable, onClick the options menu will not appear, only on subsequent click will it open.
  				this.focus();
  				return this.setState({
  					isOpen: !this.state.isOpen
  				});
  			}

  			if (this.state.isFocused) {
  				// On iOS, we can get into a state where we think the input is focused but it isn't really,
  				// since iOS ignores programmatic calls to input.focus() that weren't triggered by a click event.
  				// Call focus() again here to be safe.
  				this.focus();

  				var input = this.input;
  				var toOpen = true;

  				if (typeof input.getInput === 'function') {
  					// Get the actual DOM input if the ref is an <AutosizeInput /> component
  					input = input.getInput();
  				}

  				// clears the value so that the cursor will be at the end of input when the component re-renders
  				input.value = '';

  				if (this._focusAfterClear) {
  					toOpen = false;
  					this._focusAfterClear = false;
  				}

  				// if the input is focused, ensure the menu is open
  				this.setState({
  					isOpen: toOpen,
  					isPseudoFocused: false,
  					focusedOption: null
  				});
  			} else {
  				// otherwise, focus the input and open the menu
  				this._openAfterFocus = this.props.openOnClick;
  				this.focus();
  				this.setState({ focusedOption: null });
  			}
  		}
  	}, {
  		key: 'handleMouseDownOnArrow',
  		value: function handleMouseDownOnArrow(event) {
  			// if the event was triggered by a mousedown and not the primary
  			// button, or if the component is disabled, ignore it.
  			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
  				return;
  			}

  			if (this.state.isOpen) {
  				// prevent default event handlers
  				event.stopPropagation();
  				event.preventDefault();
  				// close the menu
  				this.closeMenu();
  			} else {
  				// If the menu isn't open, let the event bubble to the main handleMouseDown
  				this.setState({
  					isOpen: true
  				});
  			}
  		}
  	}, {
  		key: 'handleMouseDownOnMenu',
  		value: function handleMouseDownOnMenu(event) {
  			// if the event was triggered by a mousedown and not the primary
  			// button, or if the component is disabled, ignore it.
  			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
  				return;
  			}

  			event.stopPropagation();
  			event.preventDefault();

  			this._openAfterFocus = true;
  			this.focus();
  		}
  	}, {
  		key: 'closeMenu',
  		value: function closeMenu() {
  			if (this.props.onCloseResetsInput) {
  				this.setState({
  					inputValue: this.handleInputValueChange(''),
  					isOpen: false,
  					isPseudoFocused: this.state.isFocused && !this.props.multi
  				});
  			} else {
  				this.setState({
  					isOpen: false,
  					isPseudoFocused: this.state.isFocused && !this.props.multi
  				});
  			}
  			this.hasScrolledToOption = false;
  		}
  	}, {
  		key: 'handleInputFocus',
  		value: function handleInputFocus(event) {
  			if (this.props.disabled) return;

  			var toOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;
  			toOpen = this._focusAfterClear ? false : toOpen; //if focus happens after clear values, don't open dropdown yet.

  			if (this.props.onFocus) {
  				this.props.onFocus(event);
  			}

  			this.setState({
  				isFocused: true,
  				isOpen: !!toOpen
  			});

  			this._focusAfterClear = false;
  			this._openAfterFocus = false;
  		}
  	}, {
  		key: 'handleInputBlur',
  		value: function handleInputBlur(event) {
  			// The check for menu.contains(activeElement) is necessary to prevent IE11's scrollbar from closing the menu in certain contexts.
  			if (this.menu && (this.menu === document.activeElement || this.menu.contains(document.activeElement))) {
  				this.focus();
  				return;
  			}

  			if (this.props.onBlur) {
  				this.props.onBlur(event);
  			}
  			var onBlurredState = {
  				isFocused: false,
  				isOpen: false,
  				isPseudoFocused: false
  			};
  			if (this.props.onBlurResetsInput) {
  				onBlurredState.inputValue = this.handleInputValueChange('');
  			}
  			this.setState(onBlurredState);
  		}
  	}, {
  		key: 'handleInputChange',
  		value: function handleInputChange(event) {
  			var newInputValue = event.target.value;

  			if (this.state.inputValue !== event.target.value) {
  				newInputValue = this.handleInputValueChange(newInputValue);
  			}

  			this.setState({
  				inputValue: newInputValue,
  				isOpen: true,
  				isPseudoFocused: false
  			});
  		}
  	}, {
  		key: 'setInputValue',
  		value: function setInputValue(newValue) {
  			if (this.props.onInputChange) {
  				var nextState = this.props.onInputChange(newValue);
  				if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof$1(nextState)) !== 'object') {
  					newValue = '' + nextState;
  				}
  			}
  			this.setState({
  				inputValue: newValue
  			});
  		}
  	}, {
  		key: 'handleInputValueChange',
  		value: function handleInputValueChange(newValue) {
  			if (this.props.onInputChange) {
  				var nextState = this.props.onInputChange(newValue);
  				// Note: != used deliberately here to catch undefined and null
  				if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof$1(nextState)) !== 'object') {
  					newValue = '' + nextState;
  				}
  			}
  			return newValue;
  		}
  	}, {
  		key: 'handleKeyDown',
  		value: function handleKeyDown(event) {
  			if (this.props.disabled) return;

  			if (typeof this.props.onInputKeyDown === 'function') {
  				this.props.onInputKeyDown(event);
  				if (event.defaultPrevented) {
  					return;
  				}
  			}

  			switch (event.keyCode) {
  				case 8:
  					// backspace
  					if (!this.state.inputValue && this.props.backspaceRemoves) {
  						event.preventDefault();
  						this.popValue();
  					}
  					break;
  				case 9:
  					// tab
  					if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) {
  						break;
  					}
  					event.preventDefault();
  					this.selectFocusedOption();
  					break;
  				case 13:
  					// enter
  					event.preventDefault();
  					event.stopPropagation();
  					if (this.state.isOpen) {
  						this.selectFocusedOption();
  					} else {
  						this.focusNextOption();
  					}
  					break;
  				case 27:
  					// escape
  					event.preventDefault();
  					if (this.state.isOpen) {
  						this.closeMenu();
  						event.stopPropagation();
  					} else if (this.props.clearable && this.props.escapeClearsValue) {
  						this.clearValue(event);
  						event.stopPropagation();
  					}
  					break;
  				case 32:
  					// space
  					if (this.props.searchable) {
  						break;
  					}
  					event.preventDefault();
  					if (!this.state.isOpen) {
  						this.focusNextOption();
  						break;
  					}
  					event.stopPropagation();
  					this.selectFocusedOption();
  					break;
  				case 38:
  					// up
  					event.preventDefault();
  					this.focusPreviousOption();
  					break;
  				case 40:
  					// down
  					event.preventDefault();
  					this.focusNextOption();
  					break;
  				case 33:
  					// page up
  					event.preventDefault();
  					this.focusPageUpOption();
  					break;
  				case 34:
  					// page down
  					event.preventDefault();
  					this.focusPageDownOption();
  					break;
  				case 35:
  					// end key
  					if (event.shiftKey) {
  						break;
  					}
  					event.preventDefault();
  					this.focusEndOption();
  					break;
  				case 36:
  					// home key
  					if (event.shiftKey) {
  						break;
  					}
  					event.preventDefault();
  					this.focusStartOption();
  					break;
  				case 46:
  					// delete
  					if (!this.state.inputValue && this.props.deleteRemoves) {
  						event.preventDefault();
  						this.popValue();
  					}
  					break;
  			}
  		}
  	}, {
  		key: 'handleValueClick',
  		value: function handleValueClick(option, event) {
  			if (!this.props.onValueClick) return;
  			this.props.onValueClick(option, event);
  		}
  	}, {
  		key: 'handleMenuScroll',
  		value: function handleMenuScroll(event) {
  			if (!this.props.onMenuScrollToBottom) return;
  			var target = event.target;

  			if (target.scrollHeight > target.offsetHeight && target.scrollHeight - target.offsetHeight - target.scrollTop <= 0) {
  				this.props.onMenuScrollToBottom();
  			}
  		}
  	}, {
  		key: 'getOptionLabel',
  		value: function getOptionLabel(op) {
  			return op[this.props.labelKey];
  		}

  		/**
     * Turns a value into an array from the given options
     * @param {String|Number|Array} value		- the value of the select input
     * @param {Object}		nextProps	- optionally specify the nextProps so the returned array uses the latest configuration
     * @returns	{Array}	the value of the select represented in an array
     */

  	}, {
  		key: 'getValueArray',
  		value: function getValueArray(value) {
  			var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  			/** support optionally passing in the `nextProps` so `componentWillReceiveProps` updates will function as expected */
  			var props = (typeof nextProps === 'undefined' ? 'undefined' : _typeof$1(nextProps)) === 'object' ? nextProps : this.props;
  			if (props.multi) {
  				if (typeof value === 'string') {
  					value = value.split(props.delimiter);
  				}
  				if (!Array.isArray(value)) {
  					if (value === null || value === undefined) return [];
  					value = [value];
  				}
  				return value.map(function (value) {
  					return expandValue(value, props);
  				}).filter(function (i) {
  					return i;
  				});
  			}
  			var expandedValue = expandValue(value, props);
  			return expandedValue ? [expandedValue] : [];
  		}
  	}, {
  		key: 'setValue',
  		value: function setValue(value) {
  			var _this2 = this;

  			if (this.props.autoBlur) {
  				this.blurInput();
  			}
  			if (this.props.required) {
  				var required = handleRequired(value, this.props.multi);
  				this.setState({ required: required });
  			}
  			if (this.props.simpleValue && value) {
  				value = this.props.multi ? value.map(function (i) {
  					return i[_this2.props.valueKey];
  				}).join(this.props.delimiter) : value[this.props.valueKey];
  			}
  			if (this.props.onChange) {
  				this.props.onChange(value);
  			}
  		}
  	}, {
  		key: 'selectValue',
  		value: function selectValue(value) {
  			var _this3 = this;

  			// NOTE: we actually add/set the value in a callback to make sure the
  			// input value is empty to avoid styling issues in Chrome
  			if (this.props.closeOnSelect) {
  				this.hasScrolledToOption = false;
  			}
  			var updatedValue = this.props.onSelectResetsInput ? '' : this.state.inputValue;
  			if (this.props.multi) {
  				this.setState({
  					focusedIndex: null,
  					inputValue: this.handleInputValueChange(updatedValue),
  					isOpen: !this.props.closeOnSelect
  				}, function () {
  					var valueArray = _this3.getValueArray(_this3.props.value);
  					if (valueArray.some(function (i) {
  						return i[_this3.props.valueKey] === value[_this3.props.valueKey];
  					})) {
  						_this3.removeValue(value);
  					} else {
  						_this3.addValue(value);
  					}
  				});
  			} else {
  				this.setState({
  					inputValue: this.handleInputValueChange(updatedValue),
  					isOpen: !this.props.closeOnSelect,
  					isPseudoFocused: this.state.isFocused
  				}, function () {
  					_this3.setValue(value);
  				});
  			}
  		}
  	}, {
  		key: 'addValue',
  		value: function addValue(value) {
  			var valueArray = this.getValueArray(this.props.value);
  			var visibleOptions = this._visibleOptions.filter(function (val) {
  				return !val.disabled;
  			});
  			var lastValueIndex = visibleOptions.indexOf(value);
  			this.setValue(valueArray.concat(value));
  			if (visibleOptions.length - 1 === lastValueIndex) {
  				// the last option was selected; focus the second-last one
  				this.focusOption(visibleOptions[lastValueIndex - 1]);
  			} else if (visibleOptions.length > lastValueIndex) {
  				// focus the option below the selected one
  				this.focusOption(visibleOptions[lastValueIndex + 1]);
  			}
  		}
  	}, {
  		key: 'popValue',
  		value: function popValue() {
  			var valueArray = this.getValueArray(this.props.value);
  			if (!valueArray.length) return;
  			if (valueArray[valueArray.length - 1].clearableValue === false) return;
  			this.setValue(this.props.multi ? valueArray.slice(0, valueArray.length - 1) : null);
  		}
  	}, {
  		key: 'removeValue',
  		value: function removeValue(value) {
  			var _this4 = this;

  			var valueArray = this.getValueArray(this.props.value);
  			this.setValue(valueArray.filter(function (i) {
  				return i[_this4.props.valueKey] !== value[_this4.props.valueKey];
  			}));
  			this.focus();
  		}
  	}, {
  		key: 'clearValue',
  		value: function clearValue(event) {
  			// if the event was triggered by a mousedown and not the primary
  			// button, ignore it.
  			if (event && event.type === 'mousedown' && event.button !== 0) {
  				return;
  			}

  			event.preventDefault();

  			this.setValue(this.getResetValue());
  			this.setState({
  				inputValue: this.handleInputValueChange(''),
  				isOpen: false
  			}, this.focus);

  			this._focusAfterClear = true;
  		}
  	}, {
  		key: 'getResetValue',
  		value: function getResetValue() {
  			if (this.props.resetValue !== undefined) {
  				return this.props.resetValue;
  			} else if (this.props.multi) {
  				return [];
  			} else {
  				return null;
  			}
  		}
  	}, {
  		key: 'focusOption',
  		value: function focusOption(option) {
  			this.setState({
  				focusedOption: option
  			});
  		}
  	}, {
  		key: 'focusNextOption',
  		value: function focusNextOption() {
  			this.focusAdjacentOption('next');
  		}
  	}, {
  		key: 'focusPreviousOption',
  		value: function focusPreviousOption() {
  			this.focusAdjacentOption('previous');
  		}
  	}, {
  		key: 'focusPageUpOption',
  		value: function focusPageUpOption() {
  			this.focusAdjacentOption('page_up');
  		}
  	}, {
  		key: 'focusPageDownOption',
  		value: function focusPageDownOption() {
  			this.focusAdjacentOption('page_down');
  		}
  	}, {
  		key: 'focusStartOption',
  		value: function focusStartOption() {
  			this.focusAdjacentOption('start');
  		}
  	}, {
  		key: 'focusEndOption',
  		value: function focusEndOption() {
  			this.focusAdjacentOption('end');
  		}
  	}, {
  		key: 'focusAdjacentOption',
  		value: function focusAdjacentOption(dir) {
  			var options = this._visibleOptions.map(function (option, index) {
  				return { option: option, index: index };
  			}).filter(function (option) {
  				return !option.option.disabled;
  			});
  			this._scrollToFocusedOptionOnUpdate = true;
  			if (!this.state.isOpen) {
  				var newState = {
  					focusedOption: this._focusedOption || (options.length ? options[dir === 'next' ? 0 : options.length - 1].option : null),
  					isOpen: true
  				};
  				if (this.props.onSelectResetsInput) {
  					newState.inputValue = '';
  				}
  				this.setState(newState);
  				return;
  			}
  			if (!options.length) return;
  			var focusedIndex = -1;
  			for (var i = 0; i < options.length; i++) {
  				if (this._focusedOption === options[i].option) {
  					focusedIndex = i;
  					break;
  				}
  			}
  			if (dir === 'next' && focusedIndex !== -1) {
  				focusedIndex = (focusedIndex + 1) % options.length;
  			} else if (dir === 'previous') {
  				if (focusedIndex > 0) {
  					focusedIndex = focusedIndex - 1;
  				} else {
  					focusedIndex = options.length - 1;
  				}
  			} else if (dir === 'start') {
  				focusedIndex = 0;
  			} else if (dir === 'end') {
  				focusedIndex = options.length - 1;
  			} else if (dir === 'page_up') {
  				var potentialIndex = focusedIndex - this.props.pageSize;
  				if (potentialIndex < 0) {
  					focusedIndex = 0;
  				} else {
  					focusedIndex = potentialIndex;
  				}
  			} else if (dir === 'page_down') {
  				var _potentialIndex = focusedIndex + this.props.pageSize;
  				if (_potentialIndex > options.length - 1) {
  					focusedIndex = options.length - 1;
  				} else {
  					focusedIndex = _potentialIndex;
  				}
  			}

  			if (focusedIndex === -1) {
  				focusedIndex = 0;
  			}

  			this.setState({
  				focusedIndex: options[focusedIndex].index,
  				focusedOption: options[focusedIndex].option
  			});
  		}
  	}, {
  		key: 'getFocusedOption',
  		value: function getFocusedOption() {
  			return this._focusedOption;
  		}
  	}, {
  		key: 'selectFocusedOption',
  		value: function selectFocusedOption() {
  			if (this._focusedOption) {
  				return this.selectValue(this._focusedOption);
  			}
  		}
  	}, {
  		key: 'renderLoading',
  		value: function renderLoading() {
  			if (!this.props.isLoading) return;
  			return React__default.createElement(
  				'span',
  				{ className: 'Select-loading-zone', 'aria-hidden': 'true' },
  				React__default.createElement('span', { className: 'Select-loading' })
  			);
  		}
  	}, {
  		key: 'renderValue',
  		value: function renderValue(valueArray, isOpen) {
  			var _this5 = this;

  			var renderLabel = this.props.valueRenderer || this.getOptionLabel;
  			var ValueComponent = this.props.valueComponent;
  			if (!valueArray.length) {
  				var showPlaceholder = shouldShowPlaceholder(this.state, this.props, isOpen);
  				return showPlaceholder ? React__default.createElement(
  					'div',
  					{ className: 'Select-placeholder' },
  					this.props.placeholder
  				) : null;
  			}
  			var onClick = this.props.onValueClick ? this.handleValueClick : null;
  			if (this.props.multi) {
  				return valueArray.map(function (value, i) {
  					return React__default.createElement(
  						ValueComponent,
  						{
  							disabled: _this5.props.disabled || value.clearableValue === false,
  							id: _this5._instancePrefix + '-value-' + i,
  							instancePrefix: _this5._instancePrefix,
  							key: 'value-' + i + '-' + value[_this5.props.valueKey],
  							onClick: onClick,
  							onRemove: _this5.removeValue,
  							placeholder: _this5.props.placeholder,
  							value: value
  						},
  						renderLabel(value, i),
  						React__default.createElement(
  							'span',
  							{ className: 'Select-aria-only' },
  							'\xA0'
  						)
  					);
  				});
  			} else if (shouldShowValue(this.state, this.props)) {
  				if (isOpen) onClick = null;
  				return React__default.createElement(
  					ValueComponent,
  					{
  						disabled: this.props.disabled,
  						id: this._instancePrefix + '-value-item',
  						instancePrefix: this._instancePrefix,
  						onClick: onClick,
  						placeholder: this.props.placeholder,
  						value: valueArray[0]
  					},
  					renderLabel(valueArray[0])
  				);
  			}
  		}
  	}, {
  		key: 'renderInput',
  		value: function renderInput(valueArray, focusedOptionIndex) {
  			var _classNames,
  			    _this6 = this;

  			var className = classnames('Select-input', this.props.inputProps.className);
  			var isOpen = this.state.isOpen;

  			var ariaOwns = classnames((_classNames = {}, defineProperty$1(_classNames, this._instancePrefix + '-list', isOpen), defineProperty$1(_classNames, this._instancePrefix + '-backspace-remove-message', this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), _classNames));

  			var value = this.state.inputValue;
  			if (value && !this.props.onSelectResetsInput && !this.state.isFocused) {
  				// it hides input value when it is not focused and was not reset on select
  				value = '';
  			}

  			var inputProps = _extends$1({}, this.props.inputProps, {
  				'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
  				'aria-describedby': this.props['aria-describedby'],
  				'aria-expanded': '' + isOpen,
  				'aria-haspopup': '' + isOpen,
  				'aria-label': this.props['aria-label'],
  				'aria-labelledby': this.props['aria-labelledby'],
  				'aria-owns': ariaOwns,
  				className: className,
  				onBlur: this.handleInputBlur,
  				onChange: this.handleInputChange,
  				onFocus: this.handleInputFocus,
  				ref: function ref(_ref) {
  					return _this6.input = _ref;
  				},
  				role: 'combobox',
  				required: this.state.required,
  				tabIndex: this.props.tabIndex,
  				value: value
  			});

  			if (this.props.inputRenderer) {
  				return this.props.inputRenderer(inputProps);
  			}

  			if (this.props.disabled || !this.props.searchable) {
  				var divProps = objectWithoutProperties$1(this.props.inputProps, []);


  				var _ariaOwns = classnames(defineProperty$1({}, this._instancePrefix + '-list', isOpen));
  				return React__default.createElement('div', _extends$1({}, divProps, {
  					'aria-expanded': isOpen,
  					'aria-owns': _ariaOwns,
  					'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
  					'aria-disabled': '' + this.props.disabled,
  					'aria-label': this.props['aria-label'],
  					'aria-labelledby': this.props['aria-labelledby'],
  					className: className,
  					onBlur: this.handleInputBlur,
  					onFocus: this.handleInputFocus,
  					ref: function ref(_ref2) {
  						return _this6.input = _ref2;
  					},
  					role: 'combobox',
  					style: { border: 0, width: 1, display: 'inline-block' },
  					tabIndex: this.props.tabIndex || 0
  				}));
  			}

  			if (this.props.autosize) {
  				return React__default.createElement(AutosizeInput, _extends$1({ id: this.props.id }, inputProps, { minWidth: '5' }));
  			}
  			return React__default.createElement(
  				'div',
  				{ className: className, key: 'input-wrap', style: { display: 'inline-block' } },
  				React__default.createElement('input', _extends$1({ id: this.props.id }, inputProps))
  			);
  		}
  	}, {
  		key: 'renderClear',
  		value: function renderClear() {
  			var valueArray = this.getValueArray(this.props.value);
  			if (!this.props.clearable || !valueArray.length || this.props.disabled || this.props.isLoading) return;
  			var ariaLabel = this.props.multi ? this.props.clearAllText : this.props.clearValueText;
  			var clear = this.props.clearRenderer();

  			return React__default.createElement(
  				'span',
  				{
  					'aria-label': ariaLabel,
  					className: 'Select-clear-zone',
  					onMouseDown: this.clearValue,
  					onTouchEnd: this.handleTouchEndClearValue,
  					onTouchMove: this.handleTouchMove,
  					onTouchStart: this.handleTouchStart,
  					title: ariaLabel
  				},
  				clear
  			);
  		}
  	}, {
  		key: 'renderArrow',
  		value: function renderArrow() {
  			if (!this.props.arrowRenderer) return;

  			var onMouseDown = this.handleMouseDownOnArrow;
  			var isOpen = this.state.isOpen;
  			var arrow = this.props.arrowRenderer({ onMouseDown: onMouseDown, isOpen: isOpen });

  			if (!arrow) {
  				return null;
  			}

  			return React__default.createElement(
  				'span',
  				{
  					className: 'Select-arrow-zone',
  					onMouseDown: onMouseDown
  				},
  				arrow
  			);
  		}
  	}, {
  		key: 'filterOptions',
  		value: function filterOptions$$1(excludeOptions) {
  			var filterValue = this.state.inputValue;
  			var options = this.props.options || [];
  			if (this.props.filterOptions) {
  				// Maintain backwards compatibility with boolean attribute
  				var filterOptions$$1 = typeof this.props.filterOptions === 'function' ? this.props.filterOptions : filterOptions;

  				return filterOptions$$1(options, filterValue, excludeOptions, {
  					filterOption: this.props.filterOption,
  					ignoreAccents: this.props.ignoreAccents,
  					ignoreCase: this.props.ignoreCase,
  					labelKey: this.props.labelKey,
  					matchPos: this.props.matchPos,
  					matchProp: this.props.matchProp,
  					trimFilter: this.props.trimFilter,
  					valueKey: this.props.valueKey
  				});
  			} else {
  				return options;
  			}
  		}
  	}, {
  		key: 'onOptionRef',
  		value: function onOptionRef(ref, isFocused) {
  			if (isFocused) {
  				this.focused = ref;
  			}
  		}
  	}, {
  		key: 'renderMenu',
  		value: function renderMenu(options, valueArray, focusedOption) {
  			if (options && options.length) {
  				return this.props.menuRenderer({
  					focusedOption: focusedOption,
  					focusOption: this.focusOption,
  					inputValue: this.state.inputValue,
  					instancePrefix: this._instancePrefix,
  					labelKey: this.props.labelKey,
  					onFocus: this.focusOption,
  					onOptionRef: this.onOptionRef,
  					onSelect: this.selectValue,
  					optionClassName: this.props.optionClassName,
  					optionComponent: this.props.optionComponent,
  					optionRenderer: this.props.optionRenderer || this.getOptionLabel,
  					options: options,
  					removeValue: this.removeValue,
  					selectValue: this.selectValue,
  					valueArray: valueArray,
  					valueKey: this.props.valueKey
  				});
  			} else if (this.props.noResultsText) {
  				return React__default.createElement(
  					'div',
  					{ className: 'Select-noresults' },
  					this.props.noResultsText
  				);
  			} else {
  				return null;
  			}
  		}
  	}, {
  		key: 'renderHiddenField',
  		value: function renderHiddenField(valueArray) {
  			var _this7 = this;

  			if (!this.props.name) return;
  			if (this.props.joinValues) {
  				var value = valueArray.map(function (i) {
  					return stringifyValue(i[_this7.props.valueKey]);
  				}).join(this.props.delimiter);
  				return React__default.createElement('input', {
  					disabled: this.props.disabled,
  					name: this.props.name,
  					ref: function ref(_ref3) {
  						return _this7.value = _ref3;
  					},
  					type: 'hidden',
  					value: value
  				});
  			}
  			return valueArray.map(function (item, index) {
  				return React__default.createElement('input', {
  					disabled: _this7.props.disabled,
  					key: 'hidden.' + index,
  					name: _this7.props.name,
  					ref: 'value' + index,
  					type: 'hidden',
  					value: stringifyValue(item[_this7.props.valueKey])
  				});
  			});
  		}
  	}, {
  		key: 'getFocusableOptionIndex',
  		value: function getFocusableOptionIndex(selectedOption) {
  			var options = this._visibleOptions;
  			if (!options.length) return null;

  			var valueKey = this.props.valueKey;
  			var focusedOption = this.state.focusedOption || selectedOption;
  			if (focusedOption && !focusedOption.disabled) {
  				var focusedOptionIndex = -1;
  				options.some(function (option, index) {
  					var isOptionEqual = option[valueKey] === focusedOption[valueKey];
  					if (isOptionEqual) {
  						focusedOptionIndex = index;
  					}
  					return isOptionEqual;
  				});
  				if (focusedOptionIndex !== -1) {
  					return focusedOptionIndex;
  				}
  			}

  			for (var i = 0; i < options.length; i++) {
  				if (!options[i].disabled) return i;
  			}
  			return null;
  		}
  	}, {
  		key: 'renderOuter',
  		value: function renderOuter(options, valueArray, focusedOption) {
  			var _this8 = this;

  			var menu = this.renderMenu(options, valueArray, focusedOption);
  			if (!menu) {
  				return null;
  			}

  			return React__default.createElement(
  				'div',
  				{ ref: function ref(_ref5) {
  						return _this8.menuContainer = _ref5;
  					}, className: 'Select-menu-outer', style: this.props.menuContainerStyle },
  				React__default.createElement(
  					'div',
  					{
  						className: 'Select-menu',
  						id: this._instancePrefix + '-list',
  						onMouseDown: this.handleMouseDownOnMenu,
  						onScroll: this.handleMenuScroll,
  						ref: function ref(_ref4) {
  							return _this8.menu = _ref4;
  						},
  						role: 'listbox',
  						style: this.props.menuStyle,
  						tabIndex: -1
  					},
  					menu
  				)
  			);
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			var _this9 = this;

  			var valueArray = this.getValueArray(this.props.value);
  			var options = this._visibleOptions = this.filterOptions(this.props.multi && this.props.removeSelected ? valueArray : null);
  			var isOpen = this.state.isOpen;
  			if (this.props.multi && !options.length && valueArray.length && !this.state.inputValue) isOpen = false;
  			var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]);

  			var focusedOption = null;
  			if (focusedOptionIndex !== null) {
  				focusedOption = this._focusedOption = options[focusedOptionIndex];
  			} else {
  				focusedOption = this._focusedOption = null;
  			}
  			var className = classnames('Select', this.props.className, {
  				'has-value': valueArray.length,
  				'is-clearable': this.props.clearable,
  				'is-disabled': this.props.disabled,
  				'is-focused': this.state.isFocused,
  				'is-loading': this.props.isLoading,
  				'is-open': isOpen,
  				'is-pseudo-focused': this.state.isPseudoFocused,
  				'is-searchable': this.props.searchable,
  				'Select--multi': this.props.multi,
  				'Select--rtl': this.props.rtl,
  				'Select--single': !this.props.multi
  			});

  			var removeMessage = null;
  			if (this.props.multi && !this.props.disabled && valueArray.length && !this.state.inputValue && this.state.isFocused && this.props.backspaceRemoves) {
  				removeMessage = React__default.createElement(
  					'span',
  					{ id: this._instancePrefix + '-backspace-remove-message', className: 'Select-aria-only', 'aria-live': 'assertive' },
  					this.props.backspaceToRemoveMessage.replace('{label}', valueArray[valueArray.length - 1][this.props.labelKey])
  				);
  			}

  			return React__default.createElement(
  				'div',
  				{ ref: function ref(_ref7) {
  						return _this9.wrapper = _ref7;
  					},
  					className: className,
  					style: this.props.wrapperStyle },
  				this.renderHiddenField(valueArray),
  				React__default.createElement(
  					'div',
  					{ ref: function ref(_ref6) {
  							return _this9.control = _ref6;
  						},
  						className: 'Select-control',
  						onKeyDown: this.handleKeyDown,
  						onMouseDown: this.handleMouseDown,
  						onTouchEnd: this.handleTouchEnd,
  						onTouchMove: this.handleTouchMove,
  						onTouchStart: this.handleTouchStart,
  						style: this.props.style
  					},
  					React__default.createElement(
  						'span',
  						{ className: 'Select-multi-value-wrapper', id: this._instancePrefix + '-value' },
  						this.renderValue(valueArray, isOpen),
  						this.renderInput(valueArray, focusedOptionIndex)
  					),
  					removeMessage,
  					this.renderLoading(),
  					this.renderClear(),
  					this.renderArrow()
  				),
  				isOpen ? this.renderOuter(options, valueArray, focusedOption) : null
  			);
  		}
  	}]);
  	return Select;
  }(React__default.Component);

  Select$1.propTypes = {
  	'aria-describedby': PropTypes.string, // html id(s) of element(s) that should be used to describe this input (for assistive tech)
  	'aria-label': PropTypes.string, // aria label (for assistive tech)
  	'aria-labelledby': PropTypes.string, // html id of an element that should be used as the label (for assistive tech)
  	arrowRenderer: PropTypes.func, // create the drop-down caret element
  	autoBlur: PropTypes.bool, // automatically blur the component when an option is selected
  	autoFocus: PropTypes.bool, // autofocus the component on mount
  	autofocus: PropTypes.bool, // deprecated; use autoFocus instead
  	autosize: PropTypes.bool, // whether to enable autosizing or not
  	backspaceRemoves: PropTypes.bool, // whether backspace removes an item if there is no text input
  	backspaceToRemoveMessage: PropTypes.string, // message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
  	className: PropTypes.string, // className for the outer element
  	clearAllText: stringOrNode, // title for the "clear" control when multi: true
  	clearRenderer: PropTypes.func, // create clearable x element
  	clearValueText: stringOrNode, // title for the "clear" control
  	clearable: PropTypes.bool, // should it be possible to reset value
  	closeOnSelect: PropTypes.bool, // whether to close the menu when a value is selected
  	deleteRemoves: PropTypes.bool, // whether delete removes an item if there is no text input
  	delimiter: PropTypes.string, // delimiter to use to join multiple values for the hidden field value
  	disabled: PropTypes.bool, // whether the Select is disabled or not
  	escapeClearsValue: PropTypes.bool, // whether escape clears the value when the menu is closed
  	filterOption: PropTypes.func, // method to filter a single option (option, filterString)
  	filterOptions: PropTypes.any, // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
  	id: PropTypes.string, // html id to set on the input element for accessibility or tests
  	ignoreAccents: PropTypes.bool, // whether to strip diacritics when filtering
  	ignoreCase: PropTypes.bool, // whether to perform case-insensitive filtering
  	inputProps: PropTypes.object, // custom attributes for the Input
  	inputRenderer: PropTypes.func, // returns a custom input component
  	instanceId: PropTypes.string, // set the components instanceId
  	isLoading: PropTypes.bool, // whether the Select is loading externally or not (such as options being loaded)
  	joinValues: PropTypes.bool, // joins multiple values into a single form field with the delimiter (legacy mode)
  	labelKey: PropTypes.string, // path of the label value in option objects
  	matchPos: PropTypes.string, // (any|start) match the start or entire string when filtering
  	matchProp: PropTypes.string, // (any|label|value) which option property to filter on
  	menuBuffer: PropTypes.number, // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
  	menuContainerStyle: PropTypes.object, // optional style to apply to the menu container
  	menuRenderer: PropTypes.func, // renders a custom menu with options
  	menuStyle: PropTypes.object, // optional style to apply to the menu
  	multi: PropTypes.bool, // multi-value input
  	name: PropTypes.string, // generates a hidden <input /> tag with this field name for html forms
  	noResultsText: stringOrNode, // placeholder displayed when there are no matching search results
  	onBlur: PropTypes.func, // onBlur handler: function (event) {}
  	onBlurResetsInput: PropTypes.bool, // whether input is cleared on blur
  	onChange: PropTypes.func, // onChange handler: function (newValue) {}
  	onClose: PropTypes.func, // fires when the menu is closed
  	onCloseResetsInput: PropTypes.bool, // whether input is cleared when menu is closed through the arrow
  	onFocus: PropTypes.func, // onFocus handler: function (event) {}
  	onInputChange: PropTypes.func, // onInputChange handler: function (inputValue) {}
  	onInputKeyDown: PropTypes.func, // input keyDown handler: function (event) {}
  	onMenuScrollToBottom: PropTypes.func, // fires when the menu is scrolled to the bottom; can be used to paginate options
  	onOpen: PropTypes.func, // fires when the menu is opened
  	onSelectResetsInput: PropTypes.bool, // whether input is cleared on select (works only for multiselect)
  	onValueClick: PropTypes.func, // onClick handler for value labels: function (value, event) {}
  	openOnClick: PropTypes.bool, // boolean to control opening the menu when the control is clicked
  	openOnFocus: PropTypes.bool, // always open options menu on focus
  	optionClassName: PropTypes.string, // additional class(es) to apply to the <Option /> elements
  	optionComponent: PropTypes.func, // option component to render in dropdown
  	optionRenderer: PropTypes.func, // optionRenderer: function (option) {}
  	options: PropTypes.array, // array of options
  	pageSize: PropTypes.number, // number of entries to page when using page up/down keys
  	placeholder: stringOrNode, // field placeholder, displayed when there's no value
  	removeSelected: PropTypes.bool, // whether the selected option is removed from the dropdown on multi selects
  	required: PropTypes.bool, // applies HTML5 required attribute when needed
  	resetValue: PropTypes.any, // value to use when you clear the control
  	rtl: PropTypes.bool, // set to true in order to use react-select in right-to-left direction
  	scrollMenuIntoView: PropTypes.bool, // boolean to enable the viewport to shift so that the full menu fully visible when engaged
  	searchable: PropTypes.bool, // whether to enable searching feature or not
  	simpleValue: PropTypes.bool, // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
  	style: PropTypes.object, // optional style to apply to the control
  	tabIndex: stringOrNumber, // optional tab index of the control
  	tabSelectsValue: PropTypes.bool, // whether to treat tabbing out while focused to be value selection
  	trimFilter: PropTypes.bool, // whether to trim whitespace around filter value
  	value: PropTypes.any, // initial field value
  	valueComponent: PropTypes.func, // value component to render
  	valueKey: PropTypes.string, // path of the label value in option objects
  	valueRenderer: PropTypes.func, // valueRenderer: function (option) {}
  	wrapperStyle: PropTypes.object // optional style to apply to the component wrapper
  };

  Select$1.defaultProps = {
  	arrowRenderer: arrowRenderer,
  	autosize: true,
  	backspaceRemoves: true,
  	backspaceToRemoveMessage: 'Press backspace to remove {label}',
  	clearable: true,
  	clearAllText: 'Clear all',
  	clearRenderer: clearRenderer,
  	clearValueText: 'Clear value',
  	closeOnSelect: true,
  	deleteRemoves: true,
  	delimiter: ',',
  	disabled: false,
  	escapeClearsValue: true,
  	filterOptions: filterOptions,
  	ignoreAccents: true,
  	ignoreCase: true,
  	inputProps: {},
  	isLoading: false,
  	joinValues: false,
  	labelKey: 'label',
  	matchPos: 'any',
  	matchProp: 'any',
  	menuBuffer: 0,
  	menuRenderer: menuRenderer,
  	multi: false,
  	noResultsText: 'No results found',
  	onBlurResetsInput: true,
  	onCloseResetsInput: true,
  	onSelectResetsInput: true,
  	openOnClick: true,
  	optionComponent: Option,
  	pageSize: 5,
  	placeholder: 'Select...',
  	removeSelected: true,
  	required: false,
  	rtl: false,
  	scrollMenuIntoView: true,
  	searchable: true,
  	simpleValue: false,
  	tabSelectsValue: true,
  	trimFilter: true,
  	valueComponent: Value,
  	valueKey: 'value'
  };

  var propTypes = {
  	autoload: PropTypes.bool.isRequired, // automatically call the `loadOptions` prop on-mount; defaults to true
  	cache: PropTypes.any, // object to use to cache results; set to null/false to disable caching
  	children: PropTypes.func.isRequired, // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
  	ignoreAccents: PropTypes.bool, // strip diacritics when filtering; defaults to true
  	ignoreCase: PropTypes.bool, // perform case-insensitive filtering; defaults to true
  	loadOptions: PropTypes.func.isRequired, // callback to load options asynchronously; (inputValue: string, callback: Function): ?Promise
  	loadingPlaceholder: PropTypes.oneOfType([// replaces the placeholder while options are loading
  	PropTypes.string, PropTypes.node]),
  	multi: PropTypes.bool, // multi-value input
  	noResultsText: PropTypes.oneOfType([// field noResultsText, displayed when no options come back from the server
  	PropTypes.string, PropTypes.node]),
  	onChange: PropTypes.func, // onChange handler: function (newValue) {}
  	onInputChange: PropTypes.func, // optional for keeping track of what is being typed
  	options: PropTypes.array.isRequired, // array of options
  	placeholder: PropTypes.oneOfType([// field placeholder, displayed when there's no value (shared with Select)
  	PropTypes.string, PropTypes.node]),
  	searchPromptText: PropTypes.oneOfType([// label to prompt for search input
  	PropTypes.string, PropTypes.node]),
  	value: PropTypes.any // initial field value
  };

  var defaultCache = {};

  var defaultChildren = function defaultChildren(props) {
  	return React__default.createElement(Select$1, props);
  };

  var defaultProps = {
  	autoload: true,
  	cache: defaultCache,
  	children: defaultChildren,
  	ignoreAccents: true,
  	ignoreCase: true,
  	loadingPlaceholder: 'Loading...',
  	options: [],
  	searchPromptText: 'Type to search'
  };

  var Async = function (_Component) {
  	inherits$1(Async, _Component);

  	function Async(props, context) {
  		classCallCheck$1(this, Async);

  		var _this = possibleConstructorReturn$1(this, (Async.__proto__ || Object.getPrototypeOf(Async)).call(this, props, context));

  		_this._cache = props.cache === defaultCache ? {} : props.cache;

  		_this.state = {
  			inputValue: '',
  			isLoading: false,
  			options: props.options
  		};

  		_this.onInputChange = _this.onInputChange.bind(_this);
  		return _this;
  	}

  	createClass$1(Async, [{
  		key: 'componentDidMount',
  		value: function componentDidMount() {
  			var autoload = this.props.autoload;


  			if (autoload) {
  				this.loadOptions('');
  			}
  		}
  	}, {
  		key: 'componentWillReceiveProps',
  		value: function componentWillReceiveProps(nextProps) {
  			if (nextProps.options !== this.props.options) {
  				this.setState({
  					options: nextProps.options
  				});
  			}
  		}
  	}, {
  		key: 'componentWillUnmount',
  		value: function componentWillUnmount() {
  			this._callback = null;
  		}
  	}, {
  		key: 'loadOptions',
  		value: function loadOptions(inputValue) {
  			var _this2 = this;

  			var loadOptions = this.props.loadOptions;

  			var cache = this._cache;

  			if (cache && Object.prototype.hasOwnProperty.call(cache, inputValue)) {
  				this._callback = null;

  				this.setState({
  					isLoading: false,
  					options: cache[inputValue]
  				});

  				return;
  			}

  			var callback = function callback(error, data) {
  				var options = data && data.options || [];

  				if (cache) {
  					cache[inputValue] = options;
  				}

  				if (callback === _this2._callback) {
  					_this2._callback = null;

  					_this2.setState({
  						isLoading: false,
  						options: options
  					});
  				}
  			};

  			// Ignore all but the most recent request
  			this._callback = callback;

  			var promise = loadOptions(inputValue, callback);
  			if (promise) {
  				promise.then(function (data) {
  					return callback(null, data);
  				}, function (error) {
  					return callback(error);
  				});
  			}

  			if (this._callback && !this.state.isLoading) {
  				this.setState({
  					isLoading: true
  				});
  			}
  		}
  	}, {
  		key: 'onInputChange',
  		value: function onInputChange(inputValue) {
  			var _props = this.props,
  			    ignoreAccents = _props.ignoreAccents,
  			    ignoreCase = _props.ignoreCase,
  			    onInputChange = _props.onInputChange;

  			var newInputValue = inputValue;

  			if (onInputChange) {
  				var value = onInputChange(newInputValue);
  				// Note: != used deliberately here to catch undefined and null
  				if (value != null && (typeof value === 'undefined' ? 'undefined' : _typeof$1(value)) !== 'object') {
  					newInputValue = '' + value;
  				}
  			}

  			var transformedInputValue = newInputValue;

  			if (ignoreAccents) {
  				transformedInputValue = stripDiacritics(transformedInputValue);
  			}

  			if (ignoreCase) {
  				transformedInputValue = transformedInputValue.toLowerCase();
  			}

  			this.setState({ inputValue: newInputValue });
  			this.loadOptions(transformedInputValue);

  			// Return new input value, but without applying toLowerCase() to avoid modifying the user's view case of the input while typing.
  			return newInputValue;
  		}
  	}, {
  		key: 'noResultsText',
  		value: function noResultsText() {
  			var _props2 = this.props,
  			    loadingPlaceholder = _props2.loadingPlaceholder,
  			    noResultsText = _props2.noResultsText,
  			    searchPromptText = _props2.searchPromptText;
  			var _state = this.state,
  			    inputValue = _state.inputValue,
  			    isLoading = _state.isLoading;


  			if (isLoading) {
  				return loadingPlaceholder;
  			}
  			if (inputValue && noResultsText) {
  				return noResultsText;
  			}
  			return searchPromptText;
  		}
  	}, {
  		key: 'focus',
  		value: function focus() {
  			this.select.focus();
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			var _this3 = this;

  			var _props3 = this.props,
  			    children = _props3.children,
  			    loadingPlaceholder = _props3.loadingPlaceholder,
  			    placeholder = _props3.placeholder;
  			var _state2 = this.state,
  			    isLoading = _state2.isLoading,
  			    options = _state2.options;


  			var props = {
  				noResultsText: this.noResultsText(),
  				placeholder: isLoading ? loadingPlaceholder : placeholder,
  				options: isLoading && loadingPlaceholder ? [] : options,
  				ref: function ref(_ref) {
  					return _this3.select = _ref;
  				}
  			};

  			return children(_extends$1({}, this.props, props, {
  				isLoading: isLoading,
  				onInputChange: this.onInputChange
  			}));
  		}
  	}]);
  	return Async;
  }(React.Component);

  Async.propTypes = propTypes;
  Async.defaultProps = defaultProps;

  var CreatableSelect = function (_React$Component) {
  	inherits$1(CreatableSelect, _React$Component);

  	function CreatableSelect(props, context) {
  		classCallCheck$1(this, CreatableSelect);

  		var _this = possibleConstructorReturn$1(this, (CreatableSelect.__proto__ || Object.getPrototypeOf(CreatableSelect)).call(this, props, context));

  		_this.filterOptions = _this.filterOptions.bind(_this);
  		_this.menuRenderer = _this.menuRenderer.bind(_this);
  		_this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
  		_this.onInputChange = _this.onInputChange.bind(_this);
  		_this.onOptionSelect = _this.onOptionSelect.bind(_this);
  		return _this;
  	}

  	createClass$1(CreatableSelect, [{
  		key: 'createNewOption',
  		value: function createNewOption() {
  			var _props = this.props,
  			    isValidNewOption = _props.isValidNewOption,
  			    newOptionCreator = _props.newOptionCreator,
  			    onNewOptionClick = _props.onNewOptionClick,
  			    _props$options = _props.options,
  			    options = _props$options === undefined ? [] : _props$options;


  			if (isValidNewOption({ label: this.inputValue })) {
  				var option = newOptionCreator({ label: this.inputValue, labelKey: this.labelKey, valueKey: this.valueKey });
  				var _isOptionUnique = this.isOptionUnique({ option: option, options: options });

  				// Don't add the same option twice.
  				if (_isOptionUnique) {
  					if (onNewOptionClick) {
  						onNewOptionClick(option);
  					} else {
  						options.unshift(option);

  						this.select.selectValue(option);
  					}
  				}
  			}
  		}
  	}, {
  		key: 'filterOptions',
  		value: function filterOptions$$1() {
  			var _props2 = this.props,
  			    filterOptions$$1 = _props2.filterOptions,
  			    isValidNewOption = _props2.isValidNewOption,
  			    promptTextCreator = _props2.promptTextCreator;

  			// TRICKY Check currently selected options as well.
  			// Don't display a create-prompt for a value that's selected.
  			// This covers async edge-cases where a newly-created Option isn't yet in the async-loaded array.

  			var excludeOptions = (arguments.length <= 2 ? undefined : arguments[2]) || [];

  			var filteredOptions = filterOptions$$1.apply(undefined, arguments) || [];

  			if (isValidNewOption({ label: this.inputValue })) {
  				var _newOptionCreator = this.props.newOptionCreator;


  				var option = _newOptionCreator({
  					label: this.inputValue,
  					labelKey: this.labelKey,
  					valueKey: this.valueKey
  				});

  				// TRICKY Compare to all options (not just filtered options) in case option has already been selected).
  				// For multi-selects, this would remove it from the filtered list.
  				var _isOptionUnique2 = this.isOptionUnique({
  					option: option,
  					options: excludeOptions.concat(filteredOptions)
  				});

  				if (_isOptionUnique2) {
  					var prompt = promptTextCreator(this.inputValue);

  					this._createPlaceholderOption = _newOptionCreator({
  						label: prompt,
  						labelKey: this.labelKey,
  						valueKey: this.valueKey
  					});

  					filteredOptions.unshift(this._createPlaceholderOption);
  				}
  			}

  			return filteredOptions;
  		}
  	}, {
  		key: 'isOptionUnique',
  		value: function isOptionUnique(_ref) {
  			var option = _ref.option,
  			    options = _ref.options;
  			var isOptionUnique = this.props.isOptionUnique;


  			options = options || this.props.options;

  			return isOptionUnique({
  				labelKey: this.labelKey,
  				option: option,
  				options: options,
  				valueKey: this.valueKey
  			});
  		}
  	}, {
  		key: 'menuRenderer',
  		value: function menuRenderer$$1(params) {
  			var menuRenderer$$1 = this.props.menuRenderer;


  			return menuRenderer$$1(_extends$1({}, params, {
  				onSelect: this.onOptionSelect,
  				selectValue: this.onOptionSelect
  			}));
  		}
  	}, {
  		key: 'onInputChange',
  		value: function onInputChange(input) {
  			var onInputChange = this.props.onInputChange;

  			// This value may be needed in between Select mounts (when this.select is null)

  			this.inputValue = input;

  			if (onInputChange) {
  				this.inputValue = onInputChange(input);
  			}

  			return this.inputValue;
  		}
  	}, {
  		key: 'onInputKeyDown',
  		value: function onInputKeyDown(event) {
  			var _props3 = this.props,
  			    shouldKeyDownEventCreateNewOption = _props3.shouldKeyDownEventCreateNewOption,
  			    onInputKeyDown = _props3.onInputKeyDown;

  			var focusedOption = this.select.getFocusedOption();

  			if (focusedOption && focusedOption === this._createPlaceholderOption && shouldKeyDownEventCreateNewOption({ keyCode: event.keyCode })) {
  				this.createNewOption();

  				// Prevent decorated Select from doing anything additional with this keyDown event
  				event.preventDefault();
  			} else if (onInputKeyDown) {
  				onInputKeyDown(event);
  			}
  		}
  	}, {
  		key: 'onOptionSelect',
  		value: function onOptionSelect(option) {
  			if (option === this._createPlaceholderOption) {
  				this.createNewOption();
  			} else {
  				this.select.selectValue(option);
  			}
  		}
  	}, {
  		key: 'focus',
  		value: function focus() {
  			this.select.focus();
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			var _this2 = this;

  			var _props4 = this.props,
  			    refProp = _props4.ref,
  			    restProps = objectWithoutProperties$1(_props4, ['ref']);
  			var children = this.props.children;

  			// We can't use destructuring default values to set the children,
  			// because it won't apply work if `children` is null. A falsy check is
  			// more reliable in real world use-cases.

  			if (!children) {
  				children = defaultChildren$2;
  			}

  			var props = _extends$1({}, restProps, {
  				allowCreate: true,
  				filterOptions: this.filterOptions,
  				menuRenderer: this.menuRenderer,
  				onInputChange: this.onInputChange,
  				onInputKeyDown: this.onInputKeyDown,
  				ref: function ref(_ref2) {
  					_this2.select = _ref2;

  					// These values may be needed in between Select mounts (when this.select is null)
  					if (_ref2) {
  						_this2.labelKey = _ref2.props.labelKey;
  						_this2.valueKey = _ref2.props.valueKey;
  					}
  					if (refProp) {
  						refProp(_ref2);
  					}
  				}
  			});

  			return children(props);
  		}
  	}]);
  	return CreatableSelect;
  }(React__default.Component);

  var defaultChildren$2 = function defaultChildren(props) {
  	return React__default.createElement(Select$1, props);
  };

  var isOptionUnique = function isOptionUnique(_ref3) {
  	var option = _ref3.option,
  	    options = _ref3.options,
  	    labelKey = _ref3.labelKey,
  	    valueKey = _ref3.valueKey;

  	if (!options || !options.length) {
  		return true;
  	}

  	return options.filter(function (existingOption) {
  		return existingOption[labelKey] === option[labelKey] || existingOption[valueKey] === option[valueKey];
  	}).length === 0;
  };

  var isValidNewOption = function isValidNewOption(_ref4) {
  	var label = _ref4.label;
  	return !!label;
  };

  var newOptionCreator = function newOptionCreator(_ref5) {
  	var label = _ref5.label,
  	    labelKey = _ref5.labelKey,
  	    valueKey = _ref5.valueKey;

  	var option = {};
  	option[valueKey] = label;
  	option[labelKey] = label;
  	option.className = 'Select-create-option-placeholder';

  	return option;
  };

  var promptTextCreator = function promptTextCreator(label) {
  	return 'Create option "' + label + '"';
  };

  var shouldKeyDownEventCreateNewOption = function shouldKeyDownEventCreateNewOption(_ref6) {
  	var keyCode = _ref6.keyCode;

  	switch (keyCode) {
  		case 9: // TAB
  		case 13: // ENTER
  		case 188:
  			// COMMA
  			return true;
  		default:
  			return false;
  	}
  };

  // Default prop methods
  CreatableSelect.isOptionUnique = isOptionUnique;
  CreatableSelect.isValidNewOption = isValidNewOption;
  CreatableSelect.newOptionCreator = newOptionCreator;
  CreatableSelect.promptTextCreator = promptTextCreator;
  CreatableSelect.shouldKeyDownEventCreateNewOption = shouldKeyDownEventCreateNewOption;

  CreatableSelect.defaultProps = {
  	filterOptions: filterOptions,
  	isOptionUnique: isOptionUnique,
  	isValidNewOption: isValidNewOption,
  	menuRenderer: menuRenderer,
  	newOptionCreator: newOptionCreator,
  	promptTextCreator: promptTextCreator,
  	shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption
  };

  CreatableSelect.propTypes = {
  	// Child function responsible for creating the inner Select component
  	// This component can be used to compose HOCs (eg Creatable and Async)
  	// (props: Object): PropTypes.element
  	children: PropTypes.func,

  	// See Select.propTypes.filterOptions
  	filterOptions: PropTypes.any,

  	// Searches for any matching option within the set of options.
  	// This function prevents duplicate options from being created.
  	// ({ option: Object, options: Array, labelKey: string, valueKey: string }): boolean
  	isOptionUnique: PropTypes.func,

  	// Determines if the current input text represents a valid option.
  	// ({ label: string }): boolean
  	isValidNewOption: PropTypes.func,

  	// See Select.propTypes.menuRenderer
  	menuRenderer: PropTypes.any,

  	// Factory to create new option.
  	// ({ label: string, labelKey: string, valueKey: string }): Object
  	newOptionCreator: PropTypes.func,

  	// input change handler: function (inputValue) {}
  	onInputChange: PropTypes.func,

  	// input keyDown handler: function (event) {}
  	onInputKeyDown: PropTypes.func,

  	// new option click handler: function (option) {}
  	onNewOptionClick: PropTypes.func,

  	// See Select.propTypes.options
  	options: PropTypes.array,

  	// Creates prompt/placeholder option text.
  	// (filterText: string): string
  	promptTextCreator: PropTypes.func,

  	ref: PropTypes.func,

  	// Decides if a keyDown event (eg its `keyCode`) should result in the creation of a new option.
  	shouldKeyDownEventCreateNewOption: PropTypes.func
  };

  var AsyncCreatableSelect = function (_React$Component) {
  	inherits$1(AsyncCreatableSelect, _React$Component);

  	function AsyncCreatableSelect() {
  		classCallCheck$1(this, AsyncCreatableSelect);
  		return possibleConstructorReturn$1(this, (AsyncCreatableSelect.__proto__ || Object.getPrototypeOf(AsyncCreatableSelect)).apply(this, arguments));
  	}

  	createClass$1(AsyncCreatableSelect, [{
  		key: 'focus',
  		value: function focus() {
  			this.select.focus();
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			var _this2 = this;

  			return React__default.createElement(
  				Async,
  				this.props,
  				function (_ref) {
  					var ref = _ref.ref,
  					    asyncProps = objectWithoutProperties$1(_ref, ['ref']);

  					var asyncRef = ref;
  					return React__default.createElement(
  						CreatableSelect,
  						asyncProps,
  						function (_ref2) {
  							var ref = _ref2.ref,
  							    creatableProps = objectWithoutProperties$1(_ref2, ['ref']);

  							var creatableRef = ref;
  							return _this2.props.children(_extends$1({}, creatableProps, {
  								ref: function ref(select) {
  									creatableRef(select);
  									asyncRef(select);
  									_this2.select = select;
  								}
  							}));
  						}
  					);
  				}
  			);
  		}
  	}]);
  	return AsyncCreatableSelect;
  }(React__default.Component);

  var defaultChildren$1 = function defaultChildren(props) {
  	return React__default.createElement(Select$1, props);
  };

  AsyncCreatableSelect.propTypes = {
  	children: PropTypes.func.isRequired // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
  };

  AsyncCreatableSelect.defaultProps = {
  	children: defaultChildren$1
  };

  Select$1.Async = Async;
  Select$1.AsyncCreatable = AsyncCreatableSelect;
  Select$1.Creatable = CreatableSelect;
  Select$1.Value = Value;
  Select$1.Option = Option;

  var CitySelect = function (_Component) {
    inherits(CitySelect, _Component);

    function CitySelect(props) {
      classCallCheck(this, CitySelect);

      var _this = possibleConstructorReturn(this, (CitySelect.__proto__ || Object.getPrototypeOf(CitySelect)).call(this, props));

      _this.state = {};
      _this.handleChange = function (s) {
        return _this._handleChange(s);
      };
      _this.handleInputChange = function (s) {
        return _this._handleInputChange(s);
      };
      _this.populateCities = function () {
        return _this._populateCities();
      };
      _this.convertCityToSelectOption = function (city) {
        return _this._convertCityToSelectOption(city);
      };
      _this.filterCitiesFromResults = function (r) {
        return _this._filterCitiesFromResults(r);
      };
      _this.populateCities();
      return _this;
    }

    createClass(CitySelect, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
          var value = !nextProps.value ? this.state.value : this.convertCityToSelectOption(nextProps.value);
          this.setState({ value: value });
        }
      }
    }, {
      key: '_convertCityToSelectOption',
      value: function _convertCityToSelectOption(city) {
        return {
          label: city,
          value: city.split(',')[0].toLowerCase().replace(/ /, '_')
        };
      }
    }, {
      key: '_handleChange',
      value: function _handleChange(selected) {
        var query = selected ? selected.label : selected;

        this.props.handleSelect(query);
        this.setState({ value: selected });
      }
    }, {
      key: '_populateCities',
      value: function _populateCities() {
        var _this2 = this;

        var url = 'https://learningcircles.p2pu.org/api/learningcircles/?active=true&signup=open';
        jsonp(url, null, function (err, res) {
          if (err) {
            console.log(err);
          } else {
            _this2.filterCitiesFromResults(res.items);
          }
        });
      }
    }, {
      key: '_filterCitiesFromResults',
      value: function _filterCitiesFromResults(courses) {
        var _this3 = this;

        var cities = courses.map(function (course) {
          if (course.city.length > 0) {
            return _this3.convertCityToSelectOption(course.city);
          }
        });

        cities = cities.filter(function (city) {
          return city;
        });
        var uniqBy = function uniqBy(arr, fn) {
          return [].concat(toConsumableArray(new Map(arr.reverse().map(function (x) {
            return [typeof fn === 'function' ? fn(x) : x[fn], x];
          })).values()));
        };
        cities = uniqBy(cities, function (el) {
          return el.value;
        });
        cities.sort(function (el) {
          return el.label;
        });

        this.setState({ cities: cities });
      }
    }, {
      key: 'render',
      value: function render() {
        return React__default.createElement(Select$1, {
          name: this.props.name,
          className: 'city-select ' + this.props.classes,
          value: this.state.value,
          options: this.state.cities,
          onChange: this.handleChange,
          onInputChange: this.props.handleInputChange,
          noResultsText: 'No results for this city',
          placeholder: 'Start typing a city name...'
        });
      }
    }]);
    return CitySelect;
  }(React.Component);


  CitySelect.propTypes = {
    handleSelect: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    classes: PropTypes.string
  };

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  /**
   * Check whether some DOM node is our Component's node.
   */
  function isNodeFound(current, componentNode, ignoreClass) {
    if (current === componentNode) {
      return true;
    } // SVG <use/> elements do not technically reside in the rendered DOM, so
    // they do not have classList directly, but they offer a link to their
    // corresponding element, which can have classList. This extra check is for
    // that case.
    // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
    // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17


    if (current.correspondingElement) {
      return current.correspondingElement.classList.contains(ignoreClass);
    }

    return current.classList.contains(ignoreClass);
  }
  /**
   * Try to find our node in a hierarchy of nodes, returning the document
   * node as highest node if our node is not found in the path up.
   */

  function findHighest(current, componentNode, ignoreClass) {
    if (current === componentNode) {
      return true;
    } // If source=local then this event came from 'somewhere'
    // inside and should be ignored. We could handle this with
    // a layered approach, too, but that requires going back to
    // thinking in terms of Dom node nesting, running counter
    // to React's 'you shouldn't care about the DOM' philosophy.


    while (current.parentNode) {
      if (isNodeFound(current, componentNode, ignoreClass)) {
        return true;
      }

      current = current.parentNode;
    }

    return current;
  }
  /**
   * Check if the browser scrollbar was clicked
   */

  function clickedScrollbar(evt) {
    return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
  }

  // ideally will get replaced with external dep
  // when rafrex/detect-passive-events#4 and rafrex/detect-passive-events#5 get merged in
  var testPassiveEventSupport = function testPassiveEventSupport() {
    if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
      return;
    }

    var passive = false;
    var options = Object.defineProperty({}, 'passive', {
      get: function get() {
        passive = true;
      }
    });

    var noop = function noop() {};

    window.addEventListener('testPassiveEventSupport', noop, options);
    window.removeEventListener('testPassiveEventSupport', noop, options);
    return passive;
  };

  function autoInc(seed) {
    if (seed === void 0) {
      seed = 0;
    }

    return function () {
      return ++seed;
    };
  }

  var uid = autoInc();

  var passiveEventSupport;
  var handlersMap = {};
  var enabledInstances = {};
  var touchEvents = ['touchstart', 'touchmove'];
  var IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';
  /**
   * Options for addEventHandler and removeEventHandler
   */

  function getEventHandlerOptions(instance, eventName) {
    var handlerOptions = null;
    var isTouchEvent = touchEvents.indexOf(eventName) !== -1;

    if (isTouchEvent && passiveEventSupport) {
      handlerOptions = {
        passive: !instance.props.preventDefault
      };
    }

    return handlerOptions;
  }
  /**
   * This function generates the HOC function that you'll use
   * in order to impart onOutsideClick listening to an
   * arbitrary component. It gets called at the end of the
   * bootstrapping code to yield an instance of the
   * onClickOutsideHOC function defined inside setupHOC().
   */


  function onClickOutsideHOC(WrappedComponent, config) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose(onClickOutside, _Component);

      function onClickOutside(props) {
        var _this;

        _this = _Component.call(this, props) || this;

        _this.__outsideClickHandler = function (event) {
          if (typeof _this.__clickOutsideHandlerProp === 'function') {
            _this.__clickOutsideHandlerProp(event);

            return;
          }

          var instance = _this.getInstance();

          if (typeof instance.props.handleClickOutside === 'function') {
            instance.props.handleClickOutside(event);
            return;
          }

          if (typeof instance.handleClickOutside === 'function') {
            instance.handleClickOutside(event);
            return;
          }

          throw new Error('WrappedComponent lacks a handleClickOutside(event) function for processing outside click events.');
        };

        _this.enableOnClickOutside = function () {
          if (typeof document === 'undefined' || enabledInstances[_this._uid]) {
            return;
          }

          if (typeof passiveEventSupport === 'undefined') {
            passiveEventSupport = testPassiveEventSupport();
          }

          enabledInstances[_this._uid] = true;
          var events = _this.props.eventTypes;

          if (!events.forEach) {
            events = [events];
          }

          handlersMap[_this._uid] = function (event) {
            if (_this.props.disableOnClickOutside) return;
            if (_this.componentNode === null) return;

            if (_this.props.preventDefault) {
              event.preventDefault();
            }

            if (_this.props.stopPropagation) {
              event.stopPropagation();
            }

            if (_this.props.excludeScrollbar && clickedScrollbar(event)) return;
            var current = event.target;

            if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
              return;
            }

            _this.__outsideClickHandler(event);
          };

          events.forEach(function (eventName) {
            document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_this, eventName));
          });
        };

        _this.disableOnClickOutside = function () {
          delete enabledInstances[_this._uid];
          var fn = handlersMap[_this._uid];

          if (fn && typeof document !== 'undefined') {
            var events = _this.props.eventTypes;

            if (!events.forEach) {
              events = [events];
            }

            events.forEach(function (eventName) {
              return document.removeEventListener(eventName, fn, getEventHandlerOptions(_this, eventName));
            });
            delete handlersMap[_this._uid];
          }
        };

        _this.getRef = function (ref) {
          return _this.instanceRef = ref;
        };

        _this._uid = uid();
        return _this;
      }
      /**
       * Access the WrappedComponent's instance.
       */


      var _proto = onClickOutside.prototype;

      _proto.getInstance = function getInstance() {
        if (!WrappedComponent.prototype.isReactComponent) {
          return this;
        }

        var ref = this.instanceRef;
        return ref.getInstance ? ref.getInstance() : ref;
      };

      /**
       * Add click listeners to the current document,
       * linked to this component's state.
       */
      _proto.componentDidMount = function componentDidMount() {
        // If we are in an environment without a DOM such
        // as shallow rendering or snapshots then we exit
        // early to prevent any unhandled errors being thrown.
        if (typeof document === 'undefined' || !document.createElement) {
          return;
        }

        var instance = this.getInstance();

        if (config && typeof config.handleClickOutside === 'function') {
          this.__clickOutsideHandlerProp = config.handleClickOutside(instance);

          if (typeof this.__clickOutsideHandlerProp !== 'function') {
            throw new Error('WrappedComponent lacks a function for processing outside click events specified by the handleClickOutside config option.');
          }
        }

        this.componentNode = reactDom.findDOMNode(this.getInstance());
        this.enableOnClickOutside();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        this.componentNode = reactDom.findDOMNode(this.getInstance());
      };
      /**
       * Remove all document's event listeners for this component
       */


      _proto.componentWillUnmount = function componentWillUnmount() {
        this.disableOnClickOutside();
      };
      /**
       * Can be called to explicitly enable event listening
       * for clicks and touches outside of this element.
       */


      /**
       * Pass-through render
       */
      _proto.render = function render() {
        // eslint-disable-next-line no-unused-vars
        var _props = this.props,
            excludeScrollbar = _props.excludeScrollbar,
            props = _objectWithoutProperties(_props, ["excludeScrollbar"]);

        if (WrappedComponent.prototype.isReactComponent) {
          props.ref = this.getRef;
        } else {
          props.wrappedRef = this.getRef;
        }

        props.disableOnClickOutside = this.disableOnClickOutside;
        props.enableOnClickOutside = this.enableOnClickOutside;
        return React.createElement(WrappedComponent, props);
      };

      return onClickOutside;
    }(React.Component), _class.displayName = "OnClickOutside(" + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ")", _class.defaultProps = {
      eventTypes: ['mousedown', 'touchstart'],
      excludeScrollbar: config && config.excludeScrollbar || false,
      outsideClickIgnoreClass: IGNORE_CLASS_NAME,
      preventDefault: false,
      stopPropagation: false
    }, _class.getClass = function () {
      return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
    }, _temp;
  }

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Manager = function (_Component) {
    _inherits(Manager, _Component);

    function Manager() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Manager);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Manager.__proto__ || Object.getPrototypeOf(Manager)).call.apply(_ref, [this].concat(args))), _this), _this._setTargetNode = function (node) {
        _this._targetNode = node;
      }, _this._getTargetNode = function () {
        return _this._targetNode;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Manager, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          popperManager: {
            setTargetNode: this._setTargetNode,
            getTargetNode: this._getTargetNode
          }
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            tag = _props.tag,
            children = _props.children,
            restProps = _objectWithoutProperties$1(_props, ['tag', 'children']);

        if (tag !== false) {
          return React.createElement(tag, restProps, children);
        } else {
          return children;
        }
      }
    }]);

    return Manager;
  }(React.Component);

  Manager.childContextTypes = {
    popperManager: PropTypes.object.isRequired
  };
  Manager.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
  };
  Manager.defaultProps = {
    tag: 'div'
  };

  var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var Target = function Target(props, context) {
    var _props$component = props.component,
        component = _props$component === undefined ? 'div' : _props$component,
        innerRef = props.innerRef,
        children = props.children,
        restProps = _objectWithoutProperties$2(props, ['component', 'innerRef', 'children']);

    var popperManager = context.popperManager;

    var targetRef = function targetRef(node) {
      popperManager.setTargetNode(node);
      if (typeof innerRef === 'function') {
        innerRef(node);
      }
    };

    if (typeof children === 'function') {
      var targetProps = { ref: targetRef };
      return children({ targetProps: targetProps, restProps: restProps });
    }

    var componentProps = _extends$2({}, restProps);

    if (typeof component === 'string') {
      componentProps.ref = targetRef;
    } else {
      componentProps.innerRef = targetRef;
    }

    return React.createElement(component, componentProps, children);
  };

  Target.contextTypes = {
    popperManager: PropTypes.object.isRequired
  };

  Target.propTypes = {
    component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    innerRef: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
  };

  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.14.3
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  var timeoutDuration = 0;
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      timeoutDuration = 1;
      break;
    }
  }

  function microtaskDebounce(fn) {
    var called = false;
    return function () {
      if (called) {
        return;
      }
      called = true;
      window.Promise.resolve().then(function () {
        called = false;
        fn();
      });
    };
  }

  function taskDebounce(fn) {
    var scheduled = false;
    return function () {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  }

  var supportsMicroTasks = isBrowser && window.Promise;

  /**
  * Create a debounced version of a method, that's asynchronously deferred
  * but called in the minimum time possible.
  *
  * @method
  * @memberof Popper.Utils
  * @argument {Function} fn
  * @returns {Function}
  */
  var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

  /**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */
  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }

  /**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */
  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    }
    // NOTE: 1 DOM access here
    var css = getComputedStyle(element, null);
    return property ? css[property] : css;
  }

  /**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */
  function getParentNode(element) {
    if (element.nodeName === 'HTML') {
      return element;
    }
    return element.parentNode || element.host;
  }

  /**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */
  function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        return element.ownerDocument.body;
      case '#document':
        return element.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var _getStyleComputedProp = getStyleComputedProperty(element),
        overflow = _getStyleComputedProp.overflow,
        overflowX = _getStyleComputedProp.overflowX,
        overflowY = _getStyleComputedProp.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    return getScrollParent(getParentNode(element));
  }

  var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
  var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

  /**
   * Determines if the browser is Internet Explorer
   * @method
   * @memberof Popper.Utils
   * @param {Number} version to check
   * @returns {Boolean} isIE
   */
  function isIE(version) {
    if (version === 11) {
      return isIE11;
    }
    if (version === 10) {
      return isIE10;
    }
    return isIE11 || isIE10;
  }

  /**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */
  function getOffsetParent(element) {
    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null;

    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent;
    // Skip hidden elements which don't have an offsetParent
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    }

    // .offsetParent will return the closest TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
      return getOffsetParent(offsetParent);
    }

    return offsetParent;
  }

  function isOffsetContainer(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY') {
      return false;
    }
    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
  }

  /**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */
  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }

    return node;
  }

  /**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */
  function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;

    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    // Both nodes are inside #document

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }

  /**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */
  function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      var html = element.ownerDocument.documentElement;
      var scrollingElement = element.ownerDocument.scrollingElement || html;
      return scrollingElement[upperSide];
    }

    return element[upperSide];
  }

  /*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */
  function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }

  /*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */

  function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

    return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
  }

  function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
  }

  function getWindowSizes() {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);

    return {
      height: getSize('Height', body, html, computedStyle),
      width: getSize('Width', body, html, computedStyle)
    };
  }

  var classCallCheck$2 = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass$2 = function () {
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





  var defineProperty$2 = function (obj, key, value) {
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

  var _extends$3 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  /**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */
  function getClientRect(offsets) {
    return _extends$3({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }

  /**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */
  function getBoundingClientRect(element) {
    var rect = {};

    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
      if (isIE(10)) {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } else {
        rect = element.getBoundingClientRect();
      }
    } catch (e) {}

    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };

    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
    var width = sizes.width || element.clientWidth || result.right - result.left;
    var height = sizes.height || element.clientHeight || result.bottom - result.top;

    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;

    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, 'x');
      vertScrollbar -= getBordersSize(styles, 'y');

      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }

    return getClientRect(result);
  }

  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var isIE10 = isIE(10);
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);

    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && parent.nodeName === 'HTML') {
      parentRect.top = Math.max(parentRect.top, 0);
      parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;

    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
      var marginTop = parseFloat(styles.marginTop, 10);
      var marginLeft = parseFloat(styles.marginLeft, 10);

      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft;

      // Attach marginTop and marginLeft because in some circumstances we may need them
      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }

    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
      offsets = includeScroll(offsets, parent);
    }

    return offsets;
  }

  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);

    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

    var offset = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height
    };

    return getClientRect(offset);
  }

  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */
  function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }
    return isFixed(getParentNode(element));
  }

  /**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */

  function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
      return document.documentElement;
    }
    var el = element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
      el = el.parentElement;
    }
    return el || document.documentElement;
  }

  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */
  function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    // NOTE: 1 DOM access here

    var boundaries = { top: 0, left: 0 };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

    // Handle viewport case
    if (boundariesElement === 'viewport') {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
      // Handle other cases based on DOM element used as boundaries
      var boundariesNode = void 0;
      if (boundariesElement === 'scrollParent') {
        boundariesNode = getScrollParent(getParentNode(reference));
        if (boundariesNode.nodeName === 'BODY') {
          boundariesNode = popper.ownerDocument.documentElement;
        }
      } else if (boundariesElement === 'window') {
        boundariesNode = popper.ownerDocument.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }

      var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

      // In case of HTML, we need a different computation
      if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
        var _getWindowSizes = getWindowSizes(),
            height = _getWindowSizes.height,
            width = _getWindowSizes.width;

        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        // for all the other DOM elements, this one is good
        boundaries = offsets;
      }
    }

    // Add paddings
    boundaries.left += padding;
    boundaries.top += padding;
    boundaries.right -= padding;
    boundaries.bottom -= padding;

    return boundaries;
  }

  function getArea(_ref) {
    var width = _ref.width,
        height = _ref.height;

    return width * height;
  }

  /**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    if (placement.indexOf('auto') === -1) {
      return placement;
    }

    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

    var rects = {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height
      }
    };

    var sortedAreas = Object.keys(rects).map(function (key) {
      return _extends$3({
        key: key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function (a, b) {
      return b.area - a.area;
    });

    var filteredAreas = sortedAreas.filter(function (_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });

    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

    var variation = placement.split('-')[1];

    return computedPlacement + (variation ? '-' + variation : '');
  }

  /**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */
  function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
  }

  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */
  function getOuterSizes(element) {
    var styles = getComputedStyle(element);
    var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
    var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }

  /**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */
  function getOppositePlacement(placement) {
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */
  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];

    // Get popper node sizes
    var popperRect = getOuterSizes(popper);

    // Add position, width and height to our offsets object
    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height
    };

    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';

    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
      popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
  }

  /**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
      return arr.find(check);
    }

    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
  }

  /**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] === value;
      });
    }

    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function (obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }

  /**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */
  function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

    modifiersToRun.forEach(function (modifier) {
      if (modifier['function']) {
        // eslint-disable-line dot-notation
        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      }
      var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
      if (modifier.enabled && isFunction(fn)) {
        // Add properties to offsets to make them a complete clientRect object
        // we do this before each modifier to make sure the previous one doesn't
        // mess with these values
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);

        data = fn(data, modifier);
      }
    });

    return data;
  }

  /**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */
  function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
      return;
    }

    var data = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {}
    };

    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;

    data.positionFixed = this.options.positionFixed;

    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

    // run the modifiers
    data = runModifiers(this.modifiers, data);

    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }

  /**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */
  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
      var name = _ref.name,
          enabled = _ref.enabled;
      return enabled && name === modifierName;
    });
  }

  /**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */
  function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var toCheck = prefix ? '' + prefix + upperProp : property;
      if (typeof document.body.style[toCheck] !== 'undefined') {
        return toCheck;
      }
    }
    return null;
  }

  /**
   * Destroy the popper
   * @method
   * @memberof Popper
   */
  function destroy() {
    this.state.isDestroyed = true;

    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
      this.popper.removeAttribute('x-placement');
      this.popper.style.position = '';
      this.popper.style.top = '';
      this.popper.style.left = '';
      this.popper.style.right = '';
      this.popper.style.bottom = '';
      this.popper.style.willChange = '';
      this.popper.style[getSupportedPropertyName('transform')] = '';
    }

    this.disableEventListeners();

    // remove the popper if user explicity asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }
    return this;
  }

  /**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */
  function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, { passive: true });

    if (!isBody) {
      attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
  }

  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;

    return state;
  }

  /**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */
  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }

  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);

    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function (target) {
      target.removeEventListener('scroll', state.updateBound);
    });

    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }

  /**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger onUpdate callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */
  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }

  /**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */
  function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit = '';
      // add unit if the value is numeric and is one of the following
      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
        unit = 'px';
      }
      element.style[prop] = styles[prop] + unit;
    });
  }

  /**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value = attributes[prop];
      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */
  function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);

    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);

    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
  }

  /**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */
  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

    popper.setAttribute('x-placement', placement);

    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

    return options;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeStyle(data, options) {
    var x = options.x,
        y = options.y;
    var popper = data.offsets.popper;

    // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
      console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);

    // Styles
    var styles = {
      position: popper.position
    };

    // Avoid blurry text by using full pixel integers.
    // For pixel-perfect positioning, top/bottom prefers rounded
    // values, while left/right prefers floored values.
    var offsets = {
      left: Math.floor(popper.left),
      top: Math.round(popper.top),
      bottom: Math.round(popper.bottom),
      right: Math.floor(popper.right)
    };

    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';

    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');

    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0,
        top = void 0;
    if (sideA === 'bottom') {
      top = -offsetParentRect.height + offsets.bottom;
    } else {
      top = offsets.top;
    }
    if (sideB === 'right') {
      left = -offsetParentRect.width + offsets.right;
    } else {
      left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = 'transform';
    } else {
      // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
      var invertTop = sideA === 'bottom' ? -1 : 1;
      var invertLeft = sideB === 'right' ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ', ' + sideB;
    }

    // Attributes
    var attributes = {
      'x-placement': data.placement
    };

    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends$3({}, attributes, data.attributes);
    data.styles = _extends$3({}, styles, data.styles);
    data.arrowStyles = _extends$3({}, data.offsets.arrow, data.arrowStyles);

    return data;
  }

  /**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */
  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
      var name = _ref.name;
      return name === requestingName;
    });

    var isRequired = !!requesting && modifiers.some(function (modifier) {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });

    if (!isRequired) {
      var _requesting = '`' + requestingName + '`';
      var requested = '`' + requestedName + '`';
      console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }
    return isRequired;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function arrow(data, options) {
    var _data$offsets$arrow;

    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
      return data;
    }

    var arrowElement = options.element;

    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
      arrowElement = data.instance.popper.querySelector(arrowElement);

      // if arrowElement is not found, don't run the modifier
      if (!arrowElement) {
        return data;
      }
    } else {
      // if the arrowElement isn't a query selector we must check that the
      // provided DOM node is child of its popper node
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn('WARNING: `arrow.element` must be child of its popper element!');
        return data;
      }
    }

    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isVertical = ['left', 'right'].indexOf(placement) !== -1;

    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];

    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjuction
    //

    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);

    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$2(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$2(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

    return data;
  }

  /**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */
  function getOppositeVariation(variation) {
    if (variation === 'end') {
      return 'start';
    } else if (variation === 'start') {
      return 'end';
    }
    return variation;
  }

  /**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-right` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */
  var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

  // Get rid of `auto` `auto-start` and `auto-end`
  var validPlacements = placements.slice(3);

  /**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */
  function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }

  var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  };

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
      return data;
    }

    if (data.flipped && data.placement === data.originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';

    var flipOrder = [];

    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder = [placement, placementOpposite];
        break;
      case BEHAVIORS.CLOCKWISE:
        flipOrder = clockwise(placement);
        break;
      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder = clockwise(placement, true);
        break;
      default:
        flipOrder = options.behavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }

      placement = data.placement.split('-')[0];
      placementOpposite = getOppositePlacement(placement);

      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference;

      // using floor because the reference offsets may contain decimals we are not going to consider here
      var floor = Math.floor;
      var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

      var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

      // flip the variation if required
      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
      var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        // this boolean to detect any flip loop
        data.flipped = true;

        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }

        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }

        data.placement = placement + (variation ? '-' + variation : '');

        // this object contains `position`, we want to preserve it along with
        // any additional property we may add in the future
        data.offsets.popper = _extends$3({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

        data = runModifiers(data.instance.modifiers, data, 'flip');
      }
    });
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function keepTogether(data) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }

    return data;
  }

  /**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */
  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];

    // If it's not a number it's an operator, I guess
    if (!value) {
      return str;
    }

    if (unit.indexOf('%') === 0) {
      var element = void 0;
      switch (unit) {
        case '%p':
          element = popperOffsets;
          break;
        case '%':
        case '%r':
        default:
          element = referenceOffsets;
      }

      var rect = getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
      // if is a vh or vw, we calculate the size based on the viewport
      var size = void 0;
      if (unit === 'vh') {
        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }
      return size / 100 * value;
    } else {
      // if is an explicit pixel unit, we get rid of the unit and keep the value
      // if is an implicit unit, it's px, and we return just the value
      return value;
    }
  }

  /**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */
  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];

    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    });

    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function (frag) {
      return frag.search(/,|\s/) !== -1;
    }));

    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
      console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }

    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function (op, index) {
      // Most of the units rely on the orientation of the popper
      var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
      var mergeWithPrevious = false;
      return op
      // This aggregates any `+` or `-` sign that aren't considered operators
      // e.g.: 10 + +5 => [10, +, +5]
      .reduce(function (a, b) {
        if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
          a[a.length - 1] = b;
          mergeWithPrevious = true;
          return a;
        } else if (mergeWithPrevious) {
          a[a.length - 1] += b;
          mergeWithPrevious = false;
          return a;
        } else {
          return a.concat(b);
        }
      }, [])
      // Here we convert the string values into number values (in px)
      .map(function (str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    });

    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
        }
      });
    });
    return offsets;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */
  function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement,
        _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var basePlacement = placement.split('-')[0];

    var offsets = void 0;
    if (isNumeric(+offset)) {
      offsets = [+offset, 0];
    } else {
      offsets = parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement === 'left') {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === 'top') {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }

    data.popper = popper;
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    }

    // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself
    var transformProp = getSupportedPropertyName('transform');
    var popperStyles = data.instance.popper.style; // assignment to help minification
    var top = popperStyles.top,
        left = popperStyles.left,
        transform = popperStyles[transformProp];

    popperStyles.top = '';
    popperStyles.left = '';
    popperStyles[transformProp] = '';

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;

    options.boundaries = boundaries;

    var order = options.priority;
    var popper = data.offsets.popper;

    var check = {
      primary: function primary(placement) {
        var value = popper[placement];
        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
          value = Math.max(popper[placement], boundaries[placement]);
        }
        return defineProperty$2({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === 'right' ? 'left' : 'top';
        var value = popper[mainSide];
        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
        }
        return defineProperty$2({}, mainSide, value);
      }
    };

    order.forEach(function (placement) {
      var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
      popper = _extends$3({}, popper, check[side](placement));
    });

    data.offsets.popper = popper;

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];

    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
      var _data$offsets = data.offsets,
          reference = _data$offsets.reference,
          popper = _data$offsets.popper;

      var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
      var side = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';

      var shiftOffsets = {
        start: defineProperty$2({}, side, reference[side]),
        end: defineProperty$2({}, side, reference[side] + reference[measurement] - popper[measurement])
      };

      data.offsets.popper = _extends$3({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
      return data;
    }

    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'preventOverflow';
    }).boundaries;

    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === true) {
        return data;
      }

      data.hide = true;
      data.attributes['x-out-of-boundaries'] = '';
    } else {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === false) {
        return data;
      }

      data.hide = false;
      data.attributes['x-out-of-boundaries'] = false;
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);

    return data;
  }

  /**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */

  /**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */
  var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
      /** @prop {number} order=100 - Index used to define the order of execution */
      order: 100,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: shift
    },

    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unitless, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the height.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
      /** @prop {number} order=200 - Index used to define the order of execution */
      order: 200,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: offset,
      /** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
      offset: 0
    },

    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * An scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
      /** @prop {number} order=300 - Index used to define the order of execution */
      order: 300,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: preventOverflow,
      /**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
      priority: ['left', 'right', 'top', 'bottom'],
      /**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper this makes sure the popper has always a little padding
       * between the edges of its container
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier, can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
      boundariesElement: 'scrollParent'
    },

    /**
     * Modifier used to make sure the reference and its popper stay near eachothers
     * without leaving any gap between the two. Expecially useful when the arrow is
     * enabled and you want to assure it to point to its reference element.
     * It cares only about the first axis, you can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
      /** @prop {number} order=400 - Index used to define the order of execution */
      order: 400,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: keepTogether
    },

    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjuction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
      /** @prop {number} order=500 - Index used to define the order of execution */
      order: 500,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: arrow,
      /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
      element: '[x-arrow]'
    },

    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
      /** @prop {number} order=600 - Index used to define the order of execution */
      order: 600,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: flip,
      /**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations).
       */
      behavior: 'flip',
      /**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position,
       * the popper will never be placed outside of the defined boundaries
       * (except if keepTogether is enabled)
       */
      boundariesElement: 'viewport'
    },

    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
      /** @prop {number} order=700 - Index used to define the order of execution */
      order: 700,
      /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
      enabled: false,
      /** @prop {ModifierFn} */
      fn: inner
    },

    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
      /** @prop {number} order=800 - Index used to define the order of execution */
      order: 800,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: hide
    },

    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
      /** @prop {number} order=850 - Index used to define the order of execution */
      order: 850,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: computeStyle,
      /**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3d transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties.
       */
      gpuAcceleration: true,
      /**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
      x: 'bottom',
      /**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
      y: 'right'
    },

    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define you own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
      /** @prop {number} order=900 - Index used to define the order of execution */
      order: 900,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: applyStyle,
      /** @prop {Function} */
      onLoad: applyStyleOnLoad,
      /**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3d transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties.
       */
      gpuAcceleration: undefined
    }
  };

  /**
   * The `dataObject` is an object containing all the informations used by Popper.js
   * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
   * @name dataObject
   * @property {Object} data.instance The Popper.js instance
   * @property {String} data.placement Placement applied to popper
   * @property {String} data.originalPlacement Placement originally defined on init
   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
   * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.boundaries Offsets of the popper boundaries
   * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
   */

  /**
   * Default options provided to Popper.js constructor.<br />
   * These can be overriden using the `options` argument of Popper.js.<br />
   * To override an option, simply pass as 3rd argument an object with the same
   * structure of this object, example:
   * ```
   * new Popper(ref, pop, {
   *   modifiers: {
   *     preventOverflow: { enabled: false }
   *   }
   * })
   * ```
   * @type {Object}
   * @static
   * @memberof Popper
   */
  var Defaults = {
    /**
     * Popper's placement
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',

    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
    positionFixed: false,

    /**
     * Whether events (resize, scroll) are initially enabled
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,

    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,

    /**
     * Callback called when the popper is created.<br />
     * By default, is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() {},

    /**
     * Callback called when the popper is updated, this callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() {},

    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js
     * @prop {modifiers}
     */
    modifiers: modifiers
  };

  /**
   * @callback onCreate
   * @param {dataObject} data
   */

  /**
   * @callback onUpdate
   * @param {dataObject} data
   */

  // Utils
  // Methods
  var Popper = function () {
    /**
     * Create a new Popper.js instance
     * @class Popper
     * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
     * @param {HTMLElement} popper - The HTML element used as popper.
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
      var _this = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      classCallCheck$2(this, Popper);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      };

      // make update() debounced, so that it only runs at most once-per-tick
      this.update = debounce(this.update.bind(this));

      // with {} we create a new object with the options inside it
      this.options = _extends$3({}, Popper.Defaults, options);

      // init state
      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      };

      // get reference and popper elements (allow jQuery wrappers)
      this.reference = reference && reference.jquery ? reference[0] : reference;
      this.popper = popper && popper.jquery ? popper[0] : popper;

      // Deep merge modifiers options
      this.options.modifiers = {};
      Object.keys(_extends$3({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        _this.options.modifiers[name] = _extends$3({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      });

      // Refactoring modifiers' list (Object => Array)
      this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
        return _extends$3({
          name: name
        }, _this.options.modifiers[name]);
      })
      // sort the modifiers by order
      .sort(function (a, b) {
        return a.order - b.order;
      });

      // modifiers have the ability to execute arbitrary code when Popper.js get inited
      // such code is executed in the same order of its modifier
      // they could add new properties to their options configuration
      // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
          modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        }
      });

      // fire the first update to position the popper in the right place
      this.update();

      var eventsEnabled = this.options.eventsEnabled;
      if (eventsEnabled) {
        // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
      }

      this.state.eventsEnabled = eventsEnabled;
    }

    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs


    createClass$2(Popper, [{
      key: 'update',
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: 'destroy',
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }

      /**
       * Schedule an update, it will run on the next UI update available
       * @method scheduleUpdate
       * @memberof Popper
       */


      /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */

    }]);
    return Popper;
  }();

  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */


  Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
  Popper.placements = placements;
  Popper.Defaults = Defaults;

  var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _objectWithoutProperties$3(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var placements$1 = Popper.placements;

  var Popper$1 = function (_Component) {
    _inherits$1(Popper$$1, _Component);

    function Popper$$1() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck$1(this, Popper$$1);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, (_ref = Popper$$1.__proto__ || Object.getPrototypeOf(Popper$$1)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this._setArrowNode = function (node) {
        _this._arrowNode = node;
      }, _this._getTargetNode = function () {
        if (_this.props.target) {
          return _this.props.target;
        } else if (!_this.context.popperManager || !_this.context.popperManager.getTargetNode()) {
          throw new Error('Target missing. Popper must be given a target from the Popper Manager, or as a prop.');
        }
        return _this.context.popperManager.getTargetNode();
      }, _this._getOffsets = function (data) {
        return Object.keys(data.offsets).map(function (key) {
          return data.offsets[key];
        });
      }, _this._isDataDirty = function (data) {
        if (_this.state.data) {
          return JSON.stringify(_this._getOffsets(_this.state.data)) !== JSON.stringify(_this._getOffsets(data));
        } else {
          return true;
        }
      }, _this._updateStateModifier = {
        enabled: true,
        order: 900,
        fn: function fn(data) {
          if (_this._isDataDirty(data)) {
            _this.setState({ data: data });
          }
          return data;
        }
      }, _this._getPopperStyle = function () {
        var data = _this.state.data;


        if (!_this._popper || !data) {
          return {
            position: 'absolute',
            pointerEvents: 'none',
            opacity: 0
          };
        }

        return _extends$4({
          position: data.offsets.popper.position
        }, data.styles);
      }, _this._getPopperPlacement = function () {
        return _this.state.data ? _this.state.data.placement : undefined;
      }, _this._getPopperHide = function () {
        return !!_this.state.data && _this.state.data.hide ? '' : undefined;
      }, _this._getArrowStyle = function () {
        if (!_this.state.data || !_this.state.data.offsets.arrow) {
          return {};
        } else {
          var _this$state$data$offs = _this.state.data.offsets.arrow,
              top = _this$state$data$offs.top,
              left = _this$state$data$offs.left;

          return { top: top, left: left };
        }
      }, _this._handlePopperRef = function (node) {
        _this._popperNode = node;
        if (node) {
          _this._createPopper();
        } else {
          _this._destroyPopper();
        }
        if (_this.props.innerRef) {
          _this.props.innerRef(node);
        }
      }, _this._scheduleUpdate = function () {
        _this._popper && _this._popper.scheduleUpdate();
      }, _temp), _possibleConstructorReturn$1(_this, _ret);
    }

    _createClass$1(Popper$$1, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          popper: {
            setArrowNode: this._setArrowNode,
            getArrowStyle: this._getArrowStyle
          }
        };
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(lastProps) {
        if (lastProps.placement !== this.props.placement || lastProps.eventsEnabled !== this.props.eventsEnabled || lastProps.target !== this.props.target) {
          this._destroyPopper();
          this._createPopper();
        }
        if (lastProps.children !== this.props.children) {
          this._scheduleUpdate();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._destroyPopper();
      }
    }, {
      key: '_createPopper',
      value: function _createPopper() {
        var _this2 = this;

        var _props = this.props,
            placement = _props.placement,
            eventsEnabled = _props.eventsEnabled;

        var modifiers = _extends$4({}, this.props.modifiers, {
          applyStyle: { enabled: false },
          updateState: this._updateStateModifier
        });
        if (this._arrowNode) {
          modifiers.arrow = _extends$4({}, this.props.modifiers.arrow || {}, {
            element: this._arrowNode
          });
        }
        this._popper = new Popper(this._getTargetNode(), this._popperNode, {
          placement: placement,
          eventsEnabled: eventsEnabled,
          modifiers: modifiers
        });

        // TODO: look into setTimeout scheduleUpdate call, without it, the popper will not position properly on creation
        setTimeout(function () {
          return _this2._scheduleUpdate();
        });
      }
    }, {
      key: '_destroyPopper',
      value: function _destroyPopper() {
        if (this._popper) {
          this._popper.destroy();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props,
            component = _props2.component,
            innerRef = _props2.innerRef,
            placement = _props2.placement,
            eventsEnabled = _props2.eventsEnabled,
            modifiers = _props2.modifiers,
            children = _props2.children,
            restProps = _objectWithoutProperties$3(_props2, ['component', 'innerRef', 'placement', 'eventsEnabled', 'modifiers', 'children']);

        var popperStyle = this._getPopperStyle();
        var popperPlacement = this._getPopperPlacement();
        var popperHide = this._getPopperHide();

        if (typeof children === 'function') {
          var popperProps = {
            ref: this._handlePopperRef,
            style: popperStyle,
            'data-placement': popperPlacement,
            'data-x-out-of-boundaries': popperHide
          };
          return children({
            popperProps: popperProps,
            restProps: restProps,
            scheduleUpdate: this._scheduleUpdate
          });
        }

        var componentProps = _extends$4({}, restProps, {
          style: _extends$4({}, restProps.style, popperStyle),
          'data-placement': popperPlacement,
          'data-x-out-of-boundaries': popperHide
        });

        if (typeof component === 'string') {
          componentProps.ref = this._handlePopperRef;
        } else {
          componentProps.innerRef = this._handlePopperRef;
        }

        return React.createElement(component, componentProps, children);
      }
    }]);

    return Popper$$1;
  }(React.Component);

  Popper$1.contextTypes = {
    popperManager: PropTypes.object
  };
  Popper$1.childContextTypes = {
    popper: PropTypes.object.isRequired
  };
  Popper$1.propTypes = {
    component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    innerRef: PropTypes.func,
    placement: PropTypes.oneOf(placements$1),
    eventsEnabled: PropTypes.bool,
    modifiers: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    target: PropTypes.oneOfType([
    // the following check is needed for SSR
    PropTypes.instanceOf(typeof Element !== 'undefined' ? Element : Object), PropTypes.shape({
      getBoundingClientRect: PropTypes.func.isRequired,
      clientWidth: PropTypes.number.isRequired,
      clientHeight: PropTypes.number.isRequired
    })])
  };
  Popper$1.defaultProps = {
    component: 'div',
    placement: 'bottom',
    eventsEnabled: true,
    modifiers: {}
  };

  var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _objectWithoutProperties$4(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var Arrow = function Arrow(props, context) {
    var _props$component = props.component,
        component = _props$component === undefined ? 'span' : _props$component,
        innerRef = props.innerRef,
        children = props.children,
        restProps = _objectWithoutProperties$4(props, ['component', 'innerRef', 'children']);

    var popper = context.popper;

    var arrowRef = function arrowRef(node) {
      popper.setArrowNode(node);
      if (typeof innerRef === 'function') {
        innerRef(node);
      }
    };
    var arrowStyle = popper.getArrowStyle();

    if (typeof children === 'function') {
      var arrowProps = {
        ref: arrowRef,
        style: arrowStyle
      };
      return children({ arrowProps: arrowProps, restProps: restProps });
    }

    var componentProps = _extends$5({}, restProps, {
      style: _extends$5({}, arrowStyle, restProps.style)
    });

    if (typeof component === 'string') {
      componentProps.ref = arrowRef;
    } else {
      componentProps.innerRef = arrowRef;
    }

    return React.createElement(component, componentProps, children);
  };

  Arrow.contextTypes = {
    popper: PropTypes.object.isRequired
  };

  Arrow.propTypes = {
    component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    innerRef: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
  };

  var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };









  var classCallCheck$3 = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass$3 = function () {
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









  var inherits$2 = function (subClass, superClass) {
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











  var possibleConstructorReturn$2 = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  function generateYears(year, noOfYear, minDate, maxDate) {
    var list = [];
    for (var i = 0; i < 2 * noOfYear + 1; i++) {
      var newYear = year + noOfYear - i;
      var isInRange = true;

      if (minDate) {
        isInRange = minDate.year() <= newYear;
      }

      if (maxDate && isInRange) {
        isInRange = maxDate.year() >= newYear;
      }

      if (isInRange) {
        list.push(newYear);
      }
    }

    return list;
  }

  var YearDropdownOptions = function (_React$Component) {
    inherits$2(YearDropdownOptions, _React$Component);

    function YearDropdownOptions(props) {
      classCallCheck$3(this, YearDropdownOptions);

      var _this = possibleConstructorReturn$2(this, _React$Component.call(this, props));

      _this.renderOptions = function () {
        var selectedYear = _this.props.year;
        var options = _this.state.yearsList.map(function (year) {
          return React__default.createElement(
            "div",
            {
              className: selectedYear === year ? "react-datepicker__year-option --selected_year" : "react-datepicker__year-option",
              key: year,
              ref: year,
              onClick: _this.onChange.bind(_this, year)
            },
            selectedYear === year ? React__default.createElement(
              "span",
              { className: "react-datepicker__year-option--selected" },
              "\u2713"
            ) : "",
            year
          );
        });

        var minYear = _this.props.minDate ? _this.props.minDate.year() : null;
        var maxYear = _this.props.maxDate ? _this.props.maxDate.year() : null;

        if (!maxYear || !_this.state.yearsList.find(function (year) {
          return year === maxYear;
        })) {
          options.unshift(React__default.createElement(
            "div",
            {
              className: "react-datepicker__year-option",
              ref: "upcoming",
              key: "upcoming",
              onClick: _this.incrementYears
            },
            React__default.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" })
          ));
        }

        if (!minYear || !_this.state.yearsList.find(function (year) {
          return year === minYear;
        })) {
          options.push(React__default.createElement(
            "div",
            {
              className: "react-datepicker__year-option",
              ref: "previous",
              key: "previous",
              onClick: _this.decrementYears
            },
            React__default.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" })
          ));
        }

        return options;
      };

      _this.onChange = function (year) {
        _this.props.onChange(year);
      };

      _this.handleClickOutside = function () {
        _this.props.onCancel();
      };

      _this.shiftYears = function (amount) {
        var years = _this.state.yearsList.map(function (year) {
          return year + amount;
        });

        _this.setState({
          yearsList: years
        });
      };

      _this.incrementYears = function () {
        return _this.shiftYears(1);
      };

      _this.decrementYears = function () {
        return _this.shiftYears(-1);
      };

      var yearDropdownItemNumber = props.yearDropdownItemNumber,
          scrollableYearDropdown = props.scrollableYearDropdown;

      var noOfYear = yearDropdownItemNumber || (scrollableYearDropdown ? 10 : 5);

      _this.state = {
        yearsList: generateYears(_this.props.year, noOfYear, _this.props.minDate, _this.props.maxDate)
      };
      return _this;
    }

    YearDropdownOptions.prototype.render = function render() {
      var dropdownClass = classnames({
        "react-datepicker__year-dropdown": true,
        "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown
      });

      return React__default.createElement(
        "div",
        { className: dropdownClass },
        this.renderOptions()
      );
    };

    return YearDropdownOptions;
  }(React__default.Component);

  YearDropdownOptions.propTypes = {
    minDate: PropTypes.object,
    maxDate: PropTypes.object,
    onCancel: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    scrollableYearDropdown: PropTypes.bool,
    year: PropTypes.number.isRequired,
    yearDropdownItemNumber: PropTypes.number
  };

  var dayOfWeekCodes = {
    1: "mon",
    2: "tue",
    3: "wed",
    4: "thu",
    5: "fri",
    6: "sat",
    7: "sun"
  };

  // These functions are not exported so
  // that we avoid magic strings like 'days'
  function set$1(date, unit, to) {
    return date.set(unit, to);
  }

  function add(date, amount, unit) {
    return date.add(amount, unit);
  }

  function subtract(date, amount, unit) {
    return date.subtract(amount, unit);
  }

  function get$1(date, unit) {
    return date.get(unit);
  }

  function getStartOf(date, unit) {
    return date.startOf(unit);
  }

  // ** Date Constructors **

  function newDate(point) {
    return moment(point);
  }

  function newDateWithOffset(utcOffset) {
    return moment().utc().utcOffset(utcOffset);
  }

  function now(maybeFixedUtcOffset) {
    if (maybeFixedUtcOffset == null) {
      return newDate();
    }
    return newDateWithOffset(maybeFixedUtcOffset);
  }

  function cloneDate(date) {
    return date.clone();
  }

  function parseDate(value, _ref) {
    var dateFormat = _ref.dateFormat,
        locale = _ref.locale;

    var m = moment(value, dateFormat, locale || moment.locale(), true);
    return m.isValid() ? m : null;
  }

  // ** Date "Reflection" **

  function isMoment(date) {
    return moment.isMoment(date);
  }

  function isDate(date) {
    return moment.isDate(date);
  }

  // ** Date Formatting **

  function formatDate(date, format) {
    return date.format(format);
  }

  function safeDateFormat(date, _ref2) {
    var dateFormat = _ref2.dateFormat,
        locale = _ref2.locale;

    return date && date.clone().locale(locale || moment.locale()).format(Array.isArray(dateFormat) ? dateFormat[0] : dateFormat) || "";
  }

  // ** Date Setters **

  function setTime(date, _ref3) {
    var hour = _ref3.hour,
        minute = _ref3.minute,
        second = _ref3.second;

    date.set({ hour: hour, minute: minute, second: second });
    return date;
  }

  function setMonth(date, month) {
    return set$1(date, "month", month);
  }

  function setYear(date, year) {
    return set$1(date, "year", year);
  }



  // ** Date Getters **

  function getSecond(date) {
    return get$1(date, "second");
  }

  function getMinute(date) {
    return get$1(date, "minute");
  }

  function getHour(date) {
    return get$1(date, "hour");
  }

  // Returns day of week
  function getDay(date) {
    return get$1(date, "day");
  }

  function getWeek(date) {
    return get$1(date, "week");
  }

  function getMonth(date) {
    return get$1(date, "month");
  }

  function getYear(date) {
    return get$1(date, "year");
  }

  // Returns day of month
  function getDate(date) {
    return get$1(date, "date");
  }



  function getDayOfWeekCode(day) {
    return dayOfWeekCodes[day.isoWeekday()];
  }

  // *** Start of ***

  function getStartOfDay(date) {
    return getStartOf(date, "day");
  }

  function getStartOfWeek(date) {
    return getStartOf(date, "week");
  }
  function getStartOfMonth(date) {
    return getStartOf(date, "month");
  }

  function getStartOfDate(date) {
    return getStartOf(date, "date");
  }

  // *** End of ***





  // ** Date Math **

  // *** Addition ***

  function addMinutes(date, amount) {
    return add(date, amount, "minutes");
  }

  function addHours(date, amount) {
    return add(date, amount, "hours");
  }

  function addDays(date, amount) {
    return add(date, amount, "days");
  }

  function addWeeks(date, amount) {
    return add(date, amount, "weeks");
  }

  function addMonths(date, amount) {
    return add(date, amount, "months");
  }

  function addYears(date, amount) {
    return add(date, amount, "years");
  }

  // *** Subtraction ***
  function subtractDays(date, amount) {
    return subtract(date, amount, "days");
  }

  function subtractWeeks(date, amount) {
    return subtract(date, amount, "weeks");
  }

  function subtractMonths(date, amount) {
    return subtract(date, amount, "months");
  }

  function subtractYears(date, amount) {
    return subtract(date, amount, "years");
  }

  // ** Date Comparison **

  function isBefore(date1, date2) {
    return date1.isBefore(date2);
  }

  function isAfter(date1, date2) {
    return date1.isAfter(date2);
  }



  function isSameYear(date1, date2) {
    if (date1 && date2) {
      return date1.isSame(date2, "year");
    } else {
      return !date1 && !date2;
    }
  }

  function isSameMonth(date1, date2) {
    if (date1 && date2) {
      return date1.isSame(date2, "month");
    } else {
      return !date1 && !date2;
    }
  }

  function isSameDay(moment1, moment2) {
    if (moment1 && moment2) {
      return moment1.isSame(moment2, "day");
    } else {
      return !moment1 && !moment2;
    }
  }



  function isDayInRange(day, startDate, endDate) {
    var before = startDate.clone().startOf("day").subtract(1, "seconds");
    var after = endDate.clone().startOf("day").add(1, "seconds");
    return day.clone().startOf("day").isBetween(before, after);
  }

  // *** Diffing ***



  // ** Date Localization **

  function localizeDate(date, locale) {
    return date.clone().locale(locale || moment.locale());
  }







  function getLocaleData(date) {
    return date.localeData();
  }

  function getLocaleDataForLocale(locale) {
    return moment.localeData(locale);
  }

  function getWeekdayMinInLocale(locale, date) {
    return locale.weekdaysMin(date);
  }

  function getWeekdayShortInLocale(locale, date) {
    return locale.weekdaysShort(date);
  }

  // TODO what is this format exactly?
  function getMonthInLocale(locale, date, format) {
    return locale.months(date, format);
  }

  function getMonthShortInLocale(locale, date) {
    return locale.monthsShort(date);
  }

  // ** Utils for some components **

  function isDayDisabled(day) {
    var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        minDate = _ref4.minDate,
        maxDate = _ref4.maxDate,
        excludeDates = _ref4.excludeDates,
        includeDates = _ref4.includeDates,
        filterDate = _ref4.filterDate;

    return minDate && day.isBefore(minDate, "day") || maxDate && day.isAfter(maxDate, "day") || excludeDates && excludeDates.some(function (excludeDate) {
      return isSameDay(day, excludeDate);
    }) || includeDates && !includeDates.some(function (includeDate) {
      return isSameDay(day, includeDate);
    }) || filterDate && !filterDate(day.clone()) || false;
  }

  function isTimeDisabled(time, disabledTimes) {
    var l = disabledTimes.length;
    for (var i = 0; i < l; i++) {
      if (disabledTimes[i].get("hours") === time.get("hours") && disabledTimes[i].get("minutes") === time.get("minutes")) {
        return true;
      }
    }

    return false;
  }

  function isTimeInDisabledRange(time, _ref5) {
    var minTime = _ref5.minTime,
        maxTime = _ref5.maxTime;

    if (!minTime || !maxTime) {
      throw new Error("Both minTime and maxTime props required");
    }

    var base = moment().hours(0).minutes(0).seconds(0);
    var baseTime = base.clone().hours(time.get("hours")).minutes(time.get("minutes"));
    var min = base.clone().hours(minTime.get("hours")).minutes(minTime.get("minutes"));
    var max = base.clone().hours(maxTime.get("hours")).minutes(maxTime.get("minutes"));

    return !(baseTime.isSameOrAfter(min) && baseTime.isSameOrBefore(max));
  }

  function allDaysDisabledBefore(day, unit) {
    var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        minDate = _ref6.minDate,
        includeDates = _ref6.includeDates;

    var dateBefore = day.clone().subtract(1, unit);
    return minDate && dateBefore.isBefore(minDate, unit) || includeDates && includeDates.every(function (includeDate) {
      return dateBefore.isBefore(includeDate, unit);
    }) || false;
  }

  function allDaysDisabledAfter(day, unit) {
    var _ref7 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        maxDate = _ref7.maxDate,
        includeDates = _ref7.includeDates;

    var dateAfter = day.clone().add(1, unit);
    return maxDate && dateAfter.isAfter(maxDate, unit) || includeDates && includeDates.every(function (includeDate) {
      return dateAfter.isAfter(includeDate, unit);
    }) || false;
  }

  function getEffectiveMinDate(_ref8) {
    var minDate = _ref8.minDate,
        includeDates = _ref8.includeDates;

    if (includeDates && minDate) {
      return moment.min(includeDates.filter(function (includeDate) {
        return minDate.isSameOrBefore(includeDate, "day");
      }));
    } else if (includeDates) {
      return moment.min(includeDates);
    } else {
      return minDate;
    }
  }

  function getEffectiveMaxDate(_ref9) {
    var maxDate = _ref9.maxDate,
        includeDates = _ref9.includeDates;

    if (includeDates && maxDate) {
      return moment.max(includeDates.filter(function (includeDate) {
        return maxDate.isSameOrAfter(includeDate, "day");
      }));
    } else if (includeDates) {
      return moment.max(includeDates);
    } else {
      return maxDate;
    }
  }

  function getHightLightDaysMap() {
    var highlightDates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var defaultClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "react-datepicker__day--highlighted";

    var dateClasses = new Map();
    for (var i = 0, len = highlightDates.length; i < len; i++) {
      var obj = highlightDates[i];
      if (isMoment(obj)) {
        var key = obj.format("MM.DD.YYYY");
        var classNamesArr = dateClasses.get(key) || [];
        if (!classNamesArr.includes(defaultClassName)) {
          classNamesArr.push(defaultClassName);
          dateClasses.set(key, classNamesArr);
        }
      } else if ((typeof obj === "undefined" ? "undefined" : _typeof$2(obj)) === "object") {
        var keys = Object.keys(obj);
        var className = keys[0];
        var arrOfMoments = obj[keys[0]];
        if (typeof className === "string" && arrOfMoments.constructor === Array) {
          for (var k = 0, _len = arrOfMoments.length; k < _len; k++) {
            var _key = arrOfMoments[k].format("MM.DD.YYYY");
            var _classNamesArr = dateClasses.get(_key) || [];
            if (!_classNamesArr.includes(className)) {
              _classNamesArr.push(className);
              dateClasses.set(_key, _classNamesArr);
            }
          }
        }
      }
    }

    return dateClasses;
  }

  function timesToInjectAfter(startOfDay, currentTime, currentMultiplier, intervals, injectedTimes) {
    var l = injectedTimes.length;
    var times = [];
    for (var i = 0; i < l; i++) {
      var injectedTime = addMinutes(addHours(cloneDate(startOfDay), getHour(injectedTimes[i])), getMinute(injectedTimes[i]));
      var nextTime = addMinutes(cloneDate(startOfDay), (currentMultiplier + 1) * intervals);

      if (injectedTime.isBetween(currentTime, nextTime)) {
        times.push(injectedTimes[i]);
      }
    }

    return times;
  }

  var WrappedYearDropdownOptions = onClickOutsideHOC(YearDropdownOptions);

  var YearDropdown = function (_React$Component) {
    inherits$2(YearDropdown, _React$Component);

    function YearDropdown() {
      var _temp, _this, _ret;

      classCallCheck$3(this, YearDropdown);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn$2(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
        dropdownVisible: false
      }, _this.renderSelectOptions = function () {
        var minYear = _this.props.minDate ? getYear(_this.props.minDate) : 1900;
        var maxYear = _this.props.maxDate ? getYear(_this.props.maxDate) : 2100;

        var options = [];
        for (var i = minYear; i <= maxYear; i++) {
          options.push(React__default.createElement(
            "option",
            { key: i, value: i },
            i
          ));
        }
        return options;
      }, _this.onSelectChange = function (e) {
        _this.onChange(e.target.value);
      }, _this.renderSelectMode = function () {
        return React__default.createElement(
          "select",
          {
            value: _this.props.year,
            className: "react-datepicker__year-select",
            onChange: _this.onSelectChange
          },
          _this.renderSelectOptions()
        );
      }, _this.renderReadView = function (visible) {
        return React__default.createElement(
          "div",
          {
            key: "read",
            style: { visibility: visible ? "visible" : "hidden" },
            className: "react-datepicker__year-read-view",
            onClick: function onClick(event) {
              return _this.toggleDropdown(event);
            }
          },
          React__default.createElement("span", { className: "react-datepicker__year-read-view--down-arrow" }),
          React__default.createElement(
            "span",
            { className: "react-datepicker__year-read-view--selected-year" },
            _this.props.year
          )
        );
      }, _this.renderDropdown = function () {
        return React__default.createElement(WrappedYearDropdownOptions, {
          key: "dropdown",
          ref: "options",
          year: _this.props.year,
          onChange: _this.onChange,
          onCancel: _this.toggleDropdown,
          minDate: _this.props.minDate,
          maxDate: _this.props.maxDate,
          scrollableYearDropdown: _this.props.scrollableYearDropdown,
          yearDropdownItemNumber: _this.props.yearDropdownItemNumber
        });
      }, _this.renderScrollMode = function () {
        var dropdownVisible = _this.state.dropdownVisible;

        var result = [_this.renderReadView(!dropdownVisible)];
        if (dropdownVisible) {
          result.unshift(_this.renderDropdown());
        }
        return result;
      }, _this.onChange = function (year) {
        _this.toggleDropdown();
        if (year === _this.props.year) return;
        _this.props.onChange(year);
      }, _this.toggleDropdown = function (event) {
        _this.setState({
          dropdownVisible: !_this.state.dropdownVisible
        }, function () {
          if (_this.props.adjustDateOnChange) {
            _this.handleYearChange(_this.props.date, event);
          }
        });
      }, _this.handleYearChange = function (date, event) {
        _this.onSelect(date, event);
        _this.setOpen();
      }, _this.onSelect = function (date, event) {
        if (_this.props.onSelect) {
          _this.props.onSelect(date, event);
        }
      }, _this.setOpen = function () {
        if (_this.props.setOpen) {
          _this.props.setOpen(true);
        }
      }, _temp), possibleConstructorReturn$2(_this, _ret);
    }

    YearDropdown.prototype.render = function render() {
      var renderedDropdown = void 0;
      switch (this.props.dropdownMode) {
        case "scroll":
          renderedDropdown = this.renderScrollMode();
          break;
        case "select":
          renderedDropdown = this.renderSelectMode();
          break;
      }

      return React__default.createElement(
        "div",
        {
          className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--" + this.props.dropdownMode
        },
        renderedDropdown
      );
    };

    return YearDropdown;
  }(React__default.Component);

  YearDropdown.propTypes = {
    adjustDateOnChange: PropTypes.bool,
    dropdownMode: PropTypes.oneOf(["scroll", "select"]).isRequired,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    scrollableYearDropdown: PropTypes.bool,
    year: PropTypes.number.isRequired,
    yearDropdownItemNumber: PropTypes.number,
    date: PropTypes.object,
    onSelect: PropTypes.func,
    setOpen: PropTypes.func
  };

  var MonthDropdownOptions = function (_React$Component) {
    inherits$2(MonthDropdownOptions, _React$Component);

    function MonthDropdownOptions() {
      var _temp, _this, _ret;

      classCallCheck$3(this, MonthDropdownOptions);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn$2(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.renderOptions = function () {
        return _this.props.monthNames.map(function (month, i) {
          return React__default.createElement(
            "div",
            {
              className: _this.props.month === i ? "react-datepicker__month-option --selected_month" : "react-datepicker__month-option",
              key: month,
              ref: month,
              onClick: _this.onChange.bind(_this, i)
            },
            _this.props.month === i ? React__default.createElement(
              "span",
              { className: "react-datepicker__month-option--selected" },
              "\u2713"
            ) : "",
            month
          );
        });
      }, _this.onChange = function (month) {
        return _this.props.onChange(month);
      }, _this.handleClickOutside = function () {
        return _this.props.onCancel();
      }, _temp), possibleConstructorReturn$2(_this, _ret);
    }

    MonthDropdownOptions.prototype.render = function render() {
      return React__default.createElement(
        "div",
        { className: "react-datepicker__month-dropdown" },
        this.renderOptions()
      );
    };

    return MonthDropdownOptions;
  }(React__default.Component);

  MonthDropdownOptions.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    month: PropTypes.number.isRequired,
    monthNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  };

  var WrappedMonthDropdownOptions = onClickOutsideHOC(MonthDropdownOptions);

  var MonthDropdown = function (_React$Component) {
    inherits$2(MonthDropdown, _React$Component);

    function MonthDropdown() {
      var _temp, _this, _ret;

      classCallCheck$3(this, MonthDropdown);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn$2(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
        dropdownVisible: false
      }, _this.renderSelectOptions = function (monthNames) {
        return monthNames.map(function (M, i) {
          return React__default.createElement(
            "option",
            { key: i, value: i },
            M
          );
        });
      }, _this.renderSelectMode = function (monthNames) {
        return React__default.createElement(
          "select",
          {
            value: _this.props.month,
            className: "react-datepicker__month-select",
            onChange: function onChange(e) {
              return _this.onChange(e.target.value);
            }
          },
          _this.renderSelectOptions(monthNames)
        );
      }, _this.renderReadView = function (visible, monthNames) {
        return React__default.createElement(
          "div",
          {
            key: "read",
            style: { visibility: visible ? "visible" : "hidden" },
            className: "react-datepicker__month-read-view",
            onClick: _this.toggleDropdown
          },
          React__default.createElement("span", { className: "react-datepicker__month-read-view--down-arrow" }),
          React__default.createElement(
            "span",
            { className: "react-datepicker__month-read-view--selected-month" },
            monthNames[_this.props.month]
          )
        );
      }, _this.renderDropdown = function (monthNames) {
        return React__default.createElement(WrappedMonthDropdownOptions, {
          key: "dropdown",
          ref: "options",
          month: _this.props.month,
          monthNames: monthNames,
          onChange: _this.onChange,
          onCancel: _this.toggleDropdown
        });
      }, _this.renderScrollMode = function (monthNames) {
        var dropdownVisible = _this.state.dropdownVisible;

        var result = [_this.renderReadView(!dropdownVisible, monthNames)];
        if (dropdownVisible) {
          result.unshift(_this.renderDropdown(monthNames));
        }
        return result;
      }, _this.onChange = function (month) {
        _this.toggleDropdown();
        if (month !== _this.props.month) {
          _this.props.onChange(month);
        }
      }, _this.toggleDropdown = function () {
        return _this.setState({
          dropdownVisible: !_this.state.dropdownVisible
        });
      }, _temp), possibleConstructorReturn$2(_this, _ret);
    }

    MonthDropdown.prototype.render = function render() {
      var _this2 = this;

      var localeData = getLocaleDataForLocale(this.props.locale);
      var monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(this.props.useShortMonthInDropdown ? function (M) {
        return getMonthShortInLocale(localeData, newDate({ M: M }));
      } : function (M) {
        return getMonthInLocale(localeData, newDate({ M: M }), _this2.props.dateFormat);
      });

      var renderedDropdown = void 0;
      switch (this.props.dropdownMode) {
        case "scroll":
          renderedDropdown = this.renderScrollMode(monthNames);
          break;
        case "select":
          renderedDropdown = this.renderSelectMode(monthNames);
          break;
      }

      return React__default.createElement(
        "div",
        {
          className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--" + this.props.dropdownMode
        },
        renderedDropdown
      );
    };

    return MonthDropdown;
  }(React__default.Component);

  MonthDropdown.propTypes = {
    dropdownMode: PropTypes.oneOf(["scroll", "select"]).isRequired,
    locale: PropTypes.string,
    dateFormat: PropTypes.string.isRequired,
    month: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    useShortMonthInDropdown: PropTypes.bool
  };

  function generateMonthYears(minDate, maxDate) {
    var list = [];

    var currDate = getStartOfMonth(cloneDate(minDate));
    var lastDate = getStartOfMonth(cloneDate(maxDate));

    while (!isAfter(currDate, lastDate)) {
      list.push(cloneDate(currDate));

      addMonths(currDate, 1);
    }

    return list;
  }

  var MonthYearDropdownOptions = function (_React$Component) {
    inherits$2(MonthYearDropdownOptions, _React$Component);

    function MonthYearDropdownOptions(props) {
      classCallCheck$3(this, MonthYearDropdownOptions);

      var _this = possibleConstructorReturn$2(this, _React$Component.call(this, props));

      _this.renderOptions = function () {
        return _this.state.monthYearsList.map(function (monthYear) {
          var monthYearPoint = monthYear.valueOf();

          var isSameMonthYear = isSameYear(_this.props.date, monthYear) && isSameMonth(_this.props.date, monthYear);

          return React__default.createElement(
            "div",
            {
              className: isSameMonthYear ? "react-datepicker__month-year-option --selected_month-year" : "react-datepicker__month-year-option",
              key: monthYearPoint,
              ref: monthYearPoint,
              onClick: _this.onChange.bind(_this, monthYearPoint)
            },
            isSameMonthYear ? React__default.createElement(
              "span",
              { className: "react-datepicker__month-year-option--selected" },
              "\u2713"
            ) : "",
            formatDate(monthYear, _this.props.dateFormat)
          );
        });
      };

      _this.onChange = function (monthYear) {
        return _this.props.onChange(monthYear);
      };

      _this.handleClickOutside = function () {
        _this.props.onCancel();
      };

      _this.state = {
        monthYearsList: generateMonthYears(_this.props.minDate, _this.props.maxDate)
      };
      return _this;
    }

    MonthYearDropdownOptions.prototype.render = function render() {
      var dropdownClass = classnames({
        "react-datepicker__month-year-dropdown": true,
        "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
      });

      return React__default.createElement(
        "div",
        { className: dropdownClass },
        this.renderOptions()
      );
    };

    return MonthYearDropdownOptions;
  }(React__default.Component);

  MonthYearDropdownOptions.propTypes = {
    minDate: PropTypes.object.isRequired,
    maxDate: PropTypes.object.isRequired,
    onCancel: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    scrollableMonthYearDropdown: PropTypes.bool,
    date: PropTypes.object.isRequired,
    dateFormat: PropTypes.string.isRequired
  };

  var WrappedMonthYearDropdownOptions = onClickOutsideHOC(MonthYearDropdownOptions);

  var MonthYearDropdown = function (_React$Component) {
    inherits$2(MonthYearDropdown, _React$Component);

    function MonthYearDropdown() {
      var _temp, _this, _ret;

      classCallCheck$3(this, MonthYearDropdown);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn$2(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
        dropdownVisible: false
      }, _this.renderSelectOptions = function () {
        var currDate = getStartOfMonth(localizeDate(_this.props.minDate, _this.props.locale));
        var lastDate = getStartOfMonth(localizeDate(_this.props.maxDate, _this.props.locale));

        var options = [];

        while (!isAfter(currDate, lastDate)) {
          var timepoint = currDate.valueOf();
          options.push(React__default.createElement(
            "option",
            { key: timepoint, value: timepoint },
            formatDate(currDate, _this.props.dateFormat)
          ));

          addMonths(currDate, 1);
        }

        return options;
      }, _this.onSelectChange = function (e) {
        _this.onChange(e.target.value);
      }, _this.renderSelectMode = function () {
        return React__default.createElement(
          "select",
          {
            value: getStartOfMonth(_this.props.date).valueOf(),
            className: "react-datepicker__month-year-select",
            onChange: _this.onSelectChange
          },
          _this.renderSelectOptions()
        );
      }, _this.renderReadView = function (visible) {
        var yearMonth = formatDate(localizeDate(newDate(_this.props.date), _this.props.locale), _this.props.dateFormat);

        return React__default.createElement(
          "div",
          {
            key: "read",
            style: { visibility: visible ? "visible" : "hidden" },
            className: "react-datepicker__month-year-read-view",
            onClick: function onClick(event) {
              return _this.toggleDropdown(event);
            }
          },
          React__default.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }),
          React__default.createElement(
            "span",
            { className: "react-datepicker__month-year-read-view--selected-month-year" },
            yearMonth
          )
        );
      }, _this.renderDropdown = function () {
        return React__default.createElement(WrappedMonthYearDropdownOptions, {
          key: "dropdown",
          ref: "options",
          date: _this.props.date,
          dateFormat: _this.props.dateFormat,
          onChange: _this.onChange,
          onCancel: _this.toggleDropdown,
          minDate: localizeDate(_this.props.minDate, _this.props.locale),
          maxDate: localizeDate(_this.props.maxDate, _this.props.locale),
          scrollableMonthYearDropdown: _this.props.scrollableMonthYearDropdown
        });
      }, _this.renderScrollMode = function () {
        var dropdownVisible = _this.state.dropdownVisible;

        var result = [_this.renderReadView(!dropdownVisible)];
        if (dropdownVisible) {
          result.unshift(_this.renderDropdown());
        }
        return result;
      }, _this.onChange = function (monthYearPoint) {
        _this.toggleDropdown();

        var changedDate = newDate(parseInt(monthYearPoint));

        if (isSameYear(_this.props.date, changedDate) && isSameMonth(_this.props.date, changedDate)) {
          return;
        }

        _this.props.onChange(changedDate);
      }, _this.toggleDropdown = function () {
        return _this.setState({
          dropdownVisible: !_this.state.dropdownVisible
        });
      }, _temp), possibleConstructorReturn$2(_this, _ret);
    }

    MonthYearDropdown.prototype.render = function render() {
      var renderedDropdown = void 0;
      switch (this.props.dropdownMode) {
        case "scroll":
          renderedDropdown = this.renderScrollMode();
          break;
        case "select":
          renderedDropdown = this.renderSelectMode();
          break;
      }

      return React__default.createElement(
        "div",
        {
          className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--" + this.props.dropdownMode
        },
        renderedDropdown
      );
    };

    return MonthYearDropdown;
  }(React__default.Component);

  MonthYearDropdown.propTypes = {
    dropdownMode: PropTypes.oneOf(["scroll", "select"]).isRequired,
    dateFormat: PropTypes.string.isRequired,
    locale: PropTypes.string,
    maxDate: PropTypes.object.isRequired,
    minDate: PropTypes.object.isRequired,
    date: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    scrollableMonthYearDropdown: PropTypes.bool
  };

  var Day = function (_React$Component) {
    inherits$2(Day, _React$Component);

    function Day() {
      var _temp, _this, _ret;

      classCallCheck$3(this, Day);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn$2(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
        if (!_this.isDisabled() && _this.props.onClick) {
          _this.props.onClick(event);
        }
      }, _this.handleMouseEnter = function (event) {
        if (!_this.isDisabled() && _this.props.onMouseEnter) {
          _this.props.onMouseEnter(event);
        }
      }, _this.isSameDay = function (other) {
        return isSameDay(_this.props.day, other);
      }, _this.isKeyboardSelected = function () {
        return !_this.props.inline && !_this.isSameDay(_this.props.selected) && _this.isSameDay(_this.props.preSelection);
      }, _this.isDisabled = function () {
        return isDayDisabled(_this.props.day, _this.props);
      }, _this.getHighLightedClass = function (defaultClassName) {
        var _this$props = _this.props,
            day = _this$props.day,
            highlightDates = _this$props.highlightDates;


        if (!highlightDates) {
          return false;
        }

        // Looking for className in the Map of {'day string, 'className'}
        var dayStr = day.format("MM.DD.YYYY");
        return highlightDates.get(dayStr);
      }, _this.isInRange = function () {
        var _this$props2 = _this.props,
            day = _this$props2.day,
            startDate = _this$props2.startDate,
            endDate = _this$props2.endDate;

        if (!startDate || !endDate) {
          return false;
        }
        return isDayInRange(day, startDate, endDate);
      }, _this.isInSelectingRange = function () {
        var _this$props3 = _this.props,
            day = _this$props3.day,
            selectsStart = _this$props3.selectsStart,
            selectsEnd = _this$props3.selectsEnd,
            selectingDate = _this$props3.selectingDate,
            startDate = _this$props3.startDate,
            endDate = _this$props3.endDate;


        if (!(selectsStart || selectsEnd) || !selectingDate || _this.isDisabled()) {
          return false;
        }

        if (selectsStart && endDate && selectingDate.isSameOrBefore(endDate)) {
          return isDayInRange(day, selectingDate, endDate);
        }

        if (selectsEnd && startDate && selectingDate.isSameOrAfter(startDate)) {
          return isDayInRange(day, startDate, selectingDate);
        }

        return false;
      }, _this.isSelectingRangeStart = function () {
        if (!_this.isInSelectingRange()) {
          return false;
        }

        var _this$props4 = _this.props,
            day = _this$props4.day,
            selectingDate = _this$props4.selectingDate,
            startDate = _this$props4.startDate,
            selectsStart = _this$props4.selectsStart;


        if (selectsStart) {
          return isSameDay(day, selectingDate);
        } else {
          return isSameDay(day, startDate);
        }
      }, _this.isSelectingRangeEnd = function () {
        if (!_this.isInSelectingRange()) {
          return false;
        }

        var _this$props5 = _this.props,
            day = _this$props5.day,
            selectingDate = _this$props5.selectingDate,
            endDate = _this$props5.endDate,
            selectsEnd = _this$props5.selectsEnd;


        if (selectsEnd) {
          return isSameDay(day, selectingDate);
        } else {
          return isSameDay(day, endDate);
        }
      }, _this.isRangeStart = function () {
        var _this$props6 = _this.props,
            day = _this$props6.day,
            startDate = _this$props6.startDate,
            endDate = _this$props6.endDate;

        if (!startDate || !endDate) {
          return false;
        }
        return isSameDay(startDate, day);
      }, _this.isRangeEnd = function () {
        var _this$props7 = _this.props,
            day = _this$props7.day,
            startDate = _this$props7.startDate,
            endDate = _this$props7.endDate;

        if (!startDate || !endDate) {
          return false;
        }
        return isSameDay(endDate, day);
      }, _this.isWeekend = function () {
        var weekday = getDay(_this.props.day);
        return weekday === 0 || weekday === 6;
      }, _this.isOutsideMonth = function () {
        return _this.props.month !== undefined && _this.props.month !== getMonth(_this.props.day);
      }, _this.getClassNames = function (date) {
        var dayClassName = _this.props.dayClassName ? _this.props.dayClassName(date) : undefined;
        return classnames("react-datepicker__day", dayClassName, "react-datepicker__day--" + getDayOfWeekCode(_this.props.day), {
          "react-datepicker__day--disabled": _this.isDisabled(),
          "react-datepicker__day--selected": _this.isSameDay(_this.props.selected),
          "react-datepicker__day--keyboard-selected": _this.isKeyboardSelected(),
          "react-datepicker__day--range-start": _this.isRangeStart(),
          "react-datepicker__day--range-end": _this.isRangeEnd(),
          "react-datepicker__day--in-range": _this.isInRange(),
          "react-datepicker__day--in-selecting-range": _this.isInSelectingRange(),
          "react-datepicker__day--selecting-range-start": _this.isSelectingRangeStart(),
          "react-datepicker__day--selecting-range-end": _this.isSelectingRangeEnd(),
          "react-datepicker__day--today": _this.isSameDay(now(_this.props.utcOffset)),
          "react-datepicker__day--weekend": _this.isWeekend(),
          "react-datepicker__day--outside-month": _this.isOutsideMonth()
        }, _this.getHighLightedClass("react-datepicker__day--highlighted"));
      }, _temp), possibleConstructorReturn$2(_this, _ret);
    }

    Day.prototype.render = function render() {
      return React__default.createElement(
        "div",
        {
          className: this.getClassNames(this.props.day),
          onClick: this.handleClick,
          onMouseEnter: this.handleMouseEnter,
          "aria-label": "day-" + getDate(this.props.day),
          role: "option"
        },
        getDate(this.props.day)
      );
    };

    return Day;
  }(React__default.Component);

  Day.propTypes = {
    day: PropTypes.object.isRequired,
    dayClassName: PropTypes.func,
    endDate: PropTypes.object,
    highlightDates: PropTypes.instanceOf(Map),
    inline: PropTypes.bool,
    month: PropTypes.number,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    preSelection: PropTypes.object,
    selected: PropTypes.object,
    selectingDate: PropTypes.object,
    selectsEnd: PropTypes.bool,
    selectsStart: PropTypes.bool,
    startDate: PropTypes.object,
    utcOffset: PropTypes.number
  };

  var WeekNumber = function (_React$Component) {
    inherits$2(WeekNumber, _React$Component);

    function WeekNumber() {
      var _temp, _this, _ret;

      classCallCheck$3(this, WeekNumber);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn$2(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
      }, _temp), possibleConstructorReturn$2(_this, _ret);
    }

    WeekNumber.prototype.render = function render() {
      var weekNumberClasses = {
        "react-datepicker__week-number": true,
        "react-datepicker__week-number--clickable": !!this.props.onClick
      };
      return React__default.createElement(
        "div",
        {
          className: classnames(weekNumberClasses),
          "aria-label": "week-" + this.props.weekNumber,
          onClick: this.handleClick
        },
        this.props.weekNumber
      );
    };

    return WeekNumber;
  }(React__default.Component);

  WeekNumber.propTypes = {
    weekNumber: PropTypes.number.isRequired,
    onClick: PropTypes.func
  };

  var Week = function (_React$Component) {
    inherits$2(Week, _React$Component);

    function Week() {
      var _temp, _this, _ret;

      classCallCheck$3(this, Week);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn$2(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleDayClick = function (day, event) {
        if (_this.props.onDayClick) {
          _this.props.onDayClick(day, event);
        }
      }, _this.handleDayMouseEnter = function (day) {
        if (_this.props.onDayMouseEnter) {
          _this.props.onDayMouseEnter(day);
        }
      }, _this.handleWeekClick = function (day, weekNumber, event) {
        if (typeof _this.props.onWeekSelect === "function") {
          _this.props.onWeekSelect(day, weekNumber, event);
        }
      }, _this.formatWeekNumber = function (startOfWeek) {
        if (_this.props.formatWeekNumber) {
          return _this.props.formatWeekNumber(startOfWeek);
        }
        return getWeek(startOfWeek);
      }, _this.renderDays = function () {
        var startOfWeek = getStartOfWeek(cloneDate(_this.props.day));
        var days = [];
        var weekNumber = _this.formatWeekNumber(startOfWeek);
        if (_this.props.showWeekNumber) {
          var onClickAction = _this.props.onWeekSelect ? _this.handleWeekClick.bind(_this, startOfWeek, weekNumber) : undefined;
          days.push(React__default.createElement(WeekNumber, { key: "W", weekNumber: weekNumber, onClick: onClickAction }));
        }
        return days.concat([0, 1, 2, 3, 4, 5, 6].map(function (offset) {
          var day = addDays(cloneDate(startOfWeek), offset);
          return React__default.createElement(Day, {
            key: offset,
            day: day,
            month: _this.props.month,
            onClick: _this.handleDayClick.bind(_this, day),
            onMouseEnter: _this.handleDayMouseEnter.bind(_this, day),
            minDate: _this.props.minDate,
            maxDate: _this.props.maxDate,
            excludeDates: _this.props.excludeDates,
            includeDates: _this.props.includeDates,
            inline: _this.props.inline,
            highlightDates: _this.props.highlightDates,
            selectingDate: _this.props.selectingDate,
            filterDate: _this.props.filterDate,
            preSelection: _this.props.preSelection,
            selected: _this.props.selected,
            selectsStart: _this.props.selectsStart,
            selectsEnd: _this.props.selectsEnd,
            startDate: _this.props.startDate,
            endDate: _this.props.endDate,
            dayClassName: _this.props.dayClassName,
            utcOffset: _this.props.utcOffset
          });
        }));
      }, _temp), possibleConstructorReturn$2(_this, _ret);
    }

    Week.prototype.render = function render() {
      return React__default.createElement(
        "div",
        { className: "react-datepicker__week" },
        this.renderDays()
      );
    };

    return Week;
  }(React__default.Component);

  Week.propTypes = {
    day: PropTypes.object.isRequired,
    dayClassName: PropTypes.func,
    endDate: PropTypes.object,
    excludeDates: PropTypes.array,
    filterDate: PropTypes.func,
    formatWeekNumber: PropTypes.func,
    highlightDates: PropTypes.instanceOf(Map),
    includeDates: PropTypes.array,
    inline: PropTypes.bool,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    month: PropTypes.number,
    onDayClick: PropTypes.func,
    onDayMouseEnter: PropTypes.func,
    onWeekSelect: PropTypes.func,
    preSelection: PropTypes.object,
    selected: PropTypes.object,
    selectingDate: PropTypes.object,
    selectsEnd: PropTypes.bool,
    selectsStart: PropTypes.bool,
    showWeekNumber: PropTypes.bool,
    startDate: PropTypes.object,
    utcOffset: PropTypes.number
  };

  var FIXED_HEIGHT_STANDARD_WEEK_COUNT = 6;

  var Month = function (_React$Component) {
    inherits$2(Month, _React$Component);

    function Month() {
      var _temp, _this, _ret;

      classCallCheck$3(this, Month);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn$2(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleDayClick = function (day, event) {
        if (_this.props.onDayClick) {
          _this.props.onDayClick(day, event);
        }
      }, _this.handleDayMouseEnter = function (day) {
        if (_this.props.onDayMouseEnter) {
          _this.props.onDayMouseEnter(day);
        }
      }, _this.handleMouseLeave = function () {
        if (_this.props.onMouseLeave) {
          _this.props.onMouseLeave();
        }
      }, _this.isWeekInMonth = function (startOfWeek) {
        var day = _this.props.day;
        var endOfWeek = addDays(cloneDate(startOfWeek), 6);
        return isSameMonth(startOfWeek, day) || isSameMonth(endOfWeek, day);
      }, _this.renderWeeks = function () {
        var weeks = [];
        var isFixedHeight = _this.props.fixedHeight;
        var currentWeekStart = getStartOfWeek(getStartOfMonth(cloneDate(_this.props.day)));
        var i = 0;
        var breakAfterNextPush = false;

        while (true) {
          weeks.push(React__default.createElement(Week, {
            key: i,
            day: currentWeekStart,
            month: getMonth(_this.props.day),
            onDayClick: _this.handleDayClick,
            onDayMouseEnter: _this.handleDayMouseEnter,
            onWeekSelect: _this.props.onWeekSelect,
            formatWeekNumber: _this.props.formatWeekNumber,
            minDate: _this.props.minDate,
            maxDate: _this.props.maxDate,
            excludeDates: _this.props.excludeDates,
            includeDates: _this.props.includeDates,
            inline: _this.props.inline,
            highlightDates: _this.props.highlightDates,
            selectingDate: _this.props.selectingDate,
            filterDate: _this.props.filterDate,
            preSelection: _this.props.preSelection,
            selected: _this.props.selected,
            selectsStart: _this.props.selectsStart,
            selectsEnd: _this.props.selectsEnd,
            showWeekNumber: _this.props.showWeekNumbers,
            startDate: _this.props.startDate,
            endDate: _this.props.endDate,
            dayClassName: _this.props.dayClassName,
            utcOffset: _this.props.utcOffset
          }));

          if (breakAfterNextPush) break;

          i++;
          currentWeekStart = addWeeks(cloneDate(currentWeekStart), 1);

          // If one of these conditions is true, we will either break on this week
          // or break on the next week
          var isFixedAndFinalWeek = isFixedHeight && i >= FIXED_HEIGHT_STANDARD_WEEK_COUNT;
          var isNonFixedAndOutOfMonth = !isFixedHeight && !_this.isWeekInMonth(currentWeekStart);

          if (isFixedAndFinalWeek || isNonFixedAndOutOfMonth) {
            if (_this.props.peekNextMonth) {
              breakAfterNextPush = true;
            } else {
              break;
            }
          }
        }

        return weeks;
      }, _this.getClassNames = function () {
        var _this$props = _this.props,
            selectingDate = _this$props.selectingDate,
            selectsStart = _this$props.selectsStart,
            selectsEnd = _this$props.selectsEnd;

        return classnames("react-datepicker__month", {
          "react-datepicker__month--selecting-range": selectingDate && (selectsStart || selectsEnd)
        });
      }, _temp), possibleConstructorReturn$2(_this, _ret);
    }

    Month.prototype.render = function render() {
      return React__default.createElement(
        "div",
        {
          className: this.getClassNames(),
          onMouseLeave: this.handleMouseLeave,
          role: "listbox"
        },
        this.renderWeeks()
      );
    };

    return Month;
  }(React__default.Component);

  Month.propTypes = {
    day: PropTypes.object.isRequired,
    dayClassName: PropTypes.func,
    endDate: PropTypes.object,
    excludeDates: PropTypes.array,
    filterDate: PropTypes.func,
    fixedHeight: PropTypes.bool,
    formatWeekNumber: PropTypes.func,
    highlightDates: PropTypes.instanceOf(Map),
    includeDates: PropTypes.array,
    inline: PropTypes.bool,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    onDayClick: PropTypes.func,
    onDayMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onWeekSelect: PropTypes.func,
    peekNextMonth: PropTypes.bool,
    preSelection: PropTypes.object,
    selected: PropTypes.object,
    selectingDate: PropTypes.object,
    selectsEnd: PropTypes.bool,
    selectsStart: PropTypes.bool,
    showWeekNumbers: PropTypes.bool,
    startDate: PropTypes.object,
    utcOffset: PropTypes.number
  };

  var Time = function (_React$Component) {
    inherits$2(Time, _React$Component);

    function Time() {
      var _temp, _this, _ret;

      classCallCheck$3(this, Time);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn$2(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (time) {
        if ((_this.props.minTime || _this.props.maxTime) && isTimeInDisabledRange(time, _this.props) || _this.props.excludeTimes && isTimeDisabled(time, _this.props.excludeTimes) || _this.props.includeTimes && !isTimeDisabled(time, _this.props.includeTimes)) {
          return;
        }

        _this.props.onChange(time);
      }, _this.liClasses = function (time, currH, currM) {
        var classes = ["react-datepicker__time-list-item"];

        if (currH === getHour(time) && currM === getMinute(time)) {
          classes.push("react-datepicker__time-list-item--selected");
        }
        if ((_this.props.minTime || _this.props.maxTime) && isTimeInDisabledRange(time, _this.props) || _this.props.excludeTimes && isTimeDisabled(time, _this.props.excludeTimes) || _this.props.includeTimes && !isTimeDisabled(time, _this.props.includeTimes)) {
          classes.push("react-datepicker__time-list-item--disabled");
        }
        if (_this.props.injectTimes && (getHour(time) * 60 + getMinute(time)) % _this.props.intervals !== 0) {
          classes.push("react-datepicker__time-list-item--injected");
        }

        return classes.join(" ");
      }, _this.renderTimes = function () {
        var times = [];
        var format = _this.props.format ? _this.props.format : "hh:mm A";
        var intervals = _this.props.intervals;
        var activeTime = _this.props.selected ? _this.props.selected : newDate();
        var currH = getHour(activeTime);
        var currM = getMinute(activeTime);
        var base = getStartOfDay(newDate());
        var multiplier = 1440 / intervals;
        var sortedInjectTimes = _this.props.injectTimes && _this.props.injectTimes.sort(function (a, b) {
          return a - b;
        });
        for (var i = 0; i < multiplier; i++) {
          var currentTime = addMinutes(cloneDate(base), i * intervals);
          times.push(currentTime);

          if (sortedInjectTimes) {
            var timesToInject = timesToInjectAfter(base, currentTime, i, intervals, sortedInjectTimes);
            times = times.concat(timesToInject);
          }
        }

        return times.map(function (time, i) {
          return React__default.createElement(
            "li",
            {
              key: i,
              onClick: _this.handleClick.bind(_this, time),
              className: _this.liClasses(time, currH, currM)
            },
            formatDate(time, format)
          );
        });
      }, _temp), possibleConstructorReturn$2(_this, _ret);
    }

    Time.prototype.componentDidMount = function componentDidMount() {
      // code to ensure selected time will always be in focus within time window when it first appears
      var multiplier = 60 / this.props.intervals;
      var currH = this.props.selected ? getHour(this.props.selected) : getHour(newDate());
      this.list.scrollTop = 30 * (multiplier * currH);
    };

    Time.prototype.render = function render() {
      var _this2 = this;

      var height = null;
      if (this.props.monthRef) {
        height = this.props.monthRef.clientHeight - 39;
      }

      return React__default.createElement(
        "div",
        {
          className: "react-datepicker__time-container " + (this.props.todayButton ? "react-datepicker__time-container--with-today-button" : "")
        },
        React__default.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--time" },
          React__default.createElement(
            "div",
            { className: "react-datepicker-time__header" },
            this.props.timeCaption
          )
        ),
        React__default.createElement(
          "div",
          { className: "react-datepicker__time" },
          React__default.createElement(
            "div",
            { className: "react-datepicker__time-box" },
            React__default.createElement(
              "ul",
              {
                className: "react-datepicker__time-list",
                ref: function ref(list) {
                  _this2.list = list;
                },
                style: height ? { height: height } : {}
              },
              this.renderTimes.bind(this)()
            )
          )
        )
      );
    };

    createClass$3(Time, null, [{
      key: "defaultProps",
      get: function get$$1() {
        return {
          intervals: 30,
          onTimeChange: function onTimeChange() {},
          todayButton: null,
          timeCaption: "Time"
        };
      }
    }]);
    return Time;
  }(React__default.Component);

  Time.propTypes = {
    format: PropTypes.string,
    includeTimes: PropTypes.array,
    intervals: PropTypes.number,
    selected: PropTypes.object,
    onChange: PropTypes.func,
    todayButton: PropTypes.string,
    minTime: PropTypes.object,
    maxTime: PropTypes.object,
    excludeTimes: PropTypes.array,
    monthRef: PropTypes.object,
    timeCaption: PropTypes.string,
    injectTimes: PropTypes.array
  };

  var DROPDOWN_FOCUS_CLASSNAMES = ["react-datepicker__year-select", "react-datepicker__month-select", "react-datepicker__month-year-select"];

  var isDropdownSelect = function isDropdownSelect() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var classNames = (element.className || "").split(/\s+/);
    return DROPDOWN_FOCUS_CLASSNAMES.some(function (testClassname) {
      return classNames.indexOf(testClassname) >= 0;
    });
  };

  var Calendar = function (_React$Component) {
    inherits$2(Calendar, _React$Component);
    createClass$3(Calendar, null, [{
      key: "defaultProps",
      get: function get$$1() {
        return {
          onDropdownFocus: function onDropdownFocus() {},
          monthsShown: 1,
          forceShowMonthNavigation: false,
          timeCaption: "Time"
        };
      }
    }]);

    function Calendar(props) {
      classCallCheck$3(this, Calendar);

      var _this = possibleConstructorReturn$2(this, _React$Component.call(this, props));

      _this.handleClickOutside = function (event) {
        _this.props.onClickOutside(event);
      };

      _this.handleDropdownFocus = function (event) {
        if (isDropdownSelect(event.target)) {
          _this.props.onDropdownFocus();
        }
      };

      _this.getDateInView = function () {
        var _this$props = _this.props,
            preSelection = _this$props.preSelection,
            selected = _this$props.selected,
            openToDate = _this$props.openToDate,
            utcOffset = _this$props.utcOffset;

        var minDate = getEffectiveMinDate(_this.props);
        var maxDate = getEffectiveMaxDate(_this.props);
        var current = now(utcOffset);
        var initialDate = openToDate || selected || preSelection;
        if (initialDate) {
          return initialDate;
        } else {
          if (minDate && isBefore(current, minDate)) {
            return minDate;
          } else if (maxDate && isAfter(current, maxDate)) {
            return maxDate;
          }
        }
        return current;
      };

      _this.localizeDate = function (date) {
        return localizeDate(date, _this.props.locale);
      };

      _this.increaseMonth = function () {
        _this.setState({
          date: addMonths(cloneDate(_this.state.date), 1)
        }, function () {
          return _this.handleMonthChange(_this.state.date);
        });
      };

      _this.decreaseMonth = function () {
        _this.setState({
          date: subtractMonths(cloneDate(_this.state.date), 1)
        }, function () {
          return _this.handleMonthChange(_this.state.date);
        });
      };

      _this.handleDayClick = function (day, event) {
        return _this.props.onSelect(day, event);
      };

      _this.handleDayMouseEnter = function (day) {
        return _this.setState({ selectingDate: day });
      };

      _this.handleMonthMouseLeave = function () {
        return _this.setState({ selectingDate: null });
      };

      _this.handleYearChange = function (date) {
        if (_this.props.onYearChange) {
          _this.props.onYearChange(date);
        }
      };

      _this.handleMonthChange = function (date) {
        if (_this.props.onMonthChange) {
          _this.props.onMonthChange(date);
        }
        if (_this.props.adjustDateOnChange) {
          if (_this.props.onSelect) {
            _this.props.onSelect(date);
          }
          if (_this.props.setOpen) {
            _this.props.setOpen(true);
          }
        }
      };

      _this.handleMonthYearChange = function (date) {
        _this.handleYearChange(date);
        _this.handleMonthChange(date);
      };

      _this.changeYear = function (year) {
        _this.setState({
          date: setYear(cloneDate(_this.state.date), year)
        }, function () {
          return _this.handleYearChange(_this.state.date);
        });
      };

      _this.changeMonth = function (month) {
        _this.setState({
          date: setMonth(cloneDate(_this.state.date), month)
        }, function () {
          return _this.handleMonthChange(_this.state.date);
        });
      };

      _this.changeMonthYear = function (monthYear) {
        _this.setState({
          date: setYear(setMonth(cloneDate(_this.state.date), getMonth(monthYear)), getYear(monthYear))
        }, function () {
          return _this.handleMonthYearChange(_this.state.date);
        });
      };

      _this.header = function () {
        var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.date;

        var startOfWeek = getStartOfWeek(cloneDate(date));
        var dayNames = [];
        if (_this.props.showWeekNumbers) {
          dayNames.push(React__default.createElement(
            "div",
            { key: "W", className: "react-datepicker__day-name" },
            _this.props.weekLabel || "#"
          ));
        }
        return dayNames.concat([0, 1, 2, 3, 4, 5, 6].map(function (offset) {
          var day = addDays(cloneDate(startOfWeek), offset);
          var localeData = getLocaleData(day);
          var weekDayName = _this.props.useWeekdaysShort ? getWeekdayShortInLocale(localeData, day) : getWeekdayMinInLocale(localeData, day);
          return React__default.createElement(
            "div",
            { key: offset, className: "react-datepicker__day-name" },
            weekDayName
          );
        }));
      };

      _this.renderPreviousMonthButton = function () {
        var allPrevDaysDisabled = allDaysDisabledBefore(_this.state.date, "month", _this.props);

        if (!_this.props.forceShowMonthNavigation && !_this.props.showDisabledMonthNavigation && allPrevDaysDisabled || _this.props.showTimeSelectOnly) {
          return;
        }

        var classes = ["react-datepicker__navigation", "react-datepicker__navigation--previous"];

        var clickHandler = _this.decreaseMonth;

        if (allPrevDaysDisabled && _this.props.showDisabledMonthNavigation) {
          classes.push("react-datepicker__navigation--previous--disabled");
          clickHandler = null;
        }

        return React__default.createElement("button", {
          type: "button",
          className: classes.join(" "),
          onClick: clickHandler
        });
      };

      _this.renderNextMonthButton = function () {
        var allNextDaysDisabled = allDaysDisabledAfter(_this.state.date, "month", _this.props);

        if (!_this.props.forceShowMonthNavigation && !_this.props.showDisabledMonthNavigation && allNextDaysDisabled || _this.props.showTimeSelectOnly) {
          return;
        }

        var classes = ["react-datepicker__navigation", "react-datepicker__navigation--next"];
        if (_this.props.showTimeSelect) {
          classes.push("react-datepicker__navigation--next--with-time");
        }
        if (_this.props.todayButton) {
          classes.push("react-datepicker__navigation--next--with-today-button");
        }

        var clickHandler = _this.increaseMonth;

        if (allNextDaysDisabled && _this.props.showDisabledMonthNavigation) {
          classes.push("react-datepicker__navigation--next--disabled");
          clickHandler = null;
        }

        return React__default.createElement("button", {
          type: "button",
          className: classes.join(" "),
          onClick: clickHandler
        });
      };

      _this.renderCurrentMonth = function () {
        var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.date;

        var classes = ["react-datepicker__current-month"];

        if (_this.props.showYearDropdown) {
          classes.push("react-datepicker__current-month--hasYearDropdown");
        }
        if (_this.props.showMonthDropdown) {
          classes.push("react-datepicker__current-month--hasMonthDropdown");
        }
        if (_this.props.showMonthYearDropdown) {
          classes.push("react-datepicker__current-month--hasMonthYearDropdown");
        }
        return React__default.createElement(
          "div",
          { className: classes.join(" ") },
          formatDate(date, _this.props.dateFormat)
        );
      };

      _this.renderYearDropdown = function () {
        var overrideHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!_this.props.showYearDropdown || overrideHide) {
          return;
        }
        return React__default.createElement(YearDropdown, {
          adjustDateOnChange: _this.props.adjustDateOnChange,
          date: _this.state.date,
          onSelect: _this.props.onSelect,
          setOpen: _this.props.setOpen,
          dropdownMode: _this.props.dropdownMode,
          onChange: _this.changeYear,
          minDate: _this.props.minDate,
          maxDate: _this.props.maxDate,
          year: getYear(_this.state.date),
          scrollableYearDropdown: _this.props.scrollableYearDropdown,
          yearDropdownItemNumber: _this.props.yearDropdownItemNumber
        });
      };

      _this.renderMonthDropdown = function () {
        var overrideHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!_this.props.showMonthDropdown || overrideHide) {
          return;
        }
        return React__default.createElement(MonthDropdown, {
          dropdownMode: _this.props.dropdownMode,
          locale: _this.props.locale,
          dateFormat: _this.props.dateFormat,
          onChange: _this.changeMonth,
          month: getMonth(_this.state.date),
          useShortMonthInDropdown: _this.props.useShortMonthInDropdown
        });
      };

      _this.renderMonthYearDropdown = function () {
        var overrideHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!_this.props.showMonthYearDropdown || overrideHide) {
          return;
        }
        return React__default.createElement(MonthYearDropdown, {
          dropdownMode: _this.props.dropdownMode,
          locale: _this.props.locale,
          dateFormat: _this.props.dateFormat,
          onChange: _this.changeMonthYear,
          minDate: _this.props.minDate,
          maxDate: _this.props.maxDate,
          date: _this.state.date,
          scrollableMonthYearDropdown: _this.props.scrollableMonthYearDropdown
        });
      };

      _this.renderTodayButton = function () {
        if (!_this.props.todayButton || _this.props.showTimeSelectOnly) {
          return;
        }
        return React__default.createElement(
          "div",
          {
            className: "react-datepicker__today-button",
            onClick: function onClick(e) {
              return _this.props.onSelect(getStartOfDate(now(_this.props.utcOffset)), e);
            }
          },
          _this.props.todayButton
        );
      };

      _this.renderMonths = function () {
        if (_this.props.showTimeSelectOnly) {
          return;
        }

        var monthList = [];
        for (var i = 0; i < _this.props.monthsShown; ++i) {
          var monthDate = addMonths(cloneDate(_this.state.date), i);
          var monthKey = "month-" + i;
          monthList.push(React__default.createElement(
            "div",
            {
              key: monthKey,
              ref: function ref(div) {
                _this.monthContainer = div;
              },
              className: "react-datepicker__month-container"
            },
            React__default.createElement(
              "div",
              { className: "react-datepicker__header" },
              _this.renderCurrentMonth(monthDate),
              React__default.createElement(
                "div",
                {
                  className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--" + _this.props.dropdownMode,
                  onFocus: _this.handleDropdownFocus
                },
                _this.renderMonthDropdown(i !== 0),
                _this.renderMonthYearDropdown(i !== 0),
                _this.renderYearDropdown(i !== 0)
              ),
              React__default.createElement(
                "div",
                { className: "react-datepicker__day-names" },
                _this.header(monthDate)
              )
            ),
            React__default.createElement(Month, {
              day: monthDate,
              dayClassName: _this.props.dayClassName,
              onDayClick: _this.handleDayClick,
              onDayMouseEnter: _this.handleDayMouseEnter,
              onMouseLeave: _this.handleMonthMouseLeave,
              onWeekSelect: _this.props.onWeekSelect,
              formatWeekNumber: _this.props.formatWeekNumber,
              minDate: _this.props.minDate,
              maxDate: _this.props.maxDate,
              excludeDates: _this.props.excludeDates,
              highlightDates: _this.props.highlightDates,
              selectingDate: _this.state.selectingDate,
              includeDates: _this.props.includeDates,
              inline: _this.props.inline,
              fixedHeight: _this.props.fixedHeight,
              filterDate: _this.props.filterDate,
              preSelection: _this.props.preSelection,
              selected: _this.props.selected,
              selectsStart: _this.props.selectsStart,
              selectsEnd: _this.props.selectsEnd,
              showWeekNumbers: _this.props.showWeekNumbers,
              startDate: _this.props.startDate,
              endDate: _this.props.endDate,
              peekNextMonth: _this.props.peekNextMonth,
              utcOffset: _this.props.utcOffset
            })
          ));
        }
        return monthList;
      };

      _this.renderTimeSection = function () {
        if (_this.props.showTimeSelect) {
          return React__default.createElement(Time, {
            selected: _this.props.selected,
            onChange: _this.props.onTimeChange,
            format: _this.props.timeFormat,
            includeTimes: _this.props.includeTimes,
            intervals: _this.props.timeIntervals,
            minTime: _this.props.minTime,
            maxTime: _this.props.maxTime,
            excludeTimes: _this.props.excludeTimes,
            timeCaption: _this.props.timeCaption,
            todayButton: _this.props.todayButton,
            showMonthDropdown: _this.props.showMonthDropdown,
            showMonthYearDropdown: _this.props.showMonthYearDropdown,
            showYearDropdown: _this.props.showYearDropdown,
            withPortal: _this.props.withPortal,
            monthRef: _this.state.monthContainer,
            injectTimes: _this.props.injectTimes
          });
        }
      };

      _this.state = {
        date: _this.localizeDate(_this.getDateInView()),
        selectingDate: null,
        monthContainer: _this.monthContainer
      };
      return _this;
    }

    Calendar.prototype.componentDidMount = function componentDidMount() {
      var _this2 = this;

      // monthContainer height is needed in time component
      // to determine the height for the ul in the time component
      // setState here so height is given after final component
      // layout is rendered
      if (this.props.showTimeSelect) {
        this.assignMonthContainer = function () {
          _this2.setState({ monthContainer: _this2.monthContainer });
        }();
      }
    };

    Calendar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (nextProps.preSelection && !isSameDay(nextProps.preSelection, this.props.preSelection)) {
        this.setState({
          date: this.localizeDate(nextProps.preSelection)
        });
      } else if (nextProps.openToDate && !isSameDay(nextProps.openToDate, this.props.openToDate)) {
        this.setState({
          date: this.localizeDate(nextProps.openToDate)
        });
      }
    };

    Calendar.prototype.render = function render() {
      return React__default.createElement(
        "div",
        {
          className: classnames("react-datepicker", this.props.className, {
            "react-datepicker--time-only": this.props.showTimeSelectOnly
          })
        },
        React__default.createElement("div", { className: "react-datepicker__triangle" }),
        this.renderPreviousMonthButton(),
        this.renderNextMonthButton(),
        this.renderMonths(),
        this.renderTodayButton(),
        this.renderTimeSection(),
        this.props.children
      );
    };

    return Calendar;
  }(React__default.Component);

  Calendar.propTypes = {
    adjustDateOnChange: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
    dateFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    dayClassName: PropTypes.func,
    dropdownMode: PropTypes.oneOf(["scroll", "select"]),
    endDate: PropTypes.object,
    excludeDates: PropTypes.array,
    filterDate: PropTypes.func,
    fixedHeight: PropTypes.bool,
    formatWeekNumber: PropTypes.func,
    highlightDates: PropTypes.instanceOf(Map),
    includeDates: PropTypes.array,
    includeTimes: PropTypes.array,
    injectTimes: PropTypes.array,
    inline: PropTypes.bool,
    locale: PropTypes.string,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    monthsShown: PropTypes.number,
    onClickOutside: PropTypes.func.isRequired,
    onMonthChange: PropTypes.func,
    onYearChange: PropTypes.func,
    forceShowMonthNavigation: PropTypes.bool,
    onDropdownFocus: PropTypes.func,
    onSelect: PropTypes.func.isRequired,
    onWeekSelect: PropTypes.func,
    showTimeSelect: PropTypes.bool,
    showTimeSelectOnly: PropTypes.bool,
    timeFormat: PropTypes.string,
    timeIntervals: PropTypes.number,
    onTimeChange: PropTypes.func,
    minTime: PropTypes.object,
    maxTime: PropTypes.object,
    excludeTimes: PropTypes.array,
    timeCaption: PropTypes.string,
    openToDate: PropTypes.object,
    peekNextMonth: PropTypes.bool,
    scrollableYearDropdown: PropTypes.bool,
    scrollableMonthYearDropdown: PropTypes.bool,
    preSelection: PropTypes.object,
    selected: PropTypes.object,
    selectsEnd: PropTypes.bool,
    selectsStart: PropTypes.bool,
    showMonthDropdown: PropTypes.bool,
    showMonthYearDropdown: PropTypes.bool,
    showWeekNumbers: PropTypes.bool,
    showYearDropdown: PropTypes.bool,
    startDate: PropTypes.object,
    todayButton: PropTypes.string,
    useWeekdaysShort: PropTypes.bool,
    withPortal: PropTypes.bool,
    utcOffset: PropTypes.number,
    weekLabel: PropTypes.string,
    yearDropdownItemNumber: PropTypes.number,
    setOpen: PropTypes.func,
    useShortMonthInDropdown: PropTypes.bool,
    showDisabledMonthNavigation: PropTypes.bool
  };

  var popperPlacementPositions = ["auto", "auto-left", "auto-right", "bottom", "bottom-end", "bottom-start", "left", "left-end", "left-start", "right", "right-end", "right-start", "top", "top-end", "top-start"];

  var PopperComponent = function (_React$Component) {
    inherits$2(PopperComponent, _React$Component);

    function PopperComponent() {
      classCallCheck$3(this, PopperComponent);
      return possibleConstructorReturn$2(this, _React$Component.apply(this, arguments));
    }

    PopperComponent.prototype.render = function render() {
      var _props = this.props,
          className = _props.className,
          hidePopper = _props.hidePopper,
          popperComponent = _props.popperComponent,
          popperModifiers = _props.popperModifiers,
          popperPlacement = _props.popperPlacement,
          targetComponent = _props.targetComponent;


      var popper = void 0;

      if (!hidePopper) {
        var classes = classnames("react-datepicker-popper", className);
        popper = React__default.createElement(
          Popper$1,
          {
            className: classes,
            modifiers: popperModifiers,
            placement: popperPlacement
          },
          popperComponent
        );
      }

      if (this.props.popperContainer) {
        popper = React__default.createElement(this.props.popperContainer, {}, popper);
      }

      return React__default.createElement(
        Manager,
        null,
        React__default.createElement(
          Target,
          { className: "react-datepicker-wrapper" },
          targetComponent
        ),
        popper
      );
    };

    createClass$3(PopperComponent, null, [{
      key: "defaultProps",
      get: function get$$1() {
        return {
          hidePopper: true,
          popperModifiers: {
            preventOverflow: {
              enabled: true,
              escapeWithReference: true,
              boundariesElement: "viewport"
            }
          },
          popperPlacement: "bottom-start"
        };
      }
    }]);
    return PopperComponent;
  }(React__default.Component);

  PopperComponent.propTypes = {
    className: PropTypes.string,
    hidePopper: PropTypes.bool,
    popperComponent: PropTypes.element,
    popperModifiers: PropTypes.object, // <datepicker/> props
    popperPlacement: PropTypes.oneOf(popperPlacementPositions), // <datepicker/> props
    popperContainer: PropTypes.func,
    targetComponent: PropTypes.element
  };

  var outsideClickIgnoreClass = "react-datepicker-ignore-onclickoutside";
  var WrappedCalendar = onClickOutsideHOC(Calendar);

  // Compares dates year+month combinations
  function hasPreSelectionChanged(date1, date2) {
    if (date1 && date2) {
      return getMonth(date1) !== getMonth(date2) || getYear(date1) !== getYear(date2);
    }

    return date1 !== date2;
  }

  /**
   * General datepicker component.
   */

  var DatePicker = function (_React$Component) {
    inherits$2(DatePicker, _React$Component);
    createClass$3(DatePicker, null, [{
      key: "defaultProps",
      get: function get$$1() {
        return {
          allowSameDay: false,
          dateFormat: "L",
          dateFormatCalendar: "MMMM YYYY",
          onChange: function onChange() {},

          disabled: false,
          disabledKeyboardNavigation: false,
          dropdownMode: "scroll",
          onFocus: function onFocus() {},
          onBlur: function onBlur() {},
          onKeyDown: function onKeyDown() {},
          onSelect: function onSelect() {},
          onClickOutside: function onClickOutside$$1() {},
          onMonthChange: function onMonthChange() {},

          preventOpenOnFocus: false,
          onYearChange: function onYearChange() {},

          monthsShown: 1,
          withPortal: false,
          shouldCloseOnSelect: true,
          showTimeSelect: false,
          timeIntervals: 30,
          timeCaption: "Time"
        };
      }
    }]);

    function DatePicker(props) {
      classCallCheck$3(this, DatePicker);

      var _this = possibleConstructorReturn$2(this, _React$Component.call(this, props));

      _this.getPreSelection = function () {
        return _this.props.openToDate ? newDate(_this.props.openToDate) : _this.props.selectsEnd && _this.props.startDate ? newDate(_this.props.startDate) : _this.props.selectsStart && _this.props.endDate ? newDate(_this.props.endDate) : now(_this.props.utcOffset);
      };

      _this.calcInitialState = function () {
        var defaultPreSelection = _this.getPreSelection();
        var minDate = getEffectiveMinDate(_this.props);
        var maxDate = getEffectiveMaxDate(_this.props);
        var boundedPreSelection = minDate && isBefore(defaultPreSelection, minDate) ? minDate : maxDate && isAfter(defaultPreSelection, maxDate) ? maxDate : defaultPreSelection;
        return {
          open: _this.props.startOpen || false,
          preventFocus: false,
          preSelection: _this.props.selected ? newDate(_this.props.selected) : boundedPreSelection,
          // transforming highlighted days (perhaps nested array)
          // to flat Map for faster access in day.jsx
          highlightDates: getHightLightDaysMap(_this.props.highlightDates),
          focused: false
        };
      };

      _this.clearPreventFocusTimeout = function () {
        if (_this.preventFocusTimeout) {
          clearTimeout(_this.preventFocusTimeout);
        }
      };

      _this.setFocus = function () {
        if (_this.input && _this.input.focus) {
          _this.input.focus();
        }
      };

      _this.setOpen = function (open) {
        _this.setState({
          open: open,
          preSelection: open && _this.state.open ? _this.state.preSelection : _this.calcInitialState().preSelection
        });
      };

      _this.handleFocus = function (event) {
        if (!_this.state.preventFocus) {
          _this.props.onFocus(event);
          if (!_this.props.preventOpenOnFocus) {
            _this.setOpen(true);
          }
        }
        _this.setState({ focused: true });
      };

      _this.cancelFocusInput = function () {
        clearTimeout(_this.inputFocusTimeout);
        _this.inputFocusTimeout = null;
      };

      _this.deferFocusInput = function () {
        _this.cancelFocusInput();
        _this.inputFocusTimeout = setTimeout(function () {
          return _this.setFocus();
        }, 1);
      };

      _this.handleDropdownFocus = function () {
        _this.cancelFocusInput();
      };

      _this.handleBlur = function (event) {
        if (_this.state.open) {
          _this.deferFocusInput();
        } else {
          _this.props.onBlur(event);
        }
        _this.setState({ focused: false });
      };

      _this.handleCalendarClickOutside = function (event) {
        if (!_this.props.inline) {
          _this.setOpen(false);
        }
        _this.props.onClickOutside(event);
        if (_this.props.withPortal) {
          event.preventDefault();
        }
      };

      _this.handleChange = function () {
        for (var _len = arguments.length, allArgs = Array(_len), _key = 0; _key < _len; _key++) {
          allArgs[_key] = arguments[_key];
        }

        var event = allArgs[0];
        if (_this.props.onChangeRaw) {
          _this.props.onChangeRaw.apply(_this, allArgs);
          if (typeof event.isDefaultPrevented !== "function" || event.isDefaultPrevented()) {
            return;
          }
        }
        _this.setState({ inputValue: event.target.value });
        var date = parseDate(event.target.value, _this.props);
        if (date || !event.target.value) {
          _this.setSelected(date, event, true);
        }
      };

      _this.handleSelect = function (date, event) {
        // Preventing onFocus event to fix issue
        // https://github.com/Hacker0x01/react-datepicker/issues/628
        _this.setState({ preventFocus: true }, function () {
          _this.preventFocusTimeout = setTimeout(function () {
            return _this.setState({ preventFocus: false });
          }, 50);
          return _this.preventFocusTimeout;
        });
        _this.setSelected(date, event);
        if (!_this.props.shouldCloseOnSelect || _this.props.showTimeSelect) {
          _this.setPreSelection(date);
        } else if (!_this.props.inline) {
          _this.setOpen(false);
        }
      };

      _this.setSelected = function (date, event, keepInput) {
        var changedDate = date;

        if (changedDate !== null && isDayDisabled(changedDate, _this.props)) {
          return;
        }

        if (!isSameDay(_this.props.selected, changedDate) || _this.props.allowSameDay) {
          if (changedDate !== null) {
            if (_this.props.selected) {
              var selected = _this.props.selected;
              if (keepInput) selected = newDate(changedDate);
              changedDate = setTime(newDate(changedDate), {
                hour: getHour(selected),
                minute: getMinute(selected),
                second: getSecond(selected)
              });
            }
            _this.setState({
              preSelection: changedDate
            });
          }
          _this.props.onChange(changedDate, event);
        }

        _this.props.onSelect(changedDate, event);

        if (!keepInput) {
          _this.setState({ inputValue: null });
        }
      };

      _this.setPreSelection = function (date) {
        var isDateRangePresent = typeof _this.props.minDate !== "undefined" && typeof _this.props.maxDate !== "undefined";
        var isValidDateSelection = isDateRangePresent && date ? isDayInRange(date, _this.props.minDate, _this.props.maxDate) : true;
        if (isValidDateSelection) {
          _this.setState({
            preSelection: date
          });
        }
      };

      _this.handleTimeChange = function (time) {
        var selected = _this.props.selected ? _this.props.selected : _this.getPreSelection();
        var changedDate = setTime(cloneDate(selected), {
          hour: getHour(time),
          minute: getMinute(time)
        });

        _this.setState({
          preSelection: changedDate
        });

        _this.props.onChange(changedDate);
        _this.setOpen(false);
        _this.setState({ inputValue: null });
      };

      _this.onInputClick = function () {
        if (!_this.props.disabled) {
          _this.setOpen(true);
        }
      };

      _this.onInputKeyDown = function (event) {
        _this.props.onKeyDown(event);
        var eventKey = event.key;
        if (!_this.state.open && !_this.props.inline && !_this.props.preventOpenOnFocus) {
          if (eventKey !== "Enter" && eventKey !== "Escape" && eventKey !== "Tab") {
            _this.onInputClick();
          }
          return;
        }
        var copy = newDate(_this.state.preSelection);
        if (eventKey === "Enter") {
          event.preventDefault();
          if (isMoment(_this.state.preSelection) || isDate(_this.state.preSelection)) {
            _this.handleSelect(copy, event);
            !_this.props.shouldCloseOnSelect && _this.setPreSelection(copy);
          } else {
            _this.setOpen(false);
          }
        } else if (eventKey === "Escape") {
          event.preventDefault();
          _this.setOpen(false);
        } else if (eventKey === "Tab") {
          _this.setOpen(false);
        } else if (!_this.props.disabledKeyboardNavigation) {
          var newSelection = void 0;
          switch (eventKey) {
            case "ArrowLeft":
              event.preventDefault();
              newSelection = subtractDays(copy, 1);
              break;
            case "ArrowRight":
              event.preventDefault();
              newSelection = addDays(copy, 1);
              break;
            case "ArrowUp":
              event.preventDefault();
              newSelection = subtractWeeks(copy, 1);
              break;
            case "ArrowDown":
              event.preventDefault();
              newSelection = addWeeks(copy, 1);
              break;
            case "PageUp":
              event.preventDefault();
              newSelection = subtractMonths(copy, 1);
              break;
            case "PageDown":
              event.preventDefault();
              newSelection = addMonths(copy, 1);
              break;
            case "Home":
              event.preventDefault();
              newSelection = subtractYears(copy, 1);
              break;
            case "End":
              event.preventDefault();
              newSelection = addYears(copy, 1);
              break;
          }
          if (_this.props.adjustDateOnChange) {
            _this.setSelected(newSelection);
          }
          _this.setPreSelection(newSelection);
        }
      };

      _this.onClearClick = function (event) {
        if (event) {
          if (event.preventDefault) {
            event.preventDefault();
          }
        }
        _this.props.onChange(null, event);
        _this.setState({ inputValue: null });
      };

      _this.clear = function () {
        _this.onClearClick();
      };

      _this.renderCalendar = function () {
        if (!_this.props.inline && (!_this.state.open || _this.props.disabled)) {
          return null;
        }
        return React__default.createElement(
          WrappedCalendar,
          {
            ref: function ref(elem) {
              _this.calendar = elem;
            },
            locale: _this.props.locale,
            adjustDateOnChange: _this.props.adjustDateOnChange,
            setOpen: _this.setOpen,
            dateFormat: _this.props.dateFormatCalendar,
            useWeekdaysShort: _this.props.useWeekdaysShort,
            dropdownMode: _this.props.dropdownMode,
            selected: _this.props.selected,
            preSelection: _this.state.preSelection,
            onSelect: _this.handleSelect,
            onWeekSelect: _this.props.onWeekSelect,
            openToDate: _this.props.openToDate,
            minDate: _this.props.minDate,
            maxDate: _this.props.maxDate,
            selectsStart: _this.props.selectsStart,
            selectsEnd: _this.props.selectsEnd,
            startDate: _this.props.startDate,
            endDate: _this.props.endDate,
            excludeDates: _this.props.excludeDates,
            filterDate: _this.props.filterDate,
            onClickOutside: _this.handleCalendarClickOutside,
            formatWeekNumber: _this.props.formatWeekNumber,
            highlightDates: _this.state.highlightDates,
            includeDates: _this.props.includeDates,
            includeTimes: _this.props.includeTimes,
            injectTimes: _this.props.injectTimes,
            inline: _this.props.inline,
            peekNextMonth: _this.props.peekNextMonth,
            showMonthDropdown: _this.props.showMonthDropdown,
            useShortMonthInDropdown: _this.props.useShortMonthInDropdown,
            showMonthYearDropdown: _this.props.showMonthYearDropdown,
            showWeekNumbers: _this.props.showWeekNumbers,
            showYearDropdown: _this.props.showYearDropdown,
            withPortal: _this.props.withPortal,
            forceShowMonthNavigation: _this.props.forceShowMonthNavigation,
            showDisabledMonthNavigation: _this.props.showDisabledMonthNavigation,
            scrollableYearDropdown: _this.props.scrollableYearDropdown,
            scrollableMonthYearDropdown: _this.props.scrollableMonthYearDropdown,
            todayButton: _this.props.todayButton,
            weekLabel: _this.props.weekLabel,
            utcOffset: _this.props.utcOffset,
            outsideClickIgnoreClass: outsideClickIgnoreClass,
            fixedHeight: _this.props.fixedHeight,
            monthsShown: _this.props.monthsShown,
            onDropdownFocus: _this.handleDropdownFocus,
            onMonthChange: _this.props.onMonthChange,
            onYearChange: _this.props.onYearChange,
            dayClassName: _this.props.dayClassName,
            showTimeSelect: _this.props.showTimeSelect,
            showTimeSelectOnly: _this.props.showTimeSelectOnly,
            onTimeChange: _this.handleTimeChange,
            timeFormat: _this.props.timeFormat,
            timeIntervals: _this.props.timeIntervals,
            minTime: _this.props.minTime,
            maxTime: _this.props.maxTime,
            excludeTimes: _this.props.excludeTimes,
            timeCaption: _this.props.timeCaption,
            className: _this.props.calendarClassName,
            yearDropdownItemNumber: _this.props.yearDropdownItemNumber
          },
          _this.props.children
        );
      };

      _this.renderDateInput = function () {
        var _classnames, _React$cloneElement;

        var className = classnames(_this.props.className, (_classnames = {}, _classnames[outsideClickIgnoreClass] = _this.state.open, _classnames));

        var customInput = _this.props.customInput || React__default.createElement("input", { type: "text" });
        var customInputRef = _this.props.customInputRef || "ref";
        var inputValue = typeof _this.props.value === "string" ? _this.props.value : typeof _this.state.inputValue === "string" ? _this.state.inputValue : safeDateFormat(_this.props.selected, _this.props);

        return React__default.cloneElement(customInput, (_React$cloneElement = {}, _React$cloneElement[customInputRef] = function (input) {
          _this.input = input;
        }, _React$cloneElement.value = inputValue, _React$cloneElement.onBlur = _this.handleBlur, _React$cloneElement.onChange = _this.handleChange, _React$cloneElement.onClick = _this.onInputClick, _React$cloneElement.onFocus = _this.handleFocus, _React$cloneElement.onKeyDown = _this.onInputKeyDown, _React$cloneElement.id = _this.props.id, _React$cloneElement.name = _this.props.name, _React$cloneElement.autoFocus = _this.props.autoFocus, _React$cloneElement.placeholder = _this.props.placeholderText, _React$cloneElement.disabled = _this.props.disabled, _React$cloneElement.autoComplete = _this.props.autoComplete, _React$cloneElement.className = className, _React$cloneElement.title = _this.props.title, _React$cloneElement.readOnly = _this.props.readOnly, _React$cloneElement.required = _this.props.required, _React$cloneElement.tabIndex = _this.props.tabIndex, _React$cloneElement));
      };

      _this.renderClearButton = function () {
        if (_this.props.isClearable && _this.props.selected != null) {
          return React__default.createElement("button", {
            className: "react-datepicker__close-icon",
            onClick: _this.onClearClick,
            title: _this.props.clearButtonTitle,
            tabIndex: -1
          });
        } else {
          return null;
        }
      };

      _this.state = _this.calcInitialState();
      return _this;
    }

    DatePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.inline && hasPreSelectionChanged(this.props.selected, nextProps.selected)) {
        this.setPreSelection(nextProps.selected);
      }
      if (this.props.highlightDates !== nextProps.highlightDates) {
        this.setState({
          highlightDates: getHightLightDaysMap(nextProps.highlightDates)
        });
      }
      if (!this.state.focused) this.setState({ inputValue: null });
    };

    DatePicker.prototype.componentWillUnmount = function componentWillUnmount() {
      this.clearPreventFocusTimeout();
    };

    DatePicker.prototype.render = function render() {
      var calendar = this.renderCalendar();

      if (this.props.inline && !this.props.withPortal) {
        return calendar;
      }

      if (this.props.withPortal) {
        return React__default.createElement(
          "div",
          null,
          !this.props.inline ? React__default.createElement(
            "div",
            { className: "react-datepicker__input-container" },
            this.renderDateInput(),
            this.renderClearButton()
          ) : null,
          this.state.open || this.props.inline ? React__default.createElement(
            "div",
            { className: "react-datepicker__portal" },
            calendar
          ) : null
        );
      }

      return React__default.createElement(PopperComponent, {
        className: this.props.popperClassName,
        hidePopper: !this.state.open || this.props.disabled,
        popperModifiers: this.props.popperModifiers,
        targetComponent: React__default.createElement(
          "div",
          { className: "react-datepicker__input-container" },
          this.renderDateInput(),
          this.renderClearButton()
        ),
        popperContainer: this.props.popperContainer,
        popperComponent: calendar,
        popperPlacement: this.props.popperPlacement
      });
    };

    return DatePicker;
  }(React__default.Component);

  DatePicker.propTypes = {
    adjustDateOnChange: PropTypes.bool,
    allowSameDay: PropTypes.bool,
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
    calendarClassName: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    customInput: PropTypes.element,
    customInputRef: PropTypes.string,
    // eslint-disable-next-line react/no-unused-prop-types
    dateFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    dateFormatCalendar: PropTypes.string,
    dayClassName: PropTypes.func,
    disabled: PropTypes.bool,
    disabledKeyboardNavigation: PropTypes.bool,
    dropdownMode: PropTypes.oneOf(["scroll", "select"]).isRequired,
    endDate: PropTypes.object,
    excludeDates: PropTypes.array,
    filterDate: PropTypes.func,
    fixedHeight: PropTypes.bool,
    formatWeekNumber: PropTypes.func,
    highlightDates: PropTypes.array,
    id: PropTypes.string,
    includeDates: PropTypes.array,
    includeTimes: PropTypes.array,
    injectTimes: PropTypes.array,
    inline: PropTypes.bool,
    isClearable: PropTypes.bool,
    locale: PropTypes.string,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    monthsShown: PropTypes.number,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func,
    onWeekSelect: PropTypes.func,
    onClickOutside: PropTypes.func,
    onChangeRaw: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onMonthChange: PropTypes.func,
    onYearChange: PropTypes.func,
    openToDate: PropTypes.object,
    peekNextMonth: PropTypes.bool,
    placeholderText: PropTypes.string,
    popperContainer: PropTypes.func,
    popperClassName: PropTypes.string, // <PopperComponent/> props
    popperModifiers: PropTypes.object, // <PopperComponent/> props
    popperPlacement: PropTypes.oneOf(popperPlacementPositions), // <PopperComponent/> props
    preventOpenOnFocus: PropTypes.bool,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    scrollableYearDropdown: PropTypes.bool,
    scrollableMonthYearDropdown: PropTypes.bool,
    selected: PropTypes.object,
    selectsEnd: PropTypes.bool,
    selectsStart: PropTypes.bool,
    showMonthDropdown: PropTypes.bool,
    showMonthYearDropdown: PropTypes.bool,
    showWeekNumbers: PropTypes.bool,
    showYearDropdown: PropTypes.bool,
    forceShowMonthNavigation: PropTypes.bool,
    showDisabledMonthNavigation: PropTypes.bool,
    startDate: PropTypes.object,
    startOpen: PropTypes.bool,
    tabIndex: PropTypes.number,
    timeCaption: PropTypes.string,
    title: PropTypes.string,
    todayButton: PropTypes.string,
    useWeekdaysShort: PropTypes.bool,
    utcOffset: PropTypes.number,
    value: PropTypes.string,
    weekLabel: PropTypes.string,
    withPortal: PropTypes.bool,
    yearDropdownItemNumber: PropTypes.number,
    shouldCloseOnSelect: PropTypes.bool,
    showTimeSelect: PropTypes.bool,
    showTimeSelectOnly: PropTypes.bool,
    timeFormat: PropTypes.string,
    timeIntervals: PropTypes.number,
    minTime: PropTypes.object,
    maxTime: PropTypes.object,
    excludeTimes: PropTypes.array,
    useShortMonthInDropdown: PropTypes.bool,
    clearButtonTitle: PropTypes.string
  };

  var DatePickerWithLabel = function DatePickerWithLabel(props) {
    var onChange = function onChange(value) {
      var date = !!value ? value.format('YYYY-MM-DD') : null;
      props.handleChange(defineProperty({}, props.name, date));
    };

    var date = !!props.value ? moment(props.value) : null;

    return React__default.createElement(
      'div',
      { className: 'input-with-label form-group ' + props.classes },
      React__default.createElement(
        'label',
        { htmlFor: props.name },
        props.label + ' ' + (props.required ? '*' : '')
      ),
      React__default.createElement(DatePicker, {
        selected: date,
        name: props.name,
        id: props.id,
        onChange: onChange,
        className: 'form-control'
      }),
      props.errorMessage && React__default.createElement(
        'div',
        { className: 'error-message minicaps' },
        props.errorMessage
      )
    );
  };

  var ImageUploader = function (_Component) {
    inherits(ImageUploader, _Component);

    function ImageUploader(props) {
      classCallCheck(this, ImageUploader);

      var _this = possibleConstructorReturn(this, (ImageUploader.__proto__ || Object.getPrototypeOf(ImageUploader)).call(this, props));

      _this.saveImage = function (opts) {
        var url = opts.url;
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

        var url = this.props.imageUploadUrl;
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
        var opts = { url: url, data: data, config: config, onSuccess: onSuccess, onError: onError, onFail: onFail };

        this.saveImage(opts);
      }
    }, {
      key: 'render',
      value: function render() {
        return React__default.createElement(
          'div',
          { className: 'input-with-label form-group ' + this.props.classes },
          React__default.createElement(
            'label',
            { htmlFor: this.props.name },
            this.props.label
          ),
          React__default.createElement('input', {
            className: 'image-upload',
            type: 'file',
            name: this.props.name,
            id: this.props.id,
            onChange: this.onChange
          }),
          this.props.errorMessage && React__default.createElement(
            'div',
            { className: 'error-message' },
            this.props.errorMessage
          ),
          this.state.image && React__default.createElement(
            'div',
            { className: 'image-preview', style: { width: '250px' } },
            React__default.createElement('img', { src: this.state.image, alt: 'Image preview', style: { width: '100%', height: '100%' } })
          )
        );
      }
    }]);
    return ImageUploader;
  }(React.Component);


  ImageUploader.propTypes = {
    imageUploadUrl: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    classes: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    errorMessage: PropTypes.string,
    image: PropTypes.string
  };

  var InputWithLabel = function InputWithLabel(props) {
    var onChange = function onChange(e) {
      props.handleChange(defineProperty({}, props.name, e.currentTarget.value));
    };

    return React__default.createElement(
      'div',
      { className: 'input-with-label form-group ' + props.classes },
      React__default.createElement(
        'label',
        { htmlFor: props.name },
        props.label + ' ' + (props.required ? '*' : '')
      ),
      React__default.createElement('input', {
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
      props.errorMessage && React__default.createElement(
        'div',
        { className: 'error-message minicaps' },
        props.errorMessage
      )
    );
  };

  var countUp_min = createCommonjsModule(function (module, exports) {
  !function(a,n){"function"==typeof undefined&&undefined.amd?undefined(n):module.exports=n(commonjsRequire,exports,module);}(this,function(a,n,t){var e=function(a,n,t,e,i,r){function o(a){var n,t,e,i,r,o,s=a<0;if(a=Math.abs(a).toFixed(l.decimals),a+="",n=a.split("."),t=n[0],e=n.length>1?l.options.decimal+n[1]:"",l.options.useGrouping){for(i="",r=0,o=t.length;r<o;++r)0!==r&&r%3===0&&(i=l.options.separator+i),i=t[o-r-1]+i;t=i;}return l.options.numerals.length&&(t=t.replace(/[0-9]/g,function(a){return l.options.numerals[+a]}),e=e.replace(/[0-9]/g,function(a){return l.options.numerals[+a]})),(s?"-":"")+l.options.prefix+t+e+l.options.suffix}function s(a,n,t,e){return t*(-Math.pow(2,-10*a/e)+1)*1024/1023+n}function u(a){return "number"==typeof a&&!isNaN(a)}var l=this;if(l.version=function(){return "1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var m in l.options)r.hasOwnProperty(m)&&null!==r[m]&&(l.options[m]=r[m]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var d=0,c=["webkit","moz","ms","o"],f=0;f<c.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[c[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[f]+"CancelAnimationFrame"]||window[c[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=(new Date).getTime(),e=Math.max(0,16-(t-d)),i=window.setTimeout(function(){a(t+e);},e);return d=t+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a);}),l.initialize=function(){return !!l.initialized||(l.error="",l.d="string"==typeof a?document.getElementById(a):a,l.d?(l.startVal=Number(n),l.endVal=Number(t),u(l.startVal)&&u(l.endVal)?(l.decimals=Math.max(0,e||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(a){var n=l.options.formattingFn(a);"INPUT"===l.d.tagName?this.d.value=n:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=n:this.d.innerHTML=n;},l.count=function(a){l.startTime||(l.startTime=a),l.timestamp=a;var n=a-l.startTime;l.remaining=l.duration-n,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(n,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(n,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(n/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(n/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),n<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback();},l.start=function(a){l.initialize()&&(l.callback=a,l.rAF=requestAnimationFrame(l.count));},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF));},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal));},l.update=function(a){if(l.initialize()){if(a=Number(a),!u(a))return void(l.error="[CountUp] update() - new endVal is not a number: "+a);l.error="",a!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=a,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count));}},l.initialize()&&l.printValue(l.startVal);};return e});
  });

  var build = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.startAnimation = exports.formatNumber = undefined;

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _react2 = _interopRequireDefault(React__default);



  var _countup2 = _interopRequireDefault(countUp_min);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  // Adapted from the countup.js format number function
  // https://github.com/inorganik/countUp.js/blob/master/countUp.js#L46-L60
  var formatNumber = exports.formatNumber = function formatNumber(start, options) {
    var neg = start < 0;
    var num = '' + Math.abs(start).toFixed(options.decimals);
    var x = num.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '' + options.decimal + x[1] : '';
    var rgx = /(\d+)(\d{3})/;

    if (options.separator) {
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + options.separator + '$2');
      }
    }

    return '' + (neg ? '-' : '') + (options.prefix || '') + x1 + x2 + (options.suffix || '');
  };

  var startAnimation = exports.startAnimation = function startAnimation(component) {
    if (!(component && component.spanElement)) {
      throw new Error('You need to pass the CountUp component as an argument!\neg. this.myCountUp.startAnimation(this.myCountUp);');
    }

    var _component$props = component.props,
        decimal = _component$props.decimal,
        decimals = _component$props.decimals,
        duration = _component$props.duration,
        easingFn = _component$props.easingFn,
        end = _component$props.end,
        formattingFn = _component$props.formattingFn,
        onComplete = _component$props.onComplete,
        onStart = _component$props.onStart,
        prefix = _component$props.prefix,
        separator = _component$props.separator,
        start = _component$props.start,
        suffix = _component$props.suffix,
        useEasing = _component$props.useEasing;


    var countupInstance = new _countup2.default(component.spanElement, start, end, decimals, duration, {
      decimal: decimal,
      easingFn: easingFn,
      formattingFn: formattingFn,
      separator: separator,
      prefix: prefix,
      suffix: suffix,
      useEasing: useEasing,
      useGrouping: !!separator
    });

    if (typeof onStart === 'function') {
      onStart();
    }

    countupInstance.start(onComplete);
  };

  var CountUp = function (_React$Component) {
    _inherits(CountUp, _React$Component);

    function CountUp() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, CountUp);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CountUp.__proto__ || Object.getPrototypeOf(CountUp)).call.apply(_ref, [this].concat(args))), _this), _this.spanElement = null, _this.refSpan = function (span) {
        _this.spanElement = span;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CountUp, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        startAnimation(this);
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        var hasCertainPropsChanged = this.props.duration !== nextProps.duration || this.props.end !== nextProps.end || this.props.start !== nextProps.start;

        return nextProps.redraw || hasCertainPropsChanged;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        startAnimation(this);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            className = _props.className,
            start = _props.start,
            decimal = _props.decimal,
            decimals = _props.decimals,
            separator = _props.separator,
            prefix = _props.prefix,
            suffix = _props.suffix,
            style = _props.style,
            formattingFn = _props.formattingFn;


        return _react2.default.createElement(
          'span',
          { className: className, ref: this.refSpan, style: style },
          typeof formattingFn === 'function' ? formattingFn(start) : formatNumber(start, {
            decimal: decimal,
            decimals: decimals,
            separator: separator,
            prefix: prefix,
            suffix: suffix
          })
        );
      }
    }]);

    return CountUp;
  }(_react2.default.Component);

  CountUp.defaultProps = {
    className: undefined,
    decimal: '.',
    decimals: 0,
    duration: 3,
    easingFn: null,
    end: 100,
    formattingFn: null,
    onComplete: undefined,
    onStart: undefined,
    prefix: '',
    separator: '',
    start: 0,
    suffix: '',
    redraw: false,
    style: undefined,
    useEasing: true
  };
  exports.default = CountUp;
  });

  var CountUp = unwrapExports(build);
  var build_1 = build.startAnimation;
  var build_2 = build.formatNumber;

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  var emptyObject = {};

  if (undefined !== 'production') {
    Object.freeze(emptyObject);
  }

  var emptyObject_1 = emptyObject;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var validateFormat = function validateFormat(format) {};

  if (undefined !== 'production') {
    validateFormat = function validateFormat(format) {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    };
  }

  function invariant(condition, format, a, b, c, d, e, f) {
    validateFormat(format);

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  }

  var invariant_1 = invariant;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

  function makeEmptyFunction(arg) {
    return function () {
      return arg;
    };
  }

  /**
   * This function accepts and discards inputs; it has no side effects. This is
   * primarily useful idiomatically for overridable function endpoints which
   * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
   */
  var emptyFunction = function emptyFunction() {};

  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function () {
    return this;
  };
  emptyFunction.thatReturnsArgument = function (arg) {
    return arg;
  };

  var emptyFunction_1 = emptyFunction;

  /**
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */

  var warning = emptyFunction_1;

  if (undefined !== 'production') {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  }

  var warning_1 = warning;

  if (undefined !== 'production') {
    var warning$1 = warning_1;
  }

  var MIXINS_KEY = 'mixins';

  // Helper function to allow the creation of anonymous functions which do not
  // have .name set to the name of the variable being assigned to.
  function identity(fn) {
    return fn;
  }

  var ReactPropTypeLocationNames;
  if (undefined !== 'production') {
    ReactPropTypeLocationNames = {
      prop: 'prop',
      context: 'context',
      childContext: 'child context'
    };
  } else {
    ReactPropTypeLocationNames = {};
  }

  function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
    /**
     * Policies that describe methods in `ReactClassInterface`.
     */

    var injectedMixins = [];

    /**
     * Composite components are higher-level components that compose other composite
     * or host components.
     *
     * To create a new type of `ReactClass`, pass a specification of
     * your new class to `React.createClass`. The only requirement of your class
     * specification is that you implement a `render` method.
     *
     *   var MyComponent = React.createClass({
     *     render: function() {
     *       return <div>Hello World</div>;
     *     }
     *   });
     *
     * The class specification supports a specific protocol of methods that have
     * special meaning (e.g. `render`). See `ReactClassInterface` for
     * more the comprehensive protocol. Any other properties and methods in the
     * class specification will be available on the prototype.
     *
     * @interface ReactClassInterface
     * @internal
     */
    var ReactClassInterface = {
      /**
       * An array of Mixin objects to include when defining your component.
       *
       * @type {array}
       * @optional
       */
      mixins: 'DEFINE_MANY',

      /**
       * An object containing properties and methods that should be defined on
       * the component's constructor instead of its prototype (static methods).
       *
       * @type {object}
       * @optional
       */
      statics: 'DEFINE_MANY',

      /**
       * Definition of prop types for this component.
       *
       * @type {object}
       * @optional
       */
      propTypes: 'DEFINE_MANY',

      /**
       * Definition of context types for this component.
       *
       * @type {object}
       * @optional
       */
      contextTypes: 'DEFINE_MANY',

      /**
       * Definition of context types this component sets for its children.
       *
       * @type {object}
       * @optional
       */
      childContextTypes: 'DEFINE_MANY',

      // ==== Definition methods ====

      /**
       * Invoked when the component is mounted. Values in the mapping will be set on
       * `this.props` if that prop is not specified (i.e. using an `in` check).
       *
       * This method is invoked before `getInitialState` and therefore cannot rely
       * on `this.state` or use `this.setState`.
       *
       * @return {object}
       * @optional
       */
      getDefaultProps: 'DEFINE_MANY_MERGED',

      /**
       * Invoked once before the component is mounted. The return value will be used
       * as the initial value of `this.state`.
       *
       *   getInitialState: function() {
       *     return {
       *       isOn: false,
       *       fooBaz: new BazFoo()
       *     }
       *   }
       *
       * @return {object}
       * @optional
       */
      getInitialState: 'DEFINE_MANY_MERGED',

      /**
       * @return {object}
       * @optional
       */
      getChildContext: 'DEFINE_MANY_MERGED',

      /**
       * Uses props from `this.props` and state from `this.state` to render the
       * structure of the component.
       *
       * No guarantees are made about when or how often this method is invoked, so
       * it must not have side effects.
       *
       *   render: function() {
       *     var name = this.props.name;
       *     return <div>Hello, {name}!</div>;
       *   }
       *
       * @return {ReactComponent}
       * @required
       */
      render: 'DEFINE_ONCE',

      // ==== Delegate methods ====

      /**
       * Invoked when the component is initially created and about to be mounted.
       * This may have side effects, but any external subscriptions or data created
       * by this method must be cleaned up in `componentWillUnmount`.
       *
       * @optional
       */
      componentWillMount: 'DEFINE_MANY',

      /**
       * Invoked when the component has been mounted and has a DOM representation.
       * However, there is no guarantee that the DOM node is in the document.
       *
       * Use this as an opportunity to operate on the DOM when the component has
       * been mounted (initialized and rendered) for the first time.
       *
       * @param {DOMElement} rootNode DOM element representing the component.
       * @optional
       */
      componentDidMount: 'DEFINE_MANY',

      /**
       * Invoked before the component receives new props.
       *
       * Use this as an opportunity to react to a prop transition by updating the
       * state using `this.setState`. Current props are accessed via `this.props`.
       *
       *   componentWillReceiveProps: function(nextProps, nextContext) {
       *     this.setState({
       *       likesIncreasing: nextProps.likeCount > this.props.likeCount
       *     });
       *   }
       *
       * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
       * transition may cause a state change, but the opposite is not true. If you
       * need it, you are probably looking for `componentWillUpdate`.
       *
       * @param {object} nextProps
       * @optional
       */
      componentWillReceiveProps: 'DEFINE_MANY',

      /**
       * Invoked while deciding if the component should be updated as a result of
       * receiving new props, state and/or context.
       *
       * Use this as an opportunity to `return false` when you're certain that the
       * transition to the new props/state/context will not require a component
       * update.
       *
       *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
       *     return !equal(nextProps, this.props) ||
       *       !equal(nextState, this.state) ||
       *       !equal(nextContext, this.context);
       *   }
       *
       * @param {object} nextProps
       * @param {?object} nextState
       * @param {?object} nextContext
       * @return {boolean} True if the component should update.
       * @optional
       */
      shouldComponentUpdate: 'DEFINE_ONCE',

      /**
       * Invoked when the component is about to update due to a transition from
       * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
       * and `nextContext`.
       *
       * Use this as an opportunity to perform preparation before an update occurs.
       *
       * NOTE: You **cannot** use `this.setState()` in this method.
       *
       * @param {object} nextProps
       * @param {?object} nextState
       * @param {?object} nextContext
       * @param {ReactReconcileTransaction} transaction
       * @optional
       */
      componentWillUpdate: 'DEFINE_MANY',

      /**
       * Invoked when the component's DOM representation has been updated.
       *
       * Use this as an opportunity to operate on the DOM when the component has
       * been updated.
       *
       * @param {object} prevProps
       * @param {?object} prevState
       * @param {?object} prevContext
       * @param {DOMElement} rootNode DOM element representing the component.
       * @optional
       */
      componentDidUpdate: 'DEFINE_MANY',

      /**
       * Invoked when the component is about to be removed from its parent and have
       * its DOM representation destroyed.
       *
       * Use this as an opportunity to deallocate any external resources.
       *
       * NOTE: There is no `componentDidUnmount` since your component will have been
       * destroyed by that point.
       *
       * @optional
       */
      componentWillUnmount: 'DEFINE_MANY',

      /**
       * Replacement for (deprecated) `componentWillMount`.
       *
       * @optional
       */
      UNSAFE_componentWillMount: 'DEFINE_MANY',

      /**
       * Replacement for (deprecated) `componentWillReceiveProps`.
       *
       * @optional
       */
      UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

      /**
       * Replacement for (deprecated) `componentWillUpdate`.
       *
       * @optional
       */
      UNSAFE_componentWillUpdate: 'DEFINE_MANY',

      // ==== Advanced methods ====

      /**
       * Updates the component's currently mounted DOM representation.
       *
       * By default, this implements React's rendering and reconciliation algorithm.
       * Sophisticated clients may wish to override this.
       *
       * @param {ReactReconcileTransaction} transaction
       * @internal
       * @overridable
       */
      updateComponent: 'OVERRIDE_BASE'
    };

    /**
     * Similar to ReactClassInterface but for static methods.
     */
    var ReactClassStaticInterface = {
      /**
       * This method is invoked after a component is instantiated and when it
       * receives new props. Return an object to update state in response to
       * prop changes. Return null to indicate no change to state.
       *
       * If an object is returned, its keys will be merged into the existing state.
       *
       * @return {object || null}
       * @optional
       */
      getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
    };

    /**
     * Mapping from class specification keys to special processing functions.
     *
     * Although these are declared like instance properties in the specification
     * when defining classes using `React.createClass`, they are actually static
     * and are accessible on the constructor instead of the prototype. Despite
     * being static, they must be defined outside of the "statics" key under
     * which all other static methods are defined.
     */
    var RESERVED_SPEC_KEYS = {
      displayName: function(Constructor, displayName) {
        Constructor.displayName = displayName;
      },
      mixins: function(Constructor, mixins) {
        if (mixins) {
          for (var i = 0; i < mixins.length; i++) {
            mixSpecIntoComponent(Constructor, mixins[i]);
          }
        }
      },
      childContextTypes: function(Constructor, childContextTypes) {
        if (undefined !== 'production') {
          validateTypeDef(Constructor, childContextTypes, 'childContext');
        }
        Constructor.childContextTypes = objectAssign(
          {},
          Constructor.childContextTypes,
          childContextTypes
        );
      },
      contextTypes: function(Constructor, contextTypes) {
        if (undefined !== 'production') {
          validateTypeDef(Constructor, contextTypes, 'context');
        }
        Constructor.contextTypes = objectAssign(
          {},
          Constructor.contextTypes,
          contextTypes
        );
      },
      /**
       * Special case getDefaultProps which should move into statics but requires
       * automatic merging.
       */
      getDefaultProps: function(Constructor, getDefaultProps) {
        if (Constructor.getDefaultProps) {
          Constructor.getDefaultProps = createMergedResultFunction(
            Constructor.getDefaultProps,
            getDefaultProps
          );
        } else {
          Constructor.getDefaultProps = getDefaultProps;
        }
      },
      propTypes: function(Constructor, propTypes) {
        if (undefined !== 'production') {
          validateTypeDef(Constructor, propTypes, 'prop');
        }
        Constructor.propTypes = objectAssign({}, Constructor.propTypes, propTypes);
      },
      statics: function(Constructor, statics) {
        mixStaticSpecIntoComponent(Constructor, statics);
      },
      autobind: function() {}
    };

    function validateTypeDef(Constructor, typeDef, location) {
      for (var propName in typeDef) {
        if (typeDef.hasOwnProperty(propName)) {
          // use a warning instead of an _invariant so components
          // don't show up in prod but only in __DEV__
          if (undefined !== 'production') {
            warning$1(
              typeof typeDef[propName] === 'function',
              '%s: %s type `%s` is invalid; it must be a function, usually from ' +
                'React.PropTypes.',
              Constructor.displayName || 'ReactClass',
              ReactPropTypeLocationNames[location],
              propName
            );
          }
        }
      }
    }

    function validateMethodOverride(isAlreadyDefined, name) {
      var specPolicy = ReactClassInterface.hasOwnProperty(name)
        ? ReactClassInterface[name]
        : null;

      // Disallow overriding of base class methods unless explicitly allowed.
      if (ReactClassMixin.hasOwnProperty(name)) {
        invariant_1(
          specPolicy === 'OVERRIDE_BASE',
          'ReactClassInterface: You are attempting to override ' +
            '`%s` from your class specification. Ensure that your method names ' +
            'do not overlap with React methods.',
          name
        );
      }

      // Disallow defining methods more than once unless explicitly allowed.
      if (isAlreadyDefined) {
        invariant_1(
          specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
          'ReactClassInterface: You are attempting to define ' +
            '`%s` on your component more than once. This conflict may be due ' +
            'to a mixin.',
          name
        );
      }
    }

    /**
     * Mixin helper which handles policy validation and reserved
     * specification keys when building React classes.
     */
    function mixSpecIntoComponent(Constructor, spec) {
      if (!spec) {
        if (undefined !== 'production') {
          var typeofSpec = typeof spec;
          var isMixinValid = typeofSpec === 'object' && spec !== null;

          if (undefined !== 'production') {
            warning$1(
              isMixinValid,
              "%s: You're attempting to include a mixin that is either null " +
                'or not an object. Check the mixins included by the component, ' +
                'as well as any mixins they include themselves. ' +
                'Expected object but got %s.',
              Constructor.displayName || 'ReactClass',
              spec === null ? null : typeofSpec
            );
          }
        }

        return;
      }

      invariant_1(
        typeof spec !== 'function',
        "ReactClass: You're attempting to " +
          'use a component class or function as a mixin. Instead, just use a ' +
          'regular object.'
      );
      invariant_1(
        !isValidElement(spec),
        "ReactClass: You're attempting to " +
          'use a component as a mixin. Instead, just use a regular object.'
      );

      var proto = Constructor.prototype;
      var autoBindPairs = proto.__reactAutoBindPairs;

      // By handling mixins before any other properties, we ensure the same
      // chaining order is applied to methods with DEFINE_MANY policy, whether
      // mixins are listed before or after these methods in the spec.
      if (spec.hasOwnProperty(MIXINS_KEY)) {
        RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
      }

      for (var name in spec) {
        if (!spec.hasOwnProperty(name)) {
          continue;
        }

        if (name === MIXINS_KEY) {
          // We have already handled mixins in a special case above.
          continue;
        }

        var property = spec[name];
        var isAlreadyDefined = proto.hasOwnProperty(name);
        validateMethodOverride(isAlreadyDefined, name);

        if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
          RESERVED_SPEC_KEYS[name](Constructor, property);
        } else {
          // Setup methods on prototype:
          // The following member methods should not be automatically bound:
          // 1. Expected ReactClass methods (in the "interface").
          // 2. Overridden methods (that were mixed in).
          var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
          var isFunction = typeof property === 'function';
          var shouldAutoBind =
            isFunction &&
            !isReactClassMethod &&
            !isAlreadyDefined &&
            spec.autobind !== false;

          if (shouldAutoBind) {
            autoBindPairs.push(name, property);
            proto[name] = property;
          } else {
            if (isAlreadyDefined) {
              var specPolicy = ReactClassInterface[name];

              // These cases should already be caught by validateMethodOverride.
              invariant_1(
                isReactClassMethod &&
                  (specPolicy === 'DEFINE_MANY_MERGED' ||
                    specPolicy === 'DEFINE_MANY'),
                'ReactClass: Unexpected spec policy %s for key %s ' +
                  'when mixing in component specs.',
                specPolicy,
                name
              );

              // For methods which are defined more than once, call the existing
              // methods before calling the new property, merging if appropriate.
              if (specPolicy === 'DEFINE_MANY_MERGED') {
                proto[name] = createMergedResultFunction(proto[name], property);
              } else if (specPolicy === 'DEFINE_MANY') {
                proto[name] = createChainedFunction(proto[name], property);
              }
            } else {
              proto[name] = property;
              if (undefined !== 'production') {
                // Add verbose displayName to the function, which helps when looking
                // at profiling tools.
                if (typeof property === 'function' && spec.displayName) {
                  proto[name].displayName = spec.displayName + '_' + name;
                }
              }
            }
          }
        }
      }
    }

    function mixStaticSpecIntoComponent(Constructor, statics) {
      if (!statics) {
        return;
      }

      for (var name in statics) {
        var property = statics[name];
        if (!statics.hasOwnProperty(name)) {
          continue;
        }

        var isReserved = name in RESERVED_SPEC_KEYS;
        invariant_1(
          !isReserved,
          'ReactClass: You are attempting to define a reserved ' +
            'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
            'as an instance property instead; it will still be accessible on the ' +
            'constructor.',
          name
        );

        var isAlreadyDefined = name in Constructor;
        if (isAlreadyDefined) {
          var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
            ? ReactClassStaticInterface[name]
            : null;

          invariant_1(
            specPolicy === 'DEFINE_MANY_MERGED',
            'ReactClass: You are attempting to define ' +
              '`%s` on your component more than once. This conflict may be ' +
              'due to a mixin.',
            name
          );

          Constructor[name] = createMergedResultFunction(Constructor[name], property);

          return;
        }

        Constructor[name] = property;
      }
    }

    /**
     * Merge two objects, but throw if both contain the same key.
     *
     * @param {object} one The first object, which is mutated.
     * @param {object} two The second object
     * @return {object} one after it has been mutated to contain everything in two.
     */
    function mergeIntoWithNoDuplicateKeys(one, two) {
      invariant_1(
        one && two && typeof one === 'object' && typeof two === 'object',
        'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
      );

      for (var key in two) {
        if (two.hasOwnProperty(key)) {
          invariant_1(
            one[key] === undefined,
            'mergeIntoWithNoDuplicateKeys(): ' +
              'Tried to merge two objects with the same key: `%s`. This conflict ' +
              'may be due to a mixin; in particular, this may be caused by two ' +
              'getInitialState() or getDefaultProps() methods returning objects ' +
              'with clashing keys.',
            key
          );
          one[key] = two[key];
        }
      }
      return one;
    }

    /**
     * Creates a function that invokes two functions and merges their return values.
     *
     * @param {function} one Function to invoke first.
     * @param {function} two Function to invoke second.
     * @return {function} Function that invokes the two argument functions.
     * @private
     */
    function createMergedResultFunction(one, two) {
      return function mergedResult() {
        var a = one.apply(this, arguments);
        var b = two.apply(this, arguments);
        if (a == null) {
          return b;
        } else if (b == null) {
          return a;
        }
        var c = {};
        mergeIntoWithNoDuplicateKeys(c, a);
        mergeIntoWithNoDuplicateKeys(c, b);
        return c;
      };
    }

    /**
     * Creates a function that invokes two functions and ignores their return vales.
     *
     * @param {function} one Function to invoke first.
     * @param {function} two Function to invoke second.
     * @return {function} Function that invokes the two argument functions.
     * @private
     */
    function createChainedFunction(one, two) {
      return function chainedFunction() {
        one.apply(this, arguments);
        two.apply(this, arguments);
      };
    }

    /**
     * Binds a method to the component.
     *
     * @param {object} component Component whose method is going to be bound.
     * @param {function} method Method to be bound.
     * @return {function} The bound method.
     */
    function bindAutoBindMethod(component, method) {
      var boundMethod = method.bind(component);
      if (undefined !== 'production') {
        boundMethod.__reactBoundContext = component;
        boundMethod.__reactBoundMethod = method;
        boundMethod.__reactBoundArguments = null;
        var componentName = component.constructor.displayName;
        var _bind = boundMethod.bind;
        boundMethod.bind = function(newThis) {
          for (
            var _len = arguments.length,
              args = Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          ) {
            args[_key - 1] = arguments[_key];
          }

          // User is trying to bind() an autobound method; we effectively will
          // ignore the value of "this" that the user is trying to use, so
          // let's warn.
          if (newThis !== component && newThis !== null) {
            if (undefined !== 'production') {
              warning$1(
                false,
                'bind(): React component methods may only be bound to the ' +
                  'component instance. See %s',
                componentName
              );
            }
          } else if (!args.length) {
            if (undefined !== 'production') {
              warning$1(
                false,
                'bind(): You are binding a component method to the component. ' +
                  'React does this for you automatically in a high-performance ' +
                  'way, so you can safely remove this call. See %s',
                componentName
              );
            }
            return boundMethod;
          }
          var reboundMethod = _bind.apply(boundMethod, arguments);
          reboundMethod.__reactBoundContext = component;
          reboundMethod.__reactBoundMethod = method;
          reboundMethod.__reactBoundArguments = args;
          return reboundMethod;
        };
      }
      return boundMethod;
    }

    /**
     * Binds all auto-bound methods in a component.
     *
     * @param {object} component Component whose method is going to be bound.
     */
    function bindAutoBindMethods(component) {
      var pairs = component.__reactAutoBindPairs;
      for (var i = 0; i < pairs.length; i += 2) {
        var autoBindKey = pairs[i];
        var method = pairs[i + 1];
        component[autoBindKey] = bindAutoBindMethod(component, method);
      }
    }

    var IsMountedPreMixin = {
      componentDidMount: function() {
        this.__isMounted = true;
      }
    };

    var IsMountedPostMixin = {
      componentWillUnmount: function() {
        this.__isMounted = false;
      }
    };

    /**
     * Add more to the ReactClass base class. These are all legacy features and
     * therefore not already part of the modern ReactComponent.
     */
    var ReactClassMixin = {
      /**
       * TODO: This will be deprecated because state should always keep a consistent
       * type signature and the only use case for this, is to avoid that.
       */
      replaceState: function(newState, callback) {
        this.updater.enqueueReplaceState(this, newState, callback);
      },

      /**
       * Checks whether or not this composite component is mounted.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function() {
        if (undefined !== 'production') {
          warning$1(
            this.__didWarnIsMounted,
            '%s: isMounted is deprecated. Instead, make sure to clean up ' +
              'subscriptions and pending requests in componentWillUnmount to ' +
              'prevent memory leaks.',
            (this.constructor && this.constructor.displayName) ||
              this.name ||
              'Component'
          );
          this.__didWarnIsMounted = true;
        }
        return !!this.__isMounted;
      }
    };

    var ReactClassComponent = function() {};
    objectAssign(
      ReactClassComponent.prototype,
      ReactComponent.prototype,
      ReactClassMixin
    );

    /**
     * Creates a composite component class given a class specification.
     * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
     *
     * @param {object} spec Class specification (which must define `render`).
     * @return {function} Component constructor function.
     * @public
     */
    function createClass(spec) {
      // To keep our warnings more understandable, we'll use a little hack here to
      // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
      // unnecessarily identify a class without displayName as 'Constructor'.
      var Constructor = identity(function(props, context, updater) {
        // This constructor gets overridden by mocks. The argument is used
        // by mocks to assert on what gets mounted.

        if (undefined !== 'production') {
          warning$1(
            this instanceof Constructor,
            'Something is calling a React component directly. Use a factory or ' +
              'JSX instead. See: https://fb.me/react-legacyfactory'
          );
        }

        // Wire up auto-binding
        if (this.__reactAutoBindPairs.length) {
          bindAutoBindMethods(this);
        }

        this.props = props;
        this.context = context;
        this.refs = emptyObject_1;
        this.updater = updater || ReactNoopUpdateQueue;

        this.state = null;

        // ReactClasses doesn't have constructors. Instead, they use the
        // getInitialState and componentWillMount methods for initialization.

        var initialState = this.getInitialState ? this.getInitialState() : null;
        if (undefined !== 'production') {
          // We allow auto-mocks to proceed as if they're returning null.
          if (
            initialState === undefined &&
            this.getInitialState._isMockFunction
          ) {
            // This is probably bad practice. Consider warning here and
            // deprecating this convenience.
            initialState = null;
          }
        }
        invariant_1(
          typeof initialState === 'object' && !Array.isArray(initialState),
          '%s.getInitialState(): must return an object or null',
          Constructor.displayName || 'ReactCompositeComponent'
        );

        this.state = initialState;
      });
      Constructor.prototype = new ReactClassComponent();
      Constructor.prototype.constructor = Constructor;
      Constructor.prototype.__reactAutoBindPairs = [];

      injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

      mixSpecIntoComponent(Constructor, IsMountedPreMixin);
      mixSpecIntoComponent(Constructor, spec);
      mixSpecIntoComponent(Constructor, IsMountedPostMixin);

      // Initialize the defaultProps property after all mixins have been merged.
      if (Constructor.getDefaultProps) {
        Constructor.defaultProps = Constructor.getDefaultProps();
      }

      if (undefined !== 'production') {
        // This is a tag to indicate that the use of these method names is ok,
        // since it's used with createClass. If it's not, then it's likely a
        // mistake so we'll warn you to use the static property, property
        // initializer or constructor respectively.
        if (Constructor.getDefaultProps) {
          Constructor.getDefaultProps.isReactClassApproved = {};
        }
        if (Constructor.prototype.getInitialState) {
          Constructor.prototype.getInitialState.isReactClassApproved = {};
        }
      }

      invariant_1(
        Constructor.prototype.render,
        'createClass(...): Class specification must implement a `render` method.'
      );

      if (undefined !== 'production') {
        warning$1(
          !Constructor.prototype.componentShouldUpdate,
          '%s has a method called ' +
            'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
            'The name is phrased as a question because the function is ' +
            'expected to return a value.',
          spec.displayName || 'A component'
        );
        warning$1(
          !Constructor.prototype.componentWillRecieveProps,
          '%s has a method called ' +
            'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
          spec.displayName || 'A component'
        );
        warning$1(
          !Constructor.prototype.UNSAFE_componentWillRecieveProps,
          '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
            'Did you mean UNSAFE_componentWillReceiveProps()?',
          spec.displayName || 'A component'
        );
      }

      // Reduce time spent doing lookups by setting these on the prototype.
      for (var methodName in ReactClassInterface) {
        if (!Constructor.prototype[methodName]) {
          Constructor.prototype[methodName] = null;
        }
      }

      return Constructor;
    }

    return createClass;
  }

  var factory_1 = factory;

  if (typeof React__default === 'undefined') {
    throw Error(
      'create-react-class could not find the React object. If you are using script tags, ' +
        'make sure that React is being loaded before create-react-class.'
    );
  }

  // Hack to grab NoopUpdateQueue from isomorphic React
  var ReactNoopUpdateQueue = new React__default.Component().updater;

  var createReactClass = factory_1(
    React__default.Component,
    React__default.isValidElement,
    ReactNoopUpdateQueue
  );

  // Tell whether the rect is visible, given an offset
  //
  // return: boolean
  var isVisibleWithOffset = function (offset, rect, containmentRect) {
    var offsetDir = offset.direction;
    var offsetVal = offset.value;

    // Rules for checking different kind of offsets. In example if the element is
    // 90px below viewport and offsetTop is 100, it is considered visible.
    switch (offsetDir) {
    case 'top':
      return ((containmentRect.top + offsetVal) < rect.top) &&
        (containmentRect.bottom > rect.bottom) &&
        (containmentRect.left < rect.left) &&
        (containmentRect.right > rect.right);

    case 'left':
      return ((containmentRect.left + offsetVal) < rect.left) &&
        (containmentRect.bottom > rect.bottom) &&
        (containmentRect.top < rect.top) &&
        (containmentRect.right > rect.right);

    case 'bottom':
      return ((containmentRect.bottom - offsetVal) > rect.bottom) &&
        (containmentRect.left < rect.left) &&
        (containmentRect.right > rect.right) &&
        (containmentRect.top < rect.top);

    case 'right':
      return ((containmentRect.right - offsetVal) > rect.right) &&
        (containmentRect.left < rect.left) &&
        (containmentRect.top < rect.top) &&
        (containmentRect.bottom > rect.bottom);
    }
  };

  var containmentPropType = PropTypes.any;

  if (typeof window !== 'undefined') {
    containmentPropType = PropTypes.instanceOf(window.Element);
  }

  var visibilitySensor = createReactClass({
    displayName: 'VisibilitySensor',

    propTypes: {
      onChange: PropTypes.func,
      active: PropTypes.bool,
      partialVisibility: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
      ]),
      delayedCall: PropTypes.bool,
      offset: PropTypes.oneOfType([
        PropTypes.shape({
          top: PropTypes.number,
          left: PropTypes.number,
          bottom: PropTypes.number,
          right: PropTypes.number
        }),
        // deprecated offset property
        PropTypes.shape({
          direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
          value: PropTypes.number
        })
      ]),
      scrollCheck: PropTypes.bool,
      scrollDelay: PropTypes.number,
      scrollThrottle: PropTypes.number,
      resizeCheck: PropTypes.bool,
      resizeDelay: PropTypes.number,
      resizeThrottle: PropTypes.number,
      intervalCheck: PropTypes.bool,
      intervalDelay: PropTypes.number,
      containment: containmentPropType,
      children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func,
      ]),
      minTopValue: PropTypes.number,
    },

    getDefaultProps: function () {
      return {
        active: true,
        partialVisibility: false,
        minTopValue: 0,
        scrollCheck: false,
        scrollDelay: 250,
        scrollThrottle: -1,
        resizeCheck: false,
        resizeDelay: 250,
        resizeThrottle: -1,
        intervalCheck: true,
        intervalDelay: 100,
        delayedCall: false,
        offset: {},
        containment: null,
        children: React__default.createElement('span')
      };
    },

    getInitialState: function () {
      return {
        isVisible: null,
        visibilityRect: {}
      };
    },

    componentDidMount: function () {
      this.node = reactDom__default.findDOMNode(this);
      if (this.props.active) {
        this.startWatching();
      }
    },

    componentWillUnmount: function () {
      this.stopWatching();
    },

    componentWillReceiveProps: function (nextProps) {
      if (nextProps.active && !this.props.active) {
        this.setState(this.getInitialState());
        this.startWatching();
      } else if (!nextProps.active) {
        this.stopWatching();
      }
    },

    getContainer: function () {
      return this.props.containment || window;
    },

    addEventListener: function (target, event, delay, throttle) {
      if (!this.debounceCheck) {
        this.debounceCheck = {};
      }

      var timeout;
      var func;

      var later = function () {
        timeout = null;
        this.check();
      }.bind(this);

      if (throttle > -1) {
        func = function () {
          if (!timeout) {
            timeout = setTimeout(later, throttle || 0);
          }
        };
      } else {
        func = function () {
          clearTimeout(timeout);
          timeout = setTimeout(later, delay || 0);
        };
      }

      var info = {
        target: target,
        fn: func,
        getLastTimeout: function () {
          return timeout;
        },
      };

      target.addEventListener(event, info.fn);
      this.debounceCheck[event] = info;
    },

    startWatching: function () {
      if (this.debounceCheck || this.interval) { return; }

      if (this.props.intervalCheck) {
        this.interval = setInterval(this.check, this.props.intervalDelay);
      }

      if (this.props.scrollCheck) {
        this.addEventListener(
          this.getContainer(),
          'scroll',
          this.props.scrollDelay,
          this.props.scrollThrottle
        );
      }

      if (this.props.resizeCheck) {
        this.addEventListener(
          window,
          'resize',
          this.props.resizeDelay,
          this.props.resizeThrottle
        );
      }

      // if dont need delayed call, check on load ( before the first interval fires )
      !this.props.delayedCall && this.check();
    },

    stopWatching: function () {
      if (this.debounceCheck) {
        // clean up event listeners and their debounce callers
        for (var debounceEvent in this.debounceCheck) {
          if (this.debounceCheck.hasOwnProperty(debounceEvent)) {
            var debounceInfo = this.debounceCheck[debounceEvent];

            clearTimeout(debounceInfo.getLastTimeout());
            debounceInfo.target.removeEventListener(
              debounceEvent, debounceInfo.fn
            );

            this.debounceCheck[debounceEvent] = null;
          }
        }
      }
      this.debounceCheck = null;

      if (this.interval) { this.interval = clearInterval(this.interval); }
    },

    /**
     * Check if the element is within the visible viewport
     */
    check: function () {
      var el = this.node;
      var rect;
      var containmentRect;
      // if the component has rendered to null, dont update visibility
      if (!el) {
        return this.state;
      }

      rect = el.getBoundingClientRect();

      if (this.props.containment) {
        var containmentDOMRect = this.props.containment.getBoundingClientRect();
        containmentRect = {
          top: containmentDOMRect.top,
          left: containmentDOMRect.left,
          bottom: containmentDOMRect.bottom,
          right: containmentDOMRect.right,
        };
      } else {
        containmentRect = {
          top: 0,
          left: 0,
          bottom: window.innerHeight || document.documentElement.clientHeight,
          right: window.innerWidth || document.documentElement.clientWidth
        };
      }

      // Check if visibility is wanted via offset?
      var offset = this.props.offset || {};
      var hasValidOffset = typeof offset === 'object';
      if (hasValidOffset) {
        containmentRect.top += offset.top || 0;
        containmentRect.left += offset.left || 0;
        containmentRect.bottom -= offset.bottom || 0;
        containmentRect.right -= offset.right || 0;
      }

      var visibilityRect = {
        top: rect.top >= containmentRect.top,
        left: rect.left >= containmentRect.left,
        bottom: rect.bottom <= containmentRect.bottom,
        right: rect.right <= containmentRect.right
      };

      var isVisible = (
        visibilityRect.top &&
        visibilityRect.left &&
        visibilityRect.bottom &&
        visibilityRect.right
      );

      // check for partial visibility
      if (this.props.partialVisibility) {
        var partialVisible =
            rect.top <= containmentRect.bottom && rect.bottom >= containmentRect.top &&
            rect.left <= containmentRect.right && rect.right >= containmentRect.left;

        // account for partial visibility on a single edge
        if (typeof this.props.partialVisibility === 'string') {
          partialVisible = visibilityRect[this.props.partialVisibility];
        }

        // if we have minimum top visibility set by props, lets check, if it meets the passed value
        // so if for instance element is at least 200px in viewport, then show it.
        isVisible = this.props.minTopValue
          ? partialVisible && rect.top <= (containmentRect.bottom - this.props.minTopValue)
          : partialVisible;
      }

      // Deprecated options for calculating offset.
      if (typeof offset.direction === 'string' &&
          typeof offset.value === 'number') {
        console.warn('[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }', offset.direction, offset.value);

        isVisible = isVisibleWithOffset(offset, rect, containmentRect);
      }

      var state = this.state;
      // notify the parent when the value changes
      if (this.state.isVisible !== isVisible) {
        state = {
          isVisible: isVisible,
          visibilityRect: visibilityRect
        };
        this.setState(state);
        if (this.props.onChange) this.props.onChange(isVisible, visibilityRect);
      }

      return state;
    },

    render: function () {
      if (this.props.children instanceof Function) {
        return this.props.children({
          isVisible: this.state.isVisible,
          visibilityRect: this.state.visibilityRect,
        });
      }
      return React__default.Children.only(this.props.children);
    }
  });

  var NumberWithLabel = function (_Component) {
    inherits(NumberWithLabel, _Component);

    function NumberWithLabel(props) {
      classCallCheck(this, NumberWithLabel);

      var _this = possibleConstructorReturn(this, (NumberWithLabel.__proto__ || Object.getPrototypeOf(NumberWithLabel)).call(this, props));

      _this.triggerCountup = function () {
        return _this._triggerCountup();
      };
      _this.handleVisibilityChange = function (e) {
        return _this._handleVisibilityChange(e);
      };
      return _this;
    }

    createClass(NumberWithLabel, [{
      key: '_triggerCountup',
      value: function _triggerCountup() {
        build_1(this.countUpNum);
      }
    }, {
      key: '_handleVisibilityChange',
      value: function _handleVisibilityChange(isVisible) {
        if (isVisible) {
          this.triggerCountup();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return React__default.createElement(
          visibilitySensor,
          { onChange: this.handleVisibilityChange },
          React__default.createElement(
            'div',
            { className: 'stat' },
            React__default.createElement(CountUp, {
              className: 'number',
              start: 0,
              end: this.props.number,
              duration: 2,
              ref: function ref(el) {
                _this2.countUpNum = el;
              }
            }),
            React__default.createElement(
              'span',
              { className: 'text' },
              this.props.label
            )
          )
        );
      }
    }]);
    return NumberWithLabel;
  }(React.Component);

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
        } else if (this.props.city === 'Kansas City, Missouri, United States of America') {
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
            city: selected.value.locale_names.default,
            region: selected.value.administrative ? selected.value.administrative[0] : null,
            country: selected.value.country ? selected.value.country.default : null,
            country_en: selected.value.country ? selected.value.country.en : null,
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
          "type": "city",
          "hitsPerPage": "10",
          "query": query
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

        return React__default.createElement(
          'div',
          null,
          React__default.createElement(Select$1.Async, {
            name: this.props.name,
            className: 'city-select ' + this.props.classes,
            value: this.state.value,
            options: options,
            onChange: this.handleChange,
            noResultsText: 'No results for this city',
            placeholder: 'Start typing a city name...',
            loadOptions: this.searchPlaces
          }),
          this.props.errorMessage && React__default.createElement(
            'div',
            { className: 'error-message minicaps' },
            this.props.errorMessage
          )
        );
      }
    }]);
    return PlaceSelect;
  }(React.Component);

  /**
   * A collection of shims that provide minimal functionality of the ES6 collections.
   *
   * These implementations are not meant to be used outside of the ResizeObserver
   * modules as they cover only a limited range of use cases.
   */
  /* eslint-disable require-jsdoc, valid-jsdoc */
  var MapShim = (function () {
      if (typeof Map !== 'undefined') {
          return Map;
      }

      /**
       * Returns index in provided array that matches the specified key.
       *
       * @param {Array<Array>} arr
       * @param {*} key
       * @returns {number}
       */
      function getIndex(arr, key) {
          var result = -1;

          arr.some(function (entry, index) {
              if (entry[0] === key) {
                  result = index;

                  return true;
              }

              return false;
          });

          return result;
      }

      return (function () {
          function anonymous() {
              this.__entries__ = [];
          }

          var prototypeAccessors = { size: { configurable: true } };

          /**
           * @returns {boolean}
           */
          prototypeAccessors.size.get = function () {
              return this.__entries__.length;
          };

          /**
           * @param {*} key
           * @returns {*}
           */
          anonymous.prototype.get = function (key) {
              var index = getIndex(this.__entries__, key);
              var entry = this.__entries__[index];

              return entry && entry[1];
          };

          /**
           * @param {*} key
           * @param {*} value
           * @returns {void}
           */
          anonymous.prototype.set = function (key, value) {
              var index = getIndex(this.__entries__, key);

              if (~index) {
                  this.__entries__[index][1] = value;
              } else {
                  this.__entries__.push([key, value]);
              }
          };

          /**
           * @param {*} key
           * @returns {void}
           */
          anonymous.prototype.delete = function (key) {
              var entries = this.__entries__;
              var index = getIndex(entries, key);

              if (~index) {
                  entries.splice(index, 1);
              }
          };

          /**
           * @param {*} key
           * @returns {void}
           */
          anonymous.prototype.has = function (key) {
              return !!~getIndex(this.__entries__, key);
          };

          /**
           * @returns {void}
           */
          anonymous.prototype.clear = function () {
              this.__entries__.splice(0);
          };

          /**
           * @param {Function} callback
           * @param {*} [ctx=null]
           * @returns {void}
           */
          anonymous.prototype.forEach = function (callback, ctx) {
              var this$1 = this;
              if ( ctx === void 0 ) ctx = null;

              for (var i = 0, list = this$1.__entries__; i < list.length; i += 1) {
                  var entry = list[i];

                  callback.call(ctx, entry[1], entry[0]);
              }
          };

          Object.defineProperties( anonymous.prototype, prototypeAccessors );

          return anonymous;
      }());
  })();

  /**
   * Detects whether window and document objects are available in current environment.
   */
  var isBrowser$1 = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

  // Returns global object of a current environment.
  var global$1 = (function () {
      if (typeof global !== 'undefined' && global.Math === Math) {
          return global;
      }

      if (typeof self !== 'undefined' && self.Math === Math) {
          return self;
      }

      if (typeof window !== 'undefined' && window.Math === Math) {
          return window;
      }

      // eslint-disable-next-line no-new-func
      return Function('return this')();
  })();

  /**
   * A shim for the requestAnimationFrame which falls back to the setTimeout if
   * first one is not supported.
   *
   * @returns {number} Requests' identifier.
   */
  var requestAnimationFrame$1 = (function () {
      if (typeof requestAnimationFrame === 'function') {
          // It's required to use a bounded function because IE sometimes throws
          // an "Invalid calling object" error if rAF is invoked without the global
          // object on the left hand side.
          return requestAnimationFrame.bind(global$1);
      }

      return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
  })();

  // Defines minimum timeout before adding a trailing call.
  var trailingTimeout = 2;

  /**
   * Creates a wrapper function which ensures that provided callback will be
   * invoked only once during the specified delay period.
   *
   * @param {Function} callback - Function to be invoked after the delay period.
   * @param {number} delay - Delay after which to invoke callback.
   * @returns {Function}
   */
  var throttle$1 = function (callback, delay) {
      var leadingCall = false,
          trailingCall = false,
          lastCallTime = 0;

      /**
       * Invokes the original callback function and schedules new invocation if
       * the "proxy" was called during current request.
       *
       * @returns {void}
       */
      function resolvePending() {
          if (leadingCall) {
              leadingCall = false;

              callback();
          }

          if (trailingCall) {
              proxy();
          }
      }

      /**
       * Callback invoked after the specified delay. It will further postpone
       * invocation of the original function delegating it to the
       * requestAnimationFrame.
       *
       * @returns {void}
       */
      function timeoutCallback() {
          requestAnimationFrame$1(resolvePending);
      }

      /**
       * Schedules invocation of the original function.
       *
       * @returns {void}
       */
      function proxy() {
          var timeStamp = Date.now();

          if (leadingCall) {
              // Reject immediately following calls.
              if (timeStamp - lastCallTime < trailingTimeout) {
                  return;
              }

              // Schedule new call to be in invoked when the pending one is resolved.
              // This is important for "transitions" which never actually start
              // immediately so there is a chance that we might miss one if change
              // happens amids the pending invocation.
              trailingCall = true;
          } else {
              leadingCall = true;
              trailingCall = false;

              setTimeout(timeoutCallback, delay);
          }

          lastCallTime = timeStamp;
      }

      return proxy;
  };

  // Minimum delay before invoking the update of observers.
  var REFRESH_DELAY = 20;

  // A list of substrings of CSS properties used to find transition events that
  // might affect dimensions of observed elements.
  var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];

  // Check if MutationObserver is available.
  var mutationObserverSupported = typeof MutationObserver !== 'undefined';

  /**
   * Singleton controller class which handles updates of ResizeObserver instances.
   */
  var ResizeObserverController = function() {
      this.connected_ = false;
      this.mutationEventsAdded_ = false;
      this.mutationsObserver_ = null;
      this.observers_ = [];

      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
      this.refresh = throttle$1(this.refresh.bind(this), REFRESH_DELAY);
  };

  /**
   * Adds observer to observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be added.
   * @returns {void}
   */


  /**
   * Holds reference to the controller's instance.
   *
   * @private {ResizeObserverController}
   */


  /**
   * Keeps reference to the instance of MutationObserver.
   *
   * @private {MutationObserver}
   */

  /**
   * Indicates whether DOM listeners have been added.
   *
   * @private {boolean}
   */
  ResizeObserverController.prototype.addObserver = function (observer) {
      if (!~this.observers_.indexOf(observer)) {
          this.observers_.push(observer);
      }

      // Add listeners if they haven't been added yet.
      if (!this.connected_) {
          this.connect_();
      }
  };

  /**
   * Removes observer from observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be removed.
   * @returns {void}
   */
  ResizeObserverController.prototype.removeObserver = function (observer) {
      var observers = this.observers_;
      var index = observers.indexOf(observer);

      // Remove observer if it's present in registry.
      if (~index) {
          observers.splice(index, 1);
      }

      // Remove listeners if controller has no connected observers.
      if (!observers.length && this.connected_) {
          this.disconnect_();
      }
  };

  /**
   * Invokes the update of observers. It will continue running updates insofar
   * it detects changes.
   *
   * @returns {void}
   */
  ResizeObserverController.prototype.refresh = function () {
      var changesDetected = this.updateObservers_();

      // Continue running updates if changes have been detected as there might
      // be future ones caused by CSS transitions.
      if (changesDetected) {
          this.refresh();
      }
  };

  /**
   * Updates every observer from observers list and notifies them of queued
   * entries.
   *
   * @private
   * @returns {boolean} Returns "true" if any observer has detected changes in
   *  dimensions of it's elements.
   */
  ResizeObserverController.prototype.updateObservers_ = function () {
      // Collect observers that have active observations.
      var activeObservers = this.observers_.filter(function (observer) {
          return observer.gatherActive(), observer.hasActive();
      });

      // Deliver notifications in a separate cycle in order to avoid any
      // collisions between observers, e.g. when multiple instances of
      // ResizeObserver are tracking the same element and the callback of one
      // of them changes content dimensions of the observed target. Sometimes
      // this may result in notifications being blocked for the rest of observers.
      activeObservers.forEach(function (observer) { return observer.broadcastActive(); });

      return activeObservers.length > 0;
  };

  /**
   * Initializes DOM listeners.
   *
   * @private
   * @returns {void}
   */
  ResizeObserverController.prototype.connect_ = function () {
      // Do nothing if running in a non-browser environment or if listeners
      // have been already added.
      if (!isBrowser$1 || this.connected_) {
          return;
      }

      // Subscription to the "Transitionend" event is used as a workaround for
      // delayed transitions. This way it's possible to capture at least the
      // final state of an element.
      document.addEventListener('transitionend', this.onTransitionEnd_);

      window.addEventListener('resize', this.refresh);

      if (mutationObserverSupported) {
          this.mutationsObserver_ = new MutationObserver(this.refresh);

          this.mutationsObserver_.observe(document, {
              attributes: true,
              childList: true,
              characterData: true,
              subtree: true
          });
      } else {
          document.addEventListener('DOMSubtreeModified', this.refresh);

          this.mutationEventsAdded_ = true;
      }

      this.connected_ = true;
  };

  /**
   * Removes DOM listeners.
   *
   * @private
   * @returns {void}
   */
  ResizeObserverController.prototype.disconnect_ = function () {
      // Do nothing if running in a non-browser environment or if listeners
      // have been already removed.
      if (!isBrowser$1 || !this.connected_) {
          return;
      }

      document.removeEventListener('transitionend', this.onTransitionEnd_);
      window.removeEventListener('resize', this.refresh);

      if (this.mutationsObserver_) {
          this.mutationsObserver_.disconnect();
      }

      if (this.mutationEventsAdded_) {
          document.removeEventListener('DOMSubtreeModified', this.refresh);
      }

      this.mutationsObserver_ = null;
      this.mutationEventsAdded_ = false;
      this.connected_ = false;
  };

  /**
   * "Transitionend" event handler.
   *
   * @private
   * @param {TransitionEvent} event
   * @returns {void}
   */
  ResizeObserverController.prototype.onTransitionEnd_ = function (ref) {
          var propertyName = ref.propertyName; if ( propertyName === void 0 ) propertyName = '';

      // Detect whether transition may affect dimensions of an element.
      var isReflowProperty = transitionKeys.some(function (key) {
          return !!~propertyName.indexOf(key);
      });

      if (isReflowProperty) {
          this.refresh();
      }
  };

  /**
   * Returns instance of the ResizeObserverController.
   *
   * @returns {ResizeObserverController}
   */
  ResizeObserverController.getInstance = function () {
      if (!this.instance_) {
          this.instance_ = new ResizeObserverController();
      }

      return this.instance_;
  };

  ResizeObserverController.instance_ = null;

  /**
   * Defines non-writable/enumerable properties of the provided target object.
   *
   * @param {Object} target - Object for which to define properties.
   * @param {Object} props - Properties to be defined.
   * @returns {Object} Target object.
   */
  var defineConfigurable = (function (target, props) {
      for (var i = 0, list = Object.keys(props); i < list.length; i += 1) {
          var key = list[i];

          Object.defineProperty(target, key, {
              value: props[key],
              enumerable: false,
              writable: false,
              configurable: true
          });
      }

      return target;
  });

  /**
   * Returns the global object associated with provided element.
   *
   * @param {Object} target
   * @returns {Object}
   */
  var getWindowOf = (function (target) {
      // Assume that the element is an instance of Node, which means that it
      // has the "ownerDocument" property from which we can retrieve a
      // corresponding global object.
      var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;

      // Return the local global object if it's not possible extract one from
      // provided element.
      return ownerGlobal || global$1;
  });

  // Placeholder of an empty content rectangle.
  var emptyRect = createRectInit(0, 0, 0, 0);

  /**
   * Converts provided string to a number.
   *
   * @param {number|string} value
   * @returns {number}
   */
  function toFloat(value) {
      return parseFloat(value) || 0;
  }

  /**
   * Extracts borders size from provided styles.
   *
   * @param {CSSStyleDeclaration} styles
   * @param {...string} positions - Borders positions (top, right, ...)
   * @returns {number}
   */
  function getBordersSize$1(styles) {
      var positions = [], len = arguments.length - 1;
      while ( len-- > 0 ) positions[ len ] = arguments[ len + 1 ];

      return positions.reduce(function (size, position) {
          var value = styles['border-' + position + '-width'];

          return size + toFloat(value);
      }, 0);
  }

  /**
   * Extracts paddings sizes from provided styles.
   *
   * @param {CSSStyleDeclaration} styles
   * @returns {Object} Paddings box.
   */
  function getPaddings(styles) {
      var positions = ['top', 'right', 'bottom', 'left'];
      var paddings = {};

      for (var i = 0, list = positions; i < list.length; i += 1) {
          var position = list[i];

          var value = styles['padding-' + position];

          paddings[position] = toFloat(value);
      }

      return paddings;
  }

  /**
   * Calculates content rectangle of provided SVG element.
   *
   * @param {SVGGraphicsElement} target - Element content rectangle of which needs
   *      to be calculated.
   * @returns {DOMRectInit}
   */
  function getSVGContentRect(target) {
      var bbox = target.getBBox();

      return createRectInit(0, 0, bbox.width, bbox.height);
  }

  /**
   * Calculates content rectangle of provided HTMLElement.
   *
   * @param {HTMLElement} target - Element for which to calculate the content rectangle.
   * @returns {DOMRectInit}
   */
  function getHTMLElementContentRect(target) {
      // Client width & height properties can't be
      // used exclusively as they provide rounded values.
      var clientWidth = target.clientWidth;
      var clientHeight = target.clientHeight;

      // By this condition we can catch all non-replaced inline, hidden and
      // detached elements. Though elements with width & height properties less
      // than 0.5 will be discarded as well.
      //
      // Without it we would need to implement separate methods for each of
      // those cases and it's not possible to perform a precise and performance
      // effective test for hidden elements. E.g. even jQuery's ':visible' filter
      // gives wrong results for elements with width & height less than 0.5.
      if (!clientWidth && !clientHeight) {
          return emptyRect;
      }

      var styles = getWindowOf(target).getComputedStyle(target);
      var paddings = getPaddings(styles);
      var horizPad = paddings.left + paddings.right;
      var vertPad = paddings.top + paddings.bottom;

      // Computed styles of width & height are being used because they are the
      // only dimensions available to JS that contain non-rounded values. It could
      // be possible to utilize the getBoundingClientRect if only it's data wasn't
      // affected by CSS transformations let alone paddings, borders and scroll bars.
      var width = toFloat(styles.width),
          height = toFloat(styles.height);

      // Width & height include paddings and borders when the 'border-box' box
      // model is applied (except for IE).
      if (styles.boxSizing === 'border-box') {
          // Following conditions are required to handle Internet Explorer which
          // doesn't include paddings and borders to computed CSS dimensions.
          //
          // We can say that if CSS dimensions + paddings are equal to the "client"
          // properties then it's either IE, and thus we don't need to subtract
          // anything, or an element merely doesn't have paddings/borders styles.
          if (Math.round(width + horizPad) !== clientWidth) {
              width -= getBordersSize$1(styles, 'left', 'right') + horizPad;
          }

          if (Math.round(height + vertPad) !== clientHeight) {
              height -= getBordersSize$1(styles, 'top', 'bottom') + vertPad;
          }
      }

      // Following steps can't be applied to the document's root element as its
      // client[Width/Height] properties represent viewport area of the window.
      // Besides, it's as well not necessary as the <html> itself neither has
      // rendered scroll bars nor it can be clipped.
      if (!isDocumentElement(target)) {
          // In some browsers (only in Firefox, actually) CSS width & height
          // include scroll bars size which can be removed at this step as scroll
          // bars are the only difference between rounded dimensions + paddings
          // and "client" properties, though that is not always true in Chrome.
          var vertScrollbar = Math.round(width + horizPad) - clientWidth;
          var horizScrollbar = Math.round(height + vertPad) - clientHeight;

          // Chrome has a rather weird rounding of "client" properties.
          // E.g. for an element with content width of 314.2px it sometimes gives
          // the client width of 315px and for the width of 314.7px it may give
          // 314px. And it doesn't happen all the time. So just ignore this delta
          // as a non-relevant.
          if (Math.abs(vertScrollbar) !== 1) {
              width -= vertScrollbar;
          }

          if (Math.abs(horizScrollbar) !== 1) {
              height -= horizScrollbar;
          }
      }

      return createRectInit(paddings.left, paddings.top, width, height);
  }

  /**
   * Checks whether provided element is an instance of the SVGGraphicsElement.
   *
   * @param {Element} target - Element to be checked.
   * @returns {boolean}
   */
  var isSVGGraphicsElement = (function () {
      // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
      // interface.
      if (typeof SVGGraphicsElement !== 'undefined') {
          return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
      }

      // If it's so, then check that element is at least an instance of the
      // SVGElement and that it has the "getBBox" method.
      // eslint-disable-next-line no-extra-parens
      return function (target) { return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function'; };
  })();

  /**
   * Checks whether provided element is a document element (<html>).
   *
   * @param {Element} target - Element to be checked.
   * @returns {boolean}
   */
  function isDocumentElement(target) {
      return target === getWindowOf(target).document.documentElement;
  }

  /**
   * Calculates an appropriate content rectangle for provided html or svg element.
   *
   * @param {Element} target - Element content rectangle of which needs to be calculated.
   * @returns {DOMRectInit}
   */
  function getContentRect(target) {
      if (!isBrowser$1) {
          return emptyRect;
      }

      if (isSVGGraphicsElement(target)) {
          return getSVGContentRect(target);
      }

      return getHTMLElementContentRect(target);
  }

  /**
   * Creates rectangle with an interface of the DOMRectReadOnly.
   * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
   *
   * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
   * @returns {DOMRectReadOnly}
   */
  function createReadOnlyRect(ref) {
      var x = ref.x;
      var y = ref.y;
      var width = ref.width;
      var height = ref.height;

      // If DOMRectReadOnly is available use it as a prototype for the rectangle.
      var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
      var rect = Object.create(Constr.prototype);

      // Rectangle's properties are not writable and non-enumerable.
      defineConfigurable(rect, {
          x: x, y: y, width: width, height: height,
          top: y,
          right: x + width,
          bottom: height + y,
          left: x
      });

      return rect;
  }

  /**
   * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
   * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
   *
   * @param {number} x - X coordinate.
   * @param {number} y - Y coordinate.
   * @param {number} width - Rectangle's width.
   * @param {number} height - Rectangle's height.
   * @returns {DOMRectInit}
   */
  function createRectInit(x, y, width, height) {
      return { x: x, y: y, width: width, height: height };
  }

  /**
   * Class that is responsible for computations of the content rectangle of
   * provided DOM element and for keeping track of it's changes.
   */
  var ResizeObservation = function(target) {
      this.broadcastWidth = 0;
      this.broadcastHeight = 0;
      this.contentRect_ = createRectInit(0, 0, 0, 0);

      this.target = target;
  };

  /**
   * Updates content rectangle and tells whether it's width or height properties
   * have changed since the last broadcast.
   *
   * @returns {boolean}
   */


  /**
   * Reference to the last observed content rectangle.
   *
   * @private {DOMRectInit}
   */


  /**
   * Broadcasted width of content rectangle.
   *
   * @type {number}
   */
  ResizeObservation.prototype.isActive = function () {
      var rect = getContentRect(this.target);

      this.contentRect_ = rect;

      return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };

  /**
   * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
   * from the corresponding properties of the last observed content rectangle.
   *
   * @returns {DOMRectInit} Last observed content rectangle.
   */
  ResizeObservation.prototype.broadcastRect = function () {
      var rect = this.contentRect_;

      this.broadcastWidth = rect.width;
      this.broadcastHeight = rect.height;

      return rect;
  };

  var ResizeObserverEntry = function(target, rectInit) {
      var contentRect = createReadOnlyRect(rectInit);

      // According to the specification following properties are not writable
      // and are also not enumerable in the native implementation.
      //
      // Property accessors are not being used as they'd require to define a
      // private WeakMap storage which may cause memory leaks in browsers that
      // don't support this type of collections.
      defineConfigurable(this, { target: target, contentRect: contentRect });
  };

  var ResizeObserverSPI = function(callback, controller, callbackCtx) {
      this.activeObservations_ = [];
      this.observations_ = new MapShim();

      if (typeof callback !== 'function') {
          throw new TypeError('The callback provided as parameter 1 is not a function.');
      }

      this.callback_ = callback;
      this.controller_ = controller;
      this.callbackCtx_ = callbackCtx;
  };

  /**
   * Starts observing provided element.
   *
   * @param {Element} target - Element to be observed.
   * @returns {void}
   */


  /**
   * Registry of the ResizeObservation instances.
   *
   * @private {Map<Element, ResizeObservation>}
   */


  /**
   * Public ResizeObserver instance which will be passed to the callback
   * function and used as a value of it's "this" binding.
   *
   * @private {ResizeObserver}
   */

  /**
   * Collection of resize observations that have detected changes in dimensions
   * of elements.
   *
   * @private {Array<ResizeObservation>}
   */
  ResizeObserverSPI.prototype.observe = function (target) {
      if (!arguments.length) {
          throw new TypeError('1 argument required, but only 0 present.');
      }

      // Do nothing if current environment doesn't have the Element interface.
      if (typeof Element === 'undefined' || !(Element instanceof Object)) {
          return;
      }

      if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
      }

      var observations = this.observations_;

      // Do nothing if element is already being observed.
      if (observations.has(target)) {
          return;
      }

      observations.set(target, new ResizeObservation(target));

      this.controller_.addObserver(this);

      // Force the update of observations.
      this.controller_.refresh();
  };

  /**
   * Stops observing provided element.
   *
   * @param {Element} target - Element to stop observing.
   * @returns {void}
   */
  ResizeObserverSPI.prototype.unobserve = function (target) {
      if (!arguments.length) {
          throw new TypeError('1 argument required, but only 0 present.');
      }

      // Do nothing if current environment doesn't have the Element interface.
      if (typeof Element === 'undefined' || !(Element instanceof Object)) {
          return;
      }

      if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
      }

      var observations = this.observations_;

      // Do nothing if element is not being observed.
      if (!observations.has(target)) {
          return;
      }

      observations.delete(target);

      if (!observations.size) {
          this.controller_.removeObserver(this);
      }
  };

  /**
   * Stops observing all elements.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.disconnect = function () {
      this.clearActive();
      this.observations_.clear();
      this.controller_.removeObserver(this);
  };

  /**
   * Collects observation instances the associated element of which has changed
   * it's content rectangle.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.gatherActive = function () {
          var this$1 = this;

      this.clearActive();

      this.observations_.forEach(function (observation) {
          if (observation.isActive()) {
              this$1.activeObservations_.push(observation);
          }
      });
  };

  /**
   * Invokes initial callback function with a list of ResizeObserverEntry
   * instances collected from active resize observations.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.broadcastActive = function () {
      // Do nothing if observer doesn't have active observations.
      if (!this.hasActive()) {
          return;
      }

      var ctx = this.callbackCtx_;

      // Create ResizeObserverEntry instance for every active observation.
      var entries = this.activeObservations_.map(function (observation) {
          return new ResizeObserverEntry(observation.target, observation.broadcastRect());
      });

      this.callback_.call(ctx, entries, ctx);
      this.clearActive();
  };

  /**
   * Clears the collection of active observations.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.clearActive = function () {
      this.activeObservations_.splice(0);
  };

  /**
   * Tells whether observer has active observations.
   *
   * @returns {boolean}
   */
  ResizeObserverSPI.prototype.hasActive = function () {
      return this.activeObservations_.length > 0;
  };

  // Registry of internal observers. If WeakMap is not available use current shim
  // for the Map collection as it has all required methods and because WeakMap
  // can't be fully polyfilled anyway.
  var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();

  /**
   * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
   * exposing only those methods and properties that are defined in the spec.
   */
  var ResizeObserver = function(callback) {
      if (!(this instanceof ResizeObserver)) {
          throw new TypeError('Cannot call a class as a function.');
      }
      if (!arguments.length) {
          throw new TypeError('1 argument required, but only 0 present.');
      }

      var controller = ResizeObserverController.getInstance();
      var observer = new ResizeObserverSPI(callback, controller, this);

      observers.set(this, observer);
  };

  // Expose public methods of ResizeObserver.
  ['observe', 'unobserve', 'disconnect'].forEach(function (method) {
      ResizeObserver.prototype[method] = function () {
          return (ref = observers.get(this))[method].apply(ref, arguments);
          var ref;
      };
  });

  var index = (function () {
      // Export existing implementation if available.
      if (typeof global$1.ResizeObserver !== 'undefined') {
          return global$1.ResizeObserver;
      }

      return ResizeObserver;
  })();

  var ResizeObserver_es = /*#__PURE__*/Object.freeze({
    default: index
  });

  var utils = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.capitalize = capitalize;
  exports.clamp = clamp;
  /**
   * Capitalize first letter of string
   * @private
   * @param  {string} - String
   * @return {string} - String with first letter capitalized
   */
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substr(1);
  }

  /**
   * Clamp position between a range
   * @param  {number} - Value to be clamped
   * @param  {number} - Minimum value in range
   * @param  {number} - Maximum value in range
   * @return {number} - Clamped value
   */
  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
  });

  unwrapExports(utils);
  var utils_1 = utils.capitalize;
  var utils_2 = utils.clamp;

  var _resizeObserverPolyfill = ( ResizeObserver_es && index ) || ResizeObserver_es;

  var Rangeslider = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _classnames2 = _interopRequireDefault(classnames);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(PropTypes);



  var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);



  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-debugger: "warn" */


  /**
   * Predefined constants
   * @type {Object}
   */
  var constants = {
    orientation: {
      horizontal: {
        dimension: 'width',
        direction: 'left',
        reverseDirection: 'right',
        coordinate: 'x'
      },
      vertical: {
        dimension: 'height',
        direction: 'top',
        reverseDirection: 'bottom',
        coordinate: 'y'
      }
    }
  };

  var Slider = function (_Component) {
    _inherits(Slider, _Component);

    function Slider(props, context) {
      _classCallCheck(this, Slider);

      var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props, context));

      _this.handleFormat = function (value) {
        var format = _this.props.format;

        return format ? format(value) : value;
      };

      _this.handleUpdate = function () {
        if (!_this.slider) {
          // for shallow rendering
          return;
        }
        var orientation = _this.props.orientation;

        var dimension = (0, utils.capitalize)(constants.orientation[orientation].dimension);
        var sliderPos = _this.slider['offset' + dimension];
        var handlePos = _this.handle['offset' + dimension];

        _this.setState({
          limit: sliderPos - handlePos,
          grab: handlePos / 2
        });
      };

      _this.handleStart = function (e) {
        var onChangeStart = _this.props.onChangeStart;

        document.addEventListener('mousemove', _this.handleDrag);
        document.addEventListener('mouseup', _this.handleEnd);
        _this.setState({
          active: true
        }, function () {
          onChangeStart && onChangeStart(e);
        });
      };

      _this.handleDrag = function (e) {
        e.stopPropagation();
        var onChange = _this.props.onChange;
        var _e$target = e.target,
            className = _e$target.className,
            classList = _e$target.classList,
            dataset = _e$target.dataset;

        if (!onChange || className === 'rangeslider__labels') return;

        var value = _this.position(e);

        if (classList && classList.contains('rangeslider__label-item') && dataset.value) {
          value = parseFloat(dataset.value);
        }

        onChange && onChange(value, e);
      };

      _this.handleEnd = function (e) {
        var onChangeComplete = _this.props.onChangeComplete;

        _this.setState({
          active: false
        }, function () {
          onChangeComplete && onChangeComplete(e);
        });
        document.removeEventListener('mousemove', _this.handleDrag);
        document.removeEventListener('mouseup', _this.handleEnd);
      };

      _this.handleKeyDown = function (e) {
        e.preventDefault();
        var keyCode = e.keyCode;
        var _this$props = _this.props,
            value = _this$props.value,
            min = _this$props.min,
            max = _this$props.max,
            step = _this$props.step,
            onChange = _this$props.onChange;

        var sliderValue = void 0;

        switch (keyCode) {
          case 38:
          case 39:
            sliderValue = value + step > max ? max : value + step;
            onChange && onChange(sliderValue, e);
            break;
          case 37:
          case 40:
            sliderValue = value - step < min ? min : value - step;
            onChange && onChange(sliderValue, e);
            break;
        }
      };

      _this.getPositionFromValue = function (value) {
        var limit = _this.state.limit;
        var _this$props2 = _this.props,
            min = _this$props2.min,
            max = _this$props2.max;

        var diffMaxMin = max - min;
        var diffValMin = value - min;
        var percentage = diffValMin / diffMaxMin;
        var pos = Math.round(percentage * limit);

        return pos;
      };

      _this.getValueFromPosition = function (pos) {
        var limit = _this.state.limit;
        var _this$props3 = _this.props,
            orientation = _this$props3.orientation,
            min = _this$props3.min,
            max = _this$props3.max,
            step = _this$props3.step;

        var percentage = (0, utils.clamp)(pos, 0, limit) / (limit || 1);
        var baseVal = step * Math.round(percentage * (max - min) / step);
        var value = orientation === 'horizontal' ? baseVal + min : max - baseVal;

        return (0, utils.clamp)(value, min, max);
      };

      _this.position = function (e) {
        var grab = _this.state.grab;
        var _this$props4 = _this.props,
            orientation = _this$props4.orientation,
            reverse = _this$props4.reverse;


        var node = _this.slider;
        var coordinateStyle = constants.orientation[orientation].coordinate;
        var directionStyle = reverse ? constants.orientation[orientation].reverseDirection : constants.orientation[orientation].direction;
        var clientCoordinateStyle = 'client' + (0, utils.capitalize)(coordinateStyle);
        var coordinate = !e.touches ? e[clientCoordinateStyle] : e.touches[0][clientCoordinateStyle];
        var direction = node.getBoundingClientRect()[directionStyle];
        var pos = reverse ? direction - coordinate - grab : coordinate - direction - grab;
        var value = _this.getValueFromPosition(pos);

        return value;
      };

      _this.coordinates = function (pos) {
        var _this$state = _this.state,
            limit = _this$state.limit,
            grab = _this$state.grab;
        var orientation = _this.props.orientation;

        var value = _this.getValueFromPosition(pos);
        var position = _this.getPositionFromValue(value);
        var handlePos = orientation === 'horizontal' ? position + grab : position;
        var fillPos = orientation === 'horizontal' ? handlePos : limit - handlePos;

        return {
          fill: fillPos,
          handle: handlePos,
          label: handlePos
        };
      };

      _this.renderLabels = function (labels) {
        return _react2.default.createElement(
          'ul',
          {
            ref: function ref(sl) {
              _this.labels = sl;
            },
            className: (0, _classnames2.default)('rangeslider__labels')
          },
          labels
        );
      };

      _this.state = {
        active: false,
        limit: 0,
        grab: 0
      };
      return _this;
    }

    _createClass(Slider, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.handleUpdate();
        var resizeObserver = new _resizeObserverPolyfill2.default(this.handleUpdate);
        resizeObserver.observe(this.slider);
      }

      /**
       * Format label/tooltip value
       * @param  {Number} - value
       * @return {Formatted Number}
       */


      /**
       * Update slider state on change
       * @return {void}
       */


      /**
       * Attach event listeners to mousemove/mouseup events
       * @return {void}
       */


      /**
       * Handle drag/mousemove event
       * @param  {Object} e - Event object
       * @return {void}
       */


      /**
       * Detach event listeners to mousemove/mouseup events
       * @return {void}
       */


      /**
       * Support for key events on the slider handle
       * @param  {Object} e - Event object
       * @return {void}
       */


      /**
       * Calculate position of slider based on its value
       * @param  {number} value - Current value of slider
       * @return {position} pos - Calculated position of slider based on value
       */


      /**
       * Translate position of slider to slider value
       * @param  {number} pos - Current position/coordinates of slider
       * @return {number} value - Slider value
       */


      /**
       * Calculate position of slider based on value
       * @param  {Object} e - Event object
       * @return {number} value - Slider value
       */


      /**
       * Grab coordinates of slider
       * @param  {Object} pos - Position object
       * @return {Object} - Slider fill/handle coordinates
       */

    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            value = _props.value,
            orientation = _props.orientation,
            className = _props.className,
            tooltip = _props.tooltip,
            reverse = _props.reverse,
            labels = _props.labels,
            min = _props.min,
            max = _props.max,
            handleLabel = _props.handleLabel;
        var active = this.state.active;

        var dimension = constants.orientation[orientation].dimension;
        var direction = reverse ? constants.orientation[orientation].reverseDirection : constants.orientation[orientation].direction;
        var position = this.getPositionFromValue(value);
        var coords = this.coordinates(position);
        var fillStyle = _defineProperty({}, dimension, coords.fill + 'px');
        var handleStyle = _defineProperty({}, direction, coords.handle + 'px');
        var showTooltip = tooltip && active;

        var labelItems = [];
        var labelKeys = Object.keys(labels);

        if (labelKeys.length > 0) {
          labelKeys = labelKeys.sort(function (a, b) {
            return reverse ? a - b : b - a;
          });

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = labelKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var key = _step.value;

              var labelPosition = this.getPositionFromValue(key);
              var labelCoords = this.coordinates(labelPosition);
              var labelStyle = _defineProperty({}, direction, labelCoords.label + 'px');

              labelItems.push(_react2.default.createElement(
                'li',
                {
                  key: key,
                  className: (0, _classnames2.default)('rangeslider__label-item'),
                  'data-value': key,
                  onMouseDown: this.handleDrag,
                  onTouchStart: this.handleStart,
                  onTouchEnd: this.handleEnd,
                  style: labelStyle
                },
                this.props.labels[key]
              ));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        return _react2.default.createElement(
          'div',
          {
            ref: function ref(s) {
              _this2.slider = s;
            },
            className: (0, _classnames2.default)('rangeslider', 'rangeslider-' + orientation, { 'rangeslider-reverse': reverse }, className),
            onMouseDown: this.handleDrag,
            onMouseUp: this.handleEnd,
            onTouchStart: this.handleStart,
            onTouchEnd: this.handleEnd,
            'aria-valuemin': min,
            'aria-valuemax': max,
            'aria-valuenow': value,
            'aria-orientation': orientation
          },
          _react2.default.createElement('div', { className: 'rangeslider__fill', style: fillStyle }),
          _react2.default.createElement(
            'div',
            {
              ref: function ref(sh) {
                _this2.handle = sh;
              },
              className: 'rangeslider__handle',
              onMouseDown: this.handleStart,
              onTouchMove: this.handleDrag,
              onTouchEnd: this.handleEnd,
              onKeyDown: this.handleKeyDown,
              style: handleStyle,
              tabIndex: 0
            },
            showTooltip ? _react2.default.createElement(
              'div',
              {
                ref: function ref(st) {
                  _this2.tooltip = st;
                },
                className: 'rangeslider__handle-tooltip'
              },
              _react2.default.createElement(
                'span',
                null,
                this.handleFormat(value)
              )
            ) : null,
            _react2.default.createElement(
              'div',
              { className: 'rangeslider__handle-label' },
              handleLabel
            )
          ),
          labels ? this.renderLabels(labelItems) : null
        );
      }
    }]);

    return Slider;
  }(React__default.Component);

  Slider.propTypes = {
    min: _propTypes2.default.number,
    max: _propTypes2.default.number,
    step: _propTypes2.default.number,
    value: _propTypes2.default.number,
    orientation: _propTypes2.default.string,
    tooltip: _propTypes2.default.bool,
    reverse: _propTypes2.default.bool,
    labels: _propTypes2.default.object,
    handleLabel: _propTypes2.default.string,
    format: _propTypes2.default.func,
    onChangeStart: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onChangeComplete: _propTypes2.default.func
  };
  Slider.defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    value: 0,
    orientation: 'horizontal',
    tooltip: true,
    reverse: false,
    labels: {},
    handleLabel: ''
  };
  exports.default = Slider;
  });

  unwrapExports(Rangeslider);

  var lib = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _Rangeslider2 = _interopRequireDefault(Rangeslider);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _Rangeslider2.default;
  });

  var Slider = unwrapExports(lib);

  var RangeSliderWithLabel = function RangeSliderWithLabel(props) {
    var disabledClass = props.disabled ? 'disabled' : '';
    var onChangeFunction = props.disabled ? null : props.handleChange;

    return React__default.createElement(
      'div',
      { className: 'range-slider-with-label label-left ' + props.classes + ' ' + disabledClass },
      React__default.createElement(
        'label',
        { htmlFor: props.name },
        props.label
      ),
      React__default.createElement(Slider, {
        value: props.value,
        name: props.name,
        min: props.min,
        max: props.max,
        step: props.step,
        onChange: onChangeFunction
      })
    );
  };

  var SelectWithLabel = function SelectWithLabel(props) {
    return React__default.createElement(
      'div',
      { className: '' + props.classes },
      React__default.createElement(
        'label',
        { htmlFor: props.name },
        props.label + ' ' + (props.required ? '*' : '')
      ),
      React__default.createElement(Select$1, {
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
      props.errorMessage && React__default.createElement(
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
        return React__default.createElement(
          "div",
          { className: "switch-container" },
          React__default.createElement(
            "span",
            { onClick: this.handleClickLabel(false) },
            this.props.labelLeft
          ),
          React__default.createElement(
            "label",
            null,
            React__default.createElement("input", {
              checked: this.state.checked,
              onChange: this.handleChange,
              className: "switch",
              type: "checkbox"
            }),
            React__default.createElement(
              "div",
              { className: "switch-background" },
              React__default.createElement("div", { className: "switch-button" })
            )
          ),
          React__default.createElement(
            "span",
            { onClick: this.handleClickLabel(true) },
            this.props.labelRight
          )
        );
      }
    }]);
    return SwitchWithLabels;
  }(React.Component);

  var TextareaWithLabel = function TextareaWithLabel(props) {
    var onChange = function onChange(e) {
      props.handleChange(defineProperty({}, props.name, e.currentTarget.value));
    };

    return React__default.createElement(
      'div',
      { className: 'input-with-label form-group ' + props.classes },
      React__default.createElement(
        'label',
        { htmlFor: props.name },
        props.label + ' ' + (props.required ? '*' : '')
      ),
      React__default.createElement('textarea', {
        className: 'form-control',
        type: props.type || 'text',
        name: props.name,
        id: props.id,
        onChange: onChange,
        value: props.value,
        placeholder: props.placeholder
      }),
      props.errorMessage && React__default.createElement(
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

    return React__default.createElement(
      'div',
      { className: 'input-with-label form-group ' + props.classes },
      React__default.createElement(
        'label',
        { htmlFor: props.name },
        props.label + ' ' + (props.required ? '*' : '')
      ),
      React__default.createElement(TimePicker, {
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
      props.errorMessage && React__default.createElement(
        'div',
        { className: 'error-message minicaps' },
        props.errorMessage
      )
    );
  };

  var timezones = ["Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Asmara", "Africa/Asmera", "Africa/Bamako", "Africa/Bangui", "Africa/Banjul", "Africa/Bissau", "Africa/Blantyre", "Africa/Brazzaville", "Africa/Bujumbura", "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta", "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Douala", "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Kigali", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi", "Africa/Ndjamena", "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo", "Africa/Sao_Tome", "Africa/Timbuktu", "Africa/Tripoli", "Africa/Tunis", "Africa/Windhoek", "America/Adak", "America/Anchorage", "America/Anguilla", "America/Antigua", "America/Araguaina", "America/Argentina/Buenos_Aires", "America/Argentina/Catamarca", "America/Argentina/ComodRivadavia", "America/Argentina/Cordoba", "America/Argentina/Jujuy", "America/Argentina/La_Rioja", "America/Argentina/Mendoza", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Aruba", "America/Asuncion", "America/Atikokan", "America/Atka", "America/Bahia_Banderas", "America/Bahia", "America/Barbados", "America/Belem", "America/Belize", "America/Blanc-Sablon", "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Buenos_Aires", "America/Cambridge_Bay", "America/Campo_Grande", "America/Cancun", "America/Caracas", "America/Catamarca", "America/Cayenne", "America/Cayman", "America/Chicago", "America/Chihuahua", "America/Coral_Harbour", "America/Cordoba", "America/Costa_Rica", "America/Creston", "America/Cuiaba", "America/Curacao", "America/Danmarkshavn", "America/Dawson_Creek", "America/Dawson", "America/Denver", "America/Detroit", "America/Dominica", "America/Edmonton", "America/Eirunepe", "America/El_Salvador", "America/Ensenada", "America/Fort_Nelson", "America/Fort_Wayne", "America/Fortaleza", "America/Glace_Bay", "America/Godthab", "America/Goose_Bay", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guatemala", "America/Guayaquil", "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo", "America/Indiana/Indianapolis", "America/Indiana/Knox", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Indianapolis", "America/Inuvik", "America/Iqaluit", "America/Jamaica", "America/Jujuy", "America/Juneau", "America/Kentucky/Louisville", "America/Kentucky/Monticello", "America/Knox_IN", "America/Kralendijk", "America/La_Paz", "America/Lima", "America/Los_Angeles", "America/Louisville", "America/Lower_Princes", "America/Maceio", "America/Managua", "America/Manaus", "America/Marigot", "America/Martinique", "America/Matamoros", "America/Mazatlan", "America/Mendoza", "America/Menominee", "America/Merida", "America/Metlakatla", "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey", "America/Montevideo", "America/Montreal", "America/Montserrat", "America/Nassau", "America/New_York", "America/Nipigon", "America/Nome", "America/Noronha", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Ojinaga", "America/Panama", "America/Pangnirtung", "America/Paramaribo", "America/Phoenix", "America/Port_of_Spain", "America/Port-au-Prince", "America/Porto_Acre", "America/Porto_Velho", "America/Puerto_Rico", "America/Punta_Arenas", "America/Rainy_River", "America/Rankin_Inlet", "America/Recife", "America/Regina", "America/Resolute", "America/Rio_Branco", "America/Rosario", "America/Santa_Isabel", "America/Santarem", "America/Santiago", "America/Santo_Domingo", "America/Sao_Paulo", "America/Scoresbysund", "America/Shiprock", "America/Sitka", "America/St_Barthelemy", "America/St_Johns", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Swift_Current", "America/Tegucigalpa", "America/Thule", "America/Thunder_Bay", "America/Tijuana", "America/Toronto", "America/Tortola", "America/Vancouver", "America/Virgin", "America/Whitehorse", "America/Winnipeg", "America/Yakutat", "America/Yellowknife", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Macquarie", "Antarctica/Mawson", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/South_Pole", "Antarctica/Syowa", "Antarctica/Troll", "Antarctica/Vostok", "Arctic/Longyearbyen", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Ashkhabad", "Asia/Atyrau", "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok", "Asia/Barnaul", "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei", "Asia/Calcutta", "Asia/Chita", "Asia/Choibalsan", "Asia/Chongqing", "Asia/Chungking", "Asia/Colombo", "Asia/Dacca", "Asia/Damascus", "Asia/Dhaka", "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Famagusta", "Asia/Gaza", "Asia/Harbin", "Asia/Hebron", "Asia/Ho_Chi_Minh", "Asia/Hong_Kong", "Asia/Hovd", "Asia/Irkutsk", "Asia/Istanbul", "Asia/Jakarta", "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul", "Asia/Kamchatka", "Asia/Karachi", "Asia/Kashgar", "Asia/Kathmandu", "Asia/Katmandu", "Asia/Khandyga", "Asia/Kolkata", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Kuwait", "Asia/Macao", "Asia/Macau", "Asia/Magadan", "Asia/Makassar", "Asia/Manila", "Asia/Muscat", "Asia/Nicosia", "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar", "Asia/Qyzylorda", "Asia/Rangoon", "Asia/Riyadh", "Asia/Saigon", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Srednekolymsk", "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran", "Asia/Tel_Aviv", "Asia/Thimbu", "Asia/Thimphu", "Asia/Tokyo", "Asia/Tomsk", "Asia/Ujung_Pandang", "Asia/Ulaanbaatar", "Asia/Ulan_Bator", "Asia/Urumqi", "Asia/Ust-Nera", "Asia/Vientiane", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yangon", "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda", "Atlantic/Canary", "Atlantic/Cape_Verde", "Atlantic/Faeroe", "Atlantic/Faroe", "Atlantic/Jan_Mayen", "Atlantic/Madeira", "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley", "Australia/ACT", "Australia/Adelaide", "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Canberra", "Australia/Currie", "Australia/Darwin", "Australia/Eucla", "Australia/Hobart", "Australia/LHI", "Australia/Lindeman", "Australia/Lord_Howe", "Australia/Melbourne", "Australia/North", "Australia/NSW", "Australia/Perth", "Australia/Queensland", "Australia/South", "Australia/Sydney", "Australia/Tasmania", "Australia/Victoria", "Australia/West", "Australia/Yancowinna", "Brazil/Acre", "Brazil/DeNoronha", "Brazil/East", "Brazil/West", "Canada/Atlantic", "Canada/Central", "Canada/Eastern", "Canada/Mountain", "Canada/Newfoundland", "Canada/Pacific", "Canada/Saskatchewan", "Canada/Yukon", "CET", "Chile/Continental", "Chile/EasterIsland", "CST6CDT", "Cuba", "EET", "Egypt", "Eire", "EST", "EST5EDT", "Etc/GMT-0", "Etc/GMT-1", "Etc/GMT-10", "Etc/GMT-11", "Etc/GMT-12", "Etc/GMT-13", "Etc/GMT-14", "Etc/GMT-2", "Etc/GMT-3", "Etc/GMT-4", "Etc/GMT-5", "Etc/GMT-6", "Etc/GMT-7", "Etc/GMT-8", "Etc/GMT-9", "Etc/GMT", "Etc/GMT+0", "Etc/GMT+1", "Etc/GMT+10", "Etc/GMT+11", "Etc/GMT+12", "Etc/GMT+2", "Etc/GMT+3", "Etc/GMT+4", "Etc/GMT+5", "Etc/GMT+6", "Etc/GMT+7", "Etc/GMT+8", "Etc/GMT+9", "Etc/GMT0", "Etc/Greenwich", "Etc/UCT", "Etc/Universal", "Etc/UTC", "Etc/Zulu", "Europe/Amsterdam", "Europe/Andorra", "Europe/Astrakhan", "Europe/Athens", "Europe/Belfast", "Europe/Belgrade", "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest", "Europe/Budapest", "Europe/Busingen", "Europe/Chisinau", "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki", "Europe/Isle_of_Man", "Europe/Istanbul", "Europe/Jersey", "Europe/Kaliningrad", "Europe/Kiev", "Europe/Kirov", "Europe/Lisbon", "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Mariehamn", "Europe/Minsk", "Europe/Monaco", "Europe/Moscow", "Europe/Nicosia", "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague", "Europe/Riga", "Europe/Rome", "Europe/Samara", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Saratov", "Europe/Simferopol", "Europe/Skopje", "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane", "Europe/Tiraspol", "Europe/Ulyanovsk", "Europe/Uzhgorod", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Vilnius", "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb", "Europe/Zaporozhye", "Europe/Zurich", "GB-Eire", "GB", "GMT-0", "GMT", "GMT+0", "GMT0", "Greenwich", "Hongkong", "HST", "Iceland", "Indian/Antananarivo", "Indian/Chagos", "Indian/Christmas", "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe", "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion", "Iran", "Israel", "Jamaica", "Japan", "Kwajalein", "Libya", "MET", "Mexico/BajaNorte", "Mexico/BajaSur", "Mexico/General", "MST", "MST7MDT", "Navajo", "NZ-CHAT", "NZ", "Pacific/Apia", "Pacific/Auckland", "Pacific/Bougainville", "Pacific/Chatham", "Pacific/Chuuk", "Pacific/Easter", "Pacific/Efate", "Pacific/Enderbury", "Pacific/Fakaofo", "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Galapagos", "Pacific/Gambier", "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Honolulu", "Pacific/Johnston", "Pacific/Kiritimati", "Pacific/Kosrae", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Marquesas", "Pacific/Midway", "Pacific/Nauru", "Pacific/Niue", "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau", "Pacific/Pitcairn", "Pacific/Pohnpei", "Pacific/Ponape", "Pacific/Port_Moresby", "Pacific/Rarotonga", "Pacific/Saipan", "Pacific/Samoa", "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu", "Pacific/Truk", "Pacific/Wake", "Pacific/Wallis", "Pacific/Yap", "Poland", "Portugal", "PRC", "PST8PDT", "ROC", "ROK", "Singapore", "Turkey", "UCT", "Universal", "US/Alaska", "US/Aleutian", "US/Arizona", "US/Central", "US/East-Indiana", "US/Eastern", "US/Hawaii", "US/Indiana-Starke", "US/Michigan", "US/Mountain", "US/Pacific-New", "US/Pacific", "US/Samoa", "UTC", "W-SU", "WET", "Zulu"];

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

        var timezoneOptions = timezones.map(function (tz) {
          return { value: tz, label: tz };
        });

        return React__default.createElement(
          'div',
          null,
          React__default.createElement(Select$1, (_React$createElement = {
            name: this.props.name,
            className: 'form-group input-with-label',
            value: this.state.value,
            onChange: this.onChange,
            options: timezoneOptions
          }, defineProperty(_React$createElement, 'name', 'timezone'), defineProperty(_React$createElement, 'id', 'id_timezone'), _React$createElement)),
          this.props.errorMessage && React__default.createElement(
            'div',
            { className: 'error-message minicaps' },
            this.props.errorMessage
          )
        );
      }
    }]);
    return TimeZoneSelect;
  }(React.Component);

  exports.CitySelect = CitySelect;
  exports.CheckboxWithLabel = CheckboxWithLabel;
  exports.DatePickerWithLabel = DatePickerWithLabel;
  exports.ImageUploader = ImageUploader;
  exports.InputWithLabel = InputWithLabel;
  exports.NumberWithLabel = NumberWithLabel;
  exports.PlaceSelect = PlaceSelect;
  exports.RangeSliderWithLabel = RangeSliderWithLabel;
  exports.SelectWithLabel = SelectWithLabel;
  exports.SwitchWithLabels = SwitchWithLabels;
  exports.TextareaWithLabel = TextareaWithLabel;
  exports.TimePickerWithLabel = TimePickerWithLabel;
  exports.TimeZoneSelect = TimeZoneSelect;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
