import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem,
         Thumbnail, Title, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'The Book of Mormon',
    author: 'The LDS Church',
    name: 'One',
    image: require('../assets/bom.png')
  },
  {
    text: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    name: 'Two',
    image: require('../assets/ttc.png')
  }

];

export default class Swiper extends Component {

    test = () => {
        console.log('this is working.');
    };

  render() {
    return (
      <Container>
        <Header style={styles.libHead} >
        <Title style={{ textAlign: 'center', marginTop: 12 }}>Library</Title>  
        </Header>
        
          <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
              <TouchableOpacity style={styles.to} onPress={this.test}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>{item.author}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 200, resizeMode: 'contain', flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
                </TouchableOpacity>
              </Card>
              
            }
          />
        </View>
        
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    libHead: {
     marginTop: 20
    },
    to: {
        width: 400,
        height: 350
    }
});
