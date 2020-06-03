import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const defaultStyles = {
  maxWidth: '250px',
  height: 'auto',
}

export default class ImageUploader extends Component {
  constructor(props) {
    super(props);
    this.state = { image: this.props.image };
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
    return(
      <div className={`input-with-label form-group ${this.props.classes}`}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input
          className='image-upload form-control'
          type='file'
          name={this.props.name}
          id={this.props.id}
          onChange={this.onChange}
        />
        {
          this.props.errorMessage &&
          <div className='error-message'>
            { this.props.errorMessage }
          </div>
        }
        {
          this.state.image &&
          <div className='image-preview' style={{ marginTop: '10px' }}>
            <img src={this.state.image} alt='Image preview' style={{...defaultStyles, ...this.props.imgStyles}} />
          </div>
        }
      </div>
    )
  }
}

ImageUploader.propTypes = {
  imageUploadUrl: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  errorMessage: PropTypes.string,
  image: PropTypes.string,
  imgStyles: PropTypes.object,
}
