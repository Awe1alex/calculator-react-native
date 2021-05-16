import React, { useRef } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'

type DisplayProps = {
	main: string
	secondary: string
}

const Display = ({ main, secondary }: DisplayProps) => {
	const secondaryWrapperRef = useRef<ScrollView>(null)
	const mainWrapperRef = useRef<ScrollView>(null)

	return (
		<View style={styles.display}>
			<ScrollView
				ref={secondaryWrapperRef}
				horizontal={true}
				contentContainerStyle={styles.secondaryWrapper}
				showsHorizontalScrollIndicator={false}
				onContentSizeChange={() => secondaryWrapperRef.current?.scrollToEnd({ animated: false })}
			>
				<Text style={styles.secondary}>{secondary}</Text>
			</ScrollView>
			<ScrollView
				ref={mainWrapperRef}
				horizontal={true}
				contentContainerStyle={styles.mainWrapper}
				showsHorizontalScrollIndicator={false}
				onContentSizeChange={() => mainWrapperRef.current?.scrollToEnd({ animated: false })}
			>
				<Text style={styles.main}>{main}</Text>
			</ScrollView>
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
	secondaryWrapper: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	secondary: {
		paddingHorizontal: 20,
		paddingTop: 20,
		fontSize: 25,
		color: '#ffffffaa'
	},
	mainWrapper: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	main: {
		color: '#fff',
		fontSize: 32,
		padding: 20
	}
})

export default Display
