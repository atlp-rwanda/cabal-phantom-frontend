import React, { Component } from 'react';
import '../assets/style/App.scss';

export default class LoadingPage extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__title">Phantom App</div>
                <div className="loading">
                    <div className="loader"></div>
                </div>
            </div>
        )
    }
}
