import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from '../types/registerUsersTypes';

const initialState = {
    loading: 'none',
    data: [],
    error: ''
}

const registerUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: 'block'
            };
        case REGISTER_SUCCESS:
            return {
                loading: 'none',
                data: action.payload,
                error: ''
            };
        case REGISTER_FAIL:
            return {
                loading: 'none',
                data: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default registerUserReducer;
