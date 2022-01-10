import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'
import animationData from './lf30_editor_c1tvetoa.json'
import { backgroundDark } from '../components/Shared/colorScheme'

const defaultOptions = { 
  loop: true,
  autoplay: true,
  name: "Loading Animation",
  render: "svg",
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${backgroundDark};
` 

const Loading = () => {
  return (
    <>
      <LoadingWrapper>
        <Lottie options={ defaultOptions } width={ 212 } height={ 212 } />
      </LoadingWrapper>
    </>
  )
}

export default Loading
