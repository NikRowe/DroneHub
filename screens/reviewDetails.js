import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { globalStyles, images } from '../styles/global'
import Card from '../shared/card'
import { Rating, PricingCard } from 'react-native-elements'
import * as Animatable from 'react-native-animatable'

export default function ReviewDetails({ navigation }) {

    const rating = navigation.getParam('rating')
    const title = navigation.getParam('title')
    const body = navigation.getParam('body')
    const price = navigation.getParam('price')


    return (
        <View style={globalStyles.container}>
            <Card>
                <Animatable.View
                    animation='fadeInDownBig'
                    duration={2000}
                >
                    <Text style={styles.reviewTitle}>
                        {title}
                    </Text>

                    <Text style={styles.reviewBody}>
                        "{body}"
                    </Text>
                </Animatable.View>
                <Animatable.View
                    animation='fadeIn'
                    duration={2000}
                    delay={1000}
                    style={styles.rating}
                >
                    <Text style={{ fontWeight: 'bold' }}> Drone Hub rating: </Text>
                    <Rating
                        readonly
                        fractions={1}
                        startingValue={rating}
                        ratingColor='#CC4E94'
                        ratingBackgroundColor='#FFBABE'
                        type='custom'
                        ratingImage={images.ratings[1]}
                    />
                </Animatable.View>
                <Animatable.View
                    animation='fadeInUpBig'
                    duration={2000}
                    delay={200}
                >
                    <PricingCard
                        title='BNF'
                        price={'$' + price}
                        info={
                            [
                                'pyrodrone',
                                'betafpv',
                                'newbeedrone'
                            ]
                        }
                        color='#CC4E94'
                        button={{ title: 'Get in the Air', icon: 'flight-takeoff' }}
                        onButtonPress={() => (
                            Alert.alert(
                                'Pricing Button Press:',
                                `In production this button will take you to the website selected above to purchase for $${price}`,
                                [
                                    {
                                        text: 'Cancel',
                                        style: 'cancel',
                                        onPress: () => console.log('Cancel Pressed')
                                    },
                                ],
                            )


                            // console.log('PricingButtonPress:', `This will take you to the linked website of your choice above to purchase for ${price}`)
                        )}
                        wrapperStyle={{
                            backgroundColor: '#4EC0CC',
                        }}

                    />
                </Animatable.View>
            </Card>
        </View >
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
        fontSize: 25,
        marginBottom: 20,
        color: '#CC4E94'
    },
    reviewBody: {
        fontStyle: 'italic',
        textAlign: 'center',
        fontFamily: 'indieFlower-regular'
    }
})