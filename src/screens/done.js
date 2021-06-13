import React from 'react';
import { Text, View, Button } from 'react-native';
import { useQuery, gql } from '@apollo/client';

import TaskFeed from '../components/TaskFeed';
import Loading from '../components/Loading';

const GET_DONE = gql`
    query Done {
            Done {
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
const Done = props => {
    const { data, loading, error } = useQuery(GET_DONE); 


    if (loading) return <Loading />
    if (error) return <Text>Error!</Text>

    return (
        <TaskFeed tasks={data.Done} navigation={props.navigation} />
        
    )
}

Done.navigationOptions = {
    title: 'Done',
    header: false,
}

export default Done;