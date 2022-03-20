import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import appStyles from './AppStyles';

export default function CodeEntry() {
  const [code, setCode] = useState('');

  return (
    <View style={appStyles.containerCentered}>
        <Text style={appStyles.text}>Enter a code to join a game</Text>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
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
  codeEntry: {
    width: '7em',
    backgroundColor: 'white',
    textAlign: 'center',
    padding: '0.5em'
  }
});