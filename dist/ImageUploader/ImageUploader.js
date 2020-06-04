"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _axios = _interopRequireDefault(require("axios"));

var _InputWrapper = _interopRequireDefault(require("../InputWrapper"));

const defaultStyles = {
  preview: {
    maxWidth: '250px',
    height: 'auto'
  },
  input: {
    display: "none !important"
  },
  label: {
    borderRadius: "2em",
    textTransform: "uppercase",
    fontSize: "0.8em",
    fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
    fontWeight: "700",
    padding: "10px 20px",
    transform: "perspective(1px) translateZ(0)",
    boxShadow: "0 0 1px transparent",
    position: "relative",
    transition: "color 0.3s linear",
    display: "inline-block",
    margin: '2px',
    background: "#515665",
    border: "2px solid #515665",
    color: "#fff",
    marginRight: '6px'
  }
};

class ImageUploader extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "saveImage", opts => {
      const url = opts.url;
      const data = opts.data;
      const config = opts.config;
      (0, _axios.default)({
        url,
        data,
        config,
        method: 'post',
        responseType: 'json'
      }).then(res => {
        if (res.data.errors) {
          return opts.onError(res.data);
        }

        opts.onSuccess(res.data);
      }).catch(err => {
        console.log(err);
        opts.onFail(err);
      });
    });
    this.state = {
      image: this.props.image,
      loading: false
    };

    this.onChange = e => this._onChange(e);
  }

  _onChange(e) {
    const url = this.props.imageUploadUrl;
    const file = e.currentTarget.files[0];
    const data = new FormData();
    data.append('image', file);
    this.setState({
      file
    });

    const onSuccess = data => {
      this.setState({
        image: data.image_url
      });
      this.props.handleChange({
        [this.props.name]: data.image_url
      });
    };

    const onError = data => {
      console.log(data.errors);
      this.props.handleChange({
        [this.props.name]: null
      });
    };

    const onFail = err => {
      console.log(err);
    };

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    const opts = {
      url,
      data,
      config,
      onSuccess,
      onError,
      onFail
    };
    this.saveImage(opts);
  }

  render() {
    const {
      label,
      name,
      required,
      errorMessage,
      helpText,
      labelStyles,
      inputStyles,
      imgStyles,
      acceptedMimetypes,
      buttonText,
      classes
    } = this.props;
    const {
      image,
      file
    } = this.state;
    return _react.default.createElement(_InputWrapper.default, {
      label: label,
      name: 'image-upload',
      required: required,
      errorMessage: errorMessage,
      helpText: helpText,
      classes: classes
    }, _react.default.createElement("div", null, _react.default.createElement("label", {
      htmlFor: name,
      className: "btn p2pu-btn dark",
      style: { ...defaultStyles.label,
        ...labelStyles
      }
    }, buttonText, _react.default.createElement("input", {
      className: "image-upload form-control hidden",
      type: "file",
      name: name,
      id: name,
      onChange: this.onChange,
      style: { ...defaultStyles.input,
        ...inputStyles
      },
      hidden: true,
      accept: acceptedMimetypes
    })), file ? _react.default.createElement("span", null, file.name) : _react.default.createElement("span", null, "No file selected"), image && _react.default.createElement("div", {
      className: "image-preview",
      style: {
        marginTop: '10px'
      }
    }, _react.default.createElement("img", {
      src: image,
      alt: "Image preview",
      style: { ...defaultStyles.preview,
        ...imgStyles
      }
    }))));
  }

}

exports.default = ImageUploader;
ImageUploader.propTypes = {
  imageUploadUrl: _propTypes.default.string.isRequired,
  handleChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  classes: _propTypes.default.string,
  label: _propTypes.default.string,
  errorMessage: _propTypes.default.string,
  helpText: _propTypes.default.string,
  image: _propTypes.default.string,
  imgStyles: _propTypes.default.object,
  labelStyles: _propTypes.default.object,
  inputStyles: _propTypes.default.object,
  acceptedMimetypes: _propTypes.default.string,
  buttonText: _propTypes.default.string
};
ImageUploader.defaultProps = {
  handleChange: imgUrl => `Implement a function to save image ${imgUrl}`,
  acceptedMimetypes: "image/*",
  buttonText: 'Choose file'
};