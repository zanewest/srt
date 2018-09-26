import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import FeatureList from './src/components/FeatureList';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={'Speed Reading Trainer'} />
        <FeatureList />
      </View>
    );
  }
}
