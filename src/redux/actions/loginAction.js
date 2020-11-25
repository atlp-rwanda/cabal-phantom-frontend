import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../types/loginTypes';
import axios from 'axios';

export const loginAction = (data, history) => async (dispatch) => {
    try {
        dispatch(loginRequest())

        const res = await axios.post('https://phantom-cabal-staging.herokuapp.com/api/v1/auth/login', data)
        const user=await res.data;
        localStorage.setItem('token',user.Token)  
        localStorage.setItem('user-data', JSON.stringify(user.user));
        history.push("/dashboard")
        
        dispatch(loginSuccess(user));
    } catch (error) {
        if (error.response) {
            const errorMessage = await error.response.data.message;
            dispatch(loginFails(errorMessage))
        }
        else{
            dispatch(loginFails("Error, please check your connection and try again!"))
        }
    }

}

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
    
}

export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export const loginFails = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error
    }

}
