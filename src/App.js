import React, { useState } from 'react'

import './App.css'

function App() {
  const [result, setResult] = useState(null)
  const [input, setInput] = useState('javascript')

  return (
    <div className="App">
      <h1>is it turing complete ?</h1>
      <input onChange={event => setInput(event.target.value)} />

      <button
        onClick={() => {
          fetch(`/.netlify/functions/thingIsTuringComplete?input=${input}`)
            .then(res => res.text())
            .then(setResult)
        }}
      >
        Find Out
      </button>

      <h2>{result}</h2>
    </div>
  )
}

export default App
