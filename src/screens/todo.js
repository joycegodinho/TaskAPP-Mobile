import React from 'react';
import { Text, View, Button } from 'react-native';
import { useQuery, gql } from '@apollo/client';

import TaskFeed from '../components/TaskFeed';
import Loading from '../components/Loading';

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


    if (loading) return <Loading />
    if (error) return <Text>Error!</Text>

    return (
        <TaskFeed tasks={data.ToDo} navigation={props.navigation} />
        
    )
}

Todo.navigationOptions = {
    title: 'To Do',
    header: false,
}

export default Todo;