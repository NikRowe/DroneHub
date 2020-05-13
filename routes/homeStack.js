import React from 'react'
import { StyleSheet, Image, ImageBackground } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import Reviews from '../screens/reviews'
import ReviewDetails from '../screens/reviewDetails'
import { MaterialIcons } from '@expo/vector-icons'



const openMenu = (navigation) => () => {
    navigation.openDrawer()
}



// Page Navigation Header setup - title & styles & navigation(1st ojb listed will be default screen) //
const screens = {
    Reviews: {
        screen: Reviews,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'Drone Hub',
                headerBackground: (
                    <Image source={require('../assets/HeaderBG.png')} style={styles.headerBackground} /> 
                ),
                headerLeft: <MaterialIcons
                    name='menu'
                    size={28}
                    onPress={openMenu(navigation)}
                    style={styles.icon}
                />,
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
        }
    }
}


const HomeStack = createStackNavigator(
    screens,
    // default sets the styles, etc for every screen header within the stack navigation //
    {
        defaultNavigationOptions: {
            headerTintColor: '#7AFFC1',
            headerStyle: {
                backgroundColor: '#CC4E94',
                height: 100
            },
            headerTitleStyle: {
                fontFamily: 'bangers-regular',
                fontSize: 25
            }
        }
    })

const styles = StyleSheet.create({
    icon: {
        marginLeft: 10,
        color: '#7AFFC1',
        fontSize: 30
    },
    headerBackground: {
        width: 500, height: 100
    }
})

export default HomeStack;