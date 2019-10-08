import React, {Component} from 'react';

class BookForm extends Component {

  state = {
    title: ""
  }
  
  addNewBook = (event) => {
    event.preventDefault()
    this.setState({title: ""})
  }

  render() {
    return (
      <form onSubmit={this.addNewBook}>
        <input type="text" placeholder="book title" value={this.state.title}
               onChange={event => this.setState({title: event.target.value})} required/>
        <input type="submit" value="add book"/>
      </form>
    );
  }
}

export default BookForm;
