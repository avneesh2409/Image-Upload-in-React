import React,{useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {fetchUsers} from './store/userStore'
// import ShowUsers from './components/showUsers';
import ContactForm from './components/ContactForm';
// import Root from './components/Root';

function App(props) {
  const url = "https://api.randomuser.me/"
useEffect(() => {
  props.fetchUsers(url)
}, [props])
  return (
    <div className="App">
      <header className="App-header">
      <h1>this is propogation of state and Props</h1>
      {/* <ShowUsers /> */}
      <ContactForm />
      {/* <Root /> */}
      </header>
    </div>
  );
}
const mapDispatchToProps = (dispatch) =>{
  return {
    fetchUsers:(url)=>dispatch(fetchUsers(url))
  }
}
export default connect(null,mapDispatchToProps)(App);
