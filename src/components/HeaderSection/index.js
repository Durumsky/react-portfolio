import React from 'react'

const HeaderSection = () => {
  return (
    <HeaderContainer id="home">
      <HeaderBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeaderBg>
    </HeaderContainer>
  )
}

export default HeaderSection


