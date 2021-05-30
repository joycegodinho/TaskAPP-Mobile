import React, { useState, useCallback } from 'react';
import { FlatList, View, Text } from 'react-native';
import styled from 'styled-components/native';

import Task from './Task'

const tasks = [
    { id: 0, content: 'note 00'},
    { id: 1, content: 'note 01'},
    { id: 2, content: 'note 02'},
    { id: 3, content: 'note 03'},
    { id: 4, content: 'note 04'},
    { id: 5, content: 'note 05'},
    { id: 6, content: 'note 06'},
    { id: 7, content: 'note 07'},
    { id: 8, content: 'note 08'},
    { id: 9, content: 'note 09'}
];

const TaskView = styled.View`
    height: 100px;
    overflow: hidden;
    margin-bottom: 10px;
`
const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: #ced0ce
`

const NoteFeed = props => {
    return (
        <View>
            <FlatList
                data={props.tasks}
                keyExtractor={({ id }) => id.toString()}
                ItemSeparatorComponent={() => <Separator />}
                renderItem={({ item }) => (
                    <TaskView>
                        <Task task={item} />
                    </TaskView>
                )}
            />
        </View>
    )
}

export default NoteFeed;
