import { cleanup } from '@testing-library/react';
import logoutReducer from '../redux/reducers/logoutReducer';
import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_ERROR, } from '../redux/types/logoutTypes';

describe('LOGOUT - REDUCER', () => {

  const initialState = {
    loading: 'none',
    data: [],
    error: '',
  };
  const payload = {
    status: 200,
    data: {
      message: "Logout successfully",
      isLoggedIn: false
    },
  };

  afterEach(cleanup);

  it('Logout - Initial State', () => {
    expect(logoutReducer(undefined, {})).toEqual(initialState);
  });

  it('Check Logout Request', () => {
    expect(logoutReducer(initialState, { type: LOGOUT_REQUEST })).toEqual({
      ...initialState,
    });
  });

  it('Check Logout Success', () => {
    const action = {
      type: LOGOUT_SUCCESS,
      payload,
    }
    expect(logoutReducer(initialState, action)).toEqual({
      loading: 'none',
      data: [],
      error: '',
    });
  });

  it('Check logout failed', () => {
    const action = {
      type: LOGOUT_ERROR,
      payload: {
        message: 'Logout error'
      },
    };

    expect(logoutReducer(initialState, action)).toEqual({
      loading: 'none',
      data: [],
      error: '',
    });
  });

}); 
