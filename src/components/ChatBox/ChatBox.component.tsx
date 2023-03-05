import styles from './ChatBox.module.scss'
import React, { useState, useRef, useEffect } from 'react'
import RandomColour from '@/src/utils/RandomColour'

interface ChatMessage {
  question: string
  answer: string
}

const ChatBox = () => {
  const [question, setQuestion] = useState('')
  const [chat, setChat] = useState<ChatMessage[]>([])
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  // Scroll to the bottom of the messages container whenever the chat is updated
  useEffect(() => {
    const messagesContainer = messagesContainerRef.current
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight
    }
  }, [chat])

  // Fetch data from the API route
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const response = await fetch(`/api/openai?question=${question}`)
    const data = await response.json()
    const answer = data.choices[0].text
    setChat([...chat, { question, answer }])
    setQuestion('')
  }

  return (
    <article className={styles.ChatBoxContainer}>
      <div className={styles.ChatBox}>
        <p className='SubTitle'>(Prototype)</p>
        <h2 className='H2'>Talk to AI Bob</h2>
        <div className={styles.ChatBoxMessages} ref={messagesContainerRef}>
          {chat.map((message, index) => (
            <div key={index}>
              <p className='P__Chat__Question'>{message.question}</p>
              <p className='P__Chat__Response'>{message.answer}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            id='question'
            type='text'
            value={question}
            placeholder='eg. Tell me about yourself!'
            onChange={(event) => setQuestion(event.target.value)}
          />
          <button type='submit' className='P__Chat__Button'>
            Talk
          </button>
        </form>
        <p className='P'>
          Can't be bothered with another AI chat? Read about me{' '}
          <RandomColour>
            <a href='/about'>here</a>
          </RandomColour>
          !
        </p>
      </div>
    </article>
  )
}

export default ChatBox
