import React, { useState } from 'react'

import './App.css'

function App() {
  const [result, setResult] = useState(null)
  const [input, setInput] = useState('javascript')
  const [loading, setLoading] = useState(false)

  return (
    <div className="App">
      <h2>is it turing complete ?</h2>

      <form
        onSubmit={event => {
          setLoading(true)
          event.preventDefault()

          fetch(`/.netlify/functions/thingIsTuringComplete?input=${input}`)
            .then(res => res.text())
            .then(setResult)
            .then(() => {
              setLoading(false)
              setInput('')
            })
        }}
      >
        <input
          type="text"
          value={input}
          onChange={event => setInput(event.target.value)}
        />

        <input type="submit" value="Find Out" />
      </form>

      <h3>{loading && 'loading'}</h3>

      {!loading && result && <h1 class={`result ${result}`}>{result}</h1>}
    </div>
  )
}

export default App
