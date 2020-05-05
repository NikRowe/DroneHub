import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles, images } from '../styles/global'
import Card from '../shared/card'
import { Rating } from 'react-native-elements'

export default function ReviewDetails({ navigation }) {

    const rating = navigation.getParam('rating')

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>
                    {navigation.getParam('title')}
                </Text>
                <Text>
                    {navigation.getParam('body')}
                </Text>
                <View style={styles.rating}>
                    <Text> Drone Hub rating: </Text>
                    <Rating
                        readonly
                        startingValue={rating}
                        ratingColor='#CC4E94'
                        ratingBackgroundColor='#FFBABE'
                        type='custom'
                        ratingImage={images.ratings[1]}
                    />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderColor: '#eee'

    }
})