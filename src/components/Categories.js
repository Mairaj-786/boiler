import { TouchableOpacity, Text, StyleSheet ,Image} from 'react-native'
import React from 'react'

const Categories = ({item,navigate}) => {

    return (
        <TouchableOpacity onPress={() => navigate('CategoryData',{
            name:item.title
        })} style={styles.container}>
            <Image style={styles.icon} source={{uri:item.img}}/>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 75,
        marginHorizontal:3,
        height: 100,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#ddd',
        marginVertical:10,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    title: {
        color: '#000',
        fontWeight:'bold',
        fontSize:13,
    },
    icon:{
        width:50,
        height:50,
        marginBottom:10
    },  
})

export default Categories