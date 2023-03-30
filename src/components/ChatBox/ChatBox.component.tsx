import styles from './ChatBox.module.scss'
import React, { useState, useRef, useEffect } from 'react'
import RandomColour from '@/src/utils/RandomColour'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { ChatBoxModel } from './ChatBox.model'

interface ChatMessage {
  question: string
  answer: string
}

const ChatBox: FunctionComponent<ChatBoxModel> = (props) => {
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
        <p className='SubTitle'>{props?.attributes?.subtitle}</p>
        <h2 className='H2'>{props?.attributes?.title}</h2>
        <div className={styles.ChatBoxMessages} ref={messagesContainerRef}>
          {chat.map((message, index) => (
            <div key={index}>
              <p className='P__Chat__Question'>You: {message.question}</p>
              <p className='P__Chat__Response'>Bob 1.0: {message.answer}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            id='question'
            type='text'
            value={question}
            placeholder={props?.attributes?.inputplaceholder}
            onChange={(event) => setQuestion(event.target.value)}
          />
          <button type='submit' className='P__Chat__Button'>
            Talk
          </button>
        </form>
        <p>
          Note: He may not always tell the truth... learn the hard facts about
          me
          <RandomColour>
            <Link href='/about'> here</Link>
          </RandomColour>
          !
        </p>
      </div>
    </article>
  )
}

export default ChatBox
