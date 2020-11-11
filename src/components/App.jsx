import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoadingPage from './LoadingPage'

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={LoadingPage} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
