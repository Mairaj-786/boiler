import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import Home from './src/screens/Home'
import StackNav from './src/navigations/StackNav'


const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  )
}

export default App