import React,{Component} from 'react';
import { Image } from './Image';
import {connect} from 'react-redux';

class Child2 extends Component {
    render () {
      return (<div>
          {(this.props.url)?
             <Image src={this.props.url.url} /> : <h1>Loading .....</h1>
          }
         
      </div>
      )
    }
}
const mapStateToProps = (state) =>{
    return{
        url:state.imageReducer
    }
}
export default connect(mapStateToProps,null)(Child2)