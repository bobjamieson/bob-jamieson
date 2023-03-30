import React, { useState, useEffect } from 'react'
import variables from 'src/styles/colours.module.scss'

const colours = [
  variables.ColourOrange,
  variables.ColourRed,
  variables.ColourBlue,
  variables.ColourPurple,
]

const RandomColour: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [randomColour, setRandomColour] = useState<string | undefined>(
    undefined
  )

  useEffect(() => {
    const newRandomColour = colours[Math.floor(Math.random() * colours.length)]
    setRandomColour(newRandomColour)
  }, [])

  return <span style={{ color: randomColour }}>{children}</span>
}

export default RandomColour
