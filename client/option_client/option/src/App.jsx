import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="App">
        <h1 className="title">Hi! Choose an option below</h1>
        <a href="/boy" className="boy-canvas">
          <p className="name">Boy</p>
        </a>
        <a href="/girl" className="girl-canvas">
          <p className="name">Girl</p>
        </a>
      </div>
    </>
  )
}

export default App
