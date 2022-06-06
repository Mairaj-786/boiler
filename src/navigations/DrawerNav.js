import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomDrawer from '../components/CustomDrawer';
import Profile from '../screens/Profile';
import CategoryData from '../screens/CategoryData';

const Drawer = createDrawerNavigator();

function DrawerNav() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />} screenOptions={{
                headerShown: true,
                drawerActiveBackgroundColor: '#0360CC',
                drawerActiveTintColor: '#fff',
                drawerInactiveBackgroundColor: '#F6F8FA',
                drawerInactiveTintColor: '#000',
                drawerLabelStyle: {
                    fontWeight: 'bold',
                    marginLeft: -20
                }
            }}
        >
            <Drawer.Screen name="Home" component={Home} options={{
                headerShown:false,
                drawerIcon: ({ color }) => (
                    <Ionicons name="home" size={20} color={color} />
                )
            }} />
            <Drawer.Screen name="About" component={Home} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="heart" size={20} color={color} />
                )
            }} />
            <Drawer.Screen name="Profile" component={Profile} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="heart" size={20} color={color} />
                )
            }} />
            <Drawer.Screen name="Logout" component={Home} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="heart" size={20} color={color} />
                )
            }} />
        </Drawer.Navigator>
    );
}

export default DrawerNav