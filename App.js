import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProductDetailsScreen from './src/data/screens/ProductDetailsScreen';
// import ProductScreen from './src/data/screens/ProductScreen';

export default function App() {
	return (
		<View style={styles.container}>
			{/* <ProductScreen /> */}
			<ProductDetailsScreen />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
