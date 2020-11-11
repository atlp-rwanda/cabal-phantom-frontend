import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL } from '../types/getUsersType'
import axios from 'axios'

export const getUsersAction = () => async (dispatch) => {
    try {
        dispatch(getUserRequest())

        const token = await localStorage.getItem('token')
        const res = await axios.get('https://phantom-cabal-staging.herokuapp.com/api/v1/auth', {
            headers: {
                'Authorization': token
            }
        });
        return dispatch(getUsersSuccess(res))
    } catch (err) {
        if (err.response) {
            // console.log(err.response.data);
            const errorMessage = await err.response.data;
            return dispatch(getUsersFail(errorMessage))

        }else{
            return dispatch(getUsersFail('Network Fails'))
        }

    }
}

export const getUserRequest = () => {
    return {
        type: GET_USER_REQUEST
    }
}

export const getUsersSuccess = (data) => {
    return {
        type: GET_USER_SUCCESS,
        payload: data
    }
}

export const getUsersFail = (error) => {
    return {
        type: GET_USER_FAIL,
        payload: error
    }
}

