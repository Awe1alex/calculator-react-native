import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Display() {
	return (
		<View style={styles.display}>
			<Text style={styles.result}>0</Text>
			<Text style={styles.calculation}>0</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	display: {
		flex: 4,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		backgroundColor: '#101010'
	},
	calculation: {
		color: '#fff'
	},
	result: {
		color: '#fff'
	}
})
