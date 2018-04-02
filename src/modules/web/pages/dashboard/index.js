import React, { Component } from 'react';
// import context
import { ProfilerConsumer } from '../../../../context/profileContext'
// import components
import Calendar from './Calendar'

class Dashboard extends Component {

  render() {
    return (
      <ProfilerConsumer>
        {context => {
          if (context.email) {
            return (
              <div>
                <strong>Scheduler: {context.email}</strong>
                <Calendar uid={context.uid} />
              </div>
            )
          }
        }}
      </ProfilerConsumer>
    )
  }

}

export default (Dashboard);
