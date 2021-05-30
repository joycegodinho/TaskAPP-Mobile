import React, { useState, useCallback } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

const AddButtom = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 55px;
    position: absolute;
    bottom: 30px;
    right: 20px;
    height: 55px;

    background-color: #82B7DC;
    background-color: #82B7DC;
    border-radius: 100px;
    color: #000000;
    border: 1px solid #B8B8B9;
    elevation: 6;
`

const LinkOptions = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 30%;
    margin-left:80px;
    color: #616161;
    
`;

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
                        <LinkOptions>
                            <TouchableOpacity
                                onPress={() => 
                                    props.navigation.navigate('Edit', { id: item.id })
                                } 
                            >
                                <MaterialCommunityIcons color='#616161' name="pencil-outline" size={18}/>
                            </TouchableOpacity>                        
                        </LinkOptions>
                    </TaskView>
                )}
            />
            {props.title === 'Feed' && (
                <AddButtom
                    onPress={() => 
                    props.navigation.navigate('New')
                    }
                >
                    <MaterialCommunityIcons color='#FFFFFF' name="pencil-plus-outline" size={32}/>
                </AddButtom>
            )}
        </View>
    )
}

export default NoteFeed;
