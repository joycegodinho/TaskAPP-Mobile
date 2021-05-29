import React from 'react';
import { Text, View } from 'react-native';

const Done = () => {
    return (
        <View style={{ flex:1, justifyContent: 'center', alignItems:'center' }}>
            <Text>Taks Done</Text>
        </View>
        
    )
}

Done.navigationOptions = {
    title: 'Done'
}

export default Done;