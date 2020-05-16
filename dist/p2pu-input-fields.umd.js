(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('react-dom'), require('jsonp'), require('moment'), require('axios'), require('rc-time-picker')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'react-dom', 'jsonp', 'moment', 'axios', 'rc-time-picker'], factory) :
  (factory((global.p2puInputFields = {}),global.React,global.PropTypes,global.ReactDOM,global.jsonp,global.moment,global.axios,global['rc-time-picker']));
}(this, (function (exports,React,PropTypes,reactDom,jsonp,moment,axios,TimePicker) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  var reactDom__default = 'default' in reactDom ? reactDom['default'] : reactDom;
  jsonp = jsonp && jsonp.hasOwnProperty('default') ? jsonp['default'] : jsonp;
  moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;
  axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;
  TimePicker = TimePicker && TimePicker.hasOwnProperty('default') ? TimePicker['default'] : TimePicker;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
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
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var CheckboxWithLabel = function CheckboxWithLabel(props) {
    var onChange = function onChange(e) {
      props.handleChange(_defineProperty({}, props.name, e.currentTarget.checked));
    };

    return React__default.createElement("div", {
      className: "checkbox-with-label label-right ".concat(props.classes)
    }, React__default.createElement("input", {
      type: "checkbox",
      name: props.name,
      id: props.id || props.name,
      onChange: onChange,
      checked: props.checked,
      style: {
        marginRight: '10px'
      }
    }), React__default.createElement("label", {
      htmlFor: props.name
    }, props.label), props.errorMessage && React__default.createElement("div", {
      className: 'error-message minicaps'
    }, props.errorMessage));
  };

  function areInputsEqual(newInputs, lastInputs) {
      if (newInputs.length !== lastInputs.length) {
          return false;
      }
      for (var i = 0; i < newInputs.length; i++) {
          if (newInputs[i] !== lastInputs[i]) {
              return false;
          }
      }
      return true;
  }

  function memoizeOne(resultFn, isEqual) {
      if (isEqual === void 0) { isEqual = areInputsEqual; }
      var lastThis;
      var lastArgs = [];
      var lastResult;
      var calledOnce = false;
      function memoized() {
          var newArgs = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              newArgs[_i] = arguments[_i];
          }
          if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
              return lastResult;
          }
          lastResult = resultFn.apply(this, newArgs);
          calledOnce = true;
          lastThis = this;
          lastArgs = newArgs;
          return lastResult;
      }
      return memoized;
  }

  function _inheritsLoose$1(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var inheritsLoose = _inheritsLoose$1;

  /*

  Based off glamor's StyleSheet, thanks Sunil ❤️

  high performance StyleSheet for css-in-js systems

  - uses multiple style tags behind the scenes for millions of rules
  - uses `insertRule` for appending in production for *much* faster performance

  // usage

  import { StyleSheet } from '@emotion/sheet'

  let styleSheet = new StyleSheet({ key: '', container: document.head })

  styleSheet.insert('#box { border: 1px solid red; }')
  - appends a css rule into the stylesheet

  styleSheet.flush()
  - empties the stylesheet of all its contents

  */
  // $FlowFixMe
  function sheetForTag(tag) {
    if (tag.sheet) {
      // $FlowFixMe
      return tag.sheet;
    } // this weirdness brought to you by firefox

    /* istanbul ignore next */


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        // $FlowFixMe
        return document.styleSheets[i];
      }
    }
  }

  function createStyleElement(options) {
    var tag = document.createElement('style');
    tag.setAttribute('data-emotion', options.key);

    if (options.nonce !== undefined) {
      tag.setAttribute('nonce', options.nonce);
    }

    tag.appendChild(document.createTextNode(''));
    return tag;
  }

  var StyleSheet =
  /*#__PURE__*/
  function () {
    function StyleSheet(options) {
      this.isSpeedy = options.speedy === undefined ? undefined === 'production' : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

      this.key = options.key;
      this.container = options.container;
      this.before = null;
    }

    var _proto = StyleSheet.prototype;

    _proto.insert = function insert(rule) {
      // the max length is how many rules we have per style tag, it's 65000 in speedy mode
      // it's 1 in dev because we insert source maps that map a single rule to a location
      // and you can only have one source map per style tag
      if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
        var _tag = createStyleElement(this);

        var before;

        if (this.tags.length === 0) {
          before = this.before;
        } else {
          before = this.tags[this.tags.length - 1].nextSibling;
        }

        this.container.insertBefore(_tag, before);
        this.tags.push(_tag);
      }

      var tag = this.tags[this.tags.length - 1];

      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);

        try {
          // this is a really hot path
          // we check the second character first because having "i"
          // as the second character will happen less often than
          // having "@" as the first character
          var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
          // the big drawback is that the css won't be editable in devtools

          sheet.insertRule(rule, // we need to insert @import rules before anything else
          // otherwise there will be an error
          // technically this means that the @import rules will
          // _usually_(not always since there could be multiple style tags)
          // be the first ones in prod and generally later in dev
          // this shouldn't really matter in the real world though
          // @import is generally only used for font faces from google fonts and etc.
          // so while this could be technically correct then it would be slower and larger
          // for a tiny bit of correctness that won't matter in the real world
          isImportRule ? 0 : sheet.cssRules.length);
        } catch (e) {
          if (undefined !== 'production') {
            console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
          }
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }

      this.ctr++;
    };

    _proto.flush = function flush() {
      // $FlowFixMe
      this.tags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
    };

    return StyleSheet;
  }();

  function stylis_min (W) {
    function M(d, c, e, h, a) {
      for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
        g = e.charCodeAt(l);
        l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

        if (0 === b + n + v + m) {
          if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
            switch (g) {
              case 32:
              case 9:
              case 59:
              case 13:
              case 10:
                break;

              default:
                f += e.charAt(l);
            }

            g = 59;
          }

          switch (g) {
            case 123:
              f = f.trim();
              q = f.charCodeAt(0);
              k = 1;

              for (t = ++l; l < B;) {
                switch (g = e.charCodeAt(l)) {
                  case 123:
                    k++;
                    break;

                  case 125:
                    k--;
                    break;

                  case 47:
                    switch (g = e.charCodeAt(l + 1)) {
                      case 42:
                      case 47:
                        a: {
                          for (u = l + 1; u < J; ++u) {
                            switch (e.charCodeAt(u)) {
                              case 47:
                                if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                  l = u + 1;
                                  break a;
                                }

                                break;

                              case 10:
                                if (47 === g) {
                                  l = u + 1;
                                  break a;
                                }

                            }
                          }

                          l = u;
                        }

                    }

                    break;

                  case 91:
                    g++;

                  case 40:
                    g++;

                  case 34:
                  case 39:
                    for (; l++ < J && e.charCodeAt(l) !== g;) {
                    }

                }

                if (0 === k) break;
                l++;
              }

              k = e.substring(t, l);
              0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

              switch (q) {
                case 64:
                  0 < r && (f = f.replace(N, ''));
                  g = f.charCodeAt(1);

                  switch (g) {
                    case 100:
                    case 109:
                    case 115:
                    case 45:
                      r = c;
                      break;

                    default:
                      r = O;
                  }

                  k = M(c, r, k, g, a + 1);
                  t = k.length;
                  0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                  if (0 < t) switch (g) {
                    case 115:
                      f = f.replace(da, ea);

                    case 100:
                    case 109:
                    case 45:
                      k = f + '{' + k + '}';
                      break;

                    case 107:
                      f = f.replace(fa, '$1 $2');
                      k = f + '{' + k + '}';
                      k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                      break;

                    default:
                      k = f + k, 112 === h && (k = (p += k, ''));
                  } else k = '';
                  break;

                default:
                  k = M(c, X(c, f, I), k, h, a + 1);
              }

              F += k;
              k = I = r = u = q = 0;
              f = '';
              g = e.charCodeAt(++l);
              break;

            case 125:
            case 59:
              f = (0 < r ? f.replace(N, '') : f).trim();
              if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
                case 0:
                  break;

                case 64:
                  if (105 === g || 99 === g) {
                    G += f + e.charAt(l);
                    break;
                  }

                default:
                  58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
              }
              I = r = u = q = 0;
              f = '';
              g = e.charCodeAt(++l);
          }
        }

        switch (g) {
          case 13:
          case 10:
            47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
            0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
            z = 1;
            D++;
            break;

          case 59:
          case 125:
            if (0 === b + n + v + m) {
              z++;
              break;
            }

          default:
            z++;
            y = e.charAt(l);

            switch (g) {
              case 9:
              case 32:
                if (0 === n + m + b) switch (x) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y = '';
                    break;

                  default:
                    32 !== g && (y = ' ');
                }
                break;

              case 0:
                y = '\\0';
                break;

              case 12:
                y = '\\f';
                break;

              case 11:
                y = '\\v';
                break;

              case 38:
                0 === n + b + m && (r = I = 1, y = '\f' + y);
                break;

              case 108:
                if (0 === n + b + m + E && 0 < u) switch (l - u) {
                  case 2:
                    112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                  case 8:
                    111 === K && (E = K);
                }
                break;

              case 58:
                0 === n + b + m && (u = l);
                break;

              case 44:
                0 === b + v + n + m && (r = 1, y += '\r');
                break;

              case 34:
              case 39:
                0 === b && (n = n === g ? 0 : 0 === n ? g : n);
                break;

              case 91:
                0 === n + b + v && m++;
                break;

              case 93:
                0 === n + b + v && m--;
                break;

              case 41:
                0 === n + b + m && v--;
                break;

              case 40:
                if (0 === n + b + m) {
                  if (0 === q) switch (2 * x + 3 * K) {
                    case 533:
                      break;

                    default:
                      q = 1;
                  }
                  v++;
                }

                break;

              case 64:
                0 === b + v + n + m + u + k && (k = 1);
                break;

              case 42:
              case 47:
                if (!(0 < n + m + v)) switch (b) {
                  case 0:
                    switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                      case 235:
                        b = 47;
                        break;

                      case 220:
                        t = l, b = 42;
                    }

                    break;

                  case 42:
                    47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
                }
            }

            0 === b && (f += y);
        }

        K = x;
        x = g;
        l++;
      }

      t = p.length;

      if (0 < t) {
        r = c;
        if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
        p = r.join(',') + '{' + p + '}';

        if (0 !== w * E) {
          2 !== w || L(p, 2) || (E = 0);

          switch (E) {
            case 111:
              p = p.replace(ha, ':-moz-$1') + p;
              break;

            case 112:
              p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
          }

          E = 0;
        }
      }

      return G + p + F;
    }

    function X(d, c, e) {
      var h = c.trim().split(ia);
      c = h;
      var a = h.length,
          m = d.length;

      switch (m) {
        case 0:
        case 1:
          var b = 0;

          for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
            c[b] = Z(d, c[b], e).trim();
          }

          break;

        default:
          var v = b = 0;

          for (c = []; b < a; ++b) {
            for (var n = 0; n < m; ++n) {
              c[v++] = Z(d[n] + ' ', h[b], e).trim();
            }
          }

      }

      return c;
    }

    function Z(d, c, e) {
      var h = c.charCodeAt(0);
      33 > h && (h = (c = c.trim()).charCodeAt(0));

      switch (h) {
        case 38:
          return c.replace(F, '$1' + d.trim());

        case 58:
          return d.trim() + c.replace(F, '$1' + d.trim());

        default:
          if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
      }

      return d + c;
    }

    function P(d, c, e, h) {
      var a = d + ';',
          m = 2 * c + 3 * e + 4 * h;

      if (944 === m) {
        d = a.indexOf(':', 9) + 1;
        var b = a.substring(d, a.length - 1).trim();
        b = a.substring(0, d).trim() + b + ';';
        return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
      }

      if (0 === w || 2 === w && !L(a, 1)) return a;

      switch (m) {
        case 1015:
          return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

        case 951:
          return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

        case 963:
          return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

        case 1009:
          if (100 !== a.charCodeAt(4)) break;

        case 969:
        case 942:
          return '-webkit-' + a + a;

        case 978:
          return '-webkit-' + a + '-moz-' + a + a;

        case 1019:
        case 983:
          return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

        case 883:
          if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
          if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
          break;

        case 932:
          if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
            case 103:
              return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

            case 115:
              return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

            case 98:
              return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
          }
          return '-webkit-' + a + '-ms-' + a + a;

        case 964:
          return '-webkit-' + a + '-ms-flex-' + a + a;

        case 1023:
          if (99 !== a.charCodeAt(8)) break;
          b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
          return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

        case 1005:
          return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

        case 1e3:
          b = a.substring(13).trim();
          c = b.indexOf('-') + 1;

          switch (b.charCodeAt(0) + b.charCodeAt(c)) {
            case 226:
              b = a.replace(G, 'tb');
              break;

            case 232:
              b = a.replace(G, 'tb-rl');
              break;

            case 220:
              b = a.replace(G, 'lr');
              break;

            default:
              return a;
          }

          return '-webkit-' + a + '-ms-' + b + a;

        case 1017:
          if (-1 === a.indexOf('sticky', 9)) break;

        case 975:
          c = (a = d).length - 10;
          b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

          switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
            case 203:
              if (111 > b.charCodeAt(8)) break;

            case 115:
              a = a.replace(b, '-webkit-' + b) + ';' + a;
              break;

            case 207:
            case 102:
              a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
          }

          return a + ';';

        case 938:
          if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
            case 105:
              return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

            case 115:
              return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

            default:
              return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
          }
          break;

        case 973:
        case 989:
          if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

        case 931:
        case 953:
          if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
          break;

        case 962:
          if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
      }

      return a;
    }

    function L(d, c) {
      var e = d.indexOf(1 === c ? ':' : '{'),
          h = d.substring(0, 3 !== c ? e : 10);
      e = d.substring(e + 1, d.length - 1);
      return R(2 !== c ? h : h.replace(na, '$1'), e, c);
    }

    function ea(d, c) {
      var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
      return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
    }

    function H(d, c, e, h, a, m, b, v, n, q) {
      for (var g = 0, x = c, w; g < A; ++g) {
        switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
          case void 0:
          case !1:
          case !0:
          case null:
            break;

          default:
            x = w;
        }
      }

      if (x !== c) return x;
    }

    function T(d) {
      switch (d) {
        case void 0:
        case null:
          A = S.length = 0;
          break;

        default:
          if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
            T(d[c]);
          } else Y = !!d | 0;
      }

      return T;
    }

    function U(d) {
      d = d.prefix;
      void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
      return U;
    }

    function B(d, c) {
      var e = d;
      33 > e.charCodeAt(0) && (e = e.trim());
      V = e;
      e = [V];

      if (0 < A) {
        var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
        void 0 !== h && 'string' === typeof h && (c = h);
      }

      var a = M(O, e, c, 0, 0);
      0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
      V = '';
      E = 0;
      z = D = 1;
      return a;
    }

    var ca = /^\0+/g,
        N = /[\0\r\f]/g,
        aa = /: */g,
        ka = /zoo|gra/,
        ma = /([,: ])(transform)/g,
        ia = /,\r+?/g,
        F = /([\t\r\n ])*\f?&/g,
        fa = /@(k\w+)\s*(\S*)\s*/,
        Q = /::(place)/g,
        ha = /:(read-only)/g,
        G = /[svh]\w+-[tblr]{2}/,
        da = /\(\s*(.*)\s*\)/g,
        oa = /([\s\S]*?);/g,
        ba = /-self|flex-/g,
        na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
        la = /stretch|:\s*\w+\-(?:conte|avail)/,
        ja = /([^-])(image-set\()/,
        z = 1,
        D = 1,
        E = 0,
        w = 1,
        O = [],
        S = [],
        A = 0,
        R = null,
        Y = 0,
        V = '';
    B.use = T;
    B.set = U;
    void 0 !== W && U(W);
    return B;
  }

  var weakMemoize = function weakMemoize(func) {
    // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
    var cache = new WeakMap();
    return function (arg) {
      if (cache.has(arg)) {
        // $FlowFixMe
        return cache.get(arg);
      }

      var ret = func(arg);
      cache.set(arg, ret);
      return ret;
    };
  };

  // https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
  // inlined to avoid umd wrapper and peerDep warnings/installing stylis
  // since we use stylis after closure compiler
  var delimiter = '/*|*/';
  var needle = delimiter + '}';

  function toSheet(block) {
    if (block) {
      Sheet.current.insert(block + '}');
    }
  }

  var Sheet = {
    current: null
  };
  var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
    switch (context) {
      // property
      case 1:
        {
          switch (content.charCodeAt(0)) {
            case 64:
              {
                // @import
                Sheet.current.insert(content + ';');
                return '';
              }
            // charcode for l

            case 108:
              {
                // charcode for b
                // this ignores label
                if (content.charCodeAt(2) === 98) {
                  return '';
                }
              }
          }

          break;
        }
      // selector

      case 2:
        {
          if (ns === 0) return content + delimiter;
          break;
        }
      // at-rule

      case 3:
        {
          switch (ns) {
            // @font-face, @page
            case 102:
            case 112:
              {
                Sheet.current.insert(selectors[0] + content);
                return '';
              }

            default:
              {
                return content + (at === 0 ? delimiter : '');
              }
          }
        }

      case -2:
        {
          content.split(needle).forEach(toSheet);
        }
    }
  };
  var removeLabel = function removeLabel(context, content) {
    if (context === 1 && // charcode for l
    content.charCodeAt(0) === 108 && // charcode for b
    content.charCodeAt(2) === 98 // this ignores label
    ) {
        return '';
      }
  };

  var isBrowser = typeof document !== 'undefined';
  var rootServerStylisCache = {};
  var getServerStylisCache = isBrowser ? undefined : weakMemoize(function () {
    var getCache = weakMemoize(function () {
      return {};
    });
    var prefixTrueCache = {};
    var prefixFalseCache = {};
    return function (prefix) {
      if (prefix === undefined || prefix === true) {
        return prefixTrueCache;
      }

      if (prefix === false) {
        return prefixFalseCache;
      }

      return getCache(prefix);
    };
  });

  var createCache = function createCache(options) {
    if (options === undefined) options = {};
    var key = options.key || 'css';
    var stylisOptions;

    if (options.prefix !== undefined) {
      stylisOptions = {
        prefix: options.prefix
      };
    }

    var stylis = new stylis_min(stylisOptions);

    if (undefined !== 'production') {
      // $FlowFixMe
      if (/[^a-z-]/.test(key)) {
        throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
      }
    }

    var inserted = {}; // $FlowFixMe

    var container;

    if (isBrowser) {
      container = options.container || document.head;
      var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
      Array.prototype.forEach.call(nodes, function (node) {
        var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

        attrib.split(' ').forEach(function (id) {
          inserted[id] = true;
        });

        if (node.parentNode !== container) {
          container.appendChild(node);
        }
      });
    }

    var _insert;

    if (isBrowser) {
      stylis.use(options.stylisPlugins)(ruleSheet);

      _insert = function insert(selector, serialized, sheet, shouldCache) {
        var name = serialized.name;
        Sheet.current = sheet;

        if (undefined !== 'production' && serialized.map !== undefined) {
          var map = serialized.map;
          Sheet.current = {
            insert: function insert(rule) {
              sheet.insert(rule + map);
            }
          };
        }

        stylis(selector, serialized.styles);

        if (shouldCache) {
          cache.inserted[name] = true;
        }
      };
    } else {
      stylis.use(removeLabel);
      var serverStylisCache = rootServerStylisCache;

      if (options.stylisPlugins || options.prefix !== undefined) {
        stylis.use(options.stylisPlugins); // $FlowFixMe

        serverStylisCache = getServerStylisCache(options.stylisPlugins || rootServerStylisCache)(options.prefix);
      }

      var getRules = function getRules(selector, serialized) {
        var name = serialized.name;

        if (serverStylisCache[name] === undefined) {
          serverStylisCache[name] = stylis(selector, serialized.styles);
        }

        return serverStylisCache[name];
      };

      _insert = function _insert(selector, serialized, sheet, shouldCache) {
        var name = serialized.name;
        var rules = getRules(selector, serialized);

        if (cache.compat === undefined) {
          // in regular mode, we don't set the styles on the inserted cache
          // since we don't need to and that would be wasting memory
          // we return them so that they are rendered in a style tag
          if (shouldCache) {
            cache.inserted[name] = true;
          }

          if ( // using === development instead of !== production
          // because if people do ssr in tests, the source maps showing up would be annoying
          undefined === 'development' && serialized.map !== undefined) {
            return rules + serialized.map;
          }

          return rules;
        } else {
          // in compat mode, we put the styles on the inserted cache so
          // that emotion-server can pull out the styles
          // except when we don't want to cache it which was in Global but now
          // is nowhere but we don't want to do a major right now
          // and just in case we're going to leave the case here
          // it's also not affecting client side bundle size
          // so it's really not a big deal
          if (shouldCache) {
            cache.inserted[name] = rules;
          } else {
            return rules;
          }
        }
      };
    }

    if (undefined !== 'production') {
      // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
      var commentStart = /\/\*/g;
      var commentEnd = /\*\//g;
      stylis.use(function (context, content) {
        switch (context) {
          case -1:
            {
              while (commentStart.test(content)) {
                commentEnd.lastIndex = commentStart.lastIndex;

                if (commentEnd.test(content)) {
                  commentStart.lastIndex = commentEnd.lastIndex;
                  continue;
                }

                throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
              }

              commentStart.lastIndex = 0;
              break;
            }
        }
      });
      stylis.use(function (context, content, selectors) {
        switch (context) {
          case -1:
            {
              var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
              var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

              if (unsafePseudoClasses && cache.compat !== true) {
                unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                  var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                  var ignore = ignoreRegExp.test(content);

                  if (unsafePseudoClass && !ignore) {
                    console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                  }
                });
              }

              break;
            }
        }
      });
    }

    var cache = {
      key: key,
      sheet: new StyleSheet({
        key: key,
        container: container,
        nonce: options.nonce,
        speedy: options.speedy
      }),
      nonce: options.nonce,
      inserted: inserted,
      registered: {},
      insert: _insert
    };
    return cache;
  };

  var isBrowser$1 = typeof document !== 'undefined';
  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (registered[className] !== undefined) {
        registeredStyles.push(registered[className]);
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var insertStyles = function insertStyles(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;

    if ( // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser$1 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
      cache.registered[className] = serialized.styles;
    }

    if (cache.inserted[serialized.name] === undefined) {
      var stylesForSSR = '';
      var current = serialized;

      do {
        var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

        if (!isBrowser$1 && maybeStyles !== undefined) {
          stylesForSSR += maybeStyles;
        }

        current = current.next;
      } while (current !== undefined);

      if (!isBrowser$1 && stylesForSSR.length !== 0) {
        return stylesForSSR;
      }
    }
  };

  /* eslint-disable */
  // Inspired by https://github.com/garycourt/murmurhash-js
  // Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
  function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash

    var k,
        i = 0,
        len = str.length;

    for (; len >= 4; ++i, len -= 4) {
      k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
      k =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
      k ^=
      /* k >>> r: */
      k >>> 24;
      h =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array


    switch (len) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

      case 2:
        h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

      case 1:
        h ^= str.charCodeAt(i) & 0xff;
        h =
        /* Math.imul(h, m): */
        (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.


    h ^= h >>> 13;
    h =
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }

  var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };

  function memoize(fn) {
    var cache = {};
    return function (arg) {
      if (cache[arg] === undefined) cache[arg] = fn(arg);
      return cache[arg];
    };
  }

  var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
  var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

  var isCustomProperty = function isCustomProperty(property) {
    return property.charCodeAt(1) === 45;
  };

  var isProcessableValue = function isProcessableValue(value) {
    return value != null && typeof value !== 'boolean';
  };

  var processStyleName = memoize(function (styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
  });

  var processStyleValue = function processStyleValue(key, value) {
    switch (key) {
      case 'animation':
      case 'animationName':
        {
          if (typeof value === 'string') {
            return value.replace(animationRegex, function (match, p1, p2) {
              cursor = {
                name: p1,
                styles: p2,
                next: cursor
              };
              return p1;
            });
          }
        }
    }

    if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
      return value + 'px';
    }

    return value;
  };

  if (undefined !== 'production') {
    var contentValuePattern = /(attr|calc|counters?|url)\(/;
    var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
    var oldProcessStyleValue = processStyleValue;
    var msPattern = /^-ms-/;
    var hyphenPattern = /-(.)/g;
    var hyphenatedCache = {};

    processStyleValue = function processStyleValue(key, value) {
      if (key === 'content') {
        if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
          console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
        }
      }

      var processed = oldProcessStyleValue(key, value);

      if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
        hyphenatedCache[key] = true;
        console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
          return _char.toUpperCase();
        }) + "?");
      }

      return processed;
    };
  }

  var shouldWarnAboutInterpolatingClassNameFromCss = true;

  function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
    if (interpolation == null) {
      return '';
    }

    if (interpolation.__emotion_styles !== undefined) {
      if (undefined !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
        throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
      }

      return interpolation;
    }

    switch (typeof interpolation) {
      case 'boolean':
        {
          return '';
        }

      case 'object':
        {
          if (interpolation.anim === 1) {
            cursor = {
              name: interpolation.name,
              styles: interpolation.styles,
              next: cursor
            };
            return interpolation.name;
          }

          if (interpolation.styles !== undefined) {
            var next = interpolation.next;

            if (next !== undefined) {
              // not the most efficient thing ever but this is a pretty rare case
              // and there will be very few iterations of this generally
              while (next !== undefined) {
                cursor = {
                  name: next.name,
                  styles: next.styles,
                  next: cursor
                };
                next = next.next;
              }
            }

            var styles = interpolation.styles + ";";

            if (undefined !== 'production' && interpolation.map !== undefined) {
              styles += interpolation.map;
            }

            return styles;
          }

          return createStringFromObject(mergedProps, registered, interpolation);
        }

      case 'function':
        {
          if (mergedProps !== undefined) {
            var previousCursor = cursor;
            var result = interpolation(mergedProps);
            cursor = previousCursor;
            return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
          } else if (undefined !== 'production') {
            console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
          }

          break;
        }

      case 'string':
        if (undefined !== 'production') {
          var matched = [];
          var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
            var fakeVarName = "animation" + matched.length;
            matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
            return "${" + fakeVarName + "}";
          });

          if (matched.length) {
            console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
          }
        }

        break;
    } // finalize string values (regular strings and functions interpolated into css calls)


    if (registered == null) {
      return interpolation;
    }

    var cached = registered[interpolation];

    if (undefined !== 'production' && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
      console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
      shouldWarnAboutInterpolatingClassNameFromCss = false;
    }

    return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
  }

  function createStringFromObject(mergedProps, registered, obj) {
    var string = '';

    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        string += handleInterpolation(mergedProps, registered, obj[i], false);
      }
    } else {
      for (var _key in obj) {
        var value = obj[_key];

        if (typeof value !== 'object') {
          if (registered != null && registered[value] !== undefined) {
            string += _key + "{" + registered[value] + "}";
          } else if (isProcessableValue(value)) {
            string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
          }
        } else {
          if (_key === 'NO_COMPONENT_SELECTOR' && undefined !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value, false);

            switch (_key) {
              case 'animation':
              case 'animationName':
                {
                  string += processStyleName(_key) + ":" + interpolated + ";";
                  break;
                }

              default:
                {
                  if (undefined !== 'production' && _key === 'undefined') {
                    console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                  }

                  string += _key + "{" + interpolated + "}";
                }
            }
          }
        }
      }
    }

    return string;
  }

  var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
  var sourceMapPattern;

  if (undefined !== 'production') {
    sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
  } // this is the cursor for keyframes
  // keyframes are stored on the SerializedStyles object as a linked list


  var cursor;
  var serializeStyles = function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
      return args[0];
    }

    var stringMode = true;
    var styles = '';
    cursor = undefined;
    var strings = args[0];

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation(mergedProps, registered, strings, false);
    } else {
      if (undefined !== 'production' && strings[0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[0];
    } // we start at 1 since we've already handled the first arg


    for (var i = 1; i < args.length; i++) {
      styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

      if (stringMode) {
        if (undefined !== 'production' && strings[i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }

        styles += strings[i];
      }
    }

    var sourceMap;

    if (undefined !== 'production') {
      styles = styles.replace(sourceMapPattern, function (match) {
        sourceMap = match;
        return '';
      });
    } // using a global regex with .exec is stateful so lastIndex has to be reset each time


    labelPattern.lastIndex = 0;
    var identifierName = '';
    var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

    while ((match = labelPattern.exec(styles)) !== null) {
      identifierName += '-' + // $FlowFixMe we know it's not null
      match[1];
    }

    var name = murmur2(styles) + identifierName;

    if (undefined !== 'production') {
      // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
      return {
        name: name,
        styles: styles,
        map: sourceMap,
        next: cursor,
        toString: function toString() {
          return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
        }
      };
    }

    return {
      name: name,
      styles: styles,
      next: cursor
    };
  };

  function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return serializeStyles(args);
  }

  var isBrowser$2 = typeof document !== 'undefined';

  var EmotionCacheContext = React.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== 'undefined' ? createCache() : null);
  var ThemeContext = React.createContext({});
  var CacheProvider = EmotionCacheContext.Provider;

  var withEmotionCache = function withEmotionCache(func) {
    var render = function render(props, ref) {
      return React.createElement(EmotionCacheContext.Consumer, null, function (cache) {
        return func(props, cache, ref);
      });
    }; // $FlowFixMe


    return React.forwardRef(render);
  };

  if (!isBrowser$2) {
    var BasicProvider =
    /*#__PURE__*/
    function (_React$Component) {
      inheritsLoose(BasicProvider, _React$Component);

      function BasicProvider(props, context, updater) {
        var _this;

        _this = _React$Component.call(this, props, context, updater) || this;
        _this.state = {
          value: createCache()
        };
        return _this;
      }

      var _proto = BasicProvider.prototype;

      _proto.render = function render() {
        return React.createElement(EmotionCacheContext.Provider, this.state, this.props.children(this.state.value));
      };

      return BasicProvider;
    }(React.Component);

    withEmotionCache = function withEmotionCache(func) {
      return function (props) {
        return React.createElement(EmotionCacheContext.Consumer, null, function (context) {
          if (context === null) {
            return React.createElement(BasicProvider, null, function (newContext) {
              return func(props, newContext);
            });
          } else {
            return func(props, context);
          }
        });
      };
    };
  }

  // thus we only need to replace what is a valid character for JS, but not for CSS

  var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
    return identifier.replace(/\$/g, '-');
  };

  var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
  var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  var render = function render(cache, props, theme, ref) {
    var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
    // not passing the registered cache to serializeStyles because it would
    // make certain babel optimisations not possible

    if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
      cssProp = cache.registered[cssProp];
    }

    var type = props[typePropName];
    var registeredStyles = [cssProp];
    var className = '';

    if (typeof props.className === 'string') {
      className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
    } else if (props.className != null) {
      className = props.className + " ";
    }

    var serialized = serializeStyles(registeredStyles);

    if (undefined !== 'production' && serialized.name.indexOf('-') === -1) {
      var labelFromStack = props[labelPropName];

      if (labelFromStack) {
        serialized = serializeStyles([serialized, 'label:' + labelFromStack + ';']);
      }
    }

    var rules = insertStyles(cache, serialized, typeof type === 'string');
    className += cache.key + "-" + serialized.name;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && (undefined === 'production' || key !== labelPropName)) {
        newProps[key] = props[key];
      }
    }

    newProps.ref = ref;
    newProps.className = className;
    var ele = React.createElement(type, newProps);

    if (!isBrowser$2 && rules !== undefined) {
      var _ref;

      var serializedNames = serialized.name;
      var next = serialized.next;

      while (next !== undefined) {
        serializedNames += ' ' + next.name;
        next = next.next;
      }

      return React.createElement(React.Fragment, null, React.createElement("style", (_ref = {}, _ref["data-emotion-" + cache.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
        __html: rules
      }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
    }

    return ele;
  };

  var Emotion =
  /* #__PURE__ */
  withEmotionCache(function (props, cache, ref) {
    // use Context.read for the theme when it's stable
    if (typeof props.css === 'function') {
      return React.createElement(ThemeContext.Consumer, null, function (theme) {
        return render(cache, props, theme, ref);
      });
    }

    return render(cache, props, null, ref);
  });

  if (undefined !== 'production') {
    Emotion.displayName = 'EmotionCssPropInternal';
  } // $FlowFixMe


  var jsx = function jsx(type, props) {
    var args = arguments;

    if (props == null || !hasOwnProperty.call(props, 'css')) {
      // $FlowFixMe
      return React.createElement.apply(undefined, args);
    }

    if (undefined !== 'production' && typeof props.css === 'string' && // check if there is a css declaration
    props.css.indexOf(':') !== -1) {
      throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
    }

    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = Emotion;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps[typePropName] = type;

    if (undefined !== 'production') {
      var error = new Error();

      if (error.stack) {
        // chrome
        var match = error.stack.match(/at (?:Object\.|)jsx.*\n\s+at ([A-Z][A-Za-z$]+) /);

        if (!match) {
          // safari and firefox
          match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
        }

        if (match) {
          newProps[labelPropName] = sanitizeIdentifier(match[1]);
        }
      }
    }

    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    } // $FlowFixMe


    return React.createElement.apply(null, createElementArgArray);
  };

  var warnedAboutCssPropForGlobal = false;
  var Global =
  /* #__PURE__ */
  withEmotionCache(function (props, cache) {
    if (undefined !== 'production' && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
    // probably using the custom createElement which
    // means it will be turned into a className prop
    // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
    props.className || props.css)) {
      console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
      warnedAboutCssPropForGlobal = true;
    }

    var styles = props.styles;

    if (typeof styles === 'function') {
      return React.createElement(ThemeContext.Consumer, null, function (theme) {
        var serialized = serializeStyles([styles(theme)]);
        return React.createElement(InnerGlobal, {
          serialized: serialized,
          cache: cache
        });
      });
    }

    var serialized = serializeStyles([styles]);
    return React.createElement(InnerGlobal, {
      serialized: serialized,
      cache: cache
    });
  });

  // maintain place over rerenders.
  // initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
  // initial client-side render from SSR, use place of hydrating tag
  var InnerGlobal =
  /*#__PURE__*/
  function (_React$Component) {
    inheritsLoose(InnerGlobal, _React$Component);

    function InnerGlobal(props, context, updater) {
      return _React$Component.call(this, props, context, updater) || this;
    }

    var _proto = InnerGlobal.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.sheet = new StyleSheet({
        key: this.props.cache.key + "-global",
        nonce: this.props.cache.sheet.nonce,
        container: this.props.cache.sheet.container
      }); // $FlowFixMe

      var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

      if (node !== null) {
        this.sheet.tags.push(node);
      }

      if (this.props.cache.sheet.tags.length) {
        this.sheet.before = this.props.cache.sheet.tags[0];
      }

      this.insertStyles();
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (prevProps.serialized.name !== this.props.serialized.name) {
        this.insertStyles();
      }
    };

    _proto.insertStyles = function insertStyles$1() {
      if (this.props.serialized.next !== undefined) {
        // insert keyframes
        insertStyles(this.props.cache, this.props.serialized.next, true);
      }

      if (this.sheet.tags.length) {
        // if this doesn't exist then it will be null so the style element will be appended
        var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
        this.sheet.before = element;
        this.sheet.flush();
      }

      this.props.cache.insert("", this.props.serialized, this.sheet, false);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.sheet.flush();
    };

    _proto.render = function render() {
      if (!isBrowser$2) {
        var serialized = this.props.serialized;
        var serializedNames = serialized.name;
        var serializedStyles = serialized.styles;
        var next = serialized.next;

        while (next !== undefined) {
          serializedNames += ' ' + next.name;
          serializedStyles += next.styles;
          next = next.next;
        }

        var shouldCache = this.props.cache.compat === true;
        var rules = this.props.cache.insert("", {
          name: serializedNames,
          styles: serializedStyles
        }, this.sheet, shouldCache);

        if (!shouldCache) {
          var _ref;

          return React.createElement("style", (_ref = {}, _ref["data-emotion-" + this.props.cache.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
            __html: rules
          }, _ref.nonce = this.props.cache.sheet.nonce, _ref));
        }
      }

      return null;
    };

    return InnerGlobal;
  }(React.Component);

  var keyframes = function keyframes() {
    var insertable = css.apply(void 0, arguments);
    var name = "animation-" + insertable.name; // $FlowFixMe

    return {
      name: name,
      styles: "@keyframes " + name + "{" + insertable.styles + "}",
      anim: 1,
      toString: function toString() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  };

  var classnames = function classnames(args) {
    var len = args.length;
    var i = 0;
    var cls = '';

    for (; i < len; i++) {
      var arg = args[i];
      if (arg == null) continue;
      var toAdd = void 0;

      switch (typeof arg) {
        case 'boolean':
          break;

        case 'object':
          {
            if (Array.isArray(arg)) {
              toAdd = classnames(arg);
            } else {
              toAdd = '';

              for (var k in arg) {
                if (arg[k] && k) {
                  toAdd && (toAdd += ' ');
                  toAdd += k;
                }
              }
            }

            break;
          }

        default:
          {
            toAdd = arg;
          }
      }

      if (toAdd) {
        cls && (cls += ' ');
        cls += toAdd;
      }
    }

    return cls;
  };

  function merge(registered, css$$1, className) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

    if (registeredStyles.length < 2) {
      return className;
    }

    return rawClassName + css$$1(registeredStyles);
  }

  var ClassNames = withEmotionCache(function (props, context) {
    return React.createElement(ThemeContext.Consumer, null, function (theme) {
      var rules = '';
      var serializedHashes = '';
      var hasRendered = false;

      var css$$1 = function css$$1() {
        if (hasRendered && undefined !== 'production') {
          throw new Error('css can only be used during render');
        }

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var serialized = serializeStyles(args, context.registered);

        if (isBrowser$2) {
          insertStyles(context, serialized, false);
        } else {
          var res = insertStyles(context, serialized, false);

          if (res !== undefined) {
            rules += res;
          }
        }

        if (!isBrowser$2) {
          serializedHashes += " " + serialized.name;
        }

        return context.key + "-" + serialized.name;
      };

      var cx = function cx() {
        if (hasRendered && undefined !== 'production') {
          throw new Error('cx can only be used during render');
        }

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return merge(context.registered, css$$1, classnames(args));
      };

      var content = {
        css: css$$1,
        cx: cx,
        theme: theme
      };
      var ele = props.children(content);
      hasRendered = true;

      if (!isBrowser$2 && rules.length !== 0) {
        var _ref;

        return React.createElement(React.Fragment, null, React.createElement("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedHashes.substring(1), _ref.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref.nonce = context.sheet.nonce, _ref)), ele);
      }

      return ele;
    });
  });

  // ==============================
  // NO OP
  // ==============================
  var noop = function noop() {};
  // Class Name Prefixer
  // ==============================

  /**
   String representation of component state for styling with class names.

   Expects an array of strings OR a string/object pair:
   - className(['comp', 'comp-arg', 'comp-arg-2'])
     @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
   - className('comp', { some: true, state: false })
     @returns 'react-select__comp react-select__comp--some'
  */

  function applyPrefixToName(prefix, name) {
    if (!name) {
      return prefix;
    } else if (name[0] === '-') {
      return prefix + name;
    } else {
      return prefix + '__' + name;
    }
  }

  function classNames(prefix, state, className) {
    var arr = [className];

    if (state && prefix) {
      for (var key in state) {
        if (state.hasOwnProperty(key) && state[key]) {
          arr.push("" + applyPrefixToName(prefix, key));
        }
      }
    }

    return arr.filter(function (i) {
      return i;
    }).map(function (i) {
      return String(i).trim();
    }).join(' ');
  } // ==============================
  // Clean Value
  // ==============================

  var cleanValue = function cleanValue(value) {
    if (Array.isArray(value)) return value.filter(Boolean);
    if (typeof value === 'object' && value !== null) return [value];
    return [];
  }; // ==============================
  // Handle Input Change
  // ==============================

  function handleInputChange(inputValue, actionMeta, onInputChange) {
    if (onInputChange) {
      var newValue = onInputChange(inputValue, actionMeta);
      if (typeof newValue === 'string') return newValue;
    }

    return inputValue;
  } // ==============================
  // Scroll Helpers
  // ==============================

  function isDocumentElement(el) {
    return [document.documentElement, document.body, window].indexOf(el) > -1;
  } // Normalized Scroll Top
  // ------------------------------

  function getScrollTop(el) {
    if (isDocumentElement(el)) {
      return window.pageYOffset;
    }

    return el.scrollTop;
  }
  function scrollTo(el, top) {
    // with a scroll distance, we perform scroll on the element
    if (isDocumentElement(el)) {
      window.scrollTo(0, top);
      return;
    }

    el.scrollTop = top;
  } // Get Scroll Parent
  // ------------------------------

  function getScrollParent(element) {
    var style = getComputedStyle(element);
    var excludeStaticParent = style.position === 'absolute';
    var overflowRx = /(auto|scroll)/;
    var docEl = document.documentElement; // suck it, flow...

    if (style.position === 'fixed') return docEl;

    for (var parent = element; parent = parent.parentElement;) {
      style = getComputedStyle(parent);

      if (excludeStaticParent && style.position === 'static') {
        continue;
      }

      if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
        return parent;
      }
    }

    return docEl;
  } // Animated Scroll To
  // ------------------------------

  /**
    @param t: time (elapsed)
    @param b: initial value
    @param c: amount of change
    @param d: duration
  */

  function easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }

  function animatedScrollTo(element, to, duration, callback) {
    if (duration === void 0) {
      duration = 200;
    }

    if (callback === void 0) {
      callback = noop;
    }

    var start = getScrollTop(element);
    var change = to - start;
    var increment = 10;
    var currentTime = 0;

    function animateScroll() {
      currentTime += increment;
      var val = easeOutCubic(currentTime, start, change, duration);
      scrollTo(element, val);

      if (currentTime < duration) {
        window.requestAnimationFrame(animateScroll);
      } else {
        callback(element);
      }
    }

    animateScroll();
  } // Scroll Into View
  // ------------------------------

  function scrollIntoView(menuEl, focusedEl) {
    var menuRect = menuEl.getBoundingClientRect();
    var focusedRect = focusedEl.getBoundingClientRect();
    var overScroll = focusedEl.offsetHeight / 3;

    if (focusedRect.bottom + overScroll > menuRect.bottom) {
      scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
    } else if (focusedRect.top - overScroll < menuRect.top) {
      scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
    }
  } // ==============================
  // Get bounding client object
  // ==============================
  // cannot get keys using array notation with DOMRect

  function getBoundingClientObj(element) {
    var rect = element.getBoundingClientRect();
    return {
      bottom: rect.bottom,
      height: rect.height,
      left: rect.left,
      right: rect.right,
      top: rect.top,
      width: rect.width
    };
  }
  // Touch Capability Detector
  // ==============================

  function isTouchCapable() {
    try {
      document.createEvent('TouchEvent');
      return true;
    } catch (e) {
      return false;
    }
  } // ==============================
  // Mobile Device Detector
  // ==============================

  function isMobileDevice() {
    try {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    } catch (e) {
      return false;
    }
  }

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
  		key: 'UNSAFE_componentWillReceiveProps',
  		value: function UNSAFE_componentWillReceiveProps(nextProps) {
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

  function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

  function _inheritsLoose$2(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
  function getMenuPlacement(_ref) {
    var maxHeight = _ref.maxHeight,
        menuEl = _ref.menuEl,
        minHeight = _ref.minHeight,
        placement = _ref.placement,
        shouldScroll = _ref.shouldScroll,
        isFixedPosition = _ref.isFixedPosition,
        theme = _ref.theme;
    var spacing = theme.spacing;
    var scrollParent = getScrollParent(menuEl);
    var defaultState = {
      placement: 'bottom',
      maxHeight: maxHeight
    }; // something went wrong, return default state

    if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
    // the menu is rendered

    var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
        scrollHeight = _scrollParent$getBoun.height;

    var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
        menuBottom = _menuEl$getBoundingCl.bottom,
        menuHeight = _menuEl$getBoundingCl.height,
        menuTop = _menuEl$getBoundingCl.top;

    var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
        containerTop = _menuEl$offsetParent$.top;

    var viewHeight = window.innerHeight;
    var scrollTop = getScrollTop(scrollParent);
    var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
    var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
    var viewSpaceAbove = containerTop - marginTop;
    var viewSpaceBelow = viewHeight - menuTop;
    var scrollSpaceAbove = viewSpaceAbove + scrollTop;
    var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
    var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
    var scrollUp = scrollTop + menuTop - marginTop;
    var scrollDuration = 160;

    switch (placement) {
      case 'auto':
      case 'bottom':
        // 1: the menu will fit, do nothing
        if (viewSpaceBelow >= menuHeight) {
          return {
            placement: 'bottom',
            maxHeight: maxHeight
          };
        } // 2: the menu will fit, if scrolled


        if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollDown, scrollDuration);
          }

          return {
            placement: 'bottom',
            maxHeight: maxHeight
          };
        } // 3: the menu will fit, if constrained


        if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollDown, scrollDuration);
          } // we want to provide as much of the menu as possible to the user,
          // so give them whatever is available below rather than the minHeight.


          var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
          return {
            placement: 'bottom',
            maxHeight: constrainedHeight
          };
        } // 4. Forked beviour when there isn't enough space below
        // AUTO: flip the menu, render above


        if (placement === 'auto' || isFixedPosition) {
          // may need to be constrained after flipping
          var _constrainedHeight = maxHeight;
          var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

          if (spaceAbove >= minHeight) {
            _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
          }

          return {
            placement: 'top',
            maxHeight: _constrainedHeight
          };
        } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


        if (placement === 'bottom') {
          scrollTo(scrollParent, scrollDown);
          return {
            placement: 'bottom',
            maxHeight: maxHeight
          };
        }

        break;

      case 'top':
        // 1: the menu will fit, do nothing
        if (viewSpaceAbove >= menuHeight) {
          return {
            placement: 'top',
            maxHeight: maxHeight
          };
        } // 2: the menu will fit, if scrolled


        if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollUp, scrollDuration);
          }

          return {
            placement: 'top',
            maxHeight: maxHeight
          };
        } // 3: the menu will fit, if constrained


        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
          // so give them whatever is available below rather than the minHeight.

          if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
            _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
          }

          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollUp, scrollDuration);
          }

          return {
            placement: 'top',
            maxHeight: _constrainedHeight2
          };
        } // 4. not enough space, the browser WILL NOT increase scrollable area when
        // absolutely positioned element rendered above the viewport (only below).
        // Flip the menu, render below


        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };

      default:
        throw new Error("Invalid placement provided \"" + placement + "\".");
    } // fulfil contract with flow: implicit return value of undefined


    return defaultState;
  } // Menu Component
  // ------------------------------

  function alignToControl(placement) {
    var placementToCSSProp = {
      bottom: 'top',
      top: 'bottom'
    };
    return placement ? placementToCSSProp[placement] : 'bottom';
  }

  var coercePlacement = function coercePlacement(p) {
    return p === 'auto' ? 'bottom' : p;
  };

  var menuCSS = function menuCSS(_ref2) {
    var _ref3;

    var placement = _ref2.placement,
        _ref2$theme = _ref2.theme,
        borderRadius = _ref2$theme.borderRadius,
        spacing = _ref2$theme.spacing,
        colors = _ref2$theme.colors;
    return _ref3 = {
      label: 'menu'
    }, _ref3[alignToControl(placement)] = '100%', _ref3.backgroundColor = colors.neutral0, _ref3.borderRadius = borderRadius, _ref3.boxShadow = '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)', _ref3.marginBottom = spacing.menuGutter, _ref3.marginTop = spacing.menuGutter, _ref3.position = 'absolute', _ref3.width = '100%', _ref3.zIndex = 1, _ref3;
  }; // NOTE: internal only

  var MenuPlacer =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose$2(MenuPlacer, _Component);

    function MenuPlacer() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.state = {
        maxHeight: _this.props.maxMenuHeight,
        placement: null
      };

      _this.getPlacement = function (ref) {
        var _this$props = _this.props,
            minMenuHeight = _this$props.minMenuHeight,
            maxMenuHeight = _this$props.maxMenuHeight,
            menuPlacement = _this$props.menuPlacement,
            menuPosition = _this$props.menuPosition,
            menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
            theme = _this$props.theme;
        var getPortalPlacement = _this.context.getPortalPlacement;
        if (!ref) return; // DO NOT scroll if position is fixed

        var isFixedPosition = menuPosition === 'fixed';
        var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
        var state = getMenuPlacement({
          maxHeight: maxMenuHeight,
          menuEl: ref,
          minHeight: minMenuHeight,
          placement: menuPlacement,
          shouldScroll: shouldScroll,
          isFixedPosition: isFixedPosition,
          theme: theme
        });
        if (getPortalPlacement) getPortalPlacement(state);

        _this.setState(state);
      };

      _this.getUpdatedProps = function () {
        var menuPlacement = _this.props.menuPlacement;
        var placement = _this.state.placement || coercePlacement(menuPlacement);
        return _extends$1({}, _this.props, {
          placement: placement,
          maxHeight: _this.state.maxHeight
        });
      };

      return _this;
    }

    var _proto = MenuPlacer.prototype;

    _proto.render = function render() {
      var children = this.props.children;
      return children({
        ref: this.getPlacement,
        placerProps: this.getUpdatedProps()
      });
    };

    return MenuPlacer;
  }(React.Component);
  MenuPlacer.contextTypes = {
    getPortalPlacement: PropTypes.func
  };

  var Menu = function Menu(props) {
    var children = props.children,
        className = props.className,
        cx = props.cx,
        getStyles = props.getStyles,
        innerRef = props.innerRef,
        innerProps = props.innerProps;
    return jsx("div", _extends$1({
      css: getStyles('menu', props),
      className: cx({
        menu: true
      }, className)
    }, innerProps, {
      ref: innerRef
    }), children);
  };
  // Menu List
  // ==============================

  var menuListCSS = function menuListCSS(_ref4) {
    var maxHeight = _ref4.maxHeight,
        baseUnit = _ref4.theme.spacing.baseUnit;
    return {
      maxHeight: maxHeight,
      overflowY: 'auto',
      paddingBottom: baseUnit,
      paddingTop: baseUnit,
      position: 'relative',
      // required for offset[Height, Top] > keyboard scroll
      WebkitOverflowScrolling: 'touch'
    };
  };
  var MenuList = function MenuList(props) {
    var children = props.children,
        className = props.className,
        cx = props.cx,
        getStyles = props.getStyles,
        isMulti = props.isMulti,
        innerRef = props.innerRef;
    return jsx("div", {
      css: getStyles('menuList', props),
      className: cx({
        'menu-list': true,
        'menu-list--is-multi': isMulti
      }, className),
      ref: innerRef
    }, children);
  }; // ==============================
  // Menu Notices
  // ==============================

  var noticeCSS = function noticeCSS(_ref5) {
    var _ref5$theme = _ref5.theme,
        baseUnit = _ref5$theme.spacing.baseUnit,
        colors = _ref5$theme.colors;
    return {
      color: colors.neutral40,
      padding: baseUnit * 2 + "px " + baseUnit * 3 + "px",
      textAlign: 'center'
    };
  };

  var noOptionsMessageCSS = noticeCSS;
  var loadingMessageCSS = noticeCSS;
  var NoOptionsMessage = function NoOptionsMessage(props) {
    var children = props.children,
        className = props.className,
        cx = props.cx,
        getStyles = props.getStyles,
        innerProps = props.innerProps;
    return jsx("div", _extends$1({
      css: getStyles('noOptionsMessage', props),
      className: cx({
        'menu-notice': true,
        'menu-notice--no-options': true
      }, className)
    }, innerProps), children);
  };
  NoOptionsMessage.defaultProps = {
    children: 'No options'
  };
  var LoadingMessage = function LoadingMessage(props) {
    var children = props.children,
        className = props.className,
        cx = props.cx,
        getStyles = props.getStyles,
        innerProps = props.innerProps;
    return jsx("div", _extends$1({
      css: getStyles('loadingMessage', props),
      className: cx({
        'menu-notice': true,
        'menu-notice--loading': true
      }, className)
    }, innerProps), children);
  };
  LoadingMessage.defaultProps = {
    children: 'Loading...'
  }; // ==============================
  // Menu Portal
  // ==============================

  var menuPortalCSS = function menuPortalCSS(_ref6) {
    var rect = _ref6.rect,
        offset = _ref6.offset,
        position = _ref6.position;
    return {
      left: rect.left,
      position: position,
      top: offset,
      width: rect.width,
      zIndex: 1
    };
  };
  var MenuPortal =
  /*#__PURE__*/
  function (_Component2) {
    _inheritsLoose$2(MenuPortal, _Component2);

    function MenuPortal() {
      var _this2;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this2 = _Component2.call.apply(_Component2, [this].concat(args)) || this;
      _this2.state = {
        placement: null
      };

      _this2.getPortalPlacement = function (_ref7) {
        var placement = _ref7.placement;
        var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

        if (placement !== initialPlacement) {
          _this2.setState({
            placement: placement
          });
        }
      };

      return _this2;
    }

    var _proto2 = MenuPortal.prototype;

    _proto2.getChildContext = function getChildContext() {
      return {
        getPortalPlacement: this.getPortalPlacement
      };
    } // callback for occassions where the menu must "flip"
    ;

    _proto2.render = function render() {
      var _this$props2 = this.props,
          appendTo = _this$props2.appendTo,
          children = _this$props2.children,
          controlElement = _this$props2.controlElement,
          menuPlacement = _this$props2.menuPlacement,
          position = _this$props2.menuPosition,
          getStyles = _this$props2.getStyles;
      var isFixed = position === 'fixed'; // bail early if required elements aren't present

      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }

      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = {
        offset: offset,
        position: position,
        rect: rect
      }; // same wrapper element whether fixed or portalled

      var menuWrapper = jsx("div", {
        css: getStyles('menuPortal', state)
      }, children);
      return appendTo ? reactDom.createPortal(menuWrapper, appendTo) : menuWrapper;
    };

    return MenuPortal;
  }(React.Component);
  MenuPortal.childContextTypes = {
    getPortalPlacement: PropTypes.func
  };

  var isArray = Array.isArray;
  var keyList = Object.keys;
  var hasProp = Object.prototype.hasOwnProperty;

  function equal(a$$1, b$$1) {
    // fast-deep-equal index.js 2.0.1
    if (a$$1 === b$$1) return true;

    if (a$$1 && b$$1 && typeof a$$1 == 'object' && typeof b$$1 == 'object') {
      var arrA = isArray(a$$1),
          arrB = isArray(b$$1),
          i,
          length,
          key;

      if (arrA && arrB) {
        length = a$$1.length;
        if (length != b$$1.length) return false;

        for (i = length; i-- !== 0;) {
          if (!equal(a$$1[i], b$$1[i])) return false;
        }

        return true;
      }

      if (arrA != arrB) return false;
      var dateA = a$$1 instanceof Date,
          dateB = b$$1 instanceof Date;
      if (dateA != dateB) return false;
      if (dateA && dateB) return a$$1.getTime() == b$$1.getTime();
      var regexpA = a$$1 instanceof RegExp,
          regexpB = b$$1 instanceof RegExp;
      if (regexpA != regexpB) return false;
      if (regexpA && regexpB) return a$$1.toString() == b$$1.toString();
      var keys = keyList(a$$1);
      length = keys.length;

      if (length !== keyList(b$$1).length) {
        return false;
      }

      for (i = length; i-- !== 0;) {
        if (!hasProp.call(b$$1, keys[i])) return false;
      } // end fast-deep-equal
      // Custom handling for React


      for (i = length; i-- !== 0;) {
        key = keys[i];

        if (key === '_owner' && a$$1.$$typeof) {
          // React-specific: avoid traversing React elements' _owner.
          //  _owner contains circular references
          // and is not needed when comparing the actual elements (and not their owners)
          // .$$typeof and ._store on just reasonable markers of a react element
          continue;
        } else {
          // all other properties should be traversed as usual
          if (!equal(a$$1[key], b$$1[key])) return false;
        }
      } // fast-deep-equal index.js 2.0.1


      return true;
    }

    return a$$1 !== a$$1 && b$$1 !== b$$1;
  } // end fast-deep-equal


  function exportedEqual(a$$1, b$$1) {
    try {
      return equal(a$$1, b$$1);
    } catch (error) {
      if (error.message && error.message.match(/stack|recursion/i)) {
        // warn on circular references, don't crash
        // browsers give this different errors name and messages:
        // chrome/safari: "RangeError", "Maximum call stack size exceeded"
        // firefox: "InternalError", too much recursion"
        // edge: "Error", "Out of stack space"
        console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
        return false;
      } // some other error. we should definitely know about these


      throw error;
    }
  }

  function _extends$1$1() { _extends$1$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1$1.apply(this, arguments); }
  var containerCSS = function containerCSS(_ref) {
    var isDisabled = _ref.isDisabled,
        isRtl = _ref.isRtl;
    return {
      label: 'container',
      direction: isRtl ? 'rtl' : null,
      pointerEvents: isDisabled ? 'none' : null,
      // cancel mouse events when disabled
      position: 'relative'
    };
  };
  var SelectContainer = function SelectContainer(props) {
    var children = props.children,
        className = props.className,
        cx = props.cx,
        getStyles = props.getStyles,
        innerProps = props.innerProps,
        isDisabled = props.isDisabled,
        isRtl = props.isRtl;
    return jsx("div", _extends$1$1({
      css: getStyles('container', props),
      className: cx({
        '--is-disabled': isDisabled,
        '--is-rtl': isRtl
      }, className)
    }, innerProps), children);
  }; // ==============================
  // Value Container
  // ==============================

  var valueContainerCSS = function valueContainerCSS(_ref2) {
    var spacing = _ref2.theme.spacing;
    return {
      alignItems: 'center',
      display: 'flex',
      flex: 1,
      flexWrap: 'wrap',
      padding: spacing.baseUnit / 2 + "px " + spacing.baseUnit * 2 + "px",
      WebkitOverflowScrolling: 'touch',
      position: 'relative',
      overflow: 'hidden'
    };
  };
  var ValueContainer = function ValueContainer(props) {
    var children = props.children,
        className = props.className,
        cx = props.cx,
        isMulti = props.isMulti,
        getStyles = props.getStyles,
        hasValue = props.hasValue;
    return jsx("div", {
      css: getStyles('valueContainer', props),
      className: cx({
        'value-container': true,
        'value-container--is-multi': isMulti,
        'value-container--has-value': hasValue
      }, className)
    }, children);
  }; // ==============================
  // Indicator Container
  // ==============================

  var indicatorsContainerCSS = function indicatorsContainerCSS() {
    return {
      alignItems: 'center',
      alignSelf: 'stretch',
      display: 'flex',
      flexShrink: 0
    };
  };
  var IndicatorsContainer = function IndicatorsContainer(props) {
    var children = props.children,
        className = props.className,
        cx = props.cx,
        getStyles = props.getStyles;
    return jsx("div", {
      css: getStyles('indicatorsContainer', props),
      className: cx({
        indicators: true
      }, className)
    }, children);
  };

  function _templateObject() {
    var data = _taggedTemplateLiteralLoose$1(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  function _taggedTemplateLiteralLoose$1(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

  function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

  function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  var _ref2 = undefined === "production" ? {
    name: "19bqh2r",
    styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;"
  } : {
    name: "19bqh2r",
    styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IENvbW1vblByb3BzLCBUaGVtZSB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHsgc2l6ZSwgLi4ucHJvcHMgfTogeyBzaXplOiBudW1iZXIgfSkgPT4gKFxuICA8c3ZnXG4gICAgaGVpZ2h0PXtzaXplfVxuICAgIHdpZHRoPXtzaXplfVxuICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgIGNzcz17e1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBzdHJva2U6ICdjdXJyZW50Q29sb3InLFxuICAgICAgc3Ryb2tlV2lkdGg6IDAsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBhbnkpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk00LjUxNiA3LjU0OGMwLjQzNi0wLjQ0NiAxLjA0My0wLjQ4MSAxLjU3NiAwbDMuOTA4IDMuNzQ3IDMuOTA4LTMuNzQ3YzAuNTMzLTAuNDgxIDEuMTQxLTAuNDQ2IDEuNTc0IDAgMC40MzYgMC40NDUgMC40MDggMS4xOTcgMCAxLjYxNS0wLjQwNiAwLjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMi0wLjIxNyAwLjIyMy0wLjUwMiAwLjMzNS0wLjc4NyAwLjMzNXMtMC41Ny0wLjExMi0wLjc4OS0wLjMzNWMwIDAtNC4yODctNC4wODQtNC42OTUtNC41MDJzLTAuNDM2LTEuMTcgMC0xLjYxNXpcIiAvPlxuICA8L1N2Zz5cbik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgSW5kaWNhdG9yUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW46IE5vZGUsXG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufTtcblxuY29uc3QgYmFzZUNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogSW5kaWNhdG9yUHJvcHMpID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yQ29udGFpbmVyJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcblxuICAnOmhvdmVyJzoge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2Ryb3Bkb3duSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnZHJvcGRvd24taW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2NsZWFySW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnY2xlYXItaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIFNlcGFyYXRvclN0YXRlID0geyBpc0Rpc2FibGVkOiBib29sZWFuIH07XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSAoe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBDb21tb25Qcm9wcyAmIFNlcGFyYXRvclN0YXRlKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gKHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiB7XG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgc2l6ZTogbnVtYmVyLFxuICB0aGVtZTogVGhlbWUsXG59KSA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxufSk7XG5cbnR5cGUgRG90UHJvcHMgPSB7IGRlbGF5OiBudW1iZXIsIG9mZnNldDogYm9vbGVhbiB9O1xuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogRG90UHJvcHMpID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGFuaW1hdGlvbjogYCR7bG9hZGluZ0RvdEFuaW1hdGlvbnN9IDFzIGVhc2UtaW4tb3V0ICR7ZGVsYXl9bXMgaW5maW5pdGU7YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IG51bGwsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIExvYWRpbmdJY29uUHJvcHMgPSB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufSAmIENvbW1vblByb3BzICYge1xuICAgIC8qKiBTZXQgc2l6ZSBvZiB0aGUgY29udGFpbmVyLiAqL1xuICAgIHNpemU6IG51bWJlcixcbiAgfTtcbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gKHByb3BzOiBMb2FkaW5nSWNvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzLCBpc1J0bCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdsb2FkaW5nSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnbG9hZGluZy1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezB9IG9mZnNldD17aXNSdGx9IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MTYwfSBvZmZzZXQgLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXszMjB9IG9mZnNldD17IWlzUnRsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbkxvYWRpbmdJbmRpY2F0b3IuZGVmYXVsdFByb3BzID0geyBzaXplOiA0IH07XG4iXX0= */"
  };

  // ==============================
  // Dropdown & Clear Icons
  // ==============================
  var Svg = function Svg(_ref) {
    var size = _ref.size,
        props = _objectWithoutPropertiesLoose$1(_ref, ["size"]);

    return jsx("svg", _extends$2({
      height: size,
      width: size,
      viewBox: "0 0 20 20",
      "aria-hidden": "true",
      focusable: "false",
      css: _ref2
    }, props));
  };

  var CrossIcon = function CrossIcon(props) {
    return jsx(Svg, _extends$2({
      size: 20
    }, props), jsx("path", {
      d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
    }));
  };
  var DownChevron = function DownChevron(props) {
    return jsx(Svg, _extends$2({
      size: 20
    }, props), jsx("path", {
      d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
    }));
  }; // ==============================
  // Dropdown & Clear Buttons
  // ==============================

  var baseCSS = function baseCSS(_ref3) {
    var isFocused = _ref3.isFocused,
        _ref3$theme = _ref3.theme,
        baseUnit = _ref3$theme.spacing.baseUnit,
        colors = _ref3$theme.colors;
    return {
      label: 'indicatorContainer',
      color: isFocused ? colors.neutral60 : colors.neutral20,
      display: 'flex',
      padding: baseUnit * 2,
      transition: 'color 150ms',
      ':hover': {
        color: isFocused ? colors.neutral80 : colors.neutral40
      }
    };
  };

  var dropdownIndicatorCSS = baseCSS;
  var DropdownIndicator = function DropdownIndicator(props) {
    var children = props.children,
        className = props.className,
        cx = props.cx,
        getStyles = props.getStyles,
        innerProps = props.innerProps;
    return jsx("div", _extends$2({}, innerProps, {
      css: getStyles('dropdownIndicator', props),
      className: cx({
        indicator: true,
        'dropdown-indicator': true
      }, className)
    }), children || jsx(DownChevron, null));
  };
  var clearIndicatorCSS = baseCSS;
  var ClearIndicator = function ClearIndicator(props) {
    var children = props.children,
        className = props.className,
        cx = props.cx,
        getStyles = props.getStyles,
        innerProps = props.innerProps;
    return jsx("div", _extends$2({}, innerProps, {
      css: getStyles('clearIndicator', props),
      className: cx({
        indicator: true,
        'clear-indicator': true
      }, className)
    }), children || jsx(CrossIcon, null));
  }; // ==============================
  // Separator
  // ==============================

  var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4) {
    var isDisabled = _ref4.isDisabled,
        _ref4$theme = _ref4.theme,
        baseUnit = _ref4$theme.spacing.baseUnit,
        colors = _ref4$theme.colors;
    return {
      label: 'indicatorSeparator',
      alignSelf: 'stretch',
      backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
      marginBottom: baseUnit * 2,
      marginTop: baseUnit * 2,
      width: 1
    };
  };
  var IndicatorSeparator = function IndicatorSeparator(props) {
    var className = props.className,
        cx = props.cx,
        getStyles = props.getStyles,
        innerProps = props.innerProps;
    return jsx("span", _extends$2({}, innerProps, {
      css: getStyles('indicatorSeparator', props),
      className: cx({
        'indicator-separator': true
      }, className)
    }));
  }; // ==============================
  // Loading
  // ==============================

  var loadingDotAnimations = keyframes(_templateObject());
  var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5) {
    var isFocused = _ref5.isFocused,
        size = _ref5.size,
        _ref5$theme = _ref5.theme,
        colors = _ref5$theme.colors,
        baseUnit = _ref5$theme.spacing.baseUnit;
    return {
      label: 'loadingIndicator',
      color: isFocused ? colors.neutral60 : colors.neutral20,
      display: 'flex',
      padding: baseUnit * 2,
      transition: 'color 150ms',
      alignSelf: 'center',
      fontSize: size,
      lineHeight: 1,
      marginRight: size,
      textAlign: 'center',
      verticalAlign: 'middle'
    };
  };

  var LoadingDot = function LoadingDot(_ref6) {
    var delay = _ref6.delay,
        offset = _ref6.offset;
    return jsx("span", {
      css:
      /*#__PURE__*/
      css({
        animation: loadingDotAnimations + " 1s ease-in-out " + delay + "ms infinite;",
        backgroundColor: 'currentColor',
        borderRadius: '1em',
        display: 'inline-block',
        marginLeft: offset ? '1em' : null,
        height: '1em',
        verticalAlign: 'top',
        width: '1em'
      }, undefined === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0xJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IENvbW1vblByb3BzLCBUaGVtZSB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHsgc2l6ZSwgLi4ucHJvcHMgfTogeyBzaXplOiBudW1iZXIgfSkgPT4gKFxuICA8c3ZnXG4gICAgaGVpZ2h0PXtzaXplfVxuICAgIHdpZHRoPXtzaXplfVxuICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgIGNzcz17e1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBzdHJva2U6ICdjdXJyZW50Q29sb3InLFxuICAgICAgc3Ryb2tlV2lkdGg6IDAsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBhbnkpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk00LjUxNiA3LjU0OGMwLjQzNi0wLjQ0NiAxLjA0My0wLjQ4MSAxLjU3NiAwbDMuOTA4IDMuNzQ3IDMuOTA4LTMuNzQ3YzAuNTMzLTAuNDgxIDEuMTQxLTAuNDQ2IDEuNTc0IDAgMC40MzYgMC40NDUgMC40MDggMS4xOTcgMCAxLjYxNS0wLjQwNiAwLjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMi0wLjIxNyAwLjIyMy0wLjUwMiAwLjMzNS0wLjc4NyAwLjMzNXMtMC41Ny0wLjExMi0wLjc4OS0wLjMzNWMwIDAtNC4yODctNC4wODQtNC42OTUtNC41MDJzLTAuNDM2LTEuMTcgMC0xLjYxNXpcIiAvPlxuICA8L1N2Zz5cbik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgSW5kaWNhdG9yUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW46IE5vZGUsXG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufTtcblxuY29uc3QgYmFzZUNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogSW5kaWNhdG9yUHJvcHMpID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yQ29udGFpbmVyJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcblxuICAnOmhvdmVyJzoge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2Ryb3Bkb3duSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnZHJvcGRvd24taW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2NsZWFySW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnY2xlYXItaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIFNlcGFyYXRvclN0YXRlID0geyBpc0Rpc2FibGVkOiBib29sZWFuIH07XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSAoe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBDb21tb25Qcm9wcyAmIFNlcGFyYXRvclN0YXRlKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gKHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiB7XG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgc2l6ZTogbnVtYmVyLFxuICB0aGVtZTogVGhlbWUsXG59KSA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxufSk7XG5cbnR5cGUgRG90UHJvcHMgPSB7IGRlbGF5OiBudW1iZXIsIG9mZnNldDogYm9vbGVhbiB9O1xuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogRG90UHJvcHMpID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGFuaW1hdGlvbjogYCR7bG9hZGluZ0RvdEFuaW1hdGlvbnN9IDFzIGVhc2UtaW4tb3V0ICR7ZGVsYXl9bXMgaW5maW5pdGU7YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IG51bGwsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIExvYWRpbmdJY29uUHJvcHMgPSB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufSAmIENvbW1vblByb3BzICYge1xuICAgIC8qKiBTZXQgc2l6ZSBvZiB0aGUgY29udGFpbmVyLiAqL1xuICAgIHNpemU6IG51bWJlcixcbiAgfTtcbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gKHByb3BzOiBMb2FkaW5nSWNvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzLCBpc1J0bCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdsb2FkaW5nSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnbG9hZGluZy1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezB9IG9mZnNldD17aXNSdGx9IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MTYwfSBvZmZzZXQgLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXszMjB9IG9mZnNldD17IWlzUnRsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbkxvYWRpbmdJbmRpY2F0b3IuZGVmYXVsdFByb3BzID0geyBzaXplOiA0IH07XG4iXX0= */")
    });
  };

  var LoadingIndicator = function LoadingIndicator(props) {
    var className = props.className,
        cx = props.cx,
        getStyles = props.getStyles,
        innerProps = props.innerProps,
        isRtl = props.isRtl;
    return jsx("div", _extends$2({}, innerProps, {
      css: getStyles('loadingIndicator', props),
      className: cx({
        indicator: true,
        'loading-indicator': true
      }, className)
    }), jsx(LoadingDot, {
      delay: 0,
      offset: isRtl
    }), jsx(LoadingDot, {
      delay: 160,
      offset: true
    }), jsx(LoadingDot, {
      delay: 320,
      offset: !isRtl
    }));
  };
  LoadingIndicator.defaultProps = {
    size: 4
  };

  function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
  var css$1 = function css$$1(_ref) {
    var isDisabled = _ref.isDisabled,
        isFocused = _ref.isFocused,
        _ref$theme = _ref.theme,
        colors = _ref$theme.colors,
        borderRadius = _ref$theme.borderRadius,
        spacing = _ref$theme.spacing;
    return {
      label: 'control',
      alignItems: 'center',
      backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
      borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
      borderRadius: borderRadius,
      borderStyle: 'solid',
      borderWidth: 1,
      boxShadow: isFocused ? "0 0 0 1px " + colors.primary : null,
      cursor: 'default',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      minHeight: spacing.controlHeight,
      outline: '0 !important',
      position: 'relative',
      transition: 'all 100ms',
      '&:hover': {
        borderColor: isFocused ? colors.primary : colors.neutral30
      }
    };
  };

  var Control = function Control(props) {
    var children = props.children,
        cx = props.cx,
        getStyles = props.getStyles,
        className = props.className,
        isDisabled = props.isDisabled,
        isFocused = props.isFocused,
        innerRef = props.innerRef,
        innerProps = props.innerProps,
        menuIsOpen = props.menuIsOpen;
    return jsx("div", _extends$3({
      ref: innerRef,
      css: getStyles('control', props),
      className: cx({
        control: true,
        'control--is-disabled': isDisabled,
        'control--is-focused': isFocused,
        'control--menu-is-open': menuIsOpen
      }, className)
    }, innerProps), children);
  };

  function _objectWithoutPropertiesLoose$1$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }
  var groupCSS = function groupCSS(_ref) {
    var spacing = _ref.theme.spacing;
    return {
      paddingBottom: spacing.baseUnit * 2,
      paddingTop: spacing.baseUnit * 2
    };
  };

  var Group = function Group(props) {
    var children = props.children,
        className = props.className,
        cx = props.cx,
        getStyles = props.getStyles,
        Heading = props.Heading,
        headingProps = props.headingProps,
        label = props.label,
        theme = props.theme,
        selectProps = props.selectProps;
    return jsx("div", {
      css: getStyles('group', props),
      className: cx({
        group: true
      }, className)
    }, jsx(Heading, _extends$4({}, headingProps, {
      selectProps: selectProps,
      theme: theme,
      getStyles: getStyles,
      cx: cx
    }), label), jsx("div", null, children));
  };

  var groupHeadingCSS = function groupHeadingCSS(_ref2) {
    var spacing = _ref2.theme.spacing;
    return {
      label: 'group',
      color: '#999',
      cursor: 'default',
      display: 'block',
      fontSize: '75%',
      fontWeight: '500',
      marginBottom: '0.25em',
      paddingLeft: spacing.baseUnit * 3,
      paddingRight: spacing.baseUnit * 3,
      textTransform: 'uppercase'
    };
  };
  var GroupHeading = function GroupHeading(props) {
    var className = props.className,
        cx = props.cx,
        getStyles = props.getStyles,
        theme = props.theme,
        selectProps = props.selectProps,
        cleanProps = _objectWithoutPropertiesLoose$1$1(props, ["className", "cx", "getStyles", "theme", "selectProps"]);

    return jsx("div", _extends$4({
      css: getStyles('groupHeading', _extends$4({
        theme: theme
      }, cleanProps)),
      className: cx({
        'group-heading': true
      }, className)
    }, cleanProps));
  };

  function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

  function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  var inputCSS = function inputCSS(_ref) {
    var isDisabled = _ref.isDisabled,
        _ref$theme = _ref.theme,
        spacing = _ref$theme.spacing,
        colors = _ref$theme.colors;
    return {
      margin: spacing.baseUnit / 2,
      paddingBottom: spacing.baseUnit / 2,
      paddingTop: spacing.baseUnit / 2,
      visibility: isDisabled ? 'hidden' : 'visible',
      color: colors.neutral80
    };
  };

  var inputStyle = function inputStyle(isHidden) {
    return {
      label: 'input',
      background: 0,
      border: 0,
      fontSize: 'inherit',
      opacity: isHidden ? 0 : 1,
      outline: 0,
      padding: 0,
      color: 'inherit'
    };
  };

  var Input = function Input(_ref2) {
    var className = _ref2.className,
        cx = _ref2.cx,
        getStyles = _ref2.getStyles,
        innerRef = _ref2.innerRef,
        isHidden = _ref2.isHidden,
        isDisabled = _ref2.isDisabled,
        theme = _ref2.theme,
        selectProps = _ref2.selectProps,
        props = _objectWithoutPropertiesLoose$2(_ref2, ["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]);

    return jsx("div", {
      css: getStyles('input', _extends$5({
        theme: theme
      }, props))
    }, jsx(AutosizeInput, _extends$5({
      className: cx({
        input: true
      }, className),
      inputRef: innerRef,
      inputStyle: inputStyle(isHidden),
      disabled: isDisabled
    }, props)));
  };

  function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }
  var multiValueCSS = function multiValueCSS(_ref) {
    var _ref$theme = _ref.theme,
        spacing = _ref$theme.spacing,
        borderRadius = _ref$theme.borderRadius,
        colors = _ref$theme.colors;
    return {
      label: 'multiValue',
      backgroundColor: colors.neutral10,
      borderRadius: borderRadius / 2,
      display: 'flex',
      margin: spacing.baseUnit / 2,
      minWidth: 0 // resolves flex/text-overflow bug

    };
  };
  var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
    var _ref2$theme = _ref2.theme,
        borderRadius = _ref2$theme.borderRadius,
        colors = _ref2$theme.colors,
        cropWithEllipsis = _ref2.cropWithEllipsis;
    return {
      borderRadius: borderRadius / 2,
      color: colors.neutral80,
      fontSize: '85%',
      overflow: 'hidden',
      padding: 3,
      paddingLeft: 6,
      textOverflow: cropWithEllipsis ? 'ellipsis' : null,
      whiteSpace: 'nowrap'
    };
  };
  var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
    var _ref3$theme = _ref3.theme,
        spacing = _ref3$theme.spacing,
        borderRadius = _ref3$theme.borderRadius,
        colors = _ref3$theme.colors,
        isFocused = _ref3.isFocused;
    return {
      alignItems: 'center',
      borderRadius: borderRadius / 2,
      backgroundColor: isFocused && colors.dangerLight,
      display: 'flex',
      paddingLeft: spacing.baseUnit,
      paddingRight: spacing.baseUnit,
      ':hover': {
        backgroundColor: colors.dangerLight,
        color: colors.danger
      }
    };
  };
  var MultiValueGeneric = function MultiValueGeneric(_ref4) {
    var children = _ref4.children,
        innerProps = _ref4.innerProps;
    return jsx("div", innerProps, children);
  };
  var MultiValueContainer = MultiValueGeneric;
  var MultiValueLabel = MultiValueGeneric;
  function MultiValueRemove(_ref5) {
    var children = _ref5.children,
        innerProps = _ref5.innerProps;
    return jsx("div", innerProps, children || jsx(CrossIcon, {
      size: 14
    }));
  }

  var MultiValue = function MultiValue(props) {
    var children = props.children,
        className = props.className,
        components = props.components,
        cx = props.cx,
        data = props.data,
        getStyles = props.getStyles,
        innerProps = props.innerProps,
        isDisabled = props.isDisabled,
        removeProps = props.removeProps,
        selectProps = props.selectProps;
    var Container = components.Container,
        Label = components.Label,
        Remove = components.Remove;
    return jsx(ClassNames, null, function (_ref6) {
      var css$$1 = _ref6.css,
          emotionCx = _ref6.cx;
      return jsx(Container, {
        data: data,
        innerProps: _extends$6({}, innerProps, {
          className: emotionCx(css$$1(getStyles('multiValue', props)), cx({
            'multi-value': true,
            'multi-value--is-disabled': isDisabled
          }, className))
        }),
        selectProps: selectProps
      }, jsx(Label, {
        data: data,
        innerProps: {
          className: emotionCx(css$$1(getStyles('multiValueLabel', props)), cx({
            'multi-value__label': true
          }, className))
        },
        selectProps: selectProps
      }, children), jsx(Remove, {
        data: data,
        innerProps: _extends$6({
          className: emotionCx(css$$1(getStyles('multiValueRemove', props)), cx({
            'multi-value__remove': true
          }, className))
        }, removeProps),
        selectProps: selectProps
      }));
    });
  };

  MultiValue.defaultProps = {
    cropWithEllipsis: true
  };

  function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }
  var optionCSS = function optionCSS(_ref) {
    var isDisabled = _ref.isDisabled,
        isFocused = _ref.isFocused,
        isSelected = _ref.isSelected,
        _ref$theme = _ref.theme,
        spacing = _ref$theme.spacing,
        colors = _ref$theme.colors;
    return {
      label: 'option',
      backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
      color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
      cursor: 'default',
      display: 'block',
      fontSize: 'inherit',
      padding: spacing.baseUnit * 2 + "px " + spacing.baseUnit * 3 + "px",
      width: '100%',
      userSelect: 'none',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      // provide some affordance on touch devices
      ':active': {
        backgroundColor: !isDisabled && (isSelected ? colors.primary : colors.primary50)
      }
    };
  };

  var Option = function Option(props) {
    var children = props.children,
        className = props.className,
        cx = props.cx,
        getStyles = props.getStyles,
        isDisabled = props.isDisabled,
        isFocused = props.isFocused,
        isSelected = props.isSelected,
        innerRef = props.innerRef,
        innerProps = props.innerProps;
    return jsx("div", _extends$7({
      css: getStyles('option', props),
      className: cx({
        option: true,
        'option--is-disabled': isDisabled,
        'option--is-focused': isFocused,
        'option--is-selected': isSelected
      }, className),
      ref: innerRef
    }, innerProps), children);
  };

  function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }
  var placeholderCSS = function placeholderCSS(_ref) {
    var _ref$theme = _ref.theme,
        spacing = _ref$theme.spacing,
        colors = _ref$theme.colors;
    return {
      label: 'placeholder',
      color: colors.neutral50,
      marginLeft: spacing.baseUnit / 2,
      marginRight: spacing.baseUnit / 2,
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)'
    };
  };

  var Placeholder = function Placeholder(props) {
    var children = props.children,
        className = props.className,
        cx = props.cx,
        getStyles = props.getStyles,
        innerProps = props.innerProps;
    return jsx("div", _extends$8({
      css: getStyles('placeholder', props),
      className: cx({
        placeholder: true
      }, className)
    }, innerProps), children);
  };

  function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }
  var css$1$1 = function css$$1(_ref) {
    var isDisabled = _ref.isDisabled,
        _ref$theme = _ref.theme,
        spacing = _ref$theme.spacing,
        colors = _ref$theme.colors;
    return {
      label: 'singleValue',
      color: isDisabled ? colors.neutral40 : colors.neutral80,
      marginLeft: spacing.baseUnit / 2,
      marginRight: spacing.baseUnit / 2,
      maxWidth: "calc(100% - " + spacing.baseUnit * 2 + "px)",
      overflow: 'hidden',
      position: 'absolute',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      top: '50%',
      transform: 'translateY(-50%)'
    };
  };

  var SingleValue = function SingleValue(props) {
    var children = props.children,
        className = props.className,
        cx = props.cx,
        getStyles = props.getStyles,
        isDisabled = props.isDisabled,
        innerProps = props.innerProps;
    return jsx("div", _extends$9({
      css: getStyles('singleValue', props),
      className: cx({
        'single-value': true,
        'single-value--is-disabled': isDisabled
      }, className)
    }, innerProps), children);
  };

  function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }
  var components = {
    ClearIndicator: ClearIndicator,
    Control: Control,
    DropdownIndicator: DropdownIndicator,
    DownChevron: DownChevron,
    CrossIcon: CrossIcon,
    Group: Group,
    GroupHeading: GroupHeading,
    IndicatorsContainer: IndicatorsContainer,
    IndicatorSeparator: IndicatorSeparator,
    Input: Input,
    LoadingIndicator: LoadingIndicator,
    Menu: Menu,
    MenuList: MenuList,
    MenuPortal: MenuPortal,
    LoadingMessage: LoadingMessage,
    NoOptionsMessage: NoOptionsMessage,
    MultiValue: MultiValue,
    MultiValueContainer: MultiValueContainer,
    MultiValueLabel: MultiValueLabel,
    MultiValueRemove: MultiValueRemove,
    Option: Option,
    Placeholder: Placeholder,
    SelectContainer: SelectContainer,
    SingleValue: SingleValue,
    ValueContainer: ValueContainer
  };
  var defaultComponents = function defaultComponents(props) {
    return _extends$a({}, components, props.components);
  };

  var diacritics = [{
    base: 'A',
    letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
  }, {
    base: 'AA',
    letters: /[\uA732]/g
  }, {
    base: 'AE',
    letters: /[\u00C6\u01FC\u01E2]/g
  }, {
    base: 'AO',
    letters: /[\uA734]/g
  }, {
    base: 'AU',
    letters: /[\uA736]/g
  }, {
    base: 'AV',
    letters: /[\uA738\uA73A]/g
  }, {
    base: 'AY',
    letters: /[\uA73C]/g
  }, {
    base: 'B',
    letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
  }, {
    base: 'C',
    letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
  }, {
    base: 'D',
    letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
  }, {
    base: 'DZ',
    letters: /[\u01F1\u01C4]/g
  }, {
    base: 'Dz',
    letters: /[\u01F2\u01C5]/g
  }, {
    base: 'E',
    letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
  }, {
    base: 'F',
    letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
  }, {
    base: 'G',
    letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
  }, {
    base: 'H',
    letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
  }, {
    base: 'I',
    letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
  }, {
    base: 'J',
    letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
  }, {
    base: 'K',
    letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
  }, {
    base: 'L',
    letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
  }, {
    base: 'LJ',
    letters: /[\u01C7]/g
  }, {
    base: 'Lj',
    letters: /[\u01C8]/g
  }, {
    base: 'M',
    letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
  }, {
    base: 'N',
    letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
  }, {
    base: 'NJ',
    letters: /[\u01CA]/g
  }, {
    base: 'Nj',
    letters: /[\u01CB]/g
  }, {
    base: 'O',
    letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
  }, {
    base: 'OI',
    letters: /[\u01A2]/g
  }, {
    base: 'OO',
    letters: /[\uA74E]/g
  }, {
    base: 'OU',
    letters: /[\u0222]/g
  }, {
    base: 'P',
    letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
  }, {
    base: 'Q',
    letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
  }, {
    base: 'R',
    letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
  }, {
    base: 'S',
    letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
  }, {
    base: 'T',
    letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
  }, {
    base: 'TZ',
    letters: /[\uA728]/g
  }, {
    base: 'U',
    letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
  }, {
    base: 'V',
    letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
  }, {
    base: 'VY',
    letters: /[\uA760]/g
  }, {
    base: 'W',
    letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
  }, {
    base: 'X',
    letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
  }, {
    base: 'Y',
    letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
  }, {
    base: 'Z',
    letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
  }, {
    base: 'a',
    letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
  }, {
    base: 'aa',
    letters: /[\uA733]/g
  }, {
    base: 'ae',
    letters: /[\u00E6\u01FD\u01E3]/g
  }, {
    base: 'ao',
    letters: /[\uA735]/g
  }, {
    base: 'au',
    letters: /[\uA737]/g
  }, {
    base: 'av',
    letters: /[\uA739\uA73B]/g
  }, {
    base: 'ay',
    letters: /[\uA73D]/g
  }, {
    base: 'b',
    letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
  }, {
    base: 'c',
    letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
  }, {
    base: 'd',
    letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
  }, {
    base: 'dz',
    letters: /[\u01F3\u01C6]/g
  }, {
    base: 'e',
    letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
  }, {
    base: 'f',
    letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
  }, {
    base: 'g',
    letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
  }, {
    base: 'h',
    letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
  }, {
    base: 'hv',
    letters: /[\u0195]/g
  }, {
    base: 'i',
    letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
  }, {
    base: 'j',
    letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
  }, {
    base: 'k',
    letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
  }, {
    base: 'l',
    letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
  }, {
    base: 'lj',
    letters: /[\u01C9]/g
  }, {
    base: 'm',
    letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
  }, {
    base: 'n',
    letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
  }, {
    base: 'nj',
    letters: /[\u01CC]/g
  }, {
    base: 'o',
    letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
  }, {
    base: 'oi',
    letters: /[\u01A3]/g
  }, {
    base: 'ou',
    letters: /[\u0223]/g
  }, {
    base: 'oo',
    letters: /[\uA74F]/g
  }, {
    base: 'p',
    letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
  }, {
    base: 'q',
    letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
  }, {
    base: 'r',
    letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
  }, {
    base: 's',
    letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
  }, {
    base: 't',
    letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
  }, {
    base: 'tz',
    letters: /[\uA729]/g
  }, {
    base: 'u',
    letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
  }, {
    base: 'v',
    letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
  }, {
    base: 'vy',
    letters: /[\uA761]/g
  }, {
    base: 'w',
    letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
  }, {
    base: 'x',
    letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
  }, {
    base: 'y',
    letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
  }, {
    base: 'z',
    letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
  }];
  var stripDiacritics = function stripDiacritics(str) {
    for (var i$$1 = 0; i$$1 < diacritics.length; i$$1++) {
      str = str.replace(diacritics[i$$1].letters, diacritics[i$$1].base);
    }

    return str;
  };

  function _extends$b() { _extends$b = Object.assign || function (target) { for (var i$$1 = 1; i$$1 < arguments.length; i$$1++) { var source = arguments[i$$1]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

  var trimString = function trimString(str) {
    return str.replace(/^\s+|\s+$/g, '');
  };

  var defaultStringify = function defaultStringify(option) {
    return option.label + " " + option.value;
  };

  var createFilter = function createFilter(config) {
    return function (option, rawInput) {
      var _ignoreCase$ignoreAcc = _extends$b({
        ignoreCase: true,
        ignoreAccents: true,
        stringify: defaultStringify,
        trim: true,
        matchFrom: 'any'
      }, config),
          ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
          ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
          stringify = _ignoreCase$ignoreAcc.stringify,
          trim = _ignoreCase$ignoreAcc.trim,
          matchFrom = _ignoreCase$ignoreAcc.matchFrom;

      var input = trim ? trimString(rawInput) : rawInput;
      var candidate = trim ? trimString(stringify(option)) : stringify(option);

      if (ignoreCase) {
        input = input.toLowerCase();
        candidate = candidate.toLowerCase();
      }

      if (ignoreAccents) {
        input = stripDiacritics(input);
        candidate = stripDiacritics(candidate);
      }

      return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
    };
  };

  function _extends$1$2() { _extends$1$2 = Object.assign || function (target) { for (var i$$1 = 1; i$$1 < arguments.length; i$$1++) { var source = arguments[i$$1]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1$2.apply(this, arguments); }

  var _ref = undefined === "production" ? {
    name: "1laao21-a11yText",
    styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;"
  } : {
    name: "1laao21-a11yText",
    styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFNIiwiZmlsZSI6IkExMXlUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdHlwZSBFbGVtZW50Q29uZmlnIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbi8vIEFzc2lzdGl2ZSB0ZXh0IHRvIGRlc2NyaWJlIHZpc3VhbCBlbGVtZW50cy4gSGlkZGVuIGZvciBzaWdodGVkIHVzZXJzLlxuY29uc3QgQTExeVRleHQgPSAocHJvcHM6IEVsZW1lbnRDb25maWc8J3NwYW4nPikgPT4gKFxuICAgIDxzcGFuXG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdhMTF5VGV4dCcsXG4gICAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpJyxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBMTF5VGV4dDtcbiJdfQ== */"
  };

  var A11yText = function A11yText(props) {
    return jsx("span", _extends$1$2({
      css: _ref
    }, props));
  };

  function _extends$2$1() { _extends$2$1 = Object.assign || function (target) { for (var i$$1 = 1; i$$1 < arguments.length; i$$1++) { var source = arguments[i$$1]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2$1.apply(this, arguments); }

  function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i$$1; for (i$$1 = 0; i$$1 < sourceKeys.length; i$$1++) { key = sourceKeys[i$$1]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  function DummyInput(_ref) {
    var inProp = _ref.in,
        out = _ref.out,
        onExited = _ref.onExited,
        appear = _ref.appear,
        enter = _ref.enter,
        exit = _ref.exit,
        innerRef = _ref.innerRef,
        emotion = _ref.emotion,
        props = _objectWithoutPropertiesLoose$3(_ref, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

    return jsx("input", _extends$2$1({
      ref: innerRef
    }, props, {
      css:
      /*#__PURE__*/
      css({
        label: 'dummyInput',
        // get rid of any default styles
        background: 0,
        border: 0,
        fontSize: 'inherit',
        outline: 0,
        padding: 0,
        // important! without `width` browsers won't allow focus
        width: 1,
        // remove cursor on desktop
        color: 'transparent',
        // remove cursor on mobile whilst maintaining "scroll into view" behaviour
        left: -100,
        opacity: 0,
        position: 'relative',
        transform: 'scale(0)'
      }, undefined === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJNIiwiZmlsZSI6IkR1bW15SW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHVtbXlJbnB1dCh7XG4gIGluOiBpblByb3AsXG4gIG91dCxcbiAgb25FeGl0ZWQsXG4gIGFwcGVhcixcbiAgZW50ZXIsXG4gIGV4aXQsXG4gIGlubmVyUmVmLFxuICBlbW90aW9uLFxuICAuLi5wcm9wc1xufTogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgey4uLnByb3BzfVxuICAgICAgY3NzPXt7XG4gICAgICAgIGxhYmVsOiAnZHVtbXlJbnB1dCcsXG4gICAgICAgIC8vIGdldCByaWQgb2YgYW55IGRlZmF1bHQgc3R5bGVzXG4gICAgICAgIGJhY2tncm91bmQ6IDAsXG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgICAgb3V0bGluZTogMCxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgLy8gaW1wb3J0YW50ISB3aXRob3V0IGB3aWR0aGAgYnJvd3NlcnMgd29uJ3QgYWxsb3cgZm9jdXNcbiAgICAgICAgd2lkdGg6IDEsXG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBkZXNrdG9wXG4gICAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gbW9iaWxlIHdoaWxzdCBtYWludGFpbmluZyBcInNjcm9sbCBpbnRvIHZpZXdcIiBiZWhhdmlvdXJcbiAgICAgICAgbGVmdDogLTEwMCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */")
    }));
  }

  function _inheritsLoose$3(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var NodeResolver =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose$3(NodeResolver, _Component);

    function NodeResolver() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = NodeResolver.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.props.innerRef(reactDom.findDOMNode(this));
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.props.innerRef(null);
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return NodeResolver;
  }(React.Component);

  var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
  var LOCK_STYLES = {
    boxSizing: 'border-box',
    // account for possible declaration `width: 100%;` on body
    overflow: 'hidden',
    position: 'relative',
    height: '100%'
  };

  function preventTouchMove(e$$1) {
    e$$1.preventDefault();
  }
  function allowTouchMove(e$$1) {
    e$$1.stopPropagation();
  }
  function preventInertiaScroll() {
    var top = this.scrollTop;
    var totalScroll = this.scrollHeight;
    var currentScroll = top + this.offsetHeight;

    if (top === 0) {
      this.scrollTop = 1;
    } else if (currentScroll === totalScroll) {
      this.scrollTop = top - 1;
    }
  } // `ontouchstart` check works on most browsers
  // `maxTouchPoints` works on IE10/11 and Surface

  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
  }

  function _inheritsLoose$1$1(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  var activeScrollLocks = 0;

  var ScrollLock =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose$1$1(ScrollLock, _Component);

    function ScrollLock() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.originalStyles = {};
      _this.listenerOptions = {
        capture: false,
        passive: false
      };
      return _this;
    }

    var _proto = ScrollLock.prototype;

    _proto.componentDidMount = function componentDidMount() {
      var _this2 = this;

      if (!canUseDOM) return;
      var _this$props = this.props,
          accountForScrollbars = _this$props.accountForScrollbars,
          touchScrollTarget = _this$props.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style;

      if (accountForScrollbars) {
        // store any styles already applied to the body
        STYLE_KEYS.forEach(function (key) {
          var val = targetStyle && targetStyle[key];
          _this2.originalStyles[key] = val;
        });
      } // apply the lock styles and padding if this is the first scroll lock


      if (accountForScrollbars && activeScrollLocks < 1) {
        var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
        var clientWidth = document.body ? document.body.clientWidth : 0;
        var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
        Object.keys(LOCK_STYLES).forEach(function (key) {
          var val = LOCK_STYLES[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });

        if (targetStyle) {
          targetStyle.paddingRight = adjustedPadding + "px";
        }
      } // account for touch devices


      if (target && isTouchDevice()) {
        // Mobile Safari ignores { overflow: hidden } declaration on the body.
        target.addEventListener('touchmove', preventTouchMove, this.listenerOptions); // Allow scroll on provided target

        if (touchScrollTarget) {
          touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.addEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      } // increment active scroll locks


      activeScrollLocks += 1;
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      var _this3 = this;

      if (!canUseDOM) return;
      var _this$props2 = this.props,
          accountForScrollbars = _this$props2.accountForScrollbars,
          touchScrollTarget = _this$props2.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style; // safely decrement active scroll locks

      activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

      if (accountForScrollbars && activeScrollLocks < 1) {
        STYLE_KEYS.forEach(function (key) {
          var val = _this3.originalStyles[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
      } // remove touch listeners


      if (target && isTouchDevice()) {
        target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);

        if (touchScrollTarget) {
          touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.removeEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      }
    };

    _proto.render = function render() {
      return null;
    };

    return ScrollLock;
  }(React.Component);

  ScrollLock.defaultProps = {
    accountForScrollbars: true
  };

  function _inheritsLoose$2$1(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var _ref$1 = undefined === "production" ? {
    name: "1dsbpcp",
    styles: "position:fixed;left:0;bottom:0;right:0;top:0;"
  } : {
    name: "1dsbpcp",
    styles: "position:fixed;left:0;bottom:0;right:0;top:0;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbEJsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEVSIsImZpbGUiOiJTY3JvbGxCbG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFB1cmVDb21wb25lbnQsIHR5cGUgRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IE5vZGVSZXNvbHZlciBmcm9tICcuL05vZGVSZXNvbHZlcic7XG5pbXBvcnQgU2Nyb2xsTG9jayBmcm9tICcuL1Njcm9sbExvY2svaW5kZXgnO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogRWxlbWVudDwqPixcbiAgaXNFbmFibGVkOiBib29sZWFuLFxufTtcbnR5cGUgU3RhdGUgPSB7XG4gIHRvdWNoU2Nyb2xsVGFyZ2V0OiBIVE1MRWxlbWVudCB8IG51bGwsXG59O1xuXG4vLyBOT1RFOlxuLy8gV2Ugc2hvdWxkbid0IG5lZWQgdGhpcyBhZnRlciB1cGRhdGluZyB0byBSZWFjdCB2MTYuMy4wLCB3aGljaCBpbnRyb2R1Y2VzOlxuLy8gLSBjcmVhdGVSZWYoKSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjcmVhdGVyZWZcbi8vIC0gZm9yd2FyZFJlZigpIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGZvcndhcmRyZWZcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsQmxvY2sgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0ZSA9IHsgdG91Y2hTY3JvbGxUYXJnZXQ6IG51bGwgfTtcblxuICAvLyBtdXN0IGJlIGluIHN0YXRlIHRvIHRyaWdnZXIgYSByZS1yZW5kZXIsIG9ubHkgcnVucyBvbmNlIHBlciBpbnN0YW5jZVxuICBnZXRTY3JvbGxUYXJnZXQgPSAocmVmOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlmIChyZWYgPT09IHRoaXMuc3RhdGUudG91Y2hTY3JvbGxUYXJnZXQpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHsgdG91Y2hTY3JvbGxUYXJnZXQ6IHJlZiB9KTtcbiAgfTtcblxuICAvLyB0aGlzIHdpbGwgY2xvc2UgdGhlIG1lbnUgd2hlbiBhIHVzZXIgY2xpY2tzIG91dHNpZGVcbiAgYmx1clNlbGVjdElucHV0ID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGlzRW5hYmxlZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRvdWNoU2Nyb2xsVGFyZ2V0IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgLy8gYmFpbCBlYXJseSBpZiBub3QgZW5hYmxlZFxuICAgIGlmICghaXNFbmFibGVkKSByZXR1cm4gY2hpbGRyZW47XG5cbiAgICAvKlxuICAgICAqIERpdlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIGJsb2NrcyBzY3JvbGxpbmcgb24gbm9uLWJvZHkgZWxlbWVudHMgYmVoaW5kIHRoZSBtZW51XG5cbiAgICAgKiBOb2RlUmVzb2x2ZXJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiB3ZSBuZWVkIGEgcmVmZXJlbmNlIHRvIHRoZSBzY3JvbGxhYmxlIGVsZW1lbnQgdG8gXCJ1bmxvY2tcIiBzY3JvbGwgb25cbiAgICAgKiBtb2JpbGUgZGV2aWNlc1xuXG4gICAgICogU2Nyb2xsTG9ja1xuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIGFjdHVhbGx5IGRvZXMgdGhlIHNjcm9sbCBsb2NraW5nXG4gICAgICovXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmJsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgICA8Tm9kZVJlc29sdmVyIGlubmVyUmVmPXt0aGlzLmdldFNjcm9sbFRhcmdldH0+e2NoaWxkcmVufTwvTm9kZVJlc29sdmVyPlxuICAgICAgICB7dG91Y2hTY3JvbGxUYXJnZXQgPyAoXG4gICAgICAgICAgPFNjcm9sbExvY2sgdG91Y2hTY3JvbGxUYXJnZXQ9e3RvdWNoU2Nyb2xsVGFyZ2V0fSAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"
  };

  // NOTE:
  // We shouldn't need this after updating to React v16.3.0, which introduces:
  // - createRef() https://reactjs.org/docs/react-api.html#reactcreateref
  // - forwardRef() https://reactjs.org/docs/react-api.html#reactforwardref
  var ScrollBlock =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose$2$1(ScrollBlock, _PureComponent);

    function ScrollBlock() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
      _this.state = {
        touchScrollTarget: null
      };

      _this.getScrollTarget = function (ref) {
        if (ref === _this.state.touchScrollTarget) return;

        _this.setState({
          touchScrollTarget: ref
        });
      };

      _this.blurSelectInput = function () {
        if (document.activeElement) {
          document.activeElement.blur();
        }
      };

      return _this;
    }

    var _proto = ScrollBlock.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isEnabled = _this$props.isEnabled;
      var touchScrollTarget = this.state.touchScrollTarget; // bail early if not enabled

      if (!isEnabled) return children;
      /*
       * Div
       * ------------------------------
       * blocks scrolling on non-body elements behind the menu
        * NodeResolver
       * ------------------------------
       * we need a reference to the scrollable element to "unlock" scroll on
       * mobile devices
        * ScrollLock
       * ------------------------------
       * actually does the scroll locking
       */

      return jsx("div", null, jsx("div", {
        onClick: this.blurSelectInput,
        css: _ref$1
      }), jsx(NodeResolver, {
        innerRef: this.getScrollTarget
      }, children), touchScrollTarget ? jsx(ScrollLock, {
        touchScrollTarget: touchScrollTarget
      }) : null);
    };

    return ScrollBlock;
  }(React.PureComponent);

  function _objectWithoutPropertiesLoose$1$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i$$1; for (i$$1 = 0; i$$1 < sourceKeys.length; i$$1++) { key = sourceKeys[i$$1]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _inheritsLoose$3$1(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var ScrollCaptor =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose$3$1(ScrollCaptor, _Component);

    function ScrollCaptor() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.isBottom = false;
      _this.isTop = false;
      _this.scrollTarget = void 0;
      _this.touchStart = void 0;

      _this.cancelScroll = function (event) {
        event.preventDefault();
        event.stopPropagation();
      };

      _this.handleEventDelta = function (event, delta) {
        var _this$props = _this.props,
            onBottomArrive = _this$props.onBottomArrive,
            onBottomLeave = _this$props.onBottomLeave,
            onTopArrive = _this$props.onTopArrive,
            onTopLeave = _this$props.onTopLeave;
        var _this$scrollTarget = _this.scrollTarget,
            scrollTop = _this$scrollTarget.scrollTop,
            scrollHeight = _this$scrollTarget.scrollHeight,
            clientHeight = _this$scrollTarget.clientHeight;
        var target = _this.scrollTarget;
        var isDeltaPositive = delta > 0;
        var availableScroll = scrollHeight - clientHeight - scrollTop;
        var shouldCancelScroll = false; // reset bottom/top flags

        if (availableScroll > delta && _this.isBottom) {
          if (onBottomLeave) onBottomLeave(event);
          _this.isBottom = false;
        }

        if (isDeltaPositive && _this.isTop) {
          if (onTopLeave) onTopLeave(event);
          _this.isTop = false;
        } // bottom limit


        if (isDeltaPositive && delta > availableScroll) {
          if (onBottomArrive && !_this.isBottom) {
            onBottomArrive(event);
          }

          target.scrollTop = scrollHeight;
          shouldCancelScroll = true;
          _this.isBottom = true; // top limit
        } else if (!isDeltaPositive && -delta > scrollTop) {
          if (onTopArrive && !_this.isTop) {
            onTopArrive(event);
          }

          target.scrollTop = 0;
          shouldCancelScroll = true;
          _this.isTop = true;
        } // cancel scroll


        if (shouldCancelScroll) {
          _this.cancelScroll(event);
        }
      };

      _this.onWheel = function (event) {
        _this.handleEventDelta(event, event.deltaY);
      };

      _this.onTouchStart = function (event) {
        // set touch start so we can calculate touchmove delta
        _this.touchStart = event.changedTouches[0].clientY;
      };

      _this.onTouchMove = function (event) {
        var deltaY = _this.touchStart - event.changedTouches[0].clientY;

        _this.handleEventDelta(event, deltaY);
      };

      _this.getScrollTarget = function (ref) {
        _this.scrollTarget = ref;
      };

      return _this;
    }

    var _proto = ScrollCaptor.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.startListening(this.scrollTarget);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.stopListening(this.scrollTarget);
    };

    _proto.startListening = function startListening(el) {
      // bail early if no element is available to attach to
      if (!el) return; // all the if statements are to appease Flow 😢

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchmove', this.onTouchMove, false);
      }
    };

    _proto.stopListening = function stopListening(el) {
      // all the if statements are to appease Flow 😢
      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchmove', this.onTouchMove, false);
      }
    };

    _proto.render = function render() {
      return React__default.createElement(NodeResolver, {
        innerRef: this.getScrollTarget
      }, this.props.children);
    };

    return ScrollCaptor;
  }(React.Component);

  function ScrollCaptorSwitch(_ref) {
    var _ref$isEnabled = _ref.isEnabled,
        isEnabled = _ref$isEnabled === void 0 ? true : _ref$isEnabled,
        props = _objectWithoutPropertiesLoose$1$2(_ref, ["isEnabled"]);

    return isEnabled ? React__default.createElement(ScrollCaptor, props) : props.children;
  }

  var instructionsAriaMessage = function instructionsAriaMessage(event, context) {
    if (context === void 0) {
      context = {};
    }

    var _context = context,
        isSearchable = _context.isSearchable,
        isMulti = _context.isMulti,
        label = _context.label,
        isDisabled = _context.isDisabled;

    switch (event) {
      case 'menu':
        return "Use Up and Down to choose options" + (isDisabled ? '' : ', press Enter to select the currently focused option') + ", press Escape to exit the menu, press Tab to select the option and exit the menu.";

      case 'input':
        return (label ? label : 'Select') + " is focused " + (isSearchable ? ',type to refine list' : '') + ", press Down to open the menu, " + (isMulti ? ' press left to focus selected values' : '');

      case 'value':
        return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
    }
  };
  var valueEventAriaMessage = function valueEventAriaMessage(event, context) {
    var value = context.value,
        isDisabled = context.isDisabled;
    if (!value) return;

    switch (event) {
      case 'deselect-option':
      case 'pop-value':
      case 'remove-value':
        return "option " + value + ", deselected.";

      case 'select-option':
        return isDisabled ? "option " + value + " is disabled. Select another option." : "option " + value + ", selected.";
    }
  };
  var valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
    var focusedValue = _ref.focusedValue,
        getOptionLabel = _ref.getOptionLabel,
        selectValue = _ref.selectValue;
    return "value " + getOptionLabel(focusedValue) + " focused, " + (selectValue.indexOf(focusedValue) + 1) + " of " + selectValue.length + ".";
  };
  var optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
    var focusedOption = _ref2.focusedOption,
        getOptionLabel = _ref2.getOptionLabel,
        options = _ref2.options;
    return "option " + getOptionLabel(focusedOption) + " focused" + (focusedOption.isDisabled ? ' disabled' : '') + ", " + (options.indexOf(focusedOption) + 1) + " of " + options.length + ".";
  };
  var resultsAriaMessage = function resultsAriaMessage(_ref3) {
    var inputValue = _ref3.inputValue,
        screenReaderMessage = _ref3.screenReaderMessage;
    return "" + screenReaderMessage + (inputValue ? ' for search term ' + inputValue : '') + ".";
  };

  var formatGroupLabel = function formatGroupLabel(group) {
    return group.label;
  };
  var getOptionLabel = function getOptionLabel(option) {
    return option.label;
  };
  var getOptionValue = function getOptionValue(option) {
    return option.value;
  };
  var isOptionDisabled = function isOptionDisabled(option) {
    return !!option.isDisabled;
  };
  var defaultStyles = {
    clearIndicator: clearIndicatorCSS,
    container: containerCSS,
    control: css$1,
    dropdownIndicator: dropdownIndicatorCSS,
    group: groupCSS,
    groupHeading: groupHeadingCSS,
    indicatorsContainer: indicatorsContainerCSS,
    indicatorSeparator: indicatorSeparatorCSS,
    input: inputCSS,
    loadingIndicator: loadingIndicatorCSS,
    loadingMessage: loadingMessageCSS,
    menu: menuCSS,
    menuList: menuListCSS,
    menuPortal: menuPortalCSS,
    multiValue: multiValueCSS,
    multiValueLabel: multiValueLabelCSS,
    multiValueRemove: multiValueRemoveCSS,
    noOptionsMessage: noOptionsMessageCSS,
    option: optionCSS,
    placeholder: placeholderCSS,
    singleValue: css$1$1,
    valueContainer: valueContainerCSS
  }; // Merge Utility

  var colors = {
    primary: '#2684FF',
    primary75: '#4C9AFF',
    primary50: '#B2D4FF',
    primary25: '#DEEBFF',
    danger: '#DE350B',
    dangerLight: '#FFBDAD',
    neutral0: 'hsl(0, 0%, 100%)',
    neutral5: 'hsl(0, 0%, 95%)',
    neutral10: 'hsl(0, 0%, 90%)',
    neutral20: 'hsl(0, 0%, 80%)',
    neutral30: 'hsl(0, 0%, 70%)',
    neutral40: 'hsl(0, 0%, 60%)',
    neutral50: 'hsl(0, 0%, 50%)',
    neutral60: 'hsl(0, 0%, 40%)',
    neutral70: 'hsl(0, 0%, 30%)',
    neutral80: 'hsl(0, 0%, 20%)',
    neutral90: 'hsl(0, 0%, 10%)'
  };
  var borderRadius = 4; // Used to calculate consistent margin/padding on elements

  var baseUnit = 4; // The minimum height of the control

  var controlHeight = 38; // The amount of space between the control and menu */

  var menuGutter = baseUnit * 2;
  var spacing = {
    baseUnit: baseUnit,
    controlHeight: controlHeight,
    menuGutter: menuGutter
  };
  var defaultTheme = {
    borderRadius: borderRadius,
    colors: colors,
    spacing: spacing
  };

  function _objectWithoutPropertiesLoose$2$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i$$1; for (i$$1 = 0; i$$1 < sourceKeys.length; i$$1++) { key = sourceKeys[i$$1]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _extends$4$1() { _extends$4$1 = Object.assign || function (target) { for (var i$$1 = 1; i$$1 < arguments.length; i$$1++) { var source = arguments[i$$1]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4$1.apply(this, arguments); }

  function _inheritsLoose$4(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  var defaultProps = {
    backspaceRemovesValue: true,
    blurInputOnSelect: isTouchCapable(),
    captureMenuScroll: !isTouchCapable(),
    closeMenuOnSelect: true,
    closeMenuOnScroll: false,
    components: {},
    controlShouldRenderValue: true,
    escapeClearsValue: false,
    filterOption: createFilter(),
    formatGroupLabel: formatGroupLabel,
    getOptionLabel: getOptionLabel,
    getOptionValue: getOptionValue,
    isDisabled: false,
    isLoading: false,
    isMulti: false,
    isRtl: false,
    isSearchable: true,
    isOptionDisabled: isOptionDisabled,
    loadingMessage: function loadingMessage() {
      return 'Loading...';
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: false,
    menuPlacement: 'bottom',
    menuPosition: 'absolute',
    menuShouldBlockScroll: false,
    menuShouldScrollIntoView: !isMobileDevice(),
    noOptionsMessage: function noOptionsMessage() {
      return 'No options';
    },
    openMenuOnFocus: false,
    openMenuOnClick: true,
    options: [],
    pageSize: 5,
    placeholder: 'Select...',
    screenReaderStatus: function screenReaderStatus(_ref) {
      var count = _ref.count;
      return count + " result" + (count !== 1 ? 's' : '') + " available";
    },
    styles: {},
    tabIndex: '0',
    tabSelectsValue: true
  };
  var instanceId = 1;

  var Select =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose$4(Select, _Component);

    // Misc. Instance Properties
    // ------------------------------
    // TODO
    // Refs
    // ------------------------------
    // Lifecycle
    // ------------------------------
    function Select(_props) {
      var _this;

      _this = _Component.call(this, _props) || this;
      _this.state = {
        ariaLiveSelection: '',
        ariaLiveContext: '',
        focusedOption: null,
        focusedValue: null,
        inputIsHidden: false,
        isFocused: false,
        menuOptions: {
          render: [],
          focusable: []
        },
        selectValue: []
      };
      _this.blockOptionHover = false;
      _this.isComposing = false;
      _this.clearFocusValueOnUpdate = false;
      _this.commonProps = void 0;
      _this.components = void 0;
      _this.hasGroups = false;
      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
      _this.inputIsHiddenAfterUpdate = void 0;
      _this.instancePrefix = '';
      _this.openAfterFocus = false;
      _this.scrollToFocusedOptionOnUpdate = false;
      _this.userIsDragging = void 0;
      _this.controlRef = null;

      _this.getControlRef = function (ref) {
        _this.controlRef = ref;
      };

      _this.focusedOptionRef = null;

      _this.getFocusedOptionRef = function (ref) {
        _this.focusedOptionRef = ref;
      };

      _this.menuListRef = null;

      _this.getMenuListRef = function (ref) {
        _this.menuListRef = ref;
      };

      _this.inputRef = null;

      _this.getInputRef = function (ref) {
        _this.inputRef = ref;
      };

      _this.cacheComponents = function (components$$1) {
        _this.components = defaultComponents({
          components: components$$1
        });
      };

      _this.focus = _this.focusInput;
      _this.blur = _this.blurInput;

      _this.onChange = function (newValue, actionMeta) {
        var _this$props = _this.props,
            onChange = _this$props.onChange,
            name = _this$props.name;
        onChange(newValue, _extends$4$1({}, actionMeta, {
          name: name
        }));
      };

      _this.setValue = function (newValue, action, option) {
        if (action === void 0) {
          action = 'set-value';
        }

        var _this$props2 = _this.props,
            closeMenuOnSelect = _this$props2.closeMenuOnSelect,
            isMulti = _this$props2.isMulti;

        _this.onInputChange('', {
          action: 'set-value'
        });

        if (closeMenuOnSelect) {
          _this.inputIsHiddenAfterUpdate = !isMulti;

          _this.onMenuClose();
        } // when the select value should change, we should reset focusedValue


        _this.clearFocusValueOnUpdate = true;

        _this.onChange(newValue, {
          action: action,
          option: option
        });
      };

      _this.selectOption = function (newValue) {
        var _this$props3 = _this.props,
            blurInputOnSelect = _this$props3.blurInputOnSelect,
            isMulti = _this$props3.isMulti;
        var selectValue = _this.state.selectValue;

        if (isMulti) {
          if (_this.isOptionSelected(newValue, selectValue)) {
            var candidate = _this.getOptionValue(newValue);

            _this.setValue(selectValue.filter(function (i$$1) {
              return _this.getOptionValue(i$$1) !== candidate;
            }), 'deselect-option', newValue);

            _this.announceAriaLiveSelection({
              event: 'deselect-option',
              context: {
                value: _this.getOptionLabel(newValue)
              }
            });
          } else {
            if (!_this.isOptionDisabled(newValue, selectValue)) {
              _this.setValue([].concat(selectValue, [newValue]), 'select-option', newValue);

              _this.announceAriaLiveSelection({
                event: 'select-option',
                context: {
                  value: _this.getOptionLabel(newValue)
                }
              });
            } else {
              // announce that option is disabled
              _this.announceAriaLiveSelection({
                event: 'select-option',
                context: {
                  value: _this.getOptionLabel(newValue),
                  isDisabled: true
                }
              });
            }
          }
        } else {
          if (!_this.isOptionDisabled(newValue, selectValue)) {
            _this.setValue(newValue, 'select-option');

            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue)
              }
            });
          } else {
            // announce that option is disabled
            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue),
                isDisabled: true
              }
            });
          }
        }

        if (blurInputOnSelect) {
          _this.blurInput();
        }
      };

      _this.removeValue = function (removedValue) {
        var selectValue = _this.state.selectValue;

        var candidate = _this.getOptionValue(removedValue);

        var newValue = selectValue.filter(function (i$$1) {
          return _this.getOptionValue(i$$1) !== candidate;
        });

        _this.onChange(newValue.length ? newValue : null, {
          action: 'remove-value',
          removedValue: removedValue
        });

        _this.announceAriaLiveSelection({
          event: 'remove-value',
          context: {
            value: removedValue ? _this.getOptionLabel(removedValue) : ''
          }
        });

        _this.focusInput();
      };

      _this.clearValue = function () {
        var isMulti = _this.props.isMulti;

        _this.onChange(isMulti ? [] : null, {
          action: 'clear'
        });
      };

      _this.popValue = function () {
        var selectValue = _this.state.selectValue;
        var lastSelectedValue = selectValue[selectValue.length - 1];
        var newValue = selectValue.slice(0, selectValue.length - 1);

        _this.announceAriaLiveSelection({
          event: 'pop-value',
          context: {
            value: lastSelectedValue ? _this.getOptionLabel(lastSelectedValue) : ''
          }
        });

        _this.onChange(newValue.length ? newValue : null, {
          action: 'pop-value',
          removedValue: lastSelectedValue
        });
      };

      _this.getOptionLabel = function (data) {
        return _this.props.getOptionLabel(data);
      };

      _this.getOptionValue = function (data) {
        return _this.props.getOptionValue(data);
      };

      _this.getStyles = function (key, props) {
        var base = defaultStyles[key](props);
        base.boxSizing = 'border-box';
        var custom = _this.props.styles[key];
        return custom ? custom(base, props) : base;
      };

      _this.getElementId = function (element) {
        return _this.instancePrefix + "-" + element;
      };

      _this.getActiveDescendentId = function () {
        var menuIsOpen = _this.props.menuIsOpen;
        var _this$state = _this.state,
            menuOptions = _this$state.menuOptions,
            focusedOption = _this$state.focusedOption;
        if (!focusedOption || !menuIsOpen) return undefined;
        var index = menuOptions.focusable.indexOf(focusedOption);
        var option = menuOptions.render[index];
        return option && option.key;
      };

      _this.announceAriaLiveSelection = function (_ref2) {
        var event = _ref2.event,
            context = _ref2.context;

        _this.setState({
          ariaLiveSelection: valueEventAriaMessage(event, context)
        });
      };

      _this.announceAriaLiveContext = function (_ref3) {
        var event = _ref3.event,
            context = _ref3.context;

        _this.setState({
          ariaLiveContext: instructionsAriaMessage(event, _extends$4$1({}, context, {
            label: _this.props['aria-label']
          }))
        });
      };

      _this.onMenuMouseDown = function (event) {
        if (event.button !== 0) {
          return;
        }

        event.stopPropagation();
        event.preventDefault();

        _this.focusInput();
      };

      _this.onMenuMouseMove = function (event) {
        _this.blockOptionHover = false;
      };

      _this.onControlMouseDown = function (event) {
        var openMenuOnClick = _this.props.openMenuOnClick;

        if (!_this.state.isFocused) {
          if (openMenuOnClick) {
            _this.openAfterFocus = true;
          }

          _this.focusInput();
        } else if (!_this.props.menuIsOpen) {
          if (openMenuOnClick) {
            _this.openMenu('first');
          }
        } else {
          if ( // $FlowFixMe
          event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
            _this.onMenuClose();
          }
        }

        if ( // $FlowFixMe
        event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          event.preventDefault();
        }
      };

      _this.onDropdownIndicatorMouseDown = function (event) {
        // ignore mouse events that weren't triggered by the primary button
        if (event && event.type === 'mousedown' && event.button !== 0) {
          return;
        }

        if (_this.props.isDisabled) return;
        var _this$props4 = _this.props,
            isMulti = _this$props4.isMulti,
            menuIsOpen = _this$props4.menuIsOpen;

        _this.focusInput();

        if (menuIsOpen) {
          _this.inputIsHiddenAfterUpdate = !isMulti;

          _this.onMenuClose();
        } else {
          _this.openMenu('first');
        }

        event.preventDefault();
        event.stopPropagation();
      };

      _this.onClearIndicatorMouseDown = function (event) {
        // ignore mouse events that weren't triggered by the primary button
        if (event && event.type === 'mousedown' && event.button !== 0) {
          return;
        }

        _this.clearValue();

        event.stopPropagation();
        _this.openAfterFocus = false;

        if (event.type === 'touchend') {
          _this.focusInput();
        } else {
          setTimeout(function () {
            return _this.focusInput();
          });
        }
      };

      _this.onScroll = function (event) {
        if (typeof _this.props.closeMenuOnScroll === 'boolean') {
          if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
            _this.props.onMenuClose();
          }
        } else if (typeof _this.props.closeMenuOnScroll === 'function') {
          if (_this.props.closeMenuOnScroll(event)) {
            _this.props.onMenuClose();
          }
        }
      };

      _this.onCompositionStart = function () {
        _this.isComposing = true;
      };

      _this.onCompositionEnd = function () {
        _this.isComposing = false;
      };

      _this.onTouchStart = function (_ref4) {
        var touches = _ref4.touches;
        var touch = touches.item(0);

        if (!touch) {
          return;
        }

        _this.initialTouchX = touch.clientX;
        _this.initialTouchY = touch.clientY;
        _this.userIsDragging = false;
      };

      _this.onTouchMove = function (_ref5) {
        var touches = _ref5.touches;
        var touch = touches.item(0);

        if (!touch) {
          return;
        }

        var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
        var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
        var moveThreshold = 5;
        _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
      };

      _this.onTouchEnd = function (event) {
        if (_this.userIsDragging) return; // close the menu if the user taps outside
        // we're checking on event.target here instead of event.currentTarget, because we want to assert information
        // on events on child elements, not the document (which we've attached this handler to).

        if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
          _this.blurInput();
        } // reset move vars


        _this.initialTouchX = 0;
        _this.initialTouchY = 0;
      };

      _this.onControlTouchEnd = function (event) {
        if (_this.userIsDragging) return;

        _this.onControlMouseDown(event);
      };

      _this.onClearIndicatorTouchEnd = function (event) {
        if (_this.userIsDragging) return;

        _this.onClearIndicatorMouseDown(event);
      };

      _this.onDropdownIndicatorTouchEnd = function (event) {
        if (_this.userIsDragging) return;

        _this.onDropdownIndicatorMouseDown(event);
      };

      _this.handleInputChange = function (event) {
        var inputValue = event.currentTarget.value;
        _this.inputIsHiddenAfterUpdate = false;

        _this.onInputChange(inputValue, {
          action: 'input-change'
        });

        _this.onMenuOpen();
      };

      _this.onInputFocus = function (event) {
        var _this$props5 = _this.props,
            isSearchable = _this$props5.isSearchable,
            isMulti = _this$props5.isMulti;

        if (_this.props.onFocus) {
          _this.props.onFocus(event);
        }

        _this.inputIsHiddenAfterUpdate = false;

        _this.announceAriaLiveContext({
          event: 'input',
          context: {
            isSearchable: isSearchable,
            isMulti: isMulti
          }
        });

        _this.setState({
          isFocused: true
        });

        if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
          _this.openMenu('first');
        }

        _this.openAfterFocus = false;
      };

      _this.onInputBlur = function (event) {
        if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
          _this.inputRef.focus();

          return;
        }

        if (_this.props.onBlur) {
          _this.props.onBlur(event);
        }

        _this.onInputChange('', {
          action: 'input-blur'
        });

        _this.onMenuClose();

        _this.setState({
          focusedValue: null,
          isFocused: false
        });
      };

      _this.onOptionHover = function (focusedOption) {
        if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
          return;
        }

        _this.setState({
          focusedOption: focusedOption
        });
      };

      _this.shouldHideSelectedOptions = function () {
        var _this$props6 = _this.props,
            hideSelectedOptions = _this$props6.hideSelectedOptions,
            isMulti = _this$props6.isMulti;
        if (hideSelectedOptions === undefined) return isMulti;
        return hideSelectedOptions;
      };

      _this.onKeyDown = function (event) {
        var _this$props7 = _this.props,
            isMulti = _this$props7.isMulti,
            backspaceRemovesValue = _this$props7.backspaceRemovesValue,
            escapeClearsValue = _this$props7.escapeClearsValue,
            inputValue = _this$props7.inputValue,
            isClearable = _this$props7.isClearable,
            isDisabled = _this$props7.isDisabled,
            menuIsOpen = _this$props7.menuIsOpen,
            onKeyDown = _this$props7.onKeyDown,
            tabSelectsValue = _this$props7.tabSelectsValue,
            openMenuOnFocus = _this$props7.openMenuOnFocus;
        var _this$state2 = _this.state,
            focusedOption = _this$state2.focusedOption,
            focusedValue = _this$state2.focusedValue,
            selectValue = _this$state2.selectValue;
        if (isDisabled) return;

        if (typeof onKeyDown === 'function') {
          onKeyDown(event);

          if (event.defaultPrevented) {
            return;
          }
        } // Block option hover events when the user has just pressed a key


        _this.blockOptionHover = true;

        switch (event.key) {
          case 'ArrowLeft':
            if (!isMulti || inputValue) return;

            _this.focusValue('previous');

            break;

          case 'ArrowRight':
            if (!isMulti || inputValue) return;

            _this.focusValue('next');

            break;

          case 'Delete':
          case 'Backspace':
            if (inputValue) return;

            if (focusedValue) {
              _this.removeValue(focusedValue);
            } else {
              if (!backspaceRemovesValue) return;

              if (isMulti) {
                _this.popValue();
              } else if (isClearable) {
                _this.clearValue();
              }
            }

            break;

          case 'Tab':
            if (_this.isComposing) return;

            if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
              return;
            }

            _this.selectOption(focusedOption);

            break;

          case 'Enter':
            if (event.keyCode === 229) {
              // ignore the keydown event from an Input Method Editor(IME)
              // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
              break;
            }

            if (menuIsOpen) {
              if (!focusedOption) return;
              if (_this.isComposing) return;

              _this.selectOption(focusedOption);

              break;
            }

            return;

          case 'Escape':
            if (menuIsOpen) {
              _this.inputIsHiddenAfterUpdate = false;

              _this.onInputChange('', {
                action: 'menu-close'
              });

              _this.onMenuClose();
            } else if (isClearable && escapeClearsValue) {
              _this.clearValue();
            }

            break;

          case ' ':
            // space
            if (inputValue) {
              return;
            }

            if (!menuIsOpen) {
              _this.openMenu('first');

              break;
            }

            if (!focusedOption) return;

            _this.selectOption(focusedOption);

            break;

          case 'ArrowUp':
            if (menuIsOpen) {
              _this.focusOption('up');
            } else {
              _this.openMenu('last');
            }

            break;

          case 'ArrowDown':
            if (menuIsOpen) {
              _this.focusOption('down');
            } else {
              _this.openMenu('first');
            }

            break;

          case 'PageUp':
            if (!menuIsOpen) return;

            _this.focusOption('pageup');

            break;

          case 'PageDown':
            if (!menuIsOpen) return;

            _this.focusOption('pagedown');

            break;

          case 'Home':
            if (!menuIsOpen) return;

            _this.focusOption('first');

            break;

          case 'End':
            if (!menuIsOpen) return;

            _this.focusOption('last');

            break;

          default:
            return;
        }

        event.preventDefault();
      };

      _this.buildMenuOptions = function (props, selectValue) {
        var _props$inputValue = props.inputValue,
            inputValue = _props$inputValue === void 0 ? '' : _props$inputValue,
            options = props.options;

        var toOption = function toOption(option, id) {
          var isDisabled = _this.isOptionDisabled(option, selectValue);

          var isSelected = _this.isOptionSelected(option, selectValue);

          var label = _this.getOptionLabel(option);

          var value = _this.getOptionValue(option);

          if (_this.shouldHideSelectedOptions() && isSelected || !_this.filterOption({
            label: label,
            value: value,
            data: option
          }, inputValue)) {
            return;
          }

          var onHover = isDisabled ? undefined : function () {
            return _this.onOptionHover(option);
          };
          var onSelect = isDisabled ? undefined : function () {
            return _this.selectOption(option);
          };
          var optionId = _this.getElementId('option') + "-" + id;
          return {
            innerProps: {
              id: optionId,
              onClick: onSelect,
              onMouseMove: onHover,
              onMouseOver: onHover,
              tabIndex: -1
            },
            data: option,
            isDisabled: isDisabled,
            isSelected: isSelected,
            key: optionId,
            label: label,
            type: 'option',
            value: value
          };
        };

        return options.reduce(function (acc, item, itemIndex) {
          if (item.options) {
            // TODO needs a tidier implementation
            if (!_this.hasGroups) _this.hasGroups = true;
            var items = item.options;
            var children = items.map(function (child, i$$1) {
              var option = toOption(child, itemIndex + "-" + i$$1);
              if (option) acc.focusable.push(child);
              return option;
            }).filter(Boolean);

            if (children.length) {
              var groupId = _this.getElementId('group') + "-" + itemIndex;
              acc.render.push({
                type: 'group',
                key: groupId,
                data: item,
                options: children
              });
            }
          } else {
            var option = toOption(item, "" + itemIndex);

            if (option) {
              acc.render.push(option);
              acc.focusable.push(item);
            }
          }

          return acc;
        }, {
          render: [],
          focusable: []
        });
      };

      var _value = _props.value;
      _this.cacheComponents = memoizeOne(_this.cacheComponents, exportedEqual).bind(_assertThisInitialized$1(_assertThisInitialized$1(_this)));

      _this.cacheComponents(_props.components);

      _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

      var _selectValue = cleanValue(_value);

      _this.buildMenuOptions = memoizeOne(_this.buildMenuOptions, function (newArgs, lastArgs) {
        var _ref6 = newArgs,
            newProps = _ref6[0],
            newSelectValue = _ref6[1];
        var _ref7 = lastArgs,
            lastProps = _ref7[0],
            lastSelectValue = _ref7[1];
        return exportedEqual(newSelectValue, lastSelectValue) && exportedEqual(newProps.inputValue, lastProps.inputValue) && exportedEqual(newProps.options, lastProps.options);
      }).bind(_assertThisInitialized$1(_assertThisInitialized$1(_this)));

      var _menuOptions = _props.menuIsOpen ? _this.buildMenuOptions(_props, _selectValue) : {
        render: [],
        focusable: []
      };

      _this.state.menuOptions = _menuOptions;
      _this.state.selectValue = _selectValue;
      return _this;
    }

    var _proto = Select.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();

      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }

      if (this.props.autoFocus) {
        this.focusInput();
      }
    };

    _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this$props8 = this.props,
          options = _this$props8.options,
          value = _this$props8.value,
          menuIsOpen = _this$props8.menuIsOpen,
          inputValue = _this$props8.inputValue; // re-cache custom components

      this.cacheComponents(nextProps.components); // rebuild the menu options

      if (nextProps.value !== value || nextProps.options !== options || nextProps.menuIsOpen !== menuIsOpen || nextProps.inputValue !== inputValue) {
        var selectValue = cleanValue(nextProps.value);
        var menuOptions = nextProps.menuIsOpen ? this.buildMenuOptions(nextProps, selectValue) : {
          render: [],
          focusable: []
        };
        var focusedValue = this.getNextFocusedValue(selectValue);
        var focusedOption = this.getNextFocusedOption(menuOptions.focusable);
        this.setState({
          menuOptions: menuOptions,
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedValue: focusedValue
        });
      } // some updates should toggle the state of the input visibility


      if (this.inputIsHiddenAfterUpdate != null) {
        this.setState({
          inputIsHidden: this.inputIsHiddenAfterUpdate
        });
        delete this.inputIsHiddenAfterUpdate;
      }
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var _this$props9 = this.props,
          isDisabled = _this$props9.isDisabled,
          menuIsOpen = _this$props9.menuIsOpen;
      var isFocused = this.state.isFocused;

      if ( // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      } // scroll the focused option into view if necessary


      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    };

    // ==============================
    // Consumer Handlers
    // ==============================
    _proto.onMenuOpen = function onMenuOpen() {
      this.props.onMenuOpen();
    };

    _proto.onMenuClose = function onMenuClose() {
      var _this$props10 = this.props,
          isSearchable = _this$props10.isSearchable,
          isMulti = _this$props10.isMulti;
      this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });
      this.onInputChange('', {
        action: 'menu-close'
      });
      this.props.onMenuClose();
    };

    _proto.onInputChange = function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    } // ==============================
    // Methods
    // ==============================
    ;

    _proto.focusInput = function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    };

    _proto.blurInput = function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    } // aliased for consumers
    ;

    _proto.openMenu = function openMenu(focusOption) {
      var _this2 = this;

      var _this$state3 = this.state,
          selectValue = _this$state3.selectValue,
          isFocused = _this$state3.isFocused;
      var menuOptions = this.buildMenuOptions(this.props, selectValue);
      var isMulti = this.props.isMulti;
      var openAtIndex = focusOption === 'first' ? 0 : menuOptions.focusable.length - 1;

      if (!isMulti) {
        var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);

        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      } // only scroll if the menu isn't already open


      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.inputIsHiddenAfterUpdate = false;
      this.setState({
        menuOptions: menuOptions,
        focusedValue: null,
        focusedOption: menuOptions.focusable[openAtIndex]
      }, function () {
        _this2.onMenuOpen();

        _this2.announceAriaLiveContext({
          event: 'menu'
        });
      });
    };

    _proto.focusValue = function focusValue(direction) {
      var _this$props11 = this.props,
          isMulti = _this$props11.isMulti,
          isSearchable = _this$props11.isSearchable;
      var _this$state4 = this.state,
          selectValue = _this$state4.selectValue,
          focusedValue = _this$state4.focusedValue; // Only multiselects support value focusing

      if (!isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);

      if (!focusedValue) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'value'
        });
      }

      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;

      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }

          break;

        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }

          break;
      }

      if (nextFocus === -1) {
        this.announceAriaLiveContext({
          event: 'input',
          context: {
            isSearchable: isSearchable,
            isMulti: isMulti
          }
        });
      }

      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    };

    _proto.focusOption = function focusOption(direction) {
      if (direction === void 0) {
        direction = 'first';
      }

      var pageSize = this.props.pageSize;
      var _this$state5 = this.state,
          focusedOption = _this$state5.focusedOption,
          menuOptions = _this$state5.menuOptions;
      var options = menuOptions.focusable;
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'

      var focusedIndex = options.indexOf(focusedOption);

      if (!focusedOption) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'menu'
        });
      }

      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }

      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
      this.announceAriaLiveContext({
        event: 'menu',
        context: {
          isDisabled: isOptionDisabled(options[nextFocus])
        }
      });
    };

    // ==============================
    // Getters
    // ==============================
    _proto.getTheme = function getTheme() {
      // Use the default theme if there are no customizations.
      if (!this.props.theme) {
        return defaultTheme;
      } // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.


      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      } // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.


      return _extends$4$1({}, defaultTheme, this.props.theme);
    };

    _proto.getCommonProps = function getCommonProps() {
      var clearValue = this.clearValue,
          getStyles = this.getStyles,
          setValue = this.setValue,
          selectOption = this.selectOption,
          props = this.props;
      var classNamePrefix = props.classNamePrefix,
          isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
      var selectValue = this.state.selectValue;
      var hasValue = this.hasValue();

      var getValue = function getValue() {
        return selectValue;
      };

      var cx = classNames.bind(null, classNamePrefix);
      return {
        cx: cx,
        clearValue: clearValue,
        getStyles: getStyles,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        setValue: setValue,
        selectProps: props,
        theme: this.getTheme()
      };
    };

    _proto.getNextFocusedValue = function getNextFocusedValue(nextSelectValue) {
      if (this.clearFocusValueOnUpdate) {
        this.clearFocusValueOnUpdate = false;
        return null;
      }

      var _this$state6 = this.state,
          focusedValue = _this$state6.focusedValue,
          lastSelectValue = _this$state6.selectValue;
      var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

      if (lastFocusedIndex > -1) {
        var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

        if (nextFocusedIndex > -1) {
          // the focused value is still in the selectValue, return it
          return focusedValue;
        } else if (lastFocusedIndex < nextSelectValue.length) {
          // the focusedValue is not present in the next selectValue array by
          // reference, so return the new value at the same index
          return nextSelectValue[lastFocusedIndex];
        }
      }

      return null;
    };

    _proto.getNextFocusedOption = function getNextFocusedOption(options) {
      var lastFocusedOption = this.state.focusedOption;
      return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
    };

    _proto.hasValue = function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    };

    _proto.hasOptions = function hasOptions() {
      return !!this.state.menuOptions.render.length;
    };

    _proto.countOptions = function countOptions() {
      return this.state.menuOptions.focusable.length;
    };

    _proto.isClearable = function isClearable() {
      var _this$props12 = this.props,
          isClearable = _this$props12.isClearable,
          isMulti = _this$props12.isMulti; // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable

      if (isClearable === undefined) return isMulti;
      return isClearable;
    };

    _proto.isOptionDisabled = function isOptionDisabled(option, selectValue) {
      return typeof this.props.isOptionDisabled === 'function' ? this.props.isOptionDisabled(option, selectValue) : false;
    };

    _proto.isOptionSelected = function isOptionSelected(option, selectValue) {
      var _this3 = this;

      if (selectValue.indexOf(option) > -1) return true;

      if (typeof this.props.isOptionSelected === 'function') {
        return this.props.isOptionSelected(option, selectValue);
      }

      var candidate = this.getOptionValue(option);
      return selectValue.some(function (i$$1) {
        return _this3.getOptionValue(i$$1) === candidate;
      });
    };

    _proto.filterOption = function filterOption(option, inputValue) {
      return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
    };

    _proto.formatOptionLabel = function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var inputValue = this.props.inputValue;
        var selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: inputValue,
          selectValue: selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    };

    _proto.formatGroupLabel = function formatGroupLabel(data) {
      return this.props.formatGroupLabel(data);
    } // ==============================
    // Mouse Handlers
    // ==============================
    ;

    // ==============================
    // Composition Handlers
    // ==============================
    _proto.startListeningComposition = function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    };

    _proto.stopListeningComposition = function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    };

    // ==============================
    // Touch Handlers
    // ==============================
    _proto.startListeningToTouch = function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    };

    _proto.stopListeningToTouch = function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    };

    // ==============================
    // Renderers
    // ==============================
    _proto.constructAriaLiveMessage = function constructAriaLiveMessage() {
      var _this$state7 = this.state,
          ariaLiveContext = _this$state7.ariaLiveContext,
          selectValue = _this$state7.selectValue,
          focusedValue = _this$state7.focusedValue,
          focusedOption = _this$state7.focusedOption;
      var _this$props13 = this.props,
          options = _this$props13.options,
          menuIsOpen = _this$props13.menuIsOpen,
          inputValue = _this$props13.inputValue,
          screenReaderStatus = _this$props13.screenReaderStatus; // An aria live message representing the currently focused value in the select.

      var focusedValueMsg = focusedValue ? valueFocusAriaMessage({
        focusedValue: focusedValue,
        getOptionLabel: this.getOptionLabel,
        selectValue: selectValue
      }) : ''; // An aria live message representing the currently focused option in the select.

      var focusedOptionMsg = focusedOption && menuIsOpen ? optionFocusAriaMessage({
        focusedOption: focusedOption,
        getOptionLabel: this.getOptionLabel,
        options: options
      }) : ''; // An aria live message representing the set of focusable results and current searchterm/inputvalue.

      var resultsMsg = resultsAriaMessage({
        inputValue: inputValue,
        screenReaderMessage: screenReaderStatus({
          count: this.countOptions()
        })
      });
      return focusedValueMsg + " " + focusedOptionMsg + " " + resultsMsg + " " + ariaLiveContext;
    };

    _proto.renderInput = function renderInput() {
      var _this$props14 = this.props,
          isDisabled = _this$props14.isDisabled,
          isSearchable = _this$props14.isSearchable,
          inputId = _this$props14.inputId,
          inputValue = _this$props14.inputValue,
          tabIndex = _this$props14.tabIndex;
      var Input = this.components.Input;
      var inputIsHidden = this.state.inputIsHidden;
      var id = inputId || this.getElementId('input'); // aria attributes makes the JSX "noisy", separated for clarity

      var ariaAttributes = {
        'aria-autocomplete': 'list',
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby']
      };

      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return React__default.createElement(DummyInput, _extends$4$1({
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: noop,
          onFocus: this.onInputFocus,
          readOnly: true,
          disabled: isDisabled,
          tabIndex: tabIndex,
          value: ""
        }, ariaAttributes));
      }

      var _this$commonProps = this.commonProps,
          cx = _this$commonProps.cx,
          theme = _this$commonProps.theme,
          selectProps = _this$commonProps.selectProps;
      return React__default.createElement(Input, _extends$4$1({
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        cx: cx,
        getStyles: this.getStyles,
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        selectProps: selectProps,
        spellCheck: "false",
        tabIndex: tabIndex,
        theme: theme,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    };

    _proto.renderPlaceholderOrValue = function renderPlaceholderOrValue() {
      var _this4 = this;

      var _this$components = this.components,
          MultiValue = _this$components.MultiValue,
          MultiValueContainer = _this$components.MultiValueContainer,
          MultiValueLabel = _this$components.MultiValueLabel,
          MultiValueRemove = _this$components.MultiValueRemove,
          SingleValue = _this$components.SingleValue,
          Placeholder = _this$components.Placeholder;
      var commonProps = this.commonProps;
      var _this$props15 = this.props,
          controlShouldRenderValue = _this$props15.controlShouldRenderValue,
          isDisabled = _this$props15.isDisabled,
          isMulti = _this$props15.isMulti,
          inputValue = _this$props15.inputValue,
          placeholder = _this$props15.placeholder;
      var _this$state8 = this.state,
          selectValue = _this$state8.selectValue,
          focusedValue = _this$state8.focusedValue,
          isFocused = _this$state8.isFocused;

      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : React__default.createElement(Placeholder, _extends$4$1({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused
        }), placeholder);
      }

      if (isMulti) {
        var selectValues = selectValue.map(function (opt, index) {
          var isOptionFocused = opt === focusedValue;
          return React__default.createElement(MultiValue, _extends$4$1({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled: isDisabled,
            key: _this4.getOptionValue(opt),
            index: index,
            removeProps: {
              onClick: function onClick() {
                return _this4.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this4.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e$$1) {
                e$$1.preventDefault();
                e$$1.stopPropagation();
              }
            },
            data: opt
          }), _this4.formatOptionLabel(opt, 'value'));
        });
        return selectValues;
      }

      if (inputValue) {
        return null;
      }

      var singleValue = selectValue[0];
      return React__default.createElement(SingleValue, _extends$4$1({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    };

    _proto.renderClearIndicator = function renderClearIndicator() {
      var ClearIndicator = this.components.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props16 = this.props,
          isDisabled = _this$props16.isDisabled,
          isLoading = _this$props16.isLoading;
      var isFocused = this.state.isFocused;

      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }

      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return React__default.createElement(ClearIndicator, _extends$4$1({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    };

    _proto.renderLoadingIndicator = function renderLoadingIndicator() {
      var LoadingIndicator = this.components.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props17 = this.props,
          isDisabled = _this$props17.isDisabled,
          isLoading = _this$props17.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return React__default.createElement(LoadingIndicator, _extends$4$1({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    };

    _proto.renderIndicatorSeparator = function renderIndicatorSeparator() {
      var _this$components2 = this.components,
          DropdownIndicator = _this$components2.DropdownIndicator,
          IndicatorSeparator = _this$components2.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator

      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return React__default.createElement(IndicatorSeparator, _extends$4$1({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    };

    _proto.renderDropdownIndicator = function renderDropdownIndicator() {
      var DropdownIndicator = this.components.DropdownIndicator;
      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return React__default.createElement(DropdownIndicator, _extends$4$1({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    };

    _proto.renderMenu = function renderMenu() {
      var _this5 = this;

      var _this$components3 = this.components,
          Group = _this$components3.Group,
          GroupHeading = _this$components3.GroupHeading,
          Menu = _this$components3.Menu,
          MenuList = _this$components3.MenuList,
          MenuPortal = _this$components3.MenuPortal,
          LoadingMessage = _this$components3.LoadingMessage,
          NoOptionsMessage = _this$components3.NoOptionsMessage,
          Option = _this$components3.Option;
      var commonProps = this.commonProps;
      var _this$state9 = this.state,
          focusedOption = _this$state9.focusedOption,
          menuOptions = _this$state9.menuOptions;
      var _this$props18 = this.props,
          captureMenuScroll = _this$props18.captureMenuScroll,
          inputValue = _this$props18.inputValue,
          isLoading = _this$props18.isLoading,
          loadingMessage = _this$props18.loadingMessage,
          minMenuHeight = _this$props18.minMenuHeight,
          maxMenuHeight = _this$props18.maxMenuHeight,
          menuIsOpen = _this$props18.menuIsOpen,
          menuPlacement = _this$props18.menuPlacement,
          menuPosition = _this$props18.menuPosition,
          menuPortalTarget = _this$props18.menuPortalTarget,
          menuShouldBlockScroll = _this$props18.menuShouldBlockScroll,
          menuShouldScrollIntoView = _this$props18.menuShouldScrollIntoView,
          noOptionsMessage = _this$props18.noOptionsMessage,
          onMenuScrollToTop = _this$props18.onMenuScrollToTop,
          onMenuScrollToBottom = _this$props18.onMenuScrollToBottom;
      if (!menuIsOpen) return null; // TODO: Internal Option Type here

      var render = function render(props) {
        // for performance, the menu options in state aren't changed when the
        // focused option changes so we calculate additional props based on that
        var isFocused = focusedOption === props.data;
        props.innerRef = isFocused ? _this5.getFocusedOptionRef : undefined;
        return React__default.createElement(Option, _extends$4$1({}, commonProps, props, {
          isFocused: isFocused
        }), _this5.formatOptionLabel(props.data, 'menu'));
      };

      var menuUI;

      if (this.hasOptions()) {
        menuUI = menuOptions.render.map(function (item) {
          if (item.type === 'group') {
            var type = item.type,
                group = _objectWithoutPropertiesLoose$2$1(item, ["type"]);

            var headingId = item.key + "-heading";
            return React__default.createElement(Group, _extends$4$1({}, commonProps, group, {
              Heading: GroupHeading,
              headingProps: {
                id: headingId
              },
              label: _this5.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option);
            }));
          } else if (item.type === 'option') {
            return render(item);
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = React__default.createElement(LoadingMessage, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });

        if (_message === null) return null;
        menuUI = React__default.createElement(NoOptionsMessage, commonProps, _message);
      }

      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = React__default.createElement(MenuPlacer, _extends$4$1({}, commonProps, menuPlacementProps), function (_ref8) {
        var ref = _ref8.ref,
            _ref8$placerProps = _ref8.placerProps,
            placement = _ref8$placerProps.placement,
            maxHeight = _ref8$placerProps.maxHeight;
        return React__default.createElement(Menu, _extends$4$1({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this5.onMenuMouseDown,
            onMouseMove: _this5.onMenuMouseMove
          },
          isLoading: isLoading,
          placement: placement
        }), React__default.createElement(ScrollCaptorSwitch, {
          isEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom
        }, React__default.createElement(ScrollBlock, {
          isEnabled: menuShouldBlockScroll
        }, React__default.createElement(MenuList, _extends$4$1({}, commonProps, {
          innerRef: _this5.getMenuListRef,
          isLoading: isLoading,
          maxHeight: maxHeight
        }), menuUI))));
      }); // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`

      return menuPortalTarget || menuPosition === 'fixed' ? React__default.createElement(MenuPortal, _extends$4$1({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    };

    _proto.renderFormField = function renderFormField() {
      var _this6 = this;

      var _this$props19 = this.props,
          delimiter = _this$props19.delimiter,
          isDisabled = _this$props19.isDisabled,
          isMulti = _this$props19.isMulti,
          name = _this$props19.name;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled) return;

      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this6.getOptionValue(opt);
          }).join(delimiter);
          return React__default.createElement("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i$$1) {
            return React__default.createElement("input", {
              key: "i-" + i$$1,
              name: name,
              type: "hidden",
              value: _this6.getOptionValue(opt)
            });
          }) : React__default.createElement("input", {
            name: name,
            type: "hidden"
          });
          return React__default.createElement("div", null, input);
        }
      } else {
        var _value2 = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

        return React__default.createElement("input", {
          name: name,
          type: "hidden",
          value: _value2
        });
      }
    };

    _proto.renderLiveRegion = function renderLiveRegion() {
      if (!this.state.isFocused) return null;
      return React__default.createElement(A11yText, {
        "aria-live": "polite"
      }, React__default.createElement("p", {
        id: "aria-selection-event"
      }, "\xA0", this.state.ariaLiveSelection), React__default.createElement("p", {
        id: "aria-context"
      }, "\xA0", this.constructAriaLiveMessage()));
    };

    _proto.render = function render() {
      var _this$components4 = this.components,
          Control = _this$components4.Control,
          IndicatorsContainer = _this$components4.IndicatorsContainer,
          SelectContainer = _this$components4.SelectContainer,
          ValueContainer = _this$components4.ValueContainer;
      var _this$props20 = this.props,
          className = _this$props20.className,
          id = _this$props20.id,
          isDisabled = _this$props20.isDisabled,
          menuIsOpen = _this$props20.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return React__default.createElement(SelectContainer, _extends$4$1({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), React__default.createElement(Control, _extends$4$1({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), React__default.createElement(ValueContainer, _extends$4$1({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), React__default.createElement(IndicatorsContainer, _extends$4$1({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    };

    return Select;
  }(React.Component);

  Select.defaultProps = defaultProps;

  function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

  function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _inheritsLoose$5(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
  var defaultProps$1 = {
    defaultInputValue: '',
    defaultMenuIsOpen: false,
    defaultValue: null
  };

  var manageState = function manageState(SelectComponent) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose$5(StateManager, _Component);

      function StateManager() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(args)) || this;
        _this.select = void 0;
        _this.state = {
          inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
          menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
          value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
        };

        _this.onChange = function (value, actionMeta) {
          _this.callProp('onChange', value, actionMeta);

          _this.setState({
            value: value
          });
        };

        _this.onInputChange = function (value, actionMeta) {
          // TODO: for backwards compatibility, we allow the prop to return a new
          // value, but now inputValue is a controllable prop we probably shouldn't
          var newValue = _this.callProp('onInputChange', value, actionMeta);

          _this.setState({
            inputValue: newValue !== undefined ? newValue : value
          });
        };

        _this.onMenuOpen = function () {
          _this.callProp('onMenuOpen');

          _this.setState({
            menuIsOpen: true
          });
        };

        _this.onMenuClose = function () {
          _this.callProp('onMenuClose');

          _this.setState({
            menuIsOpen: false
          });
        };

        return _this;
      }

      var _proto = StateManager.prototype;

      _proto.focus = function focus() {
        this.select.focus();
      };

      _proto.blur = function blur() {
        this.select.blur();
      } // FIXME: untyped flow code, return any
      ;

      _proto.getProp = function getProp(key) {
        return this.props[key] !== undefined ? this.props[key] : this.state[key];
      } // FIXME: untyped flow code, return any
      ;

      _proto.callProp = function callProp(name) {
        if (typeof this.props[name] === 'function') {
          var _this$props;

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return (_this$props = this.props)[name].apply(_this$props, args);
        }
      };

      _proto.render = function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            defaultInputValue = _this$props2.defaultInputValue,
            defaultMenuIsOpen = _this$props2.defaultMenuIsOpen,
            defaultValue = _this$props2.defaultValue,
            props = _objectWithoutPropertiesLoose$4(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

        return React__default.createElement(SelectComponent, _extends$c({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          inputValue: this.getProp('inputValue'),
          menuIsOpen: this.getProp('menuIsOpen'),
          onChange: this.onChange,
          onInputChange: this.onInputChange,
          onMenuClose: this.onMenuClose,
          onMenuOpen: this.onMenuOpen,
          value: this.getProp('value')
        }));
      };

      return StateManager;
    }(React.Component), _class.defaultProps = defaultProps$1, _temp;
  };

  function _inheritsLoose$6(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var NonceProvider =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose$6(NonceProvider, _Component);

    function NonceProvider(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _this.createEmotionCache = function (nonce) {
        return createCache({
          nonce: nonce
        });
      };

      _this.createEmotionCache = memoizeOne(_this.createEmotionCache);
      return _this;
    }

    var _proto = NonceProvider.prototype;

    _proto.render = function render() {
      var emotionCache = this.createEmotionCache(this.props.nonce);
      return React__default.createElement(CacheProvider, {
        value: emotionCache
      }, this.props.children);
    };

    return NonceProvider;
  }(React.Component);

  var index = manageState(Select);

  var CitySelect =
  /*#__PURE__*/
  function (_Component) {
    _inherits(CitySelect, _Component);

    function CitySelect(props) {
      var _this;

      _classCallCheck(this, CitySelect);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(CitySelect).call(this, props));
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

    _createClass(CitySelect, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
          var value = !this.props.value ? this.state.value : this.convertCityToSelectOption(this.props.value);
          this.setState({
            value: value
          });
        }
      }
    }, {
      key: "_convertCityToSelectOption",
      value: function _convertCityToSelectOption(city) {
        return {
          label: city,
          value: city.split(',')[0].toLowerCase().replace(/ /, '_')
        };
      }
    }, {
      key: "_handleChange",
      value: function _handleChange(selected) {
        var query = selected ? selected.label : selected;
        this.props.handleChange(query);
        this.setState({
          value: selected
        });
      }
    }, {
      key: "_populateCities",
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
      key: "_filterCitiesFromResults",
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
          return _toConsumableArray(new Map(arr.reverse().map(function (x) {
            return [typeof fn === 'function' ? fn(x) : x[fn], x];
          })).values());
        };

        cities = uniqBy(cities, function (el) {
          return el.value;
        });
        cities.sort(function (el) {
          return el.label;
        });
        this.setState({
          cities: cities
        });
      }
    }, {
      key: "render",
      value: function render() {
        return React__default.createElement("div", {
          className: "".concat(this.props.classes)
        }, this.props.label && React__default.createElement("label", {
          htmlFor: this.props.name
        }, "".concat(this.props.label, " ").concat(this.props.required ? '*' : '')), React__default.createElement(index, {
          name: this.props.name,
          className: "city-select ".concat(this.props.selectClasses),
          value: this.state.value,
          options: this.state.cities,
          onChange: this.handleChange,
          onInputChange: this.props.handleInputChange,
          noResultsText: this.props.noResultsText,
          placeholder: this.props.placeholder,
          isClearable: this.props.isClearable,
          theme: function theme(_theme) {
            return _objectSpread({}, _theme, {
              colors: _objectSpread({}, _theme.colors, {
                primary: '#05c6b4',
                primary75: '#D3D8E6',
                primary50: '#e0f7f5',
                primary25: '#F3F4F8'
              })
            });
          }
        }));
      }
    }]);

    return CitySelect;
  }(React.Component);
  CitySelect.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    classes: PropTypes.string,
    noResultsText: PropTypes.string,
    placeholder: PropTypes.string,
    isClearable: PropTypes.bool
  };
  CitySelect.defaultProps = {
    noResultsText: "No results for this city",
    placeholder: "Start typing a city name...",
    classes: "",
    name: "select-city",
    handleChange: function handleChange(selected) {
      return console.log("Implement a function to save selection", selected);
    },
    isClearable: true
  };

  var classnames$1 = createCommonjsModule(function (module) {
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

  function _inheritsLoose$7(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _objectWithoutProperties$1(source, excluded) {
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
      _inheritsLoose$7(onClickOutside, _Component);

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
            props = _objectWithoutProperties$1(_props, ["excludeScrollbar"]);

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

  var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Manager = function (_Component) {
    _inherits$1(Manager, _Component);

    function Manager() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck$1(this, Manager);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, (_ref = Manager.__proto__ || Object.getPrototypeOf(Manager)).call.apply(_ref, [this].concat(args))), _this), _this._setTargetNode = function (node) {
        _this._targetNode = node;
      }, _this._getTargetNode = function () {
        return _this._targetNode;
      }, _temp), _possibleConstructorReturn$1(_this, _ret);
    }

    _createClass$1(Manager, [{
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
            restProps = _objectWithoutProperties$2(_props, ['tag', 'children']);

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

  var _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _objectWithoutProperties$3(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var Target = function Target(props, context) {
    var _props$component = props.component,
        component = _props$component === undefined ? 'div' : _props$component,
        innerRef = props.innerRef,
        children = props.children,
        restProps = _objectWithoutProperties$3(props, ['component', 'innerRef', 'children']);

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

    var componentProps = _extends$d({}, restProps);

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
  var isBrowser$3 = typeof window !== 'undefined' && typeof document !== 'undefined';

  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  var timeoutDuration = 0;
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser$3 && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
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

  var supportsMicroTasks = isBrowser$3 && window.Promise;

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
  function getScrollParent$1(element) {
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

    return getScrollParent$1(getParentNode(element));
  }

  var isIE11 = isBrowser$3 && !!(window.MSInputMethodContext && document.documentMode);
  var isIE10 = isBrowser$3 && /MSIE 10/.test(navigator.userAgent);

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

  var _extends$e = Object.assign || function (target) {
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
    return _extends$e({}, offsets, {
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
    var scrollParent = getScrollParent$1(children);

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
        boundariesNode = getScrollParent$1(getParentNode(reference));
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
      return _extends$e({
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
      attachToScrollParents(getScrollParent$1(target.parentNode), event, callback, scrollParents);
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
    var scrollElement = getScrollParent$1(reference);
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
    data.attributes = _extends$e({}, attributes, data.attributes);
    data.styles = _extends$e({}, styles, data.styles);
    data.arrowStyles = _extends$e({}, data.offsets.arrow, data.arrowStyles);

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
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

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
        data.offsets.popper = _extends$e({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

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
        return defineProperty({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === 'right' ? 'left' : 'top';
        var value = popper[mainSide];
        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
        }
        return defineProperty({}, mainSide, value);
      }
    };

    order.forEach(function (placement) {
      var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
      popper = _extends$e({}, popper, check[side](placement));
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
        start: defineProperty({}, side, reference[side]),
        end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
      };

      data.offsets.popper = _extends$e({}, popper, shiftOffsets[shiftvariation]);
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
      classCallCheck(this, Popper);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      };

      // make update() debounced, so that it only runs at most once-per-tick
      this.update = debounce(this.update.bind(this));

      // with {} we create a new object with the options inside it
      this.options = _extends$e({}, Popper.Defaults, options);

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
      Object.keys(_extends$e({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        _this.options.modifiers[name] = _extends$e({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      });

      // Refactoring modifiers' list (Object => Array)
      this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
        return _extends$e({
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


    createClass(Popper, [{
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

  var _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _objectWithoutProperties$4(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var placements$1 = Popper.placements;

  var Popper$1 = function (_Component) {
    _inherits$2(Popper$$1, _Component);

    function Popper$$1() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck$2(this, Popper$$1);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn$2(this, (_ref = Popper$$1.__proto__ || Object.getPrototypeOf(Popper$$1)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this._setArrowNode = function (node) {
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

        return _extends$f({
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
      }, _temp), _possibleConstructorReturn$2(_this, _ret);
    }

    _createClass$2(Popper$$1, [{
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

        var modifiers = _extends$f({}, this.props.modifiers, {
          applyStyle: { enabled: false },
          updateState: this._updateStateModifier
        });
        if (this._arrowNode) {
          modifiers.arrow = _extends$f({}, this.props.modifiers.arrow || {}, {
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
            restProps = _objectWithoutProperties$4(_props2, ['component', 'innerRef', 'placement', 'eventsEnabled', 'modifiers', 'children']);

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

        var componentProps = _extends$f({}, restProps, {
          style: _extends$f({}, restProps.style, popperStyle),
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

  var _extends$g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _objectWithoutProperties$5(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var Arrow = function Arrow(props, context) {
    var _props$component = props.component,
        component = _props$component === undefined ? 'span' : _props$component,
        innerRef = props.innerRef,
        children = props.children,
        restProps = _objectWithoutProperties$5(props, ['component', 'innerRef', 'children']);

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

    var componentProps = _extends$g({}, restProps, {
      style: _extends$g({}, arrowStyle, restProps.style)
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
    inherits(YearDropdownOptions, _React$Component);

    function YearDropdownOptions(props) {
      classCallCheck$1(this, YearDropdownOptions);

      var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

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
      var dropdownClass = classnames$1({
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
      } else if ((typeof obj === "undefined" ? "undefined" : _typeof$1(obj)) === "object") {
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
    inherits(YearDropdown, _React$Component);

    function YearDropdown() {
      var _temp, _this, _ret;

      classCallCheck$1(this, YearDropdown);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
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
      }, _temp), possibleConstructorReturn(_this, _ret);
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
    inherits(MonthDropdownOptions, _React$Component);

    function MonthDropdownOptions() {
      var _temp, _this, _ret;

      classCallCheck$1(this, MonthDropdownOptions);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.renderOptions = function () {
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
      }, _temp), possibleConstructorReturn(_this, _ret);
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
    inherits(MonthDropdown, _React$Component);

    function MonthDropdown() {
      var _temp, _this, _ret;

      classCallCheck$1(this, MonthDropdown);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
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
      }, _temp), possibleConstructorReturn(_this, _ret);
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
    inherits(MonthYearDropdownOptions, _React$Component);

    function MonthYearDropdownOptions(props) {
      classCallCheck$1(this, MonthYearDropdownOptions);

      var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

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
      var dropdownClass = classnames$1({
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
    inherits(MonthYearDropdown, _React$Component);

    function MonthYearDropdown() {
      var _temp, _this, _ret;

      classCallCheck$1(this, MonthYearDropdown);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
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
      }, _temp), possibleConstructorReturn(_this, _ret);
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
    inherits(Day, _React$Component);

    function Day() {
      var _temp, _this, _ret;

      classCallCheck$1(this, Day);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
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
        return classnames$1("react-datepicker__day", dayClassName, "react-datepicker__day--" + getDayOfWeekCode(_this.props.day), {
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
      }, _temp), possibleConstructorReturn(_this, _ret);
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
    inherits(WeekNumber, _React$Component);

    function WeekNumber() {
      var _temp, _this, _ret;

      classCallCheck$1(this, WeekNumber);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    WeekNumber.prototype.render = function render() {
      var weekNumberClasses = {
        "react-datepicker__week-number": true,
        "react-datepicker__week-number--clickable": !!this.props.onClick
      };
      return React__default.createElement(
        "div",
        {
          className: classnames$1(weekNumberClasses),
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
    inherits(Week, _React$Component);

    function Week() {
      var _temp, _this, _ret;

      classCallCheck$1(this, Week);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleDayClick = function (day, event) {
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
      }, _temp), possibleConstructorReturn(_this, _ret);
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
    inherits(Month, _React$Component);

    function Month() {
      var _temp, _this, _ret;

      classCallCheck$1(this, Month);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleDayClick = function (day, event) {
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

        return classnames$1("react-datepicker__month", {
          "react-datepicker__month--selecting-range": selectingDate && (selectsStart || selectsEnd)
        });
      }, _temp), possibleConstructorReturn(_this, _ret);
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
    inherits(Time, _React$Component);

    function Time() {
      var _temp, _this, _ret;

      classCallCheck$1(this, Time);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (time) {
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
      }, _temp), possibleConstructorReturn(_this, _ret);
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

    createClass$1(Time, null, [{
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
    inherits(Calendar, _React$Component);
    createClass$1(Calendar, null, [{
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
      classCallCheck$1(this, Calendar);

      var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

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
          className: classnames$1("react-datepicker", this.props.className, {
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
    inherits(PopperComponent, _React$Component);

    function PopperComponent() {
      classCallCheck$1(this, PopperComponent);
      return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
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
        var classes = classnames$1("react-datepicker-popper", className);
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

    createClass$1(PopperComponent, null, [{
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
    inherits(DatePicker, _React$Component);
    createClass$1(DatePicker, null, [{
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
      classCallCheck$1(this, DatePicker);

      var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

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

        var className = classnames$1(_this.props.className, (_classnames = {}, _classnames[outsideClickIgnoreClass] = _this.state.open, _classnames));

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
      props.handleChange(_defineProperty({}, props.name, date));
    };

    var date = !!props.value ? moment(props.value) : null;
    return React__default.createElement("div", {
      className: "input-with-label form-group ".concat(props.classes)
    }, React__default.createElement("label", {
      htmlFor: props.name
    }, "".concat(props.label, " ").concat(props.required ? '*' : '')), React__default.createElement(DatePicker, {
      selected: date,
      name: props.name,
      id: props.id,
      onChange: onChange,
      className: "form-control",
      minDate: props.minDate,
      disabled: props.disabled
    }), props.errorMessage && React__default.createElement("div", {
      className: 'error-message minicaps'
    }, props.errorMessage));
  };

  var ImageUploader =
  /*#__PURE__*/
  function (_Component) {
    _inherits(ImageUploader, _Component);

    function ImageUploader(props) {
      var _this;

      _classCallCheck(this, ImageUploader);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageUploader).call(this, props));

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

      _this.state = {
        image: _this.props.image
      };

      _this.onChange = function (e) {
        return _this._onChange(e);
      };

      return _this;
    }

    _createClass(ImageUploader, [{
      key: "_onChange",
      value: function _onChange(e) {
        var _this2 = this;

        var url = this.props.imageUploadUrl;
        var file = e.currentTarget.files[0];
        var data = new FormData();
        data.append('image', file);

        var onSuccess = function onSuccess(data) {
          _this2.setState({
            image: data.image_url
          });

          _this2.props.handleChange(_defineProperty({}, _this2.props.name, data.image_url));
        };

        var onError = function onError(data) {
          console.log(data.errors);

          _this2.props.handleChange(_defineProperty({}, _this2.props.name, null));
        };

        var onFail = function onFail(err) {
          console.log(err);
        };

        var config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        };
        var opts = {
          url: url,
          data: data,
          config: config,
          onSuccess: onSuccess,
          onError: onError,
          onFail: onFail
        };
        this.saveImage(opts);
      }
    }, {
      key: "render",
      value: function render() {
        return React__default.createElement("div", {
          className: "input-with-label form-group ".concat(this.props.classes)
        }, React__default.createElement("label", {
          htmlFor: this.props.name
        }, this.props.label), React__default.createElement("input", {
          className: 'image-upload',
          type: 'file',
          name: this.props.name,
          id: this.props.id,
          onChange: this.onChange
        }), this.props.errorMessage && React__default.createElement("div", {
          className: 'error-message'
        }, this.props.errorMessage), this.state.image && React__default.createElement("div", {
          className: 'image-preview',
          style: {
            width: '250px'
          }
        }, React__default.createElement("img", {
          src: this.state.image,
          alt: 'Image preview',
          style: {
            width: '100%',
            height: '100%'
          }
        })));
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
      props.handleChange(_defineProperty({}, props.name, e.currentTarget.value));
    };

    return React__default.createElement("div", {
      className: "input-with-label form-group ".concat(props.classes)
    }, React__default.createElement("label", {
      htmlFor: props.name
    }, "".concat(props.label, " ").concat(props.required ? '*' : '')), React__default.createElement("input", {
      className: 'form-control',
      type: props.type || 'text',
      name: props.name,
      id: props.id,
      onChange: onChange,
      value: props.value || props.defaultValue,
      placeholder: props.placeholder,
      required: props.required || false,
      min: props.min,
      max: props.max,
      disabled: props.disabled
    }), props.errorMessage && React__default.createElement("div", {
      className: 'error-message minicaps'
    }, props.errorMessage));
  };

  var LANGUAGES = [{
    label: 'English',
    value: 'en'
  }, {
    label: 'German',
    value: 'de'
  }, {
    label: 'Polish',
    value: 'po'
  }, {
    label: 'Romanian',
    value: 'ro'
  }, {
    label: 'Finnish',
    value: 'fi'
  }, {
    label: 'Portuguese',
    value: 'pt'
  }];

  var LanguageSelect =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(LanguageSelect, _React$Component);

    function LanguageSelect(props) {
      var _this;

      _classCallCheck(this, LanguageSelect);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(LanguageSelect).call(this, props));
      _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(LanguageSelect, [{
      key: "onChange",
      value: function onChange(selected) {
        this.props.handleChange(_defineProperty({}, this.props.name, selected.value));
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props$label = this.props.label;
        var props = this.props;
        var value_search = LANGUAGES.filter(function (_ref) {
          var value = _ref.value,
              label = _ref.label;
          return value == _this2.props.value;
        });
        var value = value_search.length == 1 ? value_search[0] : null;
        return React__default.createElement("div", {
          className: "form-group ".concat(props.classes)
        }, React__default.createElement("label", {
          htmlFor: props.name
        }, "".concat(props.label, " ").concat(props.required ? '*' : '')), React__default.createElement(index, {
          name: props.name,
          className: props.selectClasses,
          value: value,
          options: LANGUAGES,
          onChange: this.onChange,
          onInputChange: props.onInputChange,
          noResultsText: props.noResultsText,
          placeholder: props.placeholder,
          multi: props.multi || false,
          isClearable: props.isClearable,
          theme: function theme(_theme) {
            return _objectSpread({}, _theme, {
              colors: _objectSpread({}, _theme.colors, {
                primary: '#05c6b4',
                primary75: '#D3D8E6',
                primary50: '#e0f7f5',
                primary25: '#F3F4F8'
              })
            });
          }
        }), props.helpText && React__default.createElement("small", {
          id: props.id + "Help",
          className: "form-text text-muted"
        }, props.helpText), props.errorMessage && React__default.createElement("div", {
          className: 'error-message minicaps'
        }, props.errorMessage));
      }
    }]);

    return LanguageSelect;
  }(React__default.Component);
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
    isClearable: PropTypes.bool
  };
  LanguageSelect.defaultProps = {
    noResultsText: "No results",
    classes: "",
    name: "select-language",
    label: "Select a language",
    handleChange: function handleChange(selected) {
      return console.log("Implement a function to save selection", selected);
    },
    isClearable: true
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
  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
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
  			if (hasOwnProperty$1.call(from, key)) {
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

  var NumberWithLabel =
  /*#__PURE__*/
  function (_Component) {
    _inherits(NumberWithLabel, _Component);

    function NumberWithLabel(props) {
      var _this;

      _classCallCheck(this, NumberWithLabel);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(NumberWithLabel).call(this, props));

      _this.triggerCountup = function () {
        return _this._triggerCountup();
      };

      _this.handleVisibilityChange = function (e) {
        return _this._handleVisibilityChange(e);
      };

      return _this;
    }

    _createClass(NumberWithLabel, [{
      key: "_triggerCountup",
      value: function _triggerCountup() {
        build_1(this.countUpNum);
      }
    }, {
      key: "_handleVisibilityChange",
      value: function _handleVisibilityChange(isVisible) {
        if (isVisible) {
          this.triggerCountup();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return React__default.createElement(visibilitySensor, {
          onChange: this.handleVisibilityChange
        }, React__default.createElement("div", {
          className: "stat"
        }, React__default.createElement(CountUp, {
          className: "number",
          start: 0,
          end: this.props.number,
          duration: 2,
          ref: function ref(el) {
            _this2.countUpNum = el;
          }
        }), React__default.createElement("span", {
          className: 'text'
        }, this.props.label)));
      }
    }]);

    return NumberWithLabel;
  }(React.Component);

  function _extends$h() { _extends$h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$h.apply(this, arguments); }

  function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _inheritsLoose$8(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
  var defaultProps$2 = {
    cacheOptions: false,
    defaultOptions: false,
    filterOption: null,
    isLoading: false
  };
  var makeAsyncSelect = function makeAsyncSelect(SelectComponent) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose$8(Async, _Component);

      function Async(props) {
        var _this;

        _this = _Component.call(this) || this;
        _this.select = void 0;
        _this.lastRequest = void 0;
        _this.mounted = false;
        _this.optionsCache = {};

        _this.handleInputChange = function (newValue, actionMeta) {
          var _this$props = _this.props,
              cacheOptions = _this$props.cacheOptions,
              onInputChange = _this$props.onInputChange; // TODO

          var inputValue = handleInputChange(newValue, actionMeta, onInputChange);

          if (!inputValue) {
            delete _this.lastRequest;

            _this.setState({
              inputValue: '',
              loadedInputValue: '',
              loadedOptions: [],
              isLoading: false,
              passEmptyOptions: false
            });

            return;
          }

          if (cacheOptions && _this.optionsCache[inputValue]) {
            _this.setState({
              inputValue: inputValue,
              loadedInputValue: inputValue,
              loadedOptions: _this.optionsCache[inputValue],
              isLoading: false,
              passEmptyOptions: false
            });
          } else {
            var request = _this.lastRequest = {};

            _this.setState({
              inputValue: inputValue,
              isLoading: true,
              passEmptyOptions: !_this.state.loadedInputValue
            }, function () {
              _this.loadOptions(inputValue, function (options) {
                if (!_this.mounted) return;

                if (options) {
                  _this.optionsCache[inputValue] = options;
                }

                if (request !== _this.lastRequest) return;
                delete _this.lastRequest;

                _this.setState({
                  isLoading: false,
                  loadedInputValue: inputValue,
                  loadedOptions: options || [],
                  passEmptyOptions: false
                });
              });
            });
          }

          return inputValue;
        };

        _this.state = {
          defaultOptions: Array.isArray(props.defaultOptions) ? props.defaultOptions : undefined,
          inputValue: typeof props.inputValue !== 'undefined' ? props.inputValue : '',
          isLoading: props.defaultOptions === true,
          loadedOptions: [],
          passEmptyOptions: false
        };
        return _this;
      }

      var _proto = Async.prototype;

      _proto.componentDidMount = function componentDidMount() {
        var _this2 = this;

        this.mounted = true;
        var defaultOptions = this.props.defaultOptions;
        var inputValue = this.state.inputValue;

        if (defaultOptions === true) {
          this.loadOptions(inputValue, function (options) {
            if (!_this2.mounted) return;
            var isLoading = !!_this2.lastRequest;

            _this2.setState({
              defaultOptions: options || [],
              isLoading: isLoading
            });
          });
        }
      };

      _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
        // if the cacheOptions prop changes, clear the cache
        if (nextProps.cacheOptions !== this.props.cacheOptions) {
          this.optionsCache = {};
        }

        if (nextProps.defaultOptions !== this.props.defaultOptions) {
          this.setState({
            defaultOptions: Array.isArray(nextProps.defaultOptions) ? nextProps.defaultOptions : undefined
          });
        }
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
      };

      _proto.focus = function focus() {
        this.select.focus();
      };

      _proto.blur = function blur() {
        this.select.blur();
      };

      _proto.loadOptions = function loadOptions(inputValue, callback) {
        var loadOptions = this.props.loadOptions;
        if (!loadOptions) return callback();
        var loader = loadOptions(inputValue, callback);

        if (loader && typeof loader.then === 'function') {
          loader.then(callback, function () {
            return callback();
          });
        }
      };

      _proto.render = function render() {
        var _this3 = this;

        var _this$props2 = this.props,
            loadOptions = _this$props2.loadOptions,
            isLoadingProp = _this$props2.isLoading,
            props = _objectWithoutPropertiesLoose$5(_this$props2, ["loadOptions", "isLoading"]);

        var _this$state = this.state,
            defaultOptions = _this$state.defaultOptions,
            inputValue = _this$state.inputValue,
            isLoading = _this$state.isLoading,
            loadedInputValue = _this$state.loadedInputValue,
            loadedOptions = _this$state.loadedOptions,
            passEmptyOptions = _this$state.passEmptyOptions;
        var options = passEmptyOptions ? [] : inputValue && loadedInputValue ? loadedOptions : defaultOptions || [];
        return React__default.createElement(SelectComponent, _extends$h({}, props, {
          ref: function ref(_ref) {
            _this3.select = _ref;
          },
          options: options,
          isLoading: isLoading || isLoadingProp,
          onInputChange: this.handleInputChange
        }));
      };

      return Async;
    }(React.Component), _class.defaultProps = defaultProps$2, _temp;
  };
  var SelectState = manageState(Select);
  var Async = makeAsyncSelect(SelectState);

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

  var PlaceSelect =
  /*#__PURE__*/
  function (_Component) {
    _inherits(PlaceSelect, _Component);

    function PlaceSelect(props) {
      var _this;

      _classCallCheck(this, PlaceSelect);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(PlaceSelect).call(this, props));
      _this.state = {
        hits: [],
        value: null
      };

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

    _createClass(PlaceSelect, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!!this.props.place_id) {
          this.fetchPlaceById();
        } else if (this.props.city === 'Kansas City, Missouri, United States of America') {
          this.setState({
            value: KANSAS_CITY_OPTION
          });
        } else if (this.props.city) {
          var value = {
            label: this.props.city,
            value: this.props.city
          };
          this.setState({
            value: value
          });
        }
      }
    }, {
      key: "_handleChange",
      value: function _handleChange(selected) {
        console.log(selected);
        var cityData = {};

        if (selected) {
          var country = selected.value.country ? selected.value.country.default : null;
          var country_en = selected.value.country && selected.value.country.en ? selected.value.country.en : country;
          cityData = {
            city: selected.value.locale_names.default[0],
            region: selected.value.administrative ? selected.value.administrative[0] : null,
            country: country,
            country_en: country_en,
            latitude: selected.value._geoloc ? selected.value._geoloc.lat : null,
            longitude: selected.value._geoloc ? selected.value._geoloc.lng : null,
            place_id: selected.value.objectID ? selected.value.objectID : null
          };
        }

        this.props.handleChange(cityData);
        this.setState({
          value: selected
        });
      }
    }, {
      key: "_searchPlaces",
      value: function _searchPlaces(query) {
        var _this2 = this;

        var url = "".concat(ALGOLIA_ENDPOINT, "/query/");
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
          }); // Kansas City, MO is missing from the Algolia places API
          // so we're manually adding it in
          // TODO: don't do this

          if (query.toLowerCase().includes('kansas')) {
            options.unshift(KANSAS_CITY_OPTION);
          }

          return options;
        }).catch(function (err) {
          console.log(err);
        });
      }
    }, {
      key: "_fetchPlaceById",
      value: function _fetchPlaceById() {
        var _this3 = this;

        var url = "".concat(ALGOLIA_ENDPOINT, "/").concat(this.props.place_id);
        axios.get(url).then(function (res) {
          var value = _this3.generateCityOption(res.data);

          _this3.setState({
            value: value
          });
        }).catch(function (err) {
          console.log(err);
        });
      }
    }, {
      key: "_generateCityOption",
      value: function _generateCityOption(place) {
        return {
          label: "".concat(place.locale_names.default[0], ", ").concat(place.administrative[0], ", ").concat(place.country.default),
          value: place
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this4 = this;

        var options = this.state.hits.map(function (place) {
          return _this4.generateCityOption(place);
        });
        return React__default.createElement("div", {
          className: "".concat(this.props.classes)
        }, this.props.label && React__default.createElement("label", {
          htmlFor: this.props.name
        }, "".concat(this.props.label, " ").concat(this.props.required ? '*' : '')), React__default.createElement(Async, {
          name: this.props.name,
          className: "city-select ".concat(this.props.selectClasses),
          value: this.state.value,
          options: options,
          onChange: this.handleChange,
          noResultsText: this.props.noResultsText,
          placeholder: this.props.placeholder,
          loadOptions: this.searchPlaces,
          isClearable: this.props.isClearable,
          theme: function theme(_theme) {
            return _objectSpread({}, _theme, {
              colors: _objectSpread({}, _theme.colors, {
                primary: '#05c6b4',
                primary75: '#D3D8E6',
                primary50: '#e0f7f5',
                primary25: '#F3F4F8'
              })
            });
          }
        }), this.props.errorMessage && React__default.createElement("div", {
          className: "error-message minicaps"
        }, this.props.errorMessage));
      }
    }]);

    return PlaceSelect;
  }(React.Component);
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
    isClearable: PropTypes.bool
  };
  PlaceSelect.defaultProps = {
    noResultsText: "No results for this city",
    placeholder: "Start typing a city name...",
    classes: "",
    name: "select-place",
    handleChange: function handleChange(selected) {
      return console.log("Implement a function to save selection", selected);
    },
    isClearable: true
  };

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
  var isBrowser$4 = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

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
      if (!isBrowser$4 || this.connected_) {
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
      if (!isBrowser$4 || !this.connected_) {
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
      if (!isDocumentElement$1(target)) {
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
  function isDocumentElement$1(target) {
      return target === getWindowOf(target).document.documentElement;
  }

  /**
   * Calculates an appropriate content rectangle for provided html or svg element.
   *
   * @param {Element} target - Element content rectangle of which needs to be calculated.
   * @returns {DOMRectInit}
   */
  function getContentRect(target) {
      if (!isBrowser$4) {
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

  var index$1 = (function () {
      // Export existing implementation if available.
      if (typeof global$1.ResizeObserver !== 'undefined') {
          return global$1.ResizeObserver;
      }

      return ResizeObserver;
  })();

  var ResizeObserver_es = /*#__PURE__*/Object.freeze({
    default: index$1
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

  var _resizeObserverPolyfill = ( ResizeObserver_es && index$1 ) || ResizeObserver_es;

  var Rangeslider = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _classnames2 = _interopRequireDefault(classnames$1);



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
    return React__default.createElement("div", {
      className: "range-slider-with-label label-left ".concat(props.classes, " ").concat(disabledClass)
    }, React__default.createElement("label", {
      htmlFor: props.name
    }, props.label), React__default.createElement(Slider, {
      value: props.value,
      name: props.name,
      min: props.min,
      max: props.max,
      step: props.step,
      onChange: onChangeFunction
    }));
  };

  var SelectWithLabel = function SelectWithLabel(props) {
    return React__default.createElement("div", {
      className: "".concat(props.classes)
    }, React__default.createElement("label", {
      htmlFor: props.name
    }, "".concat(props.label, " ").concat(props.required ? '*' : '')), React__default.createElement(index, {
      name: props.name,
      className: props.selectClasses,
      value: props.value,
      options: props.options,
      onChange: props.handleChange,
      onInputChange: props.onInputChange,
      noResultsText: props.noResultsText,
      placeholder: props.placeholder,
      multi: props.multi || false,
      isClearable: props.isClearable,
      theme: function theme(_theme) {
        return _objectSpread({}, _theme, {
          colors: _objectSpread({}, _theme.colors, {
            primary: '#05c6b4',
            primary75: '#D3D8E6',
            primary50: '#e0f7f5',
            primary25: '#F3F4F8'
          })
        });
      }
    }), props.errorMessage && React__default.createElement("div", {
      className: 'error-message minicaps'
    }, props.errorMessage));
  };

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
    multi: PropTypes.bool,
    options: PropTypes.array,
    errorMessage: PropTypes.string,
    isClearable: PropTypes.bool
  };
  SelectWithLabel.defaultProps = {
    noResultsText: "No results",
    classes: "",
    name: "select-with-label",
    label: "Select one",
    options: [],
    handleChange: function handleChange(selected) {
      return console.log("Implement a function to save selection", selected);
    },
    isClearable: true
  };

  var SwitchWithLabels =
  /*#__PURE__*/
  function (_Component) {
    _inherits(SwitchWithLabels, _Component);

    function SwitchWithLabels(props) {
      var _this;

      _classCallCheck(this, SwitchWithLabels);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SwitchWithLabels).call(this, props));
      _this.state = {
        checked: _this.props.defaultChecked
      };

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

    _createClass(SwitchWithLabels, [{
      key: "_handleChange",
      value: function _handleChange(event) {
        var checked = event.currentTarget.checked;
        this.setState({
          checked: checked
        }, this.props.onChange(checked));
      }
    }, {
      key: "_handleClickLabel",
      value: function _handleClickLabel(value) {
        var _this2 = this;

        return function () {
          _this2.setState({
            checked: value
          }, _this2.props.onChange(value));
        };
      }
    }, {
      key: "render",
      value: function render() {
        return React__default.createElement("div", {
          className: "switch-container"
        }, React__default.createElement("span", {
          onClick: this.handleClickLabel(false)
        }, this.props.labelLeft), React__default.createElement("label", null, React__default.createElement("input", {
          checked: this.state.checked,
          onChange: this.handleChange,
          className: "switch",
          type: "checkbox"
        }), React__default.createElement("div", {
          className: "switch-background"
        }, React__default.createElement("div", {
          className: "switch-button"
        }))), React__default.createElement("span", {
          onClick: this.handleClickLabel(true)
        }, this.props.labelRight));
      }
    }]);

    return SwitchWithLabels;
  }(React.Component);

  var TextareaWithLabel = function TextareaWithLabel(props) {
    var onChange = function onChange(e) {
      props.handleChange(_defineProperty({}, props.name, e.currentTarget.value));
    };

    return React__default.createElement("div", {
      className: "input-with-label form-group ".concat(props.classes)
    }, React__default.createElement("label", {
      htmlFor: props.name
    }, "".concat(props.label, " ").concat(props.required ? '*' : '')), React__default.createElement("textarea", {
      className: 'form-control',
      type: props.type || 'text',
      name: props.name,
      id: props.id,
      onChange: onChange,
      value: props.value,
      placeholder: props.placeholder
    }), props.errorMessage && React__default.createElement("div", {
      className: 'error-message minicaps'
    }, props.errorMessage));
  };

  var TimePickerWithLabel = function TimePickerWithLabel(props) {
    var saveFormat = 'HH:mm';
    var displayFormat = 'h:mm a';

    var onChange = function onChange(value) {
      var time = !!value ? value.format(saveFormat) : null;
      props.handleChange(_defineProperty({}, props.name, time));
    };

    var time = !!props.value ? moment(props.value, saveFormat) : null;
    return React__default.createElement("div", {
      className: "input-with-label form-group ".concat(props.classes)
    }, React__default.createElement("label", {
      htmlFor: props.name
    }, "".concat(props.label, " ").concat(props.required ? '*' : '')), React__default.createElement(TimePicker, {
      showSecond: false,
      use12Hours: true,
      value: time,
      format: displayFormat,
      name: props.name,
      id: props.id,
      onChange: onChange,
      minuteStep: 15,
      allowEmpty: true,
      disabled: props.disabled
    }), props.errorMessage && React__default.createElement("div", {
      className: 'error-message minicaps'
    }, props.errorMessage));
  };

  var timezones = ["Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Asmara", "Africa/Asmera", "Africa/Bamako", "Africa/Bangui", "Africa/Banjul", "Africa/Bissau", "Africa/Blantyre", "Africa/Brazzaville", "Africa/Bujumbura", "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta", "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Douala", "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Kigali", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi", "Africa/Ndjamena", "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo", "Africa/Sao_Tome", "Africa/Timbuktu", "Africa/Tripoli", "Africa/Tunis", "Africa/Windhoek", "America/Adak", "America/Anchorage", "America/Anguilla", "America/Antigua", "America/Araguaina", "America/Argentina/Buenos_Aires", "America/Argentina/Catamarca", "America/Argentina/ComodRivadavia", "America/Argentina/Cordoba", "America/Argentina/Jujuy", "America/Argentina/La_Rioja", "America/Argentina/Mendoza", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Aruba", "America/Asuncion", "America/Atikokan", "America/Atka", "America/Bahia_Banderas", "America/Bahia", "America/Barbados", "America/Belem", "America/Belize", "America/Blanc-Sablon", "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Buenos_Aires", "America/Cambridge_Bay", "America/Campo_Grande", "America/Cancun", "America/Caracas", "America/Catamarca", "America/Cayenne", "America/Cayman", "America/Chicago", "America/Chihuahua", "America/Coral_Harbour", "America/Cordoba", "America/Costa_Rica", "America/Creston", "America/Cuiaba", "America/Curacao", "America/Danmarkshavn", "America/Dawson_Creek", "America/Dawson", "America/Denver", "America/Detroit", "America/Dominica", "America/Edmonton", "America/Eirunepe", "America/El_Salvador", "America/Ensenada", "America/Fort_Nelson", "America/Fort_Wayne", "America/Fortaleza", "America/Glace_Bay", "America/Godthab", "America/Goose_Bay", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guatemala", "America/Guayaquil", "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo", "America/Indiana/Indianapolis", "America/Indiana/Knox", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Indianapolis", "America/Inuvik", "America/Iqaluit", "America/Jamaica", "America/Jujuy", "America/Juneau", "America/Kentucky/Louisville", "America/Kentucky/Monticello", "America/Knox_IN", "America/Kralendijk", "America/La_Paz", "America/Lima", "America/Los_Angeles", "America/Louisville", "America/Lower_Princes", "America/Maceio", "America/Managua", "America/Manaus", "America/Marigot", "America/Martinique", "America/Matamoros", "America/Mazatlan", "America/Mendoza", "America/Menominee", "America/Merida", "America/Metlakatla", "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey", "America/Montevideo", "America/Montreal", "America/Montserrat", "America/Nassau", "America/New_York", "America/Nipigon", "America/Nome", "America/Noronha", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Ojinaga", "America/Panama", "America/Pangnirtung", "America/Paramaribo", "America/Phoenix", "America/Port_of_Spain", "America/Port-au-Prince", "America/Porto_Acre", "America/Porto_Velho", "America/Puerto_Rico", "America/Punta_Arenas", "America/Rainy_River", "America/Rankin_Inlet", "America/Recife", "America/Regina", "America/Resolute", "America/Rio_Branco", "America/Rosario", "America/Santa_Isabel", "America/Santarem", "America/Santiago", "America/Santo_Domingo", "America/Sao_Paulo", "America/Scoresbysund", "America/Shiprock", "America/Sitka", "America/St_Barthelemy", "America/St_Johns", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Swift_Current", "America/Tegucigalpa", "America/Thule", "America/Thunder_Bay", "America/Tijuana", "America/Toronto", "America/Tortola", "America/Vancouver", "America/Virgin", "America/Whitehorse", "America/Winnipeg", "America/Yakutat", "America/Yellowknife", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Macquarie", "Antarctica/Mawson", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/South_Pole", "Antarctica/Syowa", "Antarctica/Troll", "Antarctica/Vostok", "Arctic/Longyearbyen", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Ashkhabad", "Asia/Atyrau", "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok", "Asia/Barnaul", "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei", "Asia/Calcutta", "Asia/Chita", "Asia/Choibalsan", "Asia/Chongqing", "Asia/Chungking", "Asia/Colombo", "Asia/Dacca", "Asia/Damascus", "Asia/Dhaka", "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Famagusta", "Asia/Gaza", "Asia/Harbin", "Asia/Hebron", "Asia/Ho_Chi_Minh", "Asia/Hong_Kong", "Asia/Hovd", "Asia/Irkutsk", "Asia/Istanbul", "Asia/Jakarta", "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul", "Asia/Kamchatka", "Asia/Karachi", "Asia/Kashgar", "Asia/Kathmandu", "Asia/Katmandu", "Asia/Khandyga", "Asia/Kolkata", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Kuwait", "Asia/Macao", "Asia/Macau", "Asia/Magadan", "Asia/Makassar", "Asia/Manila", "Asia/Muscat", "Asia/Nicosia", "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar", "Asia/Qyzylorda", "Asia/Rangoon", "Asia/Riyadh", "Asia/Saigon", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Srednekolymsk", "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran", "Asia/Tel_Aviv", "Asia/Thimbu", "Asia/Thimphu", "Asia/Tokyo", "Asia/Tomsk", "Asia/Ujung_Pandang", "Asia/Ulaanbaatar", "Asia/Ulan_Bator", "Asia/Urumqi", "Asia/Ust-Nera", "Asia/Vientiane", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yangon", "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda", "Atlantic/Canary", "Atlantic/Cape_Verde", "Atlantic/Faeroe", "Atlantic/Faroe", "Atlantic/Jan_Mayen", "Atlantic/Madeira", "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley", "Australia/ACT", "Australia/Adelaide", "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Canberra", "Australia/Currie", "Australia/Darwin", "Australia/Eucla", "Australia/Hobart", "Australia/LHI", "Australia/Lindeman", "Australia/Lord_Howe", "Australia/Melbourne", "Australia/North", "Australia/NSW", "Australia/Perth", "Australia/Queensland", "Australia/South", "Australia/Sydney", "Australia/Tasmania", "Australia/Victoria", "Australia/West", "Australia/Yancowinna", "Brazil/Acre", "Brazil/DeNoronha", "Brazil/East", "Brazil/West", "Canada/Atlantic", "Canada/Central", "Canada/Eastern", "Canada/Mountain", "Canada/Newfoundland", "Canada/Pacific", "Canada/Saskatchewan", "Canada/Yukon", "CET", "Chile/Continental", "Chile/EasterIsland", "CST6CDT", "Cuba", "EET", "Egypt", "Eire", "EST", "EST5EDT", "Etc/GMT-0", "Etc/GMT-1", "Etc/GMT-10", "Etc/GMT-11", "Etc/GMT-12", "Etc/GMT-13", "Etc/GMT-14", "Etc/GMT-2", "Etc/GMT-3", "Etc/GMT-4", "Etc/GMT-5", "Etc/GMT-6", "Etc/GMT-7", "Etc/GMT-8", "Etc/GMT-9", "Etc/GMT", "Etc/GMT+0", "Etc/GMT+1", "Etc/GMT+10", "Etc/GMT+11", "Etc/GMT+12", "Etc/GMT+2", "Etc/GMT+3", "Etc/GMT+4", "Etc/GMT+5", "Etc/GMT+6", "Etc/GMT+7", "Etc/GMT+8", "Etc/GMT+9", "Etc/GMT0", "Etc/Greenwich", "Etc/UCT", "Etc/Universal", "Etc/UTC", "Etc/Zulu", "Europe/Amsterdam", "Europe/Andorra", "Europe/Astrakhan", "Europe/Athens", "Europe/Belfast", "Europe/Belgrade", "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest", "Europe/Budapest", "Europe/Busingen", "Europe/Chisinau", "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki", "Europe/Isle_of_Man", "Europe/Istanbul", "Europe/Jersey", "Europe/Kaliningrad", "Europe/Kiev", "Europe/Kirov", "Europe/Lisbon", "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Mariehamn", "Europe/Minsk", "Europe/Monaco", "Europe/Moscow", "Europe/Nicosia", "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague", "Europe/Riga", "Europe/Rome", "Europe/Samara", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Saratov", "Europe/Simferopol", "Europe/Skopje", "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane", "Europe/Tiraspol", "Europe/Ulyanovsk", "Europe/Uzhgorod", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Vilnius", "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb", "Europe/Zaporozhye", "Europe/Zurich", "GB-Eire", "GB", "GMT-0", "GMT", "GMT+0", "GMT0", "Greenwich", "Hongkong", "HST", "Iceland", "Indian/Antananarivo", "Indian/Chagos", "Indian/Christmas", "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe", "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion", "Iran", "Israel", "Jamaica", "Japan", "Kwajalein", "Libya", "MET", "Mexico/BajaNorte", "Mexico/BajaSur", "Mexico/General", "MST", "MST7MDT", "Navajo", "NZ-CHAT", "NZ", "Pacific/Apia", "Pacific/Auckland", "Pacific/Bougainville", "Pacific/Chatham", "Pacific/Chuuk", "Pacific/Easter", "Pacific/Efate", "Pacific/Enderbury", "Pacific/Fakaofo", "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Galapagos", "Pacific/Gambier", "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Honolulu", "Pacific/Johnston", "Pacific/Kiritimati", "Pacific/Kosrae", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Marquesas", "Pacific/Midway", "Pacific/Nauru", "Pacific/Niue", "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau", "Pacific/Pitcairn", "Pacific/Pohnpei", "Pacific/Ponape", "Pacific/Port_Moresby", "Pacific/Rarotonga", "Pacific/Saipan", "Pacific/Samoa", "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu", "Pacific/Truk", "Pacific/Wake", "Pacific/Wallis", "Pacific/Yap", "Poland", "Portugal", "PRC", "PST8PDT", "ROC", "ROK", "Singapore", "Turkey", "UCT", "Universal", "US/Alaska", "US/Aleutian", "US/Arizona", "US/Central", "US/East-Indiana", "US/Eastern", "US/Hawaii", "US/Indiana-Starke", "US/Michigan", "US/Mountain", "US/Pacific-New", "US/Pacific", "US/Samoa", "UTC", "W-SU", "WET", "Zulu"];

  var GEONAMES_ENDPOINT = 'https://secure.geonames.org/timezoneJSON';

  var TimeZoneSelect =
  /*#__PURE__*/
  function (_Component) {
    _inherits(TimeZoneSelect, _Component);

    function TimeZoneSelect(props) {
      var _this;

      _classCallCheck(this, TimeZoneSelect);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TimeZoneSelect).call(this, props));
      _this.state = {
        value: _this.props.timezone
      };

      _this.onChange = function (s) {
        return _this._onChange(s);
      };

      _this.detectTimeZone = function () {
        return _this._detectTimeZone();
      };

      return _this;
    }

    _createClass(TimeZoneSelect, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.detectTimeZone();
      }
    }, {
      key: "_onChange",
      value: function _onChange(selected) {
        var timezone = !!selected ? selected.value : null;
        this.props.handleChange({
          timezone: timezone
        });
        this.setState({
          value: selected
        });
      }
    }, {
      key: "_detectTimeZone",
      value: function _detectTimeZone() {
        var _this2 = this;

        if (!!this.props.timezone) {
          // use selected timezone
          this.setState({
            value: {
              value: this.props.timezone,
              label: this.props.timezone
            }
          });
        } else if (!!this.props.latitude && !!this.props.longitude) {
          // use selected city to detect timezone
          var url = "".concat(GEONAMES_ENDPOINT, "?lat=").concat(this.props.latitude, "&lng=").concat(this.props.longitude, "&username=p2pu");
          axios.get(url).then(function (res) {
            var timezone = res.data.timezoneId;

            _this2.props.handleChange({
              timezone: timezone
            });

            _this2.setState({
              value: {
                value: timezone,
                label: timezone
              }
            });
          }).catch(function (err) {
            return console.log(err);
          });
        } else {
          // detect timezone from browser
          var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          this.props.handleChange({
            timezone: timezone
          });
          this.setState({
            value: {
              value: timezone,
              label: timezone
            }
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _React$createElement;

        var timezoneOptions = timezones.map(function (tz) {
          return {
            value: tz,
            label: tz
          };
        });
        return React__default.createElement("div", {
          className: "".concat(this.props.classes)
        }, this.props.label && React__default.createElement("label", {
          htmlFor: this.props.name
        }, "".concat(this.props.label, " ").concat(this.props.required ? '*' : '')), React__default.createElement(index, (_React$createElement = {
          name: this.props.name,
          className: "form-group input-with-label ".concat(this.props.selectClasses),
          value: this.state.value,
          onChange: this.onChange,
          options: timezoneOptions
        }, _defineProperty(_React$createElement, "name", 'timezone'), _defineProperty(_React$createElement, "id", 'id_timezone'), _defineProperty(_React$createElement, "isClearable", this.props.isClearable), _defineProperty(_React$createElement, "theme", function theme(_theme) {
          return _objectSpread({}, _theme, {
            colors: _objectSpread({}, _theme.colors, {
              primary: '#05c6b4',
              primary75: '#D3D8E6',
              primary50: '#e0f7f5',
              primary25: '#F3F4F8'
            })
          });
        }), _React$createElement)), this.props.errorMessage && React__default.createElement("div", {
          className: "error-message minicaps"
        }, this.props.errorMessage));
      }
    }]);

    return TimeZoneSelect;
  }(React.Component);
  TimeZoneSelect.propTypes = {
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    classes: PropTypes.string,
    timezone: PropTypes.string,
    latitude: PropTypes.string,
    longitude: PropTypes.string,
    errorMessage: PropTypes.string,
    isClearable: PropTypes.bool
  };
  TimeZoneSelect.defaultProps = {
    classes: "",
    name: "select-timezone",
    handleChange: function handleChange(selected) {
      return console.log("Implement a function to save selection", selected);
    },
    isClearable: true
  };

  exports.CitySelect = CitySelect;
  exports.CheckboxWithLabel = CheckboxWithLabel;
  exports.DatePickerWithLabel = DatePickerWithLabel;
  exports.ImageUploader = ImageUploader;
  exports.InputWithLabel = InputWithLabel;
  exports.LanguageSelect = LanguageSelect;
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
