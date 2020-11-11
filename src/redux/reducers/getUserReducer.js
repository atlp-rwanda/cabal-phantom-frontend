import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL } from '../types/getUsersType'

const initialState = {
    loading: 'block',
    items: [],
    error: ''
}

const getUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: 'block'
            };
        case GET_USER_SUCCESS:
            return {
                loading: 'none',
                items: action.payload,
                error: ''
            };
        case GET_USER_FAIL:
            return {
                loading: 'none',
                items: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default getUserReducer;
