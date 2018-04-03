import React from 'react';
import ical from 'ical-generator';
import fileDownload from 'react-file-download';
import RaisedButton from 'material-ui/RaisedButton';


export default class Footer extends React.Component {
  handleClick() {
    console.log(this.props.selectedEvents);
    let cal = ical({domain: 'github.com', name: 'Scheduler Export'});

    this.props.selectedEvents.map((event) => {
      let {
        title,
        start,
        end,
        description,
        phone
      } = event;

      cal.createEvent({
        start,
        end,
        summary: title+'  '+phone?phone:'',
        description,
      });

      return(event);
    })

    const data = new Blob([cal.toString()], {type: 'text/calendar'});
    fileDownload(data, 'download.ics');
  }
  render() {
    return (
      <div className={'ml-3'}>
        <RaisedButton label={'Export as ical'}  primary={true} onClick={()=>{this.handleClick()}}/>

      </div>
    )
  }
}