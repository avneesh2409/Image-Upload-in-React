import {FETCH_USER_FAILURE,FETCH_USER_REQUEST,FETCH_USER_SUCCESS} from '../constant'
export const fetchUsers = (url) =>{
    return (dispatch) =>{
        dispatch(FetchUserRequest())
        fetch(url).then(res=>res.json()).then(json=>{dispatch(FetchUserSuccess(json))})
        .catch(err=>{dispatch(FetchUserFailure(err.message))})
    }
}

export const FetchUserRequest = () =>{
    return {
        type:FETCH_USER_REQUEST
    }
}

export const FetchUserSuccess = (data) =>{
    return {
        type:FETCH_USER_SUCCESS,
        data
    }
}

export const FetchUserFailure = (message) =>{
    return {
        type:FETCH_USER_FAILURE,
        message
    }
}