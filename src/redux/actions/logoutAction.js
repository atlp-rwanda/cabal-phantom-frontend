import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_ERROR } from '../types/logoutTypes'
import axios from 'axios'

export const logout = (history) => async(dispatch) => {
    try {
       dispatch(logoutRequest());
        // console.log('Request')
        const res = await axios.get('https://phantom-cabal-staging.herokuapp.com/api-docs//api/v1/auth/logout')
        localStorage.removeItem('token')
        history.push("/login")
        dispatch(logoutSuccess(res))
       // console.log('Response', res)
      
    } catch (error) {
        console.log(error)
        return dispatch(logoutError(error))
    }    
};
    
export const logoutRequest = () =>{
    return { type: LOGOUT_REQUEST }
}  

export const logoutSuccess = (data) =>{
    return { 
        type: LOGOUT_SUCCESS,
        payload: data
    }
}  

export const logoutError = (error) =>{
    return { 
        type: LOGOUT_ERROR,
        payload: error
    }
}  
