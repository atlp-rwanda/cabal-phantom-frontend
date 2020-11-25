import React, { Component } from 'react'
import Login from '../components/loginForm';
import store from '../redux/store';
import { Provider } from 'react-redux';
import NavBar from '../components/Navigation'

export default class loginPage extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <NavBar />
                    <Login />
                </Provider>
            </div>
        )
    }
}

