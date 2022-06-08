import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createStackNavigator, CardStyleInterpolators, } from '@react-navigation/stack';
import Home from '../screens/Home';
import DrawerNav from './DrawerNav';
import Splash from '../screens/Splash';
import CategoryData from '../screens/CategoryData';
import SingleProduct from '../screens/SingleProduct';
import BottomNav from './BottomNav';
import Login from '../screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();

const StackNav = () => {
    const [loading, setLoadin] = useState(true)
    const [name, setName] = React.useState('')

    const getName = async () => {
        const name = await AsyncStorage.getItem('user')
        setName(name)
        console.log(name)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoadin(false)

        }, 2000);
        getName()
    }, [])

    return (
        <>
            {loading ? <Splash />
                :
                <Stack.Navigator
                    screenOptions={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                >
                    {/* <Stack.Screen name="Home" options={{ headerShown: false }} component={DrawerNav} /> */}
                    {/* {!name
                        ?
                        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />

                        :
                        <> */}
                    <Stack.Screen name="Home" options={{ headerShown: false }} component={BottomNav} />
                    <Stack.Screen name="CategoryData" options={{ headerShown: false }} component={CategoryData} />
                    <Stack.Screen name="DetailPage" options={{ headerShown: false }} component={SingleProduct} />
                    {/* </>
                    } */}

                </Stack.Navigator>
            }

        </>
    )
}

export default StackNav