//import libs
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// import services actions
import { firebaseAuth } from '../config/constants';

// import components
import PrivateLayout from './Private'
import PublicLayout from './Public'

class Layout extends Component {
  state = {
    authed: false,
    loading: true
  };

  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authed: true,
          loading: false
        });
      } else {
        this.setState({
          authed: false,
          loading: false
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const {children} = this.props
    if (this.state.authed) {
      return <PrivateLayout>{children}</PrivateLayout>
    }
    return <PublicLayout>{children}</PublicLayout>
  }
}


export default withRouter(Layout)
