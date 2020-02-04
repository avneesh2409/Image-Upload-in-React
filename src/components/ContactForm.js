import React, { Component } from 'react'
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {Image} from './Image';
const CLOUDINARY_UPLOAD_PRESET = 'hgak7asr';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/avneeshcloud/upload';
export default class ContactForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          uploadedUrl: ''
        };
      }
      onImageDrop(files) {
        this.setState({
          uploadedFile: files[0]
        });
        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                            .field('file', file);
        upload.end((err, response) => {
          if (err) {
            console.error(err);
          }
          if (response.body.secure_url !== '') {
            this.setState({
              uploadedUrl: response.body.secure_url
            });
          }
        });
      }
    render() {
        return (
            <div>
<div className="FileUpload">
            <Dropzone
                onDrop={this.onImageDrop.bind(this)}
    accept="image/*"
                multiple={false}>
                {({getRootProps, getInputProps}) => {
        return (
          <div
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {
            (this.state.uploadedUrl !== '')?this.state.uploadedFile.name:<p>upload file</p>
            }
          </div>
        )
    }}
    </Dropzone>
</div>
<div>
    {
        (this.state.uploadedUrl !== '')?<Image src={this.state.uploadedUrl} />:<h1>Loading .....</h1>
    }
    
</div>
</div>
)    
}

}
