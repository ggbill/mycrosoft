import React from 'react'
import { Router, Route, Switch } from "react-router-dom"
import './App.scss'
import HttpsRedirect from 'react-https-redirect'
import Home from './components/home/Home'
import { createBrowserHistory } from 'history'


const history = createBrowserHistory();

function App() {
    return (
        <HttpsRedirect>
            <Router history={history}>
                <div className="full-height-content">
                    <Switch>
                        <Route
                            path="/"
                            component={Home}
                            exact
                        />
                    </Switch>
                </div>
            </Router>
        </HttpsRedirect>
    );
}

export default App;
