import React, { useState } from 'react'
import { Platform, SafeAreaView, StyleSheet } from 'react-native'
import ButtosWrapper from './ButtonsWrapper'
import Display from './Display'

export default function CalculatorView() {
	const [main, setMain] = useState('0')
	const [secondary, setSecondary] = useState('')
	const [operation, setOperation] = useState<string | null>(null)

	const addNumeric = (symbol: string) => {
		if (symbol === '.' && main.includes('.')) {
			return
		}
		if (symbol === '0' && main.split('')[0] === '0') {
			return
		}
		if (symbol === 'DEL') {
			deleteLast()
			return
		}
		setMain(state => (state !== '0' ? state + symbol : symbol))
	}

	const deleteLast = () => {
		if (main.length > 1) {
			setMain(state => state.slice(0, state.length - 1))
		} else {
			setMain('0')
			// TO-DO clear secondary if main is already 0
			// setOperation(null)
		}
	}

	const addOperation = (operation: string) => {
		setOperation(operation)
	}

	const calculate = () => {}

	return (
		<SafeAreaView style={styles.calculatorView}>
			<Display main={main} secondary={secondary} />
			<ButtosWrapper addNumeric={addNumeric} addOperation={addOperation} calculate={calculate} />
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
