import React, { Component } from 'react';

class Friend extends Component{

  render() {
    return (
      <tr>
        <td>{this.props.friend.name}</td>
        <td>{this.props.friend.website}</td>
      </tr>
    )
  }
}

export default Friend;
