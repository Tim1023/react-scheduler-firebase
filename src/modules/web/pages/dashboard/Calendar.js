import React, { Component } from 'react';
// import events from './events'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import moment from 'moment'
import uuidV4 from 'uuid/v4'

import './styles/dragAndDrop/styles.css'
import './styles/less/styles.css'
import './styles/css/react-big-calendar.css'
import { GetEvents } from "../../../../helpers/db";


BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const DragAndDropCalendar = withDragAndDrop(BigCalendar)

class Dnd extends Component {


  constructor(props) {
    super(props)

    this.state = {
      events: []
    }

    this.moveEvent = this.moveEvent.bind(this)
  }

  componentDidMount() {
    const newEvents = []

    GetEvents(this.props.uid).then(querySnapshot => {
      querySnapshot.forEach(doc => {
        newEvents.push(doc.data())
        this.setState({
          events: newEvents,
        })
      });
    })
  }

  moveEvent({event, start, end}) {

    const {events} = this.state

    const idx = events.indexOf(event)
    const updatedEvent = {...event, start, end}

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents,
    })

    alert(`${event.title} was dropped onto ${event.start}`)
  }

  resizeEvent = (resizeType, {event, start, end}) => {
    const {events} = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? {...existingEvent, start, end}
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })
  }


  render() {
    if (this.state.events) {
      return (
        <div style={{height: 500, width: 600}}>

          <DragAndDropCalendar
            selectable
            events={this.state.events}
            onEventDrop={this.moveEvent}
            resizable
            onEventResize={this.resizeEvent}
            defaultView="week"
            defaultDate={new Date()}
          />
        </div>
      )
    }

  }
}

export default DragDropContext(HTML5Backend)(Dnd)