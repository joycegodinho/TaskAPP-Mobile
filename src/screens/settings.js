import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import * as SecureStore from 'expo-secure-store';

const StyledButton = styled.TouchableOpacity`
    background: #67bdb6;

    width: auto;
    height: auto;

    align-items: center;
    justify-content: center;

    padding: 8px;
    margin: 140px;
    margin-top: 30px;
    border-radius: 25px;

    elevation:6;
`
const ButtonText = styled.Text`
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`

const Settings = props => {

    const signOut = () => {
        SecureStore.deleteItemAsync('token').then( 
            props.navigation.navigate('Auth')
        )
    }

    return (
        <View>
            <StyledButton onPress={signOut}>
                <ButtonText>Sign Out</ButtonText>
            </StyledButton>
                

        </View>
        );
}

Settings.navigationOptions = {
    title: 'Settings',
    header: false,
};

export default Settings;