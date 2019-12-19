import React from 'react'
import { getLocationWeather } from '../../services/index'

export default function WeatherBoard() {

    const getInfo = async () => {
      const data = await getLocationWeather()
      // console.log(data)

    }
    
    return (
      <h1>Hello</h1>
    )
}