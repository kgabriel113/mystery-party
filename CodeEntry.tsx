import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function CodeEntry() {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Enter a code to join a game</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.codeEntry}
            placeholder="MMMMMM"
            onChangeText={newCode => setCode(newCode)}
            defaultValue={code}
          />
          <Button title="join" onPress={() => alert(code)}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    padding: '10px'
  },
  codeEntry: {
    width: '7em',
    backgroundColor: 'white',
    textAlign: 'center',
    padding: '0.5em'
  }
});