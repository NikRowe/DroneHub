import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global'
import Card  from '../shared/card'

// What's on the Home screen below navigation header. //
export default function Home({ navigation }) {

    // Sets initial state (hard coded) //
    const [reviews, setReviews] = useState([
        { title: 'Freestyle Hawk', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Mobula 6', rating: 3, body: 'lorem ipsum', key: '2' },
        { title: 'Diatone Gt239', rating: 4, body: 'lorem ipsum', key: '3' },
    ])

    return (
        <View style={globalStyles.container}>
            {/* Displays state data visually as list = *item* is a default prop */}
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    // onPress is taking us to the respective page about the item that was tapped/clicked via Navigator //
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}> {item.title} </Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}