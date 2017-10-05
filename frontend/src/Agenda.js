import React, { Component } from 'react';

import Friend from './Friend.js';

class Agenda extends Component {

  renderFriends() {
    return this.props.friends.map((item, position) => {
      return <Friend friend = {item} key = {position} />;
    });
  }

  render() {
    return (
      <table className='table-hover thead-default table-responsive' >
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
         {this.renderFriends()}
        </tbody>
      </table>
    );
  }
}

export default Agenda;
