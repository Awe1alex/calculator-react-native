import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import CalculatorButtons from './CalculatorButtons'
import Display from './Display'

export default function CalculatorView() {
    return (
        <View style={styles.calculatorView}>
            <Display />
            <CalculatorButtons />
        </View>
    )
}

const styles = StyleSheet.create({
  calculatorView: {
    flex: 1,
    backgroundColor: '#000',
  },
});