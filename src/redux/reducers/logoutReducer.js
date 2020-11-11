import * as actionTypes from "../types/logoutTypes";

const initialState = {
    loading: 'none',
    data: {},
    error:''
};

const logoutReducer = (state = initialState, action) => {
  switch (action) {
    case actionTypes.LOGOUT_REQUEST:
      return { 
          ...state, 
          loading: 'block'
        };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        loading: 'none',
        data: action.payload,
        error: ''
      }
    case actionTypes.LOGOUT_ERROR:
      return {
        loading: 'none',
        data: {},
        error: action.payload
      }

    default:
      return state;
  }
};

export default logoutReducer;