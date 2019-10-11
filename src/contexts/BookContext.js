import React, { createContext, Component } from "react"

export const BookContext = createContext()

class BookContextProvider extends Component {
  
  state = {
    books: [
      {title: "Name of the wind", id:1},
      {title: "The way of kings", id:2},
      {title: "The final empire", id:3},
      {title: "The hero of ages", id:4}
    ]
  }
  
  removeBook = (id) => {
    this.setState({
      books: this.state.books.filter(book => book.id !== id)
    })
  }
  
  render() {
    return (
      <BookContext.Provider value={{...this.state, removeBook: this.removeBook}}>
        {this.props.children}
      </BookContext.Provider>
    );
  }
}

export default BookContextProvider;
