"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
      (0, _axios.default)({
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
      return _react.default.createElement("div", {
        className: "input-with-label form-group ".concat(this.props.classes)
      }, _react.default.createElement("label", {
        htmlFor: this.props.name
      }, this.props.label), _react.default.createElement("input", {
        className: 'image-upload',
        type: 'file',
        name: this.props.name,
        id: this.props.id,
        onChange: this.onChange
      }), this.props.errorMessage && _react.default.createElement("div", {
        className: 'error-message'
      }, this.props.errorMessage), this.state.image && _react.default.createElement("div", {
        className: 'image-preview',
        style: {
          width: '250px'
        }
      }, _react.default.createElement("img", {
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
}(_react.Component);

exports.default = ImageUploader;
ImageUploader.propTypes = {
  imageUploadUrl: _propTypes.default.string.isRequired,
  handleChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  classes: _propTypes.default.string,
  label: _propTypes.default.string,
  id: _propTypes.default.string,
  errorMessage: _propTypes.default.string,
  image: _propTypes.default.string
};