import {FETCH_USER_FAILURE,FETCH_USER_SUCCESS,FETCH_USER_REQUEST} from '../constant'

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
