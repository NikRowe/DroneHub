import React from 'react'
import { StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global.js'
import { Formik } from 'formik'

export default function ReviewForm({ addReview }) {

    return (
        <View style={globalStyles.container}>
            <Formik
                // initialValues sets the beginning values in the form. //
                initialValues={{ title: '', body: '', rating: '' }}
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