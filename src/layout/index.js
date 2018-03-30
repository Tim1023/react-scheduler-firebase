//import libs
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// import components
import PrivateLayout from './Private'
import PublicLayout from './Public'

class Layout extends Component {


  render() {
    const {children, authed} = this.props
    if (authed) {
      return <PrivateLayout authed={authed}>{children}</PrivateLayout>
    }
    return <PublicLayout authed={authed}>{children}</PublicLayout>
  }
}


export default withRouter(Layout)
