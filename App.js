import React from 'react';
import * as Expo from 'expo';
import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SpeedReaderScreen from './src/screens/SpeedReaderScreen';
import Onboard from './src/components/Onboard';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      //<Onboard />
      <AppDrawerNavigator />
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Home: SpeedReaderScreen,
  SpeedReader: SpeedReaderScreen,
  About: AboutScreen,
  Settings: SettingsScreen
});
