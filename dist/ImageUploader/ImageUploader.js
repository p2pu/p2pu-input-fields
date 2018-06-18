'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageUploader = function (_Component) {
  _inherits(ImageUploader, _Component);

  function ImageUploader(props) {
    _classCallCheck(this, ImageUploader);

    var _this = _possibleConstructorReturn(this, (ImageUploader.__proto__ || Object.getPrototypeOf(ImageUploader)).call(this, props));

    _this.saveImage = function (opts) {
      var url = opts.url;
      var data = opts.data;
      var config = opts.config;

      (0, _axios2.default)({
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

  _createClass(ImageUploader, [{
    key: '_onChange',
    value: function _onChange(e) {
      var _this2 = this;

      var url = this.props.imageUploadUrl;
      var file = e.currentTarget.files[0];
      var data = new FormData();
      data.append('image', file);

      var onSuccess = function onSuccess(data) {
        _this2.setState({ image: data.image_url });
        _this2.props.handleChange(_defineProperty({}, _this2.props.name, data.image_url));
      };

      var onError = function onError(data) {
        console.log(data.errors);
        _this2.props.handleChange(_defineProperty({}, _this2.props.name, null));
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
      return _react2.default.createElement(
        'div',
        { className: 'input-with-label form-group ' + this.props.classes },
        _react2.default.createElement(
          'label',
          { htmlFor: this.props.name },
          this.props.label
        ),
        _react2.default.createElement('input', {
          className: 'image-upload',
          type: 'file',
          name: this.props.name,
          id: this.props.id,
          onChange: this.onChange
        }),
        this.props.errorMessage && _react2.default.createElement(
          'div',
          { className: 'error-message' },
          this.props.errorMessage
        ),
        this.state.image && _react2.default.createElement(
          'div',
          { className: 'image-preview', style: { width: '250px' } },
          _react2.default.createElement('img', { src: this.state.image, alt: 'Image preview', style: { width: '100%', height: '100%' } })
        )
      );
    }
  }]);

  return ImageUploader;
}(_react.Component);

exports.default = ImageUploader;


ImageUploader.propTypes = {
  imageUploadUrl: _propTypes2.default.string.isRequired,
  handleChange: _propTypes2.default.func.isRequired,
  name: _propTypes2.default.string.isRequired,
  classes: _propTypes2.default.string,
  label: _propTypes2.default.string,
  id: _propTypes2.default.string,
  errorMessage: _propTypes2.default.string,
  image: _propTypes2.default.string
};