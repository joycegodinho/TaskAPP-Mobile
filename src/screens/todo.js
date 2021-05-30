import React from 'react';
import { Text, View, Button } from 'react-native';
import { useQuery, gql } from '@apollo/client';

import TaskFeed from '../components/TaskFeed';

const GET_TODO = gql`
    query ToDo {
            ToDo {
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
`;


const Todo = props => {
    const { data, loading, error } = useQuery(GET_TODO); 


    if (loading) return <Text>Loading...</Text>
    if (error) return <Text>Error!</Text>

    return (
        <TaskFeed tasks={data.ToDo} navigation={props.navigation} />
        
    )
}

Todo.navigationOptions = {
    title: 'To Do'
}

export default Todo;