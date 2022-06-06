import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Splashs from '../assets/splash.gif'
const Splash = () => {
  return (
      <ImageBackground source={Splashs} style={{width:'100%', flex:1}}/>
  )
}

export default Splash