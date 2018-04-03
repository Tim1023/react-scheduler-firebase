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
import { GetEvents, UpdateEvents, GetEquipments } from "../../../../helpers/db";

import Dialog from 'material-ui/Dialog';
import Modal from "./Modal";
import Sidebar from './Sidebar'

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const DragAndDropCalendar = withDragAndDrop(BigCalendar, {backend: false})

class Dnd extends Component {

  constructor(props) {
    super(props)

    this.state = {
      events: [],
      equipments: [],
      modal: {
        id: null,
        title: null,
        desc: null,
        start: new Date(),
        end: new Date(),
      },
      modalOpen: false,
    }

    this.moveEvent = this.moveEvent.bind(this)
  }

  componentDidMount() {
    const newEvents = []
    const newEquipments = []

    GetEvents(this.props.uid).then(querySnapshot => {
      querySnapshot.forEach(doc => {
        newEvents.push(doc.data())
        this.setState({
          events: newEvents,
        })
      });
    })
    GetEquipments(this.props.uid).then(querySnapshot => {
      querySnapshot.forEach(doc => {
        newEquipments.push(doc.data())
        this.setState({
          equipments: newEquipments,
        })
      });
    })

  }

  moveEvent({event, start, end}) {
    const {events} = this.state
    const idx = events.indexOf(event)
    let updatedEvent = {...event, start, end}
    const nextEvents = [...events]
    if (idx > -1) {
      nextEvents.splice(idx, 1, updatedEvent)
      UpdateEvents(event.id).update({start, end}).then(
        this.setState({
          events: nextEvents,
        })
      ).catch(error => {
        console.error('Update error', error);
      });
    }
    else {
      const newEventId = uuidV4()
      updatedEvent = {...updatedEvent,id:newEventId,ownerId:this.props.uid}
      console.log(updatedEvent)
      nextEvents.push(updatedEvent)
      UpdateEvents(newEventId).set(updatedEvent).then(
        this.setState({
          events: nextEvents,
        })
      ).catch(error => {
        console.error('Create New Event error', error);
      });

    }


  }

  selectEvent = (event) => {
    this.handleOpen(event)
  }

  resizeEvent = (resizeType, {event, start, end}) => {
    const {events} = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? {...existingEvent, start, end}
        : existingEvent
    })

    UpdateEvents(event.id).update({start, end}).then(
      this.setState({
        events: nextEvents,
      })
    ).catch(error => {
      console.error('Update error', error);
    });
  }

  editEvent = ({id, title, desc}) => {
    const {events} = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === id
        ? {...existingEvent, title, desc}
        : existingEvent
    })

    UpdateEvents(id).update({title, desc}).then(
      this.setState({
        events: nextEvents,
      })
    ).catch(error => {
      console.error('Update error', error);
    });
  }
  deleteEvent = ({id}) => {
    const {events} = this.state

    const nextEvents = events.filter(existingEvent => {
      return existingEvent.id !== id
    })

    UpdateEvents(id).delete().then(
      this.setState({
        events: nextEvents,
      })
    ).catch(error => {
      console.error('Delete error', error);
    });
  }
  handleClose = () => {
    this.setState({
      modalOpen: false,
      modal: {
        id: null,
        title: null,
        desc: null,
        start: new Date(),
        end: new Date(),
      },
    });
  };
  handleOpen = (event) => {
    this.setState({
      modalOpen: true,
      modal: event,
    });
  };
  loadEquipments = () => {
    return this.state.equipments.map(event => <Sidebar
      event={event}
      key={event.id}
    />)
  }

  render() {

    if (this.state.events) {
      return (
        <div className={'row'}>
          <div className={'col-2'}>
            Equipments:
            {this.state.equipments ? this.loadEquipments() : null}
          </div>
          <div style={{height: 500}} className={'col-8'}>

            <DragAndDropCalendar

              events={this.state.events}
              onEventDrop={this.moveEvent}
              resizable
              onEventResize={this.resizeEvent}
              defaultView="week"
              defaultDate={new Date()}
              onSelectEvent={this.selectEvent}

            />
            <Dialog title="Task"
                    modal={false}
                    open={this.state.modalOpen}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
            >
              <Modal event={this.state.modal}
                     onRequestClose={this.handleClose}
                     onEditEvent={this.editEvent}
                     onDeleteEvent={this.deleteEvent}

              />
            </Dialog>
          </div>
          <div className={'col-2'}>
            People:
          </div>
        </div>
      )
    }

  }
}

export default DragDropContext(HTML5Backend)(Dnd)