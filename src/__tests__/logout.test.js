import React from 'react'
import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import logoutReducer from '../redux/reducers/logoutReducer';
import { logoutAction, logoutRequest, logoutSuccess, logoutError } from '../redux/actions/logoutAction';
import Logout from '../components/Logout';
import { Provider } from 'react-redux'
import store from '../redux/store'
import userEvent from '@testing-library/user-event'
import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_ERROR } from '../redux/types/logoutTypes'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { cleanup } from '@testing-library/react';
import reducer from '../redux/reducers/registerUserReducer';


// logoutError

const LogoutComponent = () => {
    return render(
        <Provider store={store}>
            <Router>
                <Logout />
            </Router>
        </Provider>
    )
}

describe('Test Logout', ()=>{
    const initialState = {
        loading: 'none',
        data: [],
        error:''
    };
    const payload = []
    it('Capturing Snapshot of Logout', () => {
        const renderedValue = LogoutComponent()
        expect(renderedValue).toMatchSnapshot();
    });

    it('should test action', ()=>{
        expect(logoutRequest()).toHaveProperty('type')
    })

    it('should test action', ()=>{
        const data = {
            message: "test logout"
        }
        expect(logoutSuccess(data)).toHaveProperty('payload')
    })

    it('should test action', ()=>{
        const error = {
            message: "test failed"
        }
        expect(logoutError(error)).toHaveProperty('payload')
    })

    it('INIT', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
      });
    
      it('Get user request reducer', () => {
        expect(reducer(initialState, { type: LOGOUT_REQUEST })).toEqual({
          ...initialState,
          loading: 'none',
        });
      });
    
      it('get user sucess ', () => {
        expect(
          reducer(initialState, {
            type: LOGOUT_SUCCESS,
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
          type: LOGOUT_ERROR,
          payload: 'Logout error',
        };
    
        expect(reducer(initialState, action)).toEqual({
          loading: 'none',
          data: [],
          error: '',
        });
      });
})
