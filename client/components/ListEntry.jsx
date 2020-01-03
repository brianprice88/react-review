import React from 'react';
import { render } from 'react-dom';

class ListEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
  render() {
      return (
        <li>{this.props.todo}</li>
      )
  }
}


export default ListEntry