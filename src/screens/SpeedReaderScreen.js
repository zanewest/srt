import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Body, Title, Container, Header, Left, StyleProvider, Icon } from 'native-base';
import Trainer from '../components/Trainer';
import Swiper from '../components/Swiper';
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';

class SpeedReaderScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Speed Reading Trainer'
  };

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container >
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
              </Button>
            </Left>
            <Body>
              <Title>Velocity</Title>
            </Body>
          </Header>
          <View style={styles.jumbotron}>
            <Trainer />
          </View>
          <View style={styles.card}>
            <Swiper />
          </View>
        </Container>
     </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  jumbotron: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#d50000',
    height: 200
  },
  reader: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center'
  },
  card: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#d50000',
    height: 600
  },
});


export default SpeedReaderScreen;
