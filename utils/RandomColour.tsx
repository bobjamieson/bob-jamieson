import React from 'react';

const colours = ['var(--colour-orange)', 'var(--colour-blue)', 'var(--colour-red'];

const RandomColour: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const randomColour = colours[Math.floor(Math.random() * colours.length)];
  
    return <span style={{ color: randomColour }}>{children}</span>;
  }
  

export default RandomColour;
