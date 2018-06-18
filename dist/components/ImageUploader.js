import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

var ImageUploader = function (_Component) {
  babelHelpers.inherits(ImageUploader, _Component);

  function ImageUploader(props) {
    babelHelpers.classCallCheck(this, ImageUploader);

    var _this = babelHelpers.possibleConstructorReturn(this, (ImageUploader.__proto__ || Object.getPrototypeOf(ImageUploader)).call(this, props));

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

  babelHelpers.createClass(ImageUploader, [{
    key: '_onChange',
    value: function _onChange(e) {
      var _this2 = this;

      var url = this.props.imageUploadUrl;
      var file = e.currentTarget.files[0];
      var data = new FormData();
      data.append('image', file);

      var onSuccess = function onSuccess(data) {
        _this2.setState({ image: data.image_url });
        _this2.props.handleChange(babelHelpers.defineProperty({}, _this2.props.name, data.image_url));
      };

      var onError = function onError(data) {
        console.log(data.errors);
        _this2.props.handleChange(babelHelpers.defineProperty({}, _this2.props.name, null));
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

export default ImageUploader;


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