import React from 'react';
import { Text, View } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import Task from '../components/Task';

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
        <Task task={data.task} />    
    )
}

export default TaskScreen;