import React from 'react'
import { Platform, SafeAreaView, StyleSheet } from 'react-native'
import ButtosWrapper from './ButtonsWrapper'
import Display from './Display'

export default function CalculatorView() {
	return (
		<SafeAreaView style={styles.calculatorView}>
			<Display />
			<ButtosWrapper />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	calculatorView: {
		flex: 1,
		backgroundColor: '#000',
		paddingTop: Platform.OS === 'android' ? 40 : 0
	}
})
