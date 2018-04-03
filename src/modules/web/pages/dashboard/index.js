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
                <div><strong>Scheduler: {context.email}</strong></div>
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
