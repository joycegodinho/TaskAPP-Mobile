import React from 'react';
import { Text, View } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import Task from '../components/Task';
import styled from 'styled-components/native';

const getBackgroundColor = () => {
    var colors = ["#E3E3FF","#DFF2FD","#E2FCE6","#FCFADE","#FFEEE2","#FFDBDB", "#FDDFDF", "#F0DEFD"];
    var len = colors.length;
    var randomNum = Math.floor(Math.random()*len);
    var color = colors[randomNum];
    colors.splice(randomNum, 1);
    return color;
};

const TaskView = styled.View`
    height: auto; 
    width: auto;

    margin: 12px;

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


const GET_TASK = gql`
    query task($id:ID!) {
        task(id: $id) {
            id
            createdAt
            updatedAt
            content
            completed
            author {
                username
                id
            }
        }
    }
`

const TaskScreen = props => {
    const id = props.navigation.getParam('id')
    const { loading, error, data } =useQuery(GET_TASK, { variables: { id } });

    if (loading) return <Text>Loading...</Text>
    if (error) return <Text>Error!</Text>

    return (
        <TaskView>
            <Task task={data.task} />  
        </TaskView>
  
    )
}

export default TaskScreen;