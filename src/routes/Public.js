import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const PublicRoutes = ({component: Component, authed, routeAuth, ...rest}) => {

  return <Route {...rest} render={props =>
    authed === false || routeAuth === undefined? (
      <Component {...props} />
    ) : (
      <Redirect to="/dashboard" />
    )
  } />
}

PublicRoutes.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default PublicRoutes
