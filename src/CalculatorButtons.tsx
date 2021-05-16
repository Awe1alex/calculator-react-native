import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function CalculatorButtons() {
    return (
        <View style={styles.buttonsContainer}>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flex: 5,
        alignItems: 'stretch',
        justifyContent: 'space-between'
    }
})