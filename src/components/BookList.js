import React, {Component} from 'react';

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>Name of the wind</li>
          <li>The way of kings</li>
          <li>The final empire</li>
          <li>The hero of ages</li>
        </ul>
      </div>
    )
  }
}

export default BookList;
