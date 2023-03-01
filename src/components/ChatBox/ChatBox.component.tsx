// pages/index.js
import React, { useState } from 'react'

const ChatBox = () => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  // Fetch data from the API route
  async function handleSubmit(event) {
    event.preventDefault()
    const response = await fetch(`/api/openai?question=${question}`)
    const data = await response.json()
    setAnswer(data.choices[0].text)
  }

  return (
    <div>
      <h1>Chat Box</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='question'>Ask me anything:</label>
        <input
          id='question'
          type='text'
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
      <p>{answer}</p>
    </div>
  )
}

export default ChatBox
