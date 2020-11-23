import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LoginPage  from "../pages/loginPage";
import DashBoard from '../pages/dashboardPage'
import LandingPage from '../pages/LandingPage';

export default class App extends Component {
    render() {
        return (
            <div>
                 <Router>
                     <Switch>
                        <Route path="/" exact component={LandingPage} />
                        <Route path="/login" exact component={LoginPage} />
                        <Route path="/dashboard" exact component={DashBoard} />              
                     </Switch>
                 </Router>                
            </div>
        )
    }
}
