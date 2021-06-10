import React from 'react';
import { Text, View, Button } from 'react-native';
import { useQuery, gql } from '@apollo/client';

import TaskFeed from '../components/TaskFeed';

const GET_TASKS = gql`
    query allTasks {
            allTasks {
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

const Feed = props => {

    const { data, loading, error } = useQuery(GET_TASKS); 
    console.log(error)


    if (loading) return <Text>Loading...</Text>
    if (error) return <Text>Error!</Text>

    return (
        <TaskFeed tasks={data.allTasks} title={'Feed'} navigation={props.navigation} />
        
    )
}

Feed.navigationOptions = {
    title: 'Feed',
    header: false,
}

export default Feed;