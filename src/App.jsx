import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [products, setProducts]=(
    [
      { _id: "f1", name: "Toaster", price: 40, image: 'https://source.unsplash.com/100x100/?toaster' },
      { _id: "f2", name: "Fridge", price: 70, image: 'https://source.unsplash.com/100x100/?fridge' },
      { _id: "f3", name: "Toaster", price: 55, image: 'https://source.unsplash.com/100x100/?sandwich,toaster' } 
    ]
  )

  return (
    <div className="App">
      
    </div>
  )
}

export default App
