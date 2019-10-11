import React, { useEffect } from 'react';

const BookItem = ({book}) => {
  
  useEffect(() => {
    console.log(`Add event listener for "${book.title}"`)
    
    return () => {
      console.log(`Remove event listener for "${book.title}"`)
    }
  }, [])
  
  return (
    <>{book.title}</>
  )
}

export default BookItem;
