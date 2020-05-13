import React from 'react'
import { StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global.js'
import { Formik } from 'formik'
import * as yup from 'yup';

// this sets up form validation via an addon called "Yup" - here we set the key value pairs to the initialValues in the form then use yup .notation to add validation. 
const reviewSchema = yup.object({
    // i.e. - title must be a string, is required, & must be minimum of 4 characters. //
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        // test allows us to run a custom test - fist param is what we call the test "is-num-1-5", the 2nd param is the message to the user, the 3rd param is a method parsing the value as an integer then running logic to ensure 1-5. //
        .test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0
        })
})

export default function ReviewForm({ addReview }) {

    return (
        <View style={globalStyles.container}>
            <Formik
                // initialValues sets the beginning values in the form. //
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
                // when we submit we get all the filled out options as the "values" prop
                onSubmit={(values, actions) => {
                    actions.resetForm()
                    addReview(values)
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review Title'
                            // onChangeText runs whenever the user enters an input//
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Review Body'
                            // onChangeText runs whenever the user enters an input//
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            // onChangeText runs whenever the user enters an input//
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                        />
                        {/* props.handleSubmit runs the "onSubmit" function prop inside the <Formik> tag */}
                        {/* TouchableOpacity is used for IOS instead of button so that you can use custom styles. You may need an ?: here to determine the device then render <TouchOpac> or <Button> for android */}
                        <TouchableOpacity
                            onPress={props.handleSubmit}
                            style={styles.submitButton}
                        >
                            <Text style={styles.submitText}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    submitText: {
        color: '#CC4E94',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10
    },
    submitButton: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#7AFFC1',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FFBABE'
    }
})