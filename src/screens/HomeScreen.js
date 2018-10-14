import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Body, Title, Container, Header, Left, StyleProvider, Icon } from 'native-base';
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';

class HomeScreen extends Component {
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
            <Text style={styles.titleText}>
              Ready to improve yourself?
            </Text>
          </View>
        </Container>
       </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#9b0000'
  },
  jumbotron: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#d50000',
    height: 200
  },
  titleText: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center'
  }
});

export default HomeScreen;
