import React from 'react';
import { ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';



const TaskView = styled.ScrollView`
    padding: 10px;
    color: #FFFFFF
`

const Task = props => {
    return (
        <TaskView>
            <Text>{props.task.content}</Text>
        </TaskView>
        )
}

export default Task;