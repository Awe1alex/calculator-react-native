import React, { useRef } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'

type DisplayProps = {
	main: string
	secondary: string
	operation: string | null
}

const Display = ({ main, secondary, operation }: DisplayProps) => {
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
				{operation && (
					<Text style={styles.secondary}>
						{secondary} {operation}
					</Text>
				)}
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
		paddingHorizontal: 30,
		paddingTop: 50,
		fontSize: 30,
		color: '#ffffffaa'
	},
	mainWrapper: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	main: {
		color: '#fff',
		fontSize: 40,
		padding: 30
	}
})

export default Display
