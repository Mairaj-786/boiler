import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const HomeSlide = (props) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: props?.data?.img}} style={styles.img} />
            <View style={styles.desc}>
                <Text style={styles.title}>{props.data?.title}</Text>
                <Text style={styles.type}>KoreanBBQ</Text>
                {/* stars begin */}
                <View style={styles.star}>
                    <View style={styles.starWrapper}>
                        <Ionicons name="star" size={16} color={'#c6c61b'} />
                        <Ionicons name="star" size={16} color={'#c6c61b'} />
                        <Ionicons name="star" size={16} color={'#c6c61b'} />
                        <Ionicons name="star" size={16} color={'#c6c61b'} />
                        <Ionicons name="star" size={16} color={'#c6c61b'} />
                    </View>
                    <Text style={styles.title}>$25.00</Text>
                </View>
                {/* stars end */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight:25,
        marginBottom:10,
        width: 250,
        height: 'auto',
        backgroundColor: '#fff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: '100%',
            height: '100%',
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }
    ,
    img: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    desc: {
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    title: {
        color: 'black',
        fontWeight: 'bold'
    },
    type: {
        color: 'black',
        fontSize: 13,
        opacity: .4,
        paddingVertical: 5
    },
    star: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    starWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
})

export default HomeSlide