// import libs
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
// import services actions
import { firebaseAuth, storageKey } from '../config/constants';
// import components
import routes from './routes'
import PrivateRoute from './Private'
import PublicRoute from './Public'

import Layout from '../layout'

const history = createBrowserHistory()

class Routes extends Component {
  state = {
    authed: !!localStorage[storageKey],
  };

  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authed: true,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }
  render() {
    return <Router hisotry={history}>
      <Layout authed={this.state.authed} >
        <Switch>
          {routes.map((route, i) => {

            if (route.auth) {
              return <PrivateRoute authed={this.state.authed} key={i} {...route} />
            }
            return <PublicRoute routeAuth={route.auth} authed={this.state.authed} key={i} {...route} />
          })}
        </Switch>
      </Layout>
    </Router>
  }
}

export default Routes
