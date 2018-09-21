import React from 'react';
import { Text, View } from 'react-native';

//Create header component
const Header = () => {
    const { textStyle, viewStyle } = styles; 

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Speed Reading Trainer</Text>
        </View>
   
    );
}; 

const styles = {
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d60000',
        height: 80,
        paddingTop: 20,
        paddingLeft: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowColor: '#000',
        elevation: 3,
        position: 'relative'
    },
    textStyle: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    }
};

export default Header;
