import { StyleSheet } from 'react-native';


export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#879799'
    },
    titleText: {
        fontFamily: 'bangers-regular',
        fontSize: 25,
        color: '#CC4E94'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
        borderWidth: 2,
        backgroundColor: '#CDCDCD',
        borderColor: '#FFBABE',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    errorText: {
        color: '#CC4E94',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    }
})



// images styled to rating //
export const images ={
    ratings: {
        '1': require('../assets/DroneRating-1Test2.png'),
    }
}