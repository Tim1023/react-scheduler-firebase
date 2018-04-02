import React from 'react';


export default class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>


      </div>
    );
  }
}