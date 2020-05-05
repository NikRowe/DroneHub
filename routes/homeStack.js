import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'


// Page Navigation Header setup - title & styles & navigation(1st ojb listed will be default screen) //
const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header  navigation ={navigation} title='Drone Hub' />,
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details'
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
                backgroundColor: '#879799',
                height: 100
            },
            headerTitleStyle: {
                fontFamily: 'bangers-regular',
                fontSize: 25
            }
        }
    })

export default HomeStack;