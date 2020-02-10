import React from 'react'
import {connect} from 'react-redux'

const DisplayData = (props) => {
    return (
            <div className="ex1">
                {(props.userData)?
                    (props.userData.loading)?<h1>Loading.........</h1>
                    :(props.userData.error)?<h1>unable to fetch resource</h1>
                :<div className='message'>
                {(props.userData.data)?<p>
                {props.userData.data.results[0].dob.date}<br/>{props.userData.data.results[0].dob.age}
                </p>:<h1>data not available</h1>}
                </div>
                :null
                }
            </div>
    )
}

const mapStateToProps = (state) =>{
        return {
            userData:state.userReducer
        }
}

export default connect(mapStateToProps,null)(DisplayData)
