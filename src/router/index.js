import React from 'react'
import {BrowserRouter, Link,Route} from 'react-router-dom'
import DisplayData from '../components/displayData'
import Root from '../components/Root';
import ShowUsers from '../components/showUsers';
import Contact from '../components/contact';
import Event from '../components/event';
const Router = () => {
    return (
        <BrowserRouter>
            <header className="App-header">
                <ul type='none'>
                    <li><Link to='/contact' >Contact</Link></li>
                    <li><Link to='/event' >Event</Link></li>
                    <li><Link to='/user' >Student</Link></li>
                    <li><Link to='/display' >displayUser</Link></li>
                    <li><Link to='/root' >Root</Link></li>
                </ul>
                
                <Route path='/' exact render = {()=>
                        <h1>HEllo welcome to my site</h1>}
                         />
                <Route path='/display' exact component={DisplayData} />
                <Route path='/user' exact component={ShowUsers} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/root' exact component={Root} />
                <Route path='/event' exact component={Event} />
                </header>
            </BrowserRouter>
    )
}
export default Router;