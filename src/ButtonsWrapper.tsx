import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CalculateButton, NumericButton, OperationButton } from './CalculatorButtons'

type ButtonsWrapperProps = {
	addNumeric: Function
	addOperation: Function
	calculate: Function
}

const numericKeyboard = [
	['7', '8', '9'],
	['4', '5', '6'],
	['1', '2', '3'],
	['.', '0', 'DEL']
]

const operationsKeyboard = ['÷', '×', '-', '+']

const ButtonsWrapper = ({ addNumeric, addOperation, calculate }: ButtonsWrapperProps) => {
	const buttonsRender = numericKeyboard.map(buttonRow => {
		const buttons = buttonRow.map(buttonText => <NumericButton key={buttonText} text={buttonText} onPress={addNumeric}></NumericButton>)

		return (
			<View style={styles.numericRow} key={buttonRow.join('')}>
				{buttons}
			</View>
		)
	})

	return (
		<View style={styles.buttonsContainer}>
			<View style={styles.numericKeyboard}>{buttonsRender}</View>
			<View style={styles.operationsKeyboard}>
				{operationsKeyboard.map(operation => (
					<OperationButton key={operation} text={operation} onPress={addOperation} />
				))}
				<CalculateButton text={'='} onPress={calculate} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	buttonsContainer: {
		flex: 8,
		flexDirection: 'row'
	},
	numericKeyboard: {
		flex: 3
	},
	numericRow: {
		flex: 1,
		flexDirection: 'row'
	},
	operationsKeyboard: {
		flex: 1
	}
})

export default ButtonsWrapper
