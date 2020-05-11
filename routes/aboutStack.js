import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import About from '../screens/about'
import { MaterialIcons } from '@expo/vector-icons'
import Header from '../shared/header'

const openMenu = (navigation) => () => {
    navigation.openDrawer()
}

// Page Navigation Header setup - title & styles & navigation(1st ojb listed will be default screen) //
const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerBackground: (
                    <Image source={require('../assets/HeaderBG.png')} style={{ width: '100%'}} /> 
                ),
                headerLeft: <MaterialIcons
                    name='menu'
                    size={28}
                    onPress={openMenu(navigation)}
                    style={styles.icon}
                />,
            }
        }
    }
}

const AboutStack = createStackNavigator(
    screens,
    // default sets the styles, etc for every screen header within the stack navigation //
    {
        defaultNavigationOptions: {
            headerTintColor: '#7AFFC1',
            headerStyle: { backgroundColor: '#879799', height: 100 },
            headerTitleStyle: { fontFamily: 'bangers-regular', fontSize: 25 }
        }
    })

const styles = StyleSheet.create({
    icon: {
        marginLeft: 10,
        color: '#7AFFC1',
        fontSize: 24
    },
})

export default AboutStack;