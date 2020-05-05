import { StyleSheet } from 'react-native';


export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    titleText: {
        fontFamily: 'bangers-regular',
        fontSize: 25,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    }
})


// images styled to rating //
export const images ={
    ratings: {
        '1': require('../assets/DroneRating-1Test2.png'),
        '2': require('../assets/DroneRating-2.png'),
        '3': require('../assets/DroneRating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}