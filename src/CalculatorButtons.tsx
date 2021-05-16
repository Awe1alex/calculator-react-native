import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

type CalculatorButtonProps = {
	text: string
	onPress: Function
}

export const NumericButton = ({ text, onPress }: CalculatorButtonProps) => {
	return (
		<TouchableOpacity style={styles.numericButton} onPress={() => onPress(text)}>
			<Text style={styles.buttonText}>{text}</Text>
		</TouchableOpacity>
	)
}

export const OperationButton = ({ text, onPress }: CalculatorButtonProps) => {
	return (
		<TouchableOpacity style={styles.operationButton} onPress={() => onPress(text)}>
			<Text style={styles.buttonText}>{text}</Text>
		</TouchableOpacity>
	)
}

export const CalculateButton = ({ text, onPress }: CalculatorButtonProps) => {
	return (
		<TouchableOpacity style={styles.calculateButton} onPress={() => onPress()}>
			<Text style={styles.buttonText}>{text}</Text>
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
