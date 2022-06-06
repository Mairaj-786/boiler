import { View, Text,StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const InputField = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Search..." placeholderTextColor={'#ddd'}/>
            <Ionicons name="search" color="black" size={20} style={styles.icon}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    input: {
        backgroundColor:'#fff',
        borderRadius:10,
        height:38,
        color:'#7c6767',
        paddingLeft:40,
        opacity:.9,
    },
    icon:{
        opacity:0.3,
        position:'absolute',
        left:29,
        top:19
    }
})

export default InputField