import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './TopBar.module.scss'
import colour from 'src/styles/colours.module.scss'

const TopBar = () => {
  const [temperature, setTemperature] = useState(null)
  const [tempColour, setTempColour] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://weatherapi-com.p.rapidapi.com/current.json',
          params: { q: 'Melbourne' },
          headers: {
            'X-RapidAPI-Key':
              '36d654c2e9msh1f66ef99076cd2cp190c84jsn2a43b94057bf',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
          },
        }

        const response = await axios.request(options)
        const temperature = response.data.current.temp_c
        setTemperature(temperature)

        const red = colour.ColourRed
        const blue = colour.ColourBlue
        const orange = colour.ColourOrange
        const yellow = colour.ColourYellow

        switch (true) {
          case temperature <= 15:
            setTempColour(blue)
            break
          case temperature > 15 && temperature <= 25:
            setTempColour(yellow)
            break
          case temperature > 25 && temperature <= 30:
            setTempColour(orange)
            break
          case temperature > 30:
            setTempColour(red)
            break
          default:
            // handle invalid input
            break
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()

    const intervalId = setInterval(fetchData, 5 * 60 * 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className={styles.TopBarContainer}>
      <div className={`${styles.TopBar} Container`}>
        {temperature && (
          <p className='P__TopBar__Weather'>
            Melbourne{' '}
            <span style={{ color: tempColour }}>{`${temperature}°C`}</span>
          </p>
        )}
      </div>
    </div>
  )
}

export default TopBar
