import React, { Component } from 'react'
import { Image } from './Image';

// const CLOUDINARY_UPLOAD_PRESET = 'avneesh';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/avneeshcloud/upload';
export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedUrl: '',
      uploadedFile: ''
    };
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }
  onChangeHandler(e) {
    this.setState({
      uploadedFile : e.target.files[0]
    });
    console.log(e.target.files[0])

  }

  onSubmitHandler(e) {
    console.log(e);

    e.preventDefault()
    let formData = new FormData()
    formData.append("file",this.state.uploadedFile)
    formData.append("upload_preset",'avneesh')
    const options = {
      method:'POST',
      body:formData
    }
    let upload = fetch(CLOUDINARY_UPLOAD_URL,options)
    upload.then((response) => {
     console.log("response :-",response)
    }).catch(err=>{console.log("error :-",err)})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler} >
          <input type='file'
            name='file'
            onChange={this.onChangeHandler}
          />
          <button>submit</button>
        </form>


        <div>
          {
            (this.state.uploadedUrl !== '') ? <Image src={this.state.uploadedUrl} /> : <h1>Loading .....</h1>
          }

        </div>
      </div>
    )
  }

}
