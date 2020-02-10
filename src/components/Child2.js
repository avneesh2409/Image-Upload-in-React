import React,{Component} from 'react';
import {connect} from 'react-redux';

class Child2 extends Component {
    render () {
      return (
      <div>
              we are in child 2
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