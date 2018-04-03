import PropTypes from 'prop-types';
import React, { Component } from 'react'
import { DragSource } from 'react-dnd';
import BigCalendar from 'react-big-calendar'


/* drag sources */
let eventSource = {
  beginDrag(props) {
    return props.event;
  },
  endDrag(props,monitor,component) {

    props.onEventDrop(props.event)
    console.log(monitor.didDrop())
  }
}

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  event: PropTypes.object.isRequired
}

class DraggableSidebarEvent extends Component {


  render() {
    let {connectDragSource, isDragging, event} = this.props;
    let EventWrapper = BigCalendar.components.eventWrapper;
    let {title} = event;


    return (
      <EventWrapper event={event}>
        {connectDragSource(<div style={{opacity: isDragging ? 0.5 : 1}}>
          {title}
        </div>)}
      </EventWrapper>

    );
  }
}

DraggableSidebarEvent.propTypes = propTypes;


export default DragSource('event', eventSource, collectSource)(DraggableSidebarEvent);
