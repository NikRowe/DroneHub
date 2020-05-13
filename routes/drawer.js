import React from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import { MaterialIcons } from '@expo/vector-icons'

// Stack Navigators that hold respective screens //
import AboutStack from './aboutStack'
import HomeStack from './homeStack'

// Top level(root) Navigator holding the stack navigators and other pages //
const rootDrawerNavigator = createDrawerNavigator(
    {
        Reviews: {
            screen: HomeStack,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <MaterialIcons
                        name='rate-review'
                        size={24}
                        color ={ tintColor }
                    />
                ),
            }
        },
        About: {
            screen: AboutStack,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <MaterialIcons
                        name='info'
                        size={24}
                        color ={ tintColor }
                    />
                ),
            }
        }
    },
    {
        drawerBackgroundColor: '#7AFFC1',
        contentOptions: {
           activeTintColor: '#FFBABE',
           inactiveTintColor: '#CC4E94',
        }
    }
)


export default createAppContainer(rootDrawerNavigator)