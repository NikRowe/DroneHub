import React from 'react'
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native'

export default function Header({ navigation, title }) {

    return (
        <View  source={require('../assets/HeaderBG.png')} style={styles.header}>
            <View style={styles.headerTitle}>
                <Image source={require('../assets/DroneRating-1.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'bangers-regular',
        fontSize: 25,
        color: '#7AFFC1',
        letterSpacing: 1,
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",

    },
    icon: {
        position: 'absolute',
        left: -90
    },
    headerImage: {
        width: 45,
        height: 45,
        marginHorizontal: 10
    }
})