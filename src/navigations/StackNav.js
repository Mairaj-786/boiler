import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import DrawerNav from './DrawerNav';
import Splash from '../screens/Splash';
import CategoryData from '../screens/CategoryData';
import SingleProduct from '../screens/SingleProduct';

const Stack = createStackNavigator();

const StackNav = () => {
    const [loading, setLoadin] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoadin(false)

        }, 2000);
    }, [])

    return (
        <>
            {loading ? <Splash />
                :
                <Stack.Navigator>
                    <Stack.Screen name="Home" options={{ headerShown: false }} component={DrawerNav} />
                    <Stack.Screen name="CategoryData" options={{ headerShown: false }} component={CategoryData} />
                    <Stack.Screen name="DetailPage" options={{ headerShown: false }} component={SingleProduct} />
                </Stack.Navigator>
            }

        </>
    )
}

export default StackNav