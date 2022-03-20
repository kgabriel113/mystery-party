import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CodeEntry from './CodeEntry';
import NewGameButton from './NewGameButton';

export default function App() {

  return (
    <View style={styles.container}>
        <Text style={styles.header}>
          <span role="img" aria-label="party popper">🎉</span>
          Welcome to the party!
        </Text>
        <CodeEntry />
        <NewGameButton />
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#271637',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'white',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowOffset: {width: 5, height: 5},
    textShadowColor: 'black',
    padding: '20px'
  }
});
