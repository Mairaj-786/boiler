import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({ navigation }) => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const handleLogin = async() => {
        if (!email || !password) {
            alert('All Field are required')
        } else {
            setLoading(true)
            await AsyncStorage.setItem('user', email)
            setTimeout(async () => {
                setLoading(false)
                navigation?.navigate('Home')
            }, 2000);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.topSide}>
                <Text style={styles.text}>Top</Text>
            </View>
            <View style={styles.bottomSide}>
                <Text style={styles.textLogin}>Login Here</Text>
                <View style={styles.input}>
                    <TextInput onChangeText={(e) => setEmail(e)} placeholder='Email' placeholderTextColor={'#000'} color="#000" />
                </View>
                <View style={styles.input}>
                    <TextInput onChangeText={(e) => setPassword(e)} placeholder='Password' secureTextEntry={true} color="#000" placeholderTextColor={'#000'} />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
                    <Text style={styles.buttonWrapper}>{loading ? 'loading...' : 'Login'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    text: {
        color: '#000'
    },
    textLogin: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'uppercase'
    },
    topSide: {
        width: windowWidth,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    bottomSide: {
        flex: 5,
        width: windowWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fdfdfd'
    },
    input: {
        borderColor: '#ddd',
        borderBottomWidth: 1,
        width: '80%',
        marginHorizontal: 40,
        marginVertical: 15,
        color: '#000'
    },
    button: {
        width: '80%',
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        height: 43,
        borderRadius: 10
    },
    buttonWrapper: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default Login