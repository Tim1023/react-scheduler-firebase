import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.state.onRequestClose()
    this.state.onEditEvent(this.state.event)
  }

  handleDelete = e => {
    e.preventDefault();
    this.state.onRequestClose()
    this.state.onDeleteEvent(this.state.event)
  }
  handleCancel = e => {
    e.preventDefault();
    this.state.onRequestClose()
  }

  render() {
    return (
      <form
        onSubmit={e => this.handleSubmit(e)}
      >
        <RaisedButton
          label="Delete"
          type="button"
          secondary={true}
          onClick={this.handleDelete}
        />
        <div>
          <TextField
            defaultValue={this.state.event.title}
            floatingLabelText="Title"
            onChange={(event, newValue) => this.setState({event: Object.assign({}, this.state.event, {title: newValue})})}
          />
          <TextField
            defaultValue={this.state.event.desc}
            floatingLabelText="Description"
            onChange={(event, newValue) => this.setState({event: Object.assign({}, this.state.event, {desc: newValue})})}
          />

        </div>
        <div>
          <RaisedButton
            className={'mr-3 my-3'}
            label="Submit"
            primary={true}
            type="submit"
          />
          <RaisedButton
            className={'mr-3 my-3'}
            label="Cancel"
            type="Cancel"
            onClick={this.handleCancel}
          />

        </div>

      </form>
    );
  }
}