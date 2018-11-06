import React from 'react';
import { View, Text } from 'react-native';

const Drawer = () => {
    return (
        <View>
            createDrawerNavigator({
                Home: HomeScreen,
                Settings: SettingsScreen
             });
        </View>
    );
};

export default Drawer;
