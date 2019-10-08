import React from 'react';
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BookList/>
      <BookForm/>
    </div>
  );
}

export default App;
