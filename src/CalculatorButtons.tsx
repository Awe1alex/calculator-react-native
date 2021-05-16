import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

type CalculatorButtonProps = {
	text: string
}

export const NumericButton = ({ text }: CalculatorButtonProps) => {
	return (
		<TouchableOpacity style={styles.numericButton}>
			<Text style={styles.buttonText}>{text}</Text>
		</TouchableOpacity>
	)
}

export const OperationButton = ({ text }: CalculatorButtonProps) => {
	return (
		<TouchableOpacity style={styles.operationButton}>
			<Text style={styles.buttonText}>{text}</Text>
		</TouchableOpacity>
	)
}

export const CalculateButton = () => {
	return (
		<TouchableOpacity style={styles.calculateButton}>
			<Text style={styles.buttonText}>{'='}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	numericButton: {
		backgroundColor: '#000',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	operationButton: {
		backgroundColor: '#222',
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	calculateButton: {
		backgroundColor: '#eb2a2a',
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonText: {
		color: '#fff',
		fontSize: 30
	}
})
