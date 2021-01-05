import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage  from "../pages/loginPage";
import LandingPage from '../pages/LandingPage';
import  AdminDashboard from '../components/dashboard/Dashboard'
import Dashboard from '../pages/dashboard'
import Map from '../pages/MapPage'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
    render() {
        return (
            <div>
                 <Router>
                     <Switch>
                        <Route path="/" exact component={LandingPage} />
                        <Route path="/login" exact component={LoginPage} />      
                        <Route path="/admin" exact component={AdminDashboard} />
                        <Route path="/dashboard" exact component={Dashboard} />
                        <Route path="/maps" exact component={Map} />  
                     </Switch>
                 </Router>                
            </div>
        )
    }
}
