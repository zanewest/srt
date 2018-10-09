import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Trainer extends React.Component {
    constructor(props) {
        super(props);

        this.startTrainer = this.startTrainer.bind(this);
    }

    state = {
         text: ['And', 'it', 'came', 'to', 'pass', 'that', 'Zane',
         'did', 'love', 'Alie,', 'yea', 'even', 'a', 'whole', 'two', 'lots'],
         count: 0
     };

    componentWillMount() {
      
    }

    componentDidMount() {
      
    }

    prepareTextFormat() {
         
    }

    startTrainer() {
        this.interval = setInterval(() => {
            this.setState(
                { count: this.state.count + 1 }
            );
        }, 500);
    }

    render() {
        return (
            <View>
                <View>
                    <Text style={styles.reader}>
                    {this.state.text[this.state.count]}
                    </Text>
                </View>
                <Button
                    onPress={this.startTrainer}
                    title="Start"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    reader: {
      fontSize: 25,
      color: 'white',
      textAlign: 'center'
    }
  });

export default Trainer;
