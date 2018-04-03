import React from 'react';
import EventChip from './EventChip'


export default class Sidebar extends React.Component {

  render() {

    const eventList = !!this.props.events ? this.props.events.map((event) => {
      return (<EventChip
          event={event}
          key={event.id}
          onClickEvent={this.props.onClickEvent}
        />
      )
    }) : null

    return (
      <div>
        {eventList}
      </div>
    );
  }
}