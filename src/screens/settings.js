import React from 'react';
import { Text, View, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const Settings = props => {

    return (
        <View>
            <Button title="Sign Out" />
        </View>
        );
}

Settings.navigationOptions = {
    title: 'Settings',
    header: false,
};

export default Settings;