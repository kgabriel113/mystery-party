import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import appStyles from './AppStyles';

export default function NewGameButton() {

  return (
    <View style={appStyles.containerCentered}>
        <Text style={appStyles.text}>Or, set up and host your own game</Text>
        <Button title="Generate new mystery code" onPress={() => alert(getGeneratedCode())}/>
    </View>
  );
}

function getGeneratedCode() {
    return "test code"
}