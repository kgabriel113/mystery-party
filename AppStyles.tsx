import { StyleSheet } from 'react-native';

/*
 *  Exported styling shared across components for the whole app
 */
const appStyles = StyleSheet.create({
    text: {
      color: 'white',
      padding: '10px'
    },
    containerCentered: {
        flex: 0.2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default appStyles;