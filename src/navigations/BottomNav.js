import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import DrawerNav from './DrawerNav';

const Tab = createBottomTabNavigator();


const tabOptions = {
    showLabel: false,
    style: {
        height: 15,
    }
}

const BottomNav = () => {

    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? '#e283a1' : '#ddd';
                    switch (route.name) {
                        case 'Home':
                            return (
                                <TouchableOpacity>
                                    <View style={styles.container}>
                                        <Ionicons name={focused ? 'home' : 'home-outline'} style={{ color: tintColor }} size={20} />
                                        <Text style={{ color: tintColor }}>Home</Text>
                                    </View>
                                </TouchableOpacity>
                            )

                        case 'Camera':
                            return <CameraButton />
                        case 'Notification':
                            return (
                                <TouchableOpacity>
                                    <View style={styles.container}>
                                        <Ionicons name="person" style={{ color: tintColor }} size={20} />
                                        <Text style={{ color: tintColor }}>Profile</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        case 'Me':
                            return (
                                <TouchableOpacity>
                                    <View style={styles.container}>
                                        <Ionicons name={focused ? 'person' : 'person-outline'} style={{ color: tintColor }} size={20} />
                                        <Text style={{ color: tintColor }}>Profile</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        case 'Account':
                            return (
                                <TouchableOpacity>
                                    <View style={styles.container}>
                                        <Ionicons name="notifications-outline" style={{ color: tintColor }} size={20} />
                                        <Text style={{ color: tintColor }}>Profile</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                    }
                }
            })}
        >

            <Tab.Screen name="Home" options={{ headerShown: false }} component={DrawerNav} />
            <Tab.Screen name="Notification" options={{ headerShown: true }} component={Profile} />
            <Tab.Screen name="Camera" options={{ headerShown: false }} component={Home} />
            <Tab.Screen name="Me" options={{ headerShown: true }} component={Profile} />
            <Tab.Screen name="Profile" options={{ headerShown: true }} component={Profile} />
        </Tab.Navigator>
    )
}

const CameraButton = () => (
    <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#e283a1',
        borderRadius: 100,
        marginTop: -30,
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    }}>
        <Ionicons name="home" style={{ color: 'white' }} size={24} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default BottomNav