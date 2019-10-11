import React, {useContext, useEffect} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import {BookContext} from "../contexts/BookContext";
import BookItem from "./BootItem";

const BookList = () => {
  const {books, removeBook} = useContext(BookContext)
  const {isLightTheme, light, dark, toggleTheme} = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  
  return (
    <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
      <ul>
        {books.map(book => (
          <li onClick={() => removeBook(book.id)} key={book.id} style={{background: theme.ui}}>
            <BookItem book={book}/>
          </li>
        ))}
      </ul>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  )
}

export default BookList;
