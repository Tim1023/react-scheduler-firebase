import React, { Component } from 'react';
// import context
import { ProfilerConsumer } from '../../../../context/profileContext'

export default class Dashboard extends Component {
  render() {
    return   <ProfilerConsumer>
      {context => {
        return (
          <div>
            <strong>{context.email}</strong>
          </div>
        )
      }}
    </ProfilerConsumer>
  }
}
