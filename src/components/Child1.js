import React,{Component} from 'react'
import ContactForm from './ContactForm'
class Child1 extends Component {
    render () {
      return (
        <div style={{height:'250px',width:'250px',position:'absolute',top:'30%'}}>
          <ContactForm />
          <ContactForm />
          <ContactForm />
        </div>
      )
    }
}

export default Child1