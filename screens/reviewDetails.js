import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles, images } from '../styles/global'
import Card from '../shared/card'
import { Rating } from 'react-native-elements'

export default function ReviewDetails({ navigation }) {

    const rating = navigation.getParam('rating')

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={styles.reviewTitle}>
                    {navigation.getParam('title')}
                </Text>

                <Text style={styles.reviewBody}>
                    {navigation.getParam('body')}
                </Text>

                <View style={styles.rating}>
                    <Text style={{fontWeight: 'bold'}}> Drone Hub rating: </Text>
                    <Rating
                        readonly
                        fractions={1}
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
        borderTopWidth: 2,
        borderColor: '#FFBABE',

    },
    reviewTitle: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 25,
        marginBottom: 20, 
        color: '#CC4E94'
    },
    reviewBody: {
        textAlign: 'center'
    }
})