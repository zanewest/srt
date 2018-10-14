import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';


class Trainer extends React.Component {
    constructor(props) {
        super(props);

        this.startTrainer = this.startTrainer.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    state = {
         text: ['And', 'it', 'came', 'to', 'pass', 'that', 'Zane',
         'did', 'love', 'Alie,', 'yea', 'even', 'a', 'whole', 'two', 'lots',
         'it', 'came', 'to', 'pass', 'that', 'Zane',
         'it', 'came', 'to', 'pass', 'that', 'Zane',
         'it', 'came', 'to', 'pass', 'that', 'Zane',
         'it', 'came', 'to', 'pass', 'that', 'Zane',
         'it', 'came', 'to', 'pass', 'that', 'Zane'],
         count: 0,
         speed: 500,
         isOn: false
     };

    componentWillMount() {
      
    }

    componentDidMount() {
      
    }

    prepareTextFormat() {
         
    }

    lowerSpeed() {
        if (this.state.speed !== 800) {
            this.setState({ speed: this.state.speed + 100 });
        }
        this.stopTrainer();
        if (this.state.isOn) {
            this.startTrainer();
        }
    }

    raiseSpeed() {
        if (this.state.speed !== 100) {
            this.setState({ speed: this.state.speed - 100 });
        }
        this.stopTrainer();
        if (this.state.isOn) {
            this.startTrainer();
        }
    }

    startTrainer() {
        const speed = this.state.speed;
        this.interval = setInterval(() => {
            this.setState(
                { count: this.state.count + 1 }
            );
        }, speed);
        this.setState(
            { isOn: true }
        );
    }

    stopTrainer() {
        clearInterval(this.interval);
        this.setState(
            { isOn: false }
        );
    }

    resetCount() {
        this.setState(
            { count: 0 }
        );
        this.stopTrainer();
    }

    render() {
        return (
             <View>
                <Text style={styles.reader}>
                {this.state.text[this.state.count]}
                </Text>
                <View style={styles.readerCtrls}>
                    <TouchableOpacity style={styles.button} onPress={() => { console.log('you clicked me'); }}>
                        <Image source={require('../assets/rewind.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { this.lowerSpeed(); }}>
                        <Image source={require('../assets/minus.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { this.raiseSpeed(); }}>
                        <Image source={require('../assets/add.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { console.log('you clicked me'); }}>
                        <Image source={require('../assets/fastforward.png')} />
                    </TouchableOpacity>
                    <Button 
                    style={styles.btn}
                    onPress={this.startTrainer}
                    title="Start"
                    />
                    <Button 
                    style={styles.btn}
                    onPress={this.resetCount}
                    title="Reset"
                    />
                </View>
             
            </View>
        );
    }
}

const styles = StyleSheet.create({
    reader: {
      fontSize: 25,
      color: 'white',
      textAlign: 'center',
      margin: 40
    },
    readerCtrls: {
        flexWrap: 'wrap', 
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    button: {
    }
  });

export default Trainer;
