import React, { Component } from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Share from './Share.js'
import Header from './UI/Header.js'
import Nav from './UI/Nav.js'
import Ind from './Ind.js'
import Find from './Find.js'

class Router extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Nav />
                    <Switch>
                        <Route path="/index" component={Ind} />
                        <Route path="/bikeshares" component={Share} />
                        <Route path="/findbike" component={Find} />
                    </Switch>
                    <Redirect from="*" to="/index" />
                    </div>
            </BrowserRouter>
        )
    }
}

export default Router;