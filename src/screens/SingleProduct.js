import { View, Image, StyleSheet, Button, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../components/CustomHeader';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SingleProduct = ({ navigation, route }) => {
    const { title, img } = route.params
    console.log('title', img)
    return (
        <View style={styles.container}>
            <LinearGradient start={{ x: 1.5, y: 0.0 }} end={{ x: 1.2, y: .9 }}
                locations={[-.10, 0.5, 0.1]} colors={['#DD1144', '#fff',]} style={styles.linearGradient}>
                <View>
                    <CustomHeader onClick={() => navigation.goBack()} iconName="chevron-back-outline" title={title} />
                </View>
                <View style={styles.img}>
                    <Image style={styles.imgWrapper} source={{ uri: img }} />
                </View>
                <View style={styles.discription}>
                    <Text style={styles.price}>$25.00</Text>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.desc}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate </Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <Text style={styles.order}>Order</Text>
                </View>
            </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    linearGradient: {
        opacity: .9,
        flex: 1,
        height: 100
    },
    img: {
        marginTop: 30,
        //   flex:1,
        width: windowWidth,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgWrapper: {
        height: 300,
        borderRadius: 9,
        width: '90%',
    },
    discription: {
        paddingTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    price: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: .6,
        lineHeight: 40
    },
    desc: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        opacity: .6
    },
    order: {
        marginTop: 20,
        color:'white',
        fontSize:20,
        width:windowWidth - 100,
        textAlign:'center',
        backgroundColor:'#DD1144',
        paddingVertical:10,
        fontWeight:'bold',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
})
export default SingleProduct