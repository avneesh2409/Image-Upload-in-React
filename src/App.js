import './App.css';
import {connect} from 'react-redux'
import {fetchUsers} from './store/userStore'
import React, { Component } from 'react'
import Router from './router';
// import FormSubmit from './components/FormSubmit';

class App extends Component {

  componentDidMount(){
    const url = "https://api.randomuser.me/"
    this.props.fetchUsers(url)
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }
  render() {
    return (
      <div>
        <div className="App">
            <Router />
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) =>{
  return {
    fetchUsers:(url)=>dispatch(fetchUsers(url))
  }
}
export default connect(null,mapDispatchToProps)(App);
