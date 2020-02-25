import React, { useReducer } from 'react'
const STORE_USERNAME = 'STORE_USERNAME'
const STORE_PASSWORD = 'STORE_PASSWORD'
const STORE_CONTACT = 'STORE_CONTACT'

const initialState = {
    username:'',
    password:'',
    contact:''
}
const storeUsername = (username) =>{
    return {
        type:STORE_USERNAME,
        username
    }
}
const storePassword = (password) =>{
    return {
        type:STORE_PASSWORD,
        password
    }
}
const storeContact = (contact) =>{
    return {
        type:STORE_CONTACT,
        contact
    }
}

const reducer = (state,action) =>{
    switch(action.type){
        case STORE_USERNAME:
            return {
                ...state,
                username:action.username
            }
        case STORE_PASSWORD:
            return {
                ...state,
                password:action.password
            }
        case STORE_CONTACT:
            return {
                ...state,
                contact:action.contact
            }
        default : return state
    }
}

const Event = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const onSubmitHandler = (event) =>{
        event.preventDefault()
        console.log("state here :-",state)
        dispatch(storeUsername(''));
        dispatch(storePassword(''));
        dispatch(storeContact(''));
    }
        return (
            <div  id='register'>
                <h1>Register</h1>
                <form onSubmit = {onSubmitHandler}>
                    <div>Username :-<input type='text' value = {state.username} placeholder='enter the username' onChange = {(e)=>dispatch(storeUsername(e.target.value))} /></div>
                    <div>Password :-<input type='text' value = {state.password} placeholder='enter the password' onChange = {(e)=>dispatch(storePassword(e.target.value))} /></div>
                    <div>Contact :-<input type='text' value = {state.contact} placeholder='enter the contact'  onChange = {(e)=>dispatch(storeContact(e.target.value))} /></div>
                    <div><button>SUBMIT</button></div>
                </form>
            </div>
        )
}
export default Event