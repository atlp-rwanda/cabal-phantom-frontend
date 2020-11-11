import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LoginPage  from "../pages/loginPage";
import DashBoard from '../pages/dashboardPage'
import LoadingPage from '../components/LoadingPage'

export default class Routers extends Component {
    render() {
        return (
            <div>
                 <Router>
                     <Switch>
                        <Route path="/" exact component={LoadingPage} />
                        <Route path="/login" exact component={LoginPage} />
                        <Route path="/dashboard" exact component={DashBoard} />
                
                     </Switch>
                 </Router>                
            </div>
        )
    }
}
