import React from 'react';
import { Text, View } from 'react-native';

const Todo = () => {
    return (
        <View style={{ flex:1, justifyContent: 'center', alignItems:'center' }}>
            <Text>Taks To Do</Text>
        </View>
        
    )
}

Todo.navigationOptions = {
    title: 'To Do'
}

export default Todo;