import React from 'react';

const BookForm = () => {

  const addNewBook = (event) => {
    event.preventDefault()
  }
  
  return (
    <form onSubmit={addNewBook}>
      <input type="text" placeholder="book title" value={"this.state.title"}
             onChange={event => "this.setState({title: event.target.value})"} required/>
      <input type="submit" value="add book"/>
    </form>
  )
}


export default BookForm;
