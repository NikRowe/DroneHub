import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Divider } from 'react-native-elements'
import { globalStyles } from '../styles/global'
import Card from '../shared/card';
import * as Animatable from 'react-native-animatable'

// About screen - this is what's actually on the about page below the navigation header //
export default function About() {
    return (
        <View style={globalStyles.container}>
            <Card>
                <Animatable.View

                    animation='fadeIn'
                    duration={4000}
                    delay={500}
                >
                    <Text style={{ ...styles.aboutText, ...styles.aboutTitle }}>
                        This React-Native App:
                    </Text>
                    <Divider style={{ backgroundColor: '#FFBABE', height: 3 }} />
                </Animatable.View>
                <Animatable.Text
                    style={styles.aboutText}
                    animation='flipInX'
                    duration={3000}
                    delay={500}
                >
                    {bullet} Displays reviews,
                        </Animatable.Text>
                <Animatable.Text
                    style={styles.aboutText}
                    animation='flipInX'
                    duration={3000}
                    delay={1000}
                >
                    {bullet} Allows the user to add new reviews,
                </Animatable.Text>
                <Animatable.Text
                    style={styles.aboutText}
                    animation='flipInX'
                    duration={3000}
                    delay={1500}
                >
                    {bullet} As well as purchase a product via a vendor of their choosing.
                </Animatable.Text>
                <Animatable.Text
                    style={{ ...styles.aboutText, ...styles.aboutTitle }}
                    animation='fadeIn'
                    duration={3000}
                    delay={1500}
                >
                    Built With:
                </Animatable.Text>
                <Animatable.Text
                    style={{ ...styles.aboutText, ...styles.dependencies }}
                    animation='flipInX'
                    duration={3000}
                    delay={1500}
                >
                    {bullet} React-Native
                    {bullet} BootStrap
                    {bullet} Formik
                    {bullet} Yup
                    {bullet} Animatable
                    {bullet} RNE
                    {bullet} React-Navigation
                </Animatable.Text>
            </Card>
        </View>
    )
}

const bullet = <Text style={{color:'#FFBABE'}}> • </Text>

const styles = StyleSheet.create({
    aboutText: {
        fontSize: 35,
        fontStyle: 'italic',
        fontFamily: 'indieFlower-regular',
        flexDirection: 'row'
    },
    aboutTitle: {
        fontSize: 42,
    },
    dependencies: {
        fontSize: 25
    },
    bullet: {
        color: 'red',
        flexDirection: 'row'
    }
})