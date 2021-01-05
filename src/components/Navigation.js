import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class Navigation extends Component {
    state = {
        backgroundColor: 'transparent'
    }

    listenScrollEvent = e => {
        if (window.scrollY > 20) {
            this.setState({ backgroundColor: '#040F23' })
        } else {
            this.setState({ backgroundColor: 'transparent' })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    render() {
        return (
            <div className="headers" style={{ backgroundColor: this.state.backgroundColor }}>
                <Link to='/'><div className="headers__logo">Phantom</div></Link> 
                <div className="headers__menu">
                    <select name="Languages" className="headers__menu__select">
                        <option value="English">English</option>
                        <option value="French" >French</option>
                        <option value="Kinyarwanda" >Kinyarwanda</option>
                    </select>
                </div>
            </div>
        )
    }
}
