import React from 'react'
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
  const randomColour = colours[Math.floor(Math.random() * colours.length)]

  return <span style={{ color: randomColour }}>{children}</span>
}

export default RandomColour
