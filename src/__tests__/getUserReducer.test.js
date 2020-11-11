import { cleanup } from '@testing-library/react';
import getUserReducer from '../redux/reducers/getUserReducer';
import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL, } from '../redux/types/getUsersType';

describe('GET USER - REDUCER', () => {

  const initialState = {
    loading: 'block',
    items: [],
    error: '',
  };
  const payload = {
    status: 200,
    data: {
      id: 1,
      name: "Test Name",
      email: "testemail@gmail.com"
    },
  };

  afterEach(cleanup);

  it('Get users - Initial State', () => {
    expect(getUserReducer(undefined, {})).toEqual(initialState);
  });

  it('Check Get Users Request', () => {
    expect(getUserReducer(initialState, { type: GET_USER_REQUEST })).toEqual({
      ...initialState,
      loading: 'block'
    });
  });

  it('Check get users success', () => {
    const action = {
      type: GET_USER_SUCCESS,
      payload,
    }
    expect(getUserReducer(initialState, action)).toEqual({
      loading: 'none',
      items: payload,
      error: '',
    });
  });

  it('Check get users failed', () => {
    const action = {
      type: GET_USER_FAIL,
      payload: {
        message: 'Fetch users failed'
      },
    };



    expect(getUserReducer(initialState, action)).toEqual({
      loading: 'none',
      items: [],
      error: action.payload,
    });
  });

}); 
