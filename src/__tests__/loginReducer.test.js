import React from 'react';
import {
  render,
  cleanup,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import Login from '../pages/loginPage';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import store from '../redux/store';
import reducer from '../redux/reducers/loginReducer';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../redux/types/loginTypes';
import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loginAction } from '../redux/actions/loginAction'; 

const onSubmit = jest.fn();

const LoginComponent = () => {
  return render(
      <Provider store={store}>
          <Router>
            <Login onSubmit={onSubmit} />
          </Router>
      </Provider>
  );
};

const createMockStore = configureMockStore([thunk]);
const storeActions = createMockStore({
  login: {},
});

describe('LOGIN - REDUCER', () => {
  afterEach(cleanup);
  const initialState = {
    loading: 'none',
    data: [],
    error: '',
  };
  const payload = {
    status: 200,
    message: 'Login true',
    data: {
      id: 123,
      email: 'email@gmail.com',
    },
  };

  it('should render the component correctly', () => {
    const { asFragment } = LoginComponent();
    expect(asFragment(<Login />)).toMatchSnapshot();
  });

  it('should change state/value of email when typing', () => {
    const { getByLabelText } = LoginComponent();
    const email = getByLabelText('email');
    const password = getByLabelText('password');

    userEvent.type(email, 'email@gmail.com');
    userEvent.type(password, 'admin');

    expect(email.value).toBe('email@gmail.com');
    expect(password.value).toBe('admin');
  });

  it('should return error if password not provided', async () => {
    const { getByLabelText, container, getByText, debug } = LoginComponent();
    const email = getByLabelText('email');
    const form = container.querySelector('form');

    userEvent.type(email, 'email@gmail.com');

    form.dispatchEvent(new Event('submit'));

    waitFor(() => expect(getByText('Provide a password')).toBeTruthy());
  });

  it('should return error if password not provided', async () => {
    const { getByLabelText, container, getByText } = LoginComponent();
    const password = getByLabelText('password');
    const form = container.querySelector('form');

    userEvent.type(password, 'email@gmail.com');

    form.dispatchEvent(new Event('submit'));

    waitFor(() => expect(getByText('Provide a valid email')).toBeTruthy());
  });

  it('should return error if password and email are not correct ', async () => {
    const { getByLabelText, container, getByText, debug } = LoginComponent();
    const password = getByLabelText('password');
    const email = getByLabelText('email');
    const button = getByLabelText('login');

    userEvent.type(email, 'email@gmail.com');
    userEvent.type(password, 'password');

    button.click(button);

    waitFor(() =>
      expect(getByText('Invalid Username or passoword')).toBeTruthy()
    );
  });

  it('INITIAL STATE', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('LOGIN_REQUEST ', () => {
    expect(reducer(initialState, { type: LOGIN_REQUEST })).toEqual({
      ...initialState,
      loading: 'block',
    });
  });

  it('LOGIN_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: LOGIN_SUCCESS,
        payload,
      })
    ).toEqual({
      loading: 'none',
      data: payload,
      error: '',
    });
  });

  it('LOGIN_FAIL', () => {
    const action = {
      type: LOGIN_FAIL,
      payload: 'Login error',
    };

    expect(reducer(initialState, action)).toEqual({
      loading: 'none',
      data: [],
      error: 'Login error',
    });
  });

}); 
