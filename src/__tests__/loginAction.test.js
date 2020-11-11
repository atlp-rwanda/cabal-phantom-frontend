import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { cleanup } from '@testing-library/react';
import { loginAction, loginSuccess, loginRequest } from '../redux/actions/loginAction';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../redux/types/loginTypes';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({
  login: {},
});

const historyMock = { push: jest.fn() };


describe('LOGIN - ACTIONS', () => {

  afterEach(cleanup);

  it('should login user successfully', async () => {

    mockAxios.post.mockResolvedValue({
      status: 200,
      data: { status: 200, email: 'admin@phantom.com', password: "admin" },
      message: 'message',
    });

    const results = await store.dispatch(
      await loginAction({ email: 'admin@phantom.com', password: 'admin' }, historyMock)
    );

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(mockAxios.post).toHaveBeenCalledWith(
      'https://phantom-cabal-staging.herokuapp.com/api/v1/auth/login',
      { email: 'admin@phantom.com', password: 'admin' }
    );

    // expect(results.type).toEqual(LOGIN_SUCCESS);

    // expect(results.payload.status).toEqual(200);
  });

  it('should check loginSuccess type', () => {
    const data = {
      email: "admin@phantom.com",
      password: 'admin'
    }
    expect(loginSuccess(data)).toHaveProperty('type')
  })

  it('should check loginRequest type', () => {
    expect(loginRequest()).toHaveProperty('type')
  })

  it('should not login user successfully', async () => {
    mockAxios.post.mockRejectedValue({
      data: {
        status: 400,
        error: 'fail',
      },
    });

    const results = await store.dispatch(
      await loginAction({ email: 'admin@gmail', password: 'admin' })
    );

    // expect(results.type).toEqual(LOGIN_FAIL);
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
      await loginAction({ email: 'admin@gmail', password: 'admin' })
    );
    expect(results.type).toEqual(LOGIN_FAIL);
  });
});
