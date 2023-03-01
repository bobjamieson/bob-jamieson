import colour from 'src/styles/colours.module.scss'

// Takes imported colours from colours.module.scss, gives them an index number to use in CaseStudy
export default function colorForIndex(index: any) {
  const colours = [
    colour.ColourRed,
    colour.ColourBlue,
    colour.ColourOrange,
    colour.ColourPurple,
    colour.ColourYellow,
  ]
  return colours[Math.floor(index % colours.length)]
}
