
**Context** : clean & easy way to share state between component

**Hooks** : Additional things in functional component


### theme state

```
{
  isLightTheme: true,
  light: {
    syntax: "#555",
    ui: "#ddd",
    bg: "#eee"
  },
  dark: {
    syntax: "#ddd",
    ui: "#333",
    bg: "#555"
  }
}
```

### books state
```
{title: "Name of the wind", id:1},
{title: "The way of kings", id:2},
{title: "The final empire", id:3},
{title: "The hero of ages", id:4}
```

### BookItem.js
```js
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

```
