import React, { useState } from 'react'
import { Platform, SafeAreaView, StyleSheet } from 'react-native'
import ButtosWrapper from './ButtonsWrapper'
import Display from './Display'

export default function CalculatorView() {
	const [main, setMain] = useState('0')
	const [secondary, setSecondary] = useState('')
	const [operation, setOperation] = useState<string | null>(null)

	const addNumeric = (symbol: string) => {
		if (symbol === 'DEL') {
			deleteLast()
			return
		}
		if (symbol === '0' && main === '0') {
			return
		}
		if (symbol === '.' && main.includes('.')) {
			return
		}

		setMain(state => {
			const stateNum = parseFloat(state)

			if (symbol === '.') {
				return state + symbol
			} else if (state.split('')[1] === '.') {
				return state + symbol
			} else if (stateNum !== 0 && stateNum !== Infinity && !isNaN(stateNum)) {
				return state + symbol
			} else {
				return symbol
			}
		})
	}

	const deleteLast = () => {
		if (main.length > 1) {
			setMain(state => state.slice(0, state.length - 1))
			// Infinity case
			const mainNum = parseFloat(main)
			if (mainNum === Infinity || isNaN(mainNum)) {
				setMain('0')
			}
		} else {
			setMain('0')
		}
	}

	const addOperation = (newOperation: string) => {
		setOperation(newOperation)
		if (secondary !== '') {
			calculate(newOperation)
		} else {
			setSecondary(main)
			setMain('0')
		}
	}

	const calculate = (newOperation?: string) => {
		const secondaryNum = parseFloat(secondary)
		const mainNum = parseFloat(main)

		if (isNaN(secondaryNum)) {
			setSecondary('')
			return
		}

		let result: number
		switch (operation) {
			case '+':
				result = secondaryNum + mainNum
				break

			case '-':
				result = secondaryNum - mainNum
				break

			case '×':
				result = secondaryNum * mainNum
				break

			case '÷':
				result = secondaryNum / mainNum
				break
			default:
				result = mainNum
				break
		}

		if (!newOperation) {
			setOperation(null)
			setSecondary('')
			setMain(result.toString())
		} else {
			setOperation(newOperation)
			setMain('0')
			setSecondary(result.toString())
		}
	}

	return (
		<SafeAreaView style={styles.calculatorView}>
			<Display main={main} secondary={secondary} operation={operation} />
			<ButtosWrapper addNumeric={addNumeric} addOperation={addOperation} calculate={calculate} />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	calculatorView: {
		flex: 1,
		backgroundColor: '#000'
	}
})
