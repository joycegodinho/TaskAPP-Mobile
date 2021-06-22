import React, { useState, useCallback } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Task from './Task';
import DeleteTask from './DeleteTask'

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

//var colors = ["#E3E3FF","#DFF2FD","#E2FCE6","#FCFADE","#FFEEE2","#FFDBDB", "#FDDFDF", "#F0DEFD"];

const getBackgroundColor = () => {
    var colors = ["#eff3fa", "#e7edf7"];
    var len = colors.length;
    var randomNum = Math.floor(Math.random()*len);
    var color = colors[randomNum];
    colors.splice(randomNum, 1);
    return color;
}


const TaskView = styled.View`
    height: auto; 
    width: auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 25px;
    margin-bottom: 5px;
    margin-top: 20px

    padding-top: 0.7px;
    padding-bottom: 2px;
    padding-left: 1.8px;
    padding-right: 1.5px;

    border-right-width: 1px;
    border-right-color: #ced0ce;

    border-top-width: 1px;
    border-top-color: #ced0ce;

    border-left-width: 1px;
    border-left-color: #ced0ce;

    border-bottom-width: 1px;
    border-bottom-color: #ced0ce;

    border-radius: 10px;

    background-color: ${getBackgroundColor};

    elevation: 6;
`
const Separator = styled.View`
    height: 0px;
    width: 100%;
    background-color: #ced0ce
`

const AddButtom = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 60px;

    position: absolute;

    bottom: 80px;
    right: 50px;
    
    background-color: #67bdb6;
    
    border-radius: 100px;
    color: #000000;
    border: 1.5px solid #B8B8B9;
    elevation: 4;
`

const LinkOptions = styled.View`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    width: auto;
    margin-right:10px;
    margin-top:15px;
    margin-bottom:12px;
    margin-left: 0px;
    color: #616161;
`;

const StyledStatus = styled.View`
    background-color: #bde3df;

    justify-content: center;
    align-items: center;

    width: 30px;
    height: 30px;

    border-radius: 25px;
    border: 0.5px solid #B8B8B9;

    margin-left:15px;
    margin-top: 10px

    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 3.5px;
    padding-right: 3.5px

    position: absolute;
    elevation: 4;
`

const StyledStatusText = styled.Text`
    color: #FFFFFF;
    font-weight: bold;
    
`

const ViewStatus = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row; 
    margin: 20px
    margin-left: 27px
    margin-bottom: 10px
`


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }


const NoteFeed = props => {

    const [refreshing, setRefreshing] = useState(false);
    
      
    const onRefresh = () => {
        setRefreshing(true);
        wait(3000).then(() => setRefreshing(false));     
    };


 

    return (

        
        <View>
            <StyledStatus>
                <StyledStatusText>{props.tasks.length}</StyledStatusText>
            </StyledStatus>
            

            <FlatList
                data={props.tasks}
                keyExtractor={({ id }) => id.toString()}
                ItemSeparatorComponent={() => <Separator />}
                refreshing={refreshing}
                onRefresh={onRefresh}
                renderItem={({ item, index }) => (
                  
                    <TaskView>
                        
                        <Task task={item} index={index+1}  />
                        <LinkOptions>

                            <TouchableOpacity 
                                onPress={() => 
                                    props.navigation.navigate('Task', { id: item.id })
                                }
                            >
                                <MaterialCommunityIcons color='#616161' name="sticker-check-outline" size={18}/>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => 
                                    props.navigation.navigate('Edit', { id: item.id })
                                } 
                            >
                                <MaterialCommunityIcons color='#616161' name="square-edit-outline" size={18}/>
                            </TouchableOpacity>   

                            <DeleteTask taskId={item.id} navigation={props.navigation} />


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
                    <MaterialCommunityIcons color='#FFFFFF' name="sticker-plus-outline" size={32}/>
                </AddButtom>
            )}
        </View>
    )
}

export default NoteFeed;
