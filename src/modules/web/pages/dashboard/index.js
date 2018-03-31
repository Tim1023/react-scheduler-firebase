import React from 'react';
// import context
import { ProfilerConsumer } from '../../../../context/profileContext'
// import components
import Calender from './Calender'

function Dashboard() {
  return (
    <ProfilerConsumer>
      {context => {
        return (
          <div>
            <strong>Scheduler: {context.email}</strong>
            <Calender/>
          </div>
        )
      }}
    </ProfilerConsumer>
  )
}

export default (Dashboard);
