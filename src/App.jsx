import React from 'react'
import Book from './Component/Book'
import bg from './assets/wooden-dining-table-top-view-realistic-free-vector.jpg'

const App = () => {
  const bg_style={
    backgroundImage:`url(${bg})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    BackgroundPosition:"center",
    minHeight:"100vh",
    width:"100%"
  }
  return (
    <div style={bg_style}>
<Book/>
    </div>
  )
}

export default App