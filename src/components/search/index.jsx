import React from 'react'

import {
  StyledSearch,
  StyledSearchDiv
} from './search.styled'

import CompassIcon from '../../assets/icons/compass'

export default function Search() {

  const keyPressed = (e) => {
    if (e.key === 'Enter') {
      console.log(e.key)
    }
  }

  return (
    <StyledSearchDiv>
      <CompassIcon />
      <StyledSearch onKeyDown={(e) => keyPressed(e)} />
    </StyledSearchDiv>
  )
}