import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { globalStyles } from '../styles/global'

// About screen - this is what's actually on the about page below the navigation header //
export default function About () {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>
                About Screen
            </Text>
        </View>
    )
}