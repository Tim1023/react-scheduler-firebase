import React from 'react';
// import context
import { ProfilerConsumer } from '../../../../context/profileContext'

function Dashboard() {
  return (
    <ProfilerConsumer>
      {context => {
        return (
          <div>
            <strong>Scheduler: {context.email}</strong>
          </div>
        )
      }}
    </ProfilerConsumer>
  )
}

export default (Dashboard);
