import React, { Component } from 'react'
import Navigation from '../components/LandingPage/Navigation'
import FrontPage  from '../components/LandingPage/FrontPage'
import About from '../components/LandingPage/About'
import FeedBack from '../components/LandingPage/FeedBack'
import Footer from '../components/LandingPage/Footer'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <FrontPage />
                <About />
                <FeedBack />
                <Footer /> 
            </div>
        )
    }
}
