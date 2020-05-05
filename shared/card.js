import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent} >
                {/* props.children is what creates a "wrapper" this allows us to change content of what's inside the card at any time by wrapping the card element around the content instead of hard coding content here.*/}
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // card wrapper styling // 
    card: {
        // curves the border 
        borderRadius: 6, 
        // how much it comes away from screen
        elevation: 3,
        backgroundColor: '#fff',
        // gives shadow, offset = how much to right & down
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6

    },
    // gives more space inside the card, like padding // 
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
    }
})