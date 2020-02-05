import {FETCH_USER_FAILURE,STORE_IMAGE_URL,FETCH_USER_SUCCESS,FETCH_USER_REQUEST} from '../constant'

const initialState = {
    loading:false,
    data:null,
    error:null
}

export const userReducer = (state = initialState,action) =>{
    switch(action.type)
    {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_USER_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    data:action.data
                }
        case FETCH_USER_FAILURE:
                return {
                    ...state,
                    loading:false,
                    message:action.message
                }
        default : return state
    }
}
const initial = {
    url:null
}
export const imageReducer = (state=initial,action) =>{
    switch(action.type)
    {
        case STORE_IMAGE_URL:
            return {
                ...state,
                url:action.url
            }
        default : return state
    }
}