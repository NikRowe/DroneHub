import React from 'react'
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems, DrawerContentScrollView } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import { MaterialIcons } from '@expo/vector-icons'
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view'

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
                        color={tintColor}
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
                        color={tintColor}
                    />
                ),
            }
        }
    },
    {
        // props is passed to the component here since we're not using REDUX //
        contentComponent: props => <CustomDrawerContentComponent {...props} />,
        drawerBackgroundColor: '#7AFFC1',
        contentOptions: {
            activeTintColor: '#4EC0CC',
            inactiveTintColor: '#CC4E94',
        },
    }
)

const CustomDrawerContentComponent = (props) => (
    <SafeAreaProvider>
        <ScrollView>
            <SafeAreaView
                style={styles.container}
                forceInset={{ top: 'always', horizontal: 'never' }}>
                <View style={styles.drawerHeader}>
                    <View style={{ flex: 1 }}>
                        <Image source={require('../assets/DroneRating-1.png')} style={styles.drawerImage} />
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={styles.drawerHeaderText}>Drone Hub</Text>
                    </View>
                </View>
                <DrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>
    </SafeAreaProvider>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#4EC0CC',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#7AFFC1',
        fontSize: 30,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 8,
        height: 70,
        width: 70
    },
});


export default createAppContainer(rootDrawerNavigator)