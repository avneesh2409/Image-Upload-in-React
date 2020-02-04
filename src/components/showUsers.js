import React from 'react'
import { connect } from 'react-redux'

const ShowUsers = (props) => {
//<img src={(data.results[0].picture)?data.results[0].picture.large:null} />
    let loading = props.result.loading
    let data = props.result.data
    let message = (props.result.message) || null
    return (
        <div>
            <h1>we are in showUser page</h1>
            {
                (loading)?<h1>Loading ........</h1>
            :(message)?<h1>{props.result.message}</h1>
            :(data)?<h1>got the data</h1>:null
            }
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        result:state.userReducer
        }
}

/*
 <div>
            {this.state.uploadedFileCloudinaryUrl === '' ? null :
            <div>
              <img src={this.state.uploadedFileCloudinaryUrl} />
            </div>
            }
</div>
*/
export default connect(mapStateToProps,null)(ShowUsers)