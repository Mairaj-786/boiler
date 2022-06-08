import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'


const CustomHeader = (props) => {
    return (
        <View style={styles.container}>
            <Ionicons name={props.iconName} onPress={props.onClick} size={30} color="white" />
            <Text style={styles.logo}>{props.title}</Text>
            <Text style={styles.text} onPress={props.logOut}>Logout</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
    }
    ,
    logo: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})


export default CustomHeader