import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { text } from '../assets/bom.json';

class Trainer extends React.Component {
    state = {
         text,
         count: 0,
         speed: 500,
         isOn: false
     };

    rewind = () => {
        this.stopTrainer();

        //TODO add logic here for rewinding approx 10 seconds and not just four words.
        if (this.state.count >= 4) {
            this.setState({ count: this.state.count - 4 });
        }
        this.startTrainer();
    }

    lowerSpeed = () => {
        const speed = this.state.speed;
        //console.log({ speed: this.state.speed });
        if (this.state.speed <= 800) {
            this.setState({ speed: this.state.speed + 100 });
        }
        if (this.state.isOn) {
            this.stopTrainer();
            setTimeout(this.startTrainer, speed);
        }   
    }

    raiseSpeed = () => {
        const speed = this.state.speed;
        //console.log({ speed: this.state.speed });
        if (this.state.speed > 100) {
            this.setState({ speed: this.state.speed - 100 });
        }
        if (this.state.isOn) {
            this.stopTrainer();
            setTimeout(this.startTrainer, speed);
        }
    }

    startTrainer = () => {
        console.log(text);

        const speed = this.state.speed;
        this.interval = setInterval(() => {
            this.setState(
                { count: this.state.count + 1 }
            );
        }, speed);  

        this.isOnToggle();
    }

    stopTrainer = () => {
        clearInterval(this.interval);
        //console.log("isOn in stopTrainer should be false and is ", { isOn: this.state.isOn });
        this.isOnToggle();
    }

    isOnToggle = () => {
        this.setState({
            isOn: !this.state.isOn
        });
    }

    resetCount = () => {
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
                    <TouchableOpacity style={styles.button} onPress={this.rewind}>
                        <Image source={require('../assets/rewind.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.lowerSpeed}>
                        <Image source={require('../assets/minus.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.raiseSpeed}>
                        <Image source={require('../assets/add.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.fastForward}>
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
      margin: 40,
      height: 50
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
