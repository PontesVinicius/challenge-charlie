import React from 'react'

import Search from '../../components/search'
import WeatherBoard from '../../components/weather-board'
import NextDays from '../../components/next-days'

import defaultImg from '../../assets/img/defaultImg.jpg'
import {
  GlobalStyle,
  StyledCard
} from './styles.styled'

export default function Home() {
  return (
    <>
      <GlobalStyle img={defaultImg} />
      <StyledCard>
        <Search />
        <WeatherBoard />
        <NextDays />
      </StyledCard>
    </>
  )
}