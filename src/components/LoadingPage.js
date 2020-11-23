import React, { Component } from 'react';
import { increment, decrement } from '../redux/actions/testAction'
import { connect } from "react-redux";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import '../assets/style/App.scss';

class LoadingPage extends Component {
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

export default LoadingPage
