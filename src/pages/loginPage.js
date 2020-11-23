import React, { Component } from 'react'
import Login from '../components/loginForm';
import Navigation from '../components/LandingPage/Navigation'

export default class loginPage extends Component {
    render() {
        return (
            <div>
                    <Navigation />
                    <Login /> 
            </div>
        )
    }
}
