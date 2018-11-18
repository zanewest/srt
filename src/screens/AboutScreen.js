import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon, Container, Header, Content, Card, CardItem,
         Text, Body, Left, Title } from 'native-base';


class AboutScreen extends Component {
  render() {
    return (
<Container>
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
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text style={styles.red}>About</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Velocity is a free and open source mobile application
                  that aims to help others improve the rate at which they
                  read and comprehend text. 
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text style={styles.red}>Created by Zane West</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
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
    height: 400
  },
  titleText: {
    fontSize: 20,
    color: '#9b0000',
    textAlign: 'center',
    margin: 40,
    backgroundColor: 'white'
  },
  red: {
    color: '#9b0000'
  }
});

export default AboutScreen;
