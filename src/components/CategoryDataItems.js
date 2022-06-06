import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CategoryDataItems = ({ item, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('DetailPage',{
            'title':item.title,
            'img':item.img
        })} style={styles.mainWrapper}>
            <View style={styles.container}>
                <Image style={styles.img} source={{ uri: item.img }} />
                <View style={styles.desc}>
                    <Text style={styles.price}>$25.00</Text>
                    <Text style={styles.brand}>{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: windowWidth - 80,
    }
    ,
    mainWrapper: {
        flex: 1,
        marginVertical: 10,
        width: windowWidth - 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        shadowColor: "#ddd",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    img: {
        width: 100,
        height: 100,
    },
    price: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    brand: {
        color: 'black',
        fontSize: 12,
        opacity: .5
    },
    desc:{
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default CategoryDataItems