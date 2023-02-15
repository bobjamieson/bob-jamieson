import variables from 'src/styles/colours.module.scss'

// Takes imported colours from colours.module.scss, gives them an index number to use in CaseStudy
export default function colorForIndex(index: any) {
  const colors = [
    variables.ColourRed,
    variables.ColourBlue,
    variables.ColourOrange,
    variables.ColourPurple,
    variables.ColourYellow,
  ]
  return colors[Math.floor(index % colors.length)]
}
