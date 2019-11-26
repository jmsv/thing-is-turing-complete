import React, { useState } from 'react'

import './App.css'

function App() {
  const [result, setResult] = useState(null)
  const [input, setInput] = useState('javascript')

  return (
    <div className="App">
      <h2>is it turing complete ?</h2>

      <form
        onSubmit={event => {
          event.preventDefault()

          fetch(`/.netlify/functions/thingIsTuringComplete?input=${input}`)
            .then(res => res.text())
            .then(setResult)
        }}
      >
        <input onChange={event => setInput(event.target.value)} />

        <input type="submit" value="Find Out" />
      </form>

      <h1>{result}</h1>
    </div>
  )
}

export default App
