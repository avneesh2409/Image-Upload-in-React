import React, { Component } from 'react'
import {connect} from 'react-redux';
import {storeImageUrl} from '../store/userStore'
// const UPLOAD_PRESET = 'avneesh';
// const UPLOAD_URL = 'https://api.cloudinary.com/v1_1/avneeshcloud/upload';
const UPLOAD_URL = 'http://localhost:5005/user/register'

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedUrl: '',
      uploadedFile: null,
      filename:'upload file'
    };
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }
  onChangeHandler(e) {
    let files = "";
    if(e.target.files && e.target.files.length > 0){
      this.setState({
        uploadedFile: e.target.files
      });
     for(let file in e.target.files){
       if(e.target.files[file].name && e.target.files[file].name !== 'item'){
          files = files + e.target.files[file].name + ',';
       }
     }
    }
this.setState({
  filename:files
})
  }

  onSubmitHandler(e) {
     e.preventDefault()
    let formData = new FormData()
    formData.append("file", this.state.uploadedFile)
    const options = {
      method: 'POST',
      body: formData
    }
    const upload = fetch(UPLOAD_URL, options).then(res=>res.json())
    upload.then((response) => {
      console.log(response)
    }).catch(err => { console.log("error :-", err) })
  }
  render() {

    return (
      <div>
        <form onSubmit={this.onSubmitHandler} >
          <div style={{position: 'relative'}}>
            <input type='file' style={{position: 'relative' ,textAlign: 'right',opacity: 0,zIndex: 2}}
              name='file'
              accept='image/*'
              multiple = {true}
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