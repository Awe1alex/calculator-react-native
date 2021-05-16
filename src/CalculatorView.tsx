import React, { useState } from 'react'
import { Platform, SafeAreaView, StyleSheet } from 'react-native'
import ButtosWrapper from './ButtonsWrapper'
import Display from './Display'

export default function CalculatorView() {
	const [main, setMain] = useState('0')
	const [secondary, setSecondary] = useState('')

	return (
		<SafeAreaView style={styles.calculatorView}>
			<Display main={main} secondary={secondary} />
			<ButtosWrapper />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	calculatorView: {
		flex: 1,
		backgroundColor: '#000'
		// TO-DO test on real phone
		// paddingTop: Platform.OS === 'android' ? 40 : 0
	}
})
