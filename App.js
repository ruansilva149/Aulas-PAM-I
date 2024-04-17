import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './scr/Components/Title';
import Form from './scr/Components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Title title="Meu primeiro formulário"></Title>
      <Form></Form>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b0082',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
