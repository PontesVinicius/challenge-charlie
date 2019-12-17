import React from 'react'

import Search from '../../components/search'
import WeatherBoard from '../../components/weather-board'
import NextDays from '../../components/next-days'

export default function Home() {
    return (
      <>
        <Search />
        <WeatherBoard />
        <NextDays />
      </>
    )
}