import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone  open the developer menu. I LOVE YOU</Text>
      </View>
    );
  }
}

//Create header component
const Header = () => (
  <Text>Speed Reading Trainer</Text>
);


//Render header component
AppRegistry.registerComponent('srt', () => Header);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
