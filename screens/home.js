import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global'
import Card from '../shared/card'
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './reviewForm'

// What's on the Home screen below navigation header. //
export default function Home({ navigation }) {

    // Sets initial state (hard coded) //
    const [modalOpen, setModalOpen] = useState(false)
    const [reviews, setReviews] = useState([
        { title: 'Freestyle Hawk', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Mobula 6', rating: 3, body: 'lorem ipsum', key: '2' },
        { title: 'Diatone Gt239', rating: 4, body: 'lorem ipsum', key: '3' },
    ])

    // this adds new review "review param" to the existing review state "currentReviews" then closes the Review Modal with "setModalOpen(false)" //
    const addReview = (review) => {
        review.key = reviews.length.toString() + 1
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        })
        setModalOpen(false)
    }

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent} animationType='slide'>
                        <MaterialIcons
                            name='close'
                            size={24}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            {/* Displays state data visually as list = *item* is a default prop */}
            < FlatList
                data={reviews}
                renderItem={({ item }) => (
                    // onPress is taking us to the respective page about the item that was tapped/clicked via Navigator //
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}> {item.title} </Text>
                        </Card>
                    </TouchableOpacity>
                )
                }
            />
        </View >
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 2,
        color: '#CC4E94',
        backgroundColor: '#7AFFC1',
        borderColor: '#FFBABE',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        overflow: 'hidden'
    },
    modalClose: {
        marginTop: 35,
        marginBottom: 0
    },
    modalContent: {
        flex: 1,
        backgroundColor: '#6c6e73'
    }
})