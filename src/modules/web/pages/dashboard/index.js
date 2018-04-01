import React from 'react';
// import context
import { ProfilerConsumer } from '../../../../context/profileContext'
// import components
import Calendar from './Calendar'

function Dashboard() {
  return (
    <ProfilerConsumer>
      {context => {
        return (
          <div>
            <strong>Scheduler: {context.email}</strong>
            <Calendar/>
          </div>
        )
      }}
    </ProfilerConsumer>
  )
}

export default (Dashboard);
