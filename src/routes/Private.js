import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return <Route {...rest} render={props =>
      authed === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{pathname: '/login', state: {from: props.location}}}
        />
      )}
  />

}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
  authed: PropTypes.bool.isRequired,
}

export default PrivateRoute
