import React from "react";
import { loginAction, loginSuccess, loginFails,loginRequest } from "../redux/actions/loginAction";
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const storeActions = mockStore();

describe("Login Action",()=>{
  beforeEach(() => {storeActions.clearActions();});
it('Dispatches the correct action and payload during a sucessful login', () => {
        const expectedActions = [
          {
            'payload': 1,
            "type": "LOGIN_SUCCESS",
          },
        ];
        storeActions. dispatch(loginSuccess(1));
        expect(storeActions.getActions()).toEqual(expectedActions);
      });

      it('Dispatches the correct action and payload during a failed login', () => {
        const expectedActions = [
          {
            'payload': 2,
            "type": "LOGIN_FAIL"
          },
        ];
    
        storeActions. dispatch(loginFails(2))
        expect(storeActions.getActions()).toEqual(expectedActions);
      });

      it('Dispatches the correct action and payload during a pending login request', () => {
        const expectedActions = [
          {
            "type": "LOGIN_REQUEST",
          },
        ];
        
        storeActions.dispatch(loginRequest())
        expect(storeActions.getActions()).toEqual(expectedActions);
      });
})
