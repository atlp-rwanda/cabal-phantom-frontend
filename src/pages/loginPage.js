import React, { Component } from 'react'
import Login from '../components/loginForm';
import NavBar from '../components/Navigation'

export default class loginPage extends Component {
    render() {
        return (
            <div>
                    <NavBar />
                    <Login /> 
            </div>
        )
    }
}
