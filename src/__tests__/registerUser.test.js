import { cleanup } from '@testing-library/react';
import reducer from '../redux/reducers/registerUserReducer';
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_REQUEST
} from '../redux/types/registerUsersTypes';
import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { registerUserAction } from '../redux/actions/registerUserAction';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({
  register: {},
});

describe("GET USER REDUCERS",() => {
    const initialState = {
        loading: 'none',
        data: [],
        error: ''
    }
    const payload = {
        status: 200,
        statusText:"OK",
      };

    afterEach(cleanup);

    it('INIT', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
      });
    
    it('Register user request reducer', () => {
        expect(reducer(initialState, { type: REGISTER_REQUEST })).toEqual({
          ...initialState,
          loading: 'block',
        });
      });
    
      it('get user sucess reducer ', () => {
        expect(
          reducer(initialState, {
            type: REGISTER_SUCCESS,
            payload,
          })
        ).toEqual({
          loading: 'none',
          error: '',
          data:payload
        });
      });

      it('GET user fail', () => {
        const action = {
          type: REGISTER_FAIL,
          payload: 'Register error',
        };
    
        expect(reducer(initialState, action)).toEqual({
          loading: 'none',
          data: [],
          error: 'Register error',
        });
      });
    afterEach(cleanup);

    it('should register a user successfully', async () => {
      mockAxios.post.mockResolvedValue({
        status: 200,
        data: { id: 123, email: 'email' },
        message: 'message',
      });
  
      const results = await store.dispatch(
        await registerUserAction({ email: 'email', password: 'password' })
      );
      const token = localStorage.getItem('token')
      expect(mockAxios.post).toHaveBeenCalledTimes(1);
      expect(
        mockAxios.post
      ).toHaveBeenCalledWith(
        'https://phantom-cabal-staging.herokuapp.com/api/v1/auth/register',
        { email: 'email', password: 'password' },
        {
          headers: {
              'Authorization': token
          }
      }
      );
      expect(results.type).toEqual(REGISTER_SUCCESS);
      expect(results.payload.status).toEqual(200);
    });

    it('should not register user successfully', async () => {
      mockAxios.post.mockRejectedValue({
        data: {
          status: 400,
          error: 'fail',
        },
      });
  
      const results = await store.dispatch(
        await registerUserAction({ email: 'admin@gmail', password: 'admin' })
      );
  
      expect(results.type).toEqual(REGISTER_FAIL);
    });

    it('should not login user successfully', async () => {
      mockAxios.post.mockRejectedValue({
        response: {
          data: {
            message: 'error',
          },
        },
      });
  
      const results = await store.dispatch(
        await registerUserAction({ email: 'admin@gmail', password: 'admin' })
      );

  
      expect(results.type).toEqual(REGISTER_FAIL);
    });
})
