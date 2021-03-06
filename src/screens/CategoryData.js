import { View, Image, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../components/CustomHeader';
import CategoryDataItems from '../components/CategoryDataItems';
import { FlatList } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CategoryData = ({ navigation, route }) => {
    const Items = [
        {
            id: 1,
            title: "Crispy Checken Burger",
            img: 'https://freshstore.pk/Content/Products/ProductImages/8649/Kentucky-Burger1.jpg'

        },
        {
            id: 2,
            title: "Pepsi",
            img: 'https://cdn.fishry.com/themes/1024x1387-7bb3ca2-kfc.jpg'
        },
        {
            id: 5,
            title: "Crispy Checken Burger",
            img: 'https://cdn.fishry.com/themes/1024x1387-7bb3ca2-kfc.jpg'
        },
        {
            id: 6,
            title: "Crispy Checken Burger",
            img: 'https://cdn.fishry.com/themes/1024x1387-7bb3ca2-kfc.jpg'
        },
        {
            id: 7,
            title: "Crispy Checken Burger",
            img: 'https://cdn.fishry.com/themes/1024x1387-7bb3ca2-kfc.jpg'
        },
        {
            id: 3,
            title: "Crispy Checken Burger",
            img: 'http://cdn.cnn.com/cnnnext/dam/assets/181019130936-09-pakistan-food-tarka-dal.jpg'
        },
        {
            id: 4,
            title: "Crispy Checken Burger",
            img: 'data:image/jpeg;base64,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'
        },
    ]
    const { name } = route.params;
    return (
        <View style={styles.container}>
            <LinearGradient start={{ x: 1.5, y: 0.0 }} end={{ x: 1.2, y: .9 }}
                locations={[-.10, 0.5, 0.1]} colors={['#DD1144', '#fff',]} style={styles.linearGradient}>
                {/* header begin*/}
                <View>
                    <CustomHeader onClick={() => navigation.goBack()} iconName="chevron-back-outline" title={name} />
                </View>
                {/* header end*/}
                {/* main begin */}
                <View style={styles.main}>
                    <FlatList
                        numColumns={1}
                        height={windowHeight}
                        data={Items}
                        renderItem={(value) => <CategoryDataItems item={value.item} navigation={navigation}/>}
                        keyExtractor={item => item.id}
                    />
                </View>
                {/* main end */}
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: windowHeight
    },
    linearGradient: {
        opacity: .9,
        flex: 1,
        // height: 100
    },
    main: {
        // marginTop: 20,
        // paddingVertical: 10,
        width: windowWidth,
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },


})

export default CategoryData