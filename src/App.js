import React from 'react';
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import ThemeContextProvider from "./contexts/ThemeContext";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BookContextProvider>
          <NavBar/>
          <BookList/>
          <BookForm/>
        </BookContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
