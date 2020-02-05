import React, { Component } from 'react'
import {connect} from 'react-redux';
import {storeImageUrl} from '../store/userStore'
// const CLOUDINARY_UPLOAD_PRESET = 'avneesh';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/avneeshcloud/upload';
class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedUrl: '',
      uploadedFile: '',
      filename:'upload file'
    };
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }
  onChangeHandler(e) {
    this.setState({
      uploadedFile: e.target.files[0],
      filename:e.target.files[0].name
    });
    console.log(e.target.files[0])

  }

  onSubmitHandler(e) {
    console.log(e);

    e.preventDefault()
    let formData = new FormData()
    formData.append("file", this.state.uploadedFile)
    formData.append("upload_preset", 'avneesh')
    const options = {
      method: 'POST',
      body: formData
    }
    const upload = fetch(CLOUDINARY_UPLOAD_URL, options).then(res=>res.json())
    upload.then((response) => {
      this.setState({
        uploadedUrl:response.secure_url
      })
      this.props.storeImageUrl(response.secure_url)
    }).catch(err => { console.log("error :-", err) })
  }
  render() {

    return (
      <div>
        <form onSubmit={this.onSubmitHandler} >
          <div style={{position: 'relative'}}>
            <input type='file' style={{position: 'relative' ,textAlign: 'right',opacity: 0,zIndex: 2}}
              name='file'
              onChange={this.onChangeHandler}
            />
            <div style={{position: 'absolute',top: '0px',left: '0px',zIndex: 1}}>
              <input placeholder={this.state.filename} style = {{backgroundColor:'#DAEED8',textAlign:'center',borderRadius:'10px'}} />
            </div>
          </div>
          <button>submit</button>
        </form>
        
      </div>
    )
  }

}
const mapDispatchToProps = (dispatch) =>{
  return {
    storeImageUrl:(url)=>dispatch(storeImageUrl(url))
  }
}

export default connect(null,mapDispatchToProps)(ContactForm)