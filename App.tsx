import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Welcome to the party!</Text>
        <Button title="Generate mystery code" onPress={() => alert(getGeneratedCode())}/>
      <StatusBar style="auto" />
    </View>
  );
}

function getGeneratedCode() {
  return "test code"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#bbbefe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    padding: '20px'
  }
});
