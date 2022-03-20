import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CodeEntry from './CodeEntry';

export default function App() {

  return (
    <View style={styles.container}>
        <Text style={styles.header}>
          <span role="img" aria-label="party popper">🎉</span>
          Welcome to the party!
        </Text>
        <CodeEntry />
        <Button title="Generate new mystery code" onPress={() => alert(getGeneratedCode())}/>
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
    fontSize: 24,
    padding: '20px'
  },
  codeEntry: {
    width: '7em',
    backgroundColor: 'white',
    textAlign: 'center',
    padding: '0.5em'
  }
});
