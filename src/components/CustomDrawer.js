import { Image, View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
            >
                <ImageBackground source={{ uri: 'https://img.freepik.com/free-photo/gradient-defocused-abstract-photo-smooth-pink-pastel-color-background_49683-4869.jpg?w=2000' }} style={styles.BG}>
                    <Image style={{ width: 80, height: 80, borderRadius: 100 }} source={{ uri: 'https://carrots-incentive.s3.amazonaws.com/companies/cover_1653567581857-487470733.jpg' }} />
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Jhon Doe</Text>
                        <Text style={{ fontSize: 14 }}>280 coins</Text>
                    </View>
                </ImageBackground>
                <DrawerItemList {...props}
                />
            </DrawerContentScrollView>
            <View style={{ borderTopWidth: 1, borderColor: '#ddd', padding: 25 }}>
                <Text style={{ color: 'red' }}>My Text</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    BG: {
        height: 200, width: '100%', marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
    }
})

export default CustomDrawer