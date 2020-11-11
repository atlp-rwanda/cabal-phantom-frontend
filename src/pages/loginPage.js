import React, { Component } from 'react'
import Login from '../components/loginForm';
import NavBar from '../components/Navigation'

const loginPage = () => {
    return (
        <div className="login__container">
            <NavBar />
            <Login />
        </div>
    )
}

export default loginPage
