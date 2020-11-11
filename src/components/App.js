import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingPage from './LoadingPage';
import TestRedux from './Counter';
import Logout from './Logout'

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" component={LoadingPage} />
                        <Route exact path="/TestRedux" component={TestRedux} />
                        <Route exact path="/logout" component={Logout} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
