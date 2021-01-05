import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/LandingPage/Footer'
import RouteTitle from '../components/RouteTitle'
import Maps from '../components/maps/Maps'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <RouteTitle />
                <Maps />
                <Footer />
            </div>
        )
    }
}
