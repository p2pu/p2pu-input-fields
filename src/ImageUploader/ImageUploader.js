import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import InputWrapper from '../InputWrapper'

const defaultStyles = {
  preview: {
    maxWidth: '250px',
    height: 'auto',
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
    marginRight: '6px',
  }
}

export default class ImageUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image,
      loading: false,

    };
    this.onChange = (e) => this._onChange(e);
  }

  saveImage = opts => {
    const url = opts.url;
    const data = opts.data;
    const config = opts.config;

    axios({
      url,
      data,
      config,
      method: 'post',
      responseType: 'json',
    }).then(res => {
      if (res.data.errors) {
        return opts.onError(res.data)
      }
      opts.onSuccess(res.data)
    }).catch(err => {
      console.log(err)
      opts.onFail(err)
    })
  }

  _onChange(e) {
    const url = this.props.imageUploadUrl;
    const file = e.currentTarget.files[0];
    const data = new FormData();
    data.append('image', file)

    this.setState({ file })

    const onSuccess = (data) => {
      this.setState({ image: data.image_url });
      this.props.handleChange({ [this.props.name]: data.image_url })
    }

    const onError = (data) => {
      console.log(data.errors)
      this.props.handleChange({ [this.props.name]: null })
    }

    const onFail = (err) => {
      console.log(err)
    }

    const config = { headers: {'Content-Type': 'multipart/form-data' }}
    const opts = { url, data, config, onSuccess, onError, onFail };

    this.saveImage(opts);
  }

  render() {
    const { label, name, required, errorMessage, helpText, labelStyles, inputStyles, imgStyles, acceptedMimetypes, buttonText, classes } = this.props;
    const { image, file } = this.state;
    return(
      <InputWrapper
        label={label}
        name={'image-upload'}
        required={required}
        errorMessage={errorMessage}
        helpText={helpText}
        classes={classes}
      >
        <div>
          <label htmlFor={name} className="btn p2pu-btn dark" style={{...defaultStyles.label, ...labelStyles}}>
            { buttonText }
            <input
              className='image-upload form-control hidden'
              type='file'
              name={name}
              id={name}
              onChange={this.onChange}
              style={{...defaultStyles.input, ...inputStyles}}
              hidden={true}
              accept={acceptedMimetypes}
            />
          </label>
          {
            file ? <span>{file.name}</span> : <span>No file selected</span>
          }
          {
            image &&
            <div className='image-preview' style={{ marginTop: '10px' }}>
              <img src={image} alt='Image preview' style={{...defaultStyles.preview, ...imgStyles}} />
            </div>
          }
        </div>
      </InputWrapper>
    )
  }
}

ImageUploader.propTypes = {
  imageUploadUrl: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  helpText: PropTypes.string,
  image: PropTypes.string,
  imgStyles: PropTypes.object,
  labelStyles: PropTypes.object,
  inputStyles: PropTypes.object,
  acceptedMimetypes: PropTypes.string,
  buttonText: PropTypes.string,
}

ImageUploader.defaultProps = {
  handleChange: (imgUrl) => `Implement a function to save image ${imgUrl}`,
  acceptedMimetypes: "image/*",
  buttonText: 'Choose file',
}
