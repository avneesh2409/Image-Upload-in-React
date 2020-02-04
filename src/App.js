import React,{useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {fetchUsers} from './store/userStore'
import ShowUsers from './components/showUsers';
import ContactForm from './components/ContactForm';

function App(props) {
  const url = "https://api.randomuser.me/"
useEffect(() => {
  props.fetchUsers(url)
}, [props])
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello Hey there</h1>
      <ShowUsers />
      <ContactForm />
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
