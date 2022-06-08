import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import Home from './src/screens/Home'
import StackNav from './src/navigations/StackNav'
import { Provider } from 'react-redux'
import Store from './src/redux'

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </Provider>
  )
}

export default App