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

  render() {
    return (
      <form
        onSubmit={e => this.handleSubmit(e)}
      >

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


        <div>
          <RaisedButton
            label="Submit"
            primary={true}
            type="submit"
          />
        </div>

      </form>
    );
  }
}