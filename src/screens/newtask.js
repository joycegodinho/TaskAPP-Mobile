import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { useMutation, gql } from '@apollo/client';

import TaskForm from '../components/TaskForm';
import Loading from '../components/Loading';

const NEW_TASK = gql`
  mutation newtask ($content: String!, $completed: String) {
    newTask(content: $content, completed: $completed){
      id
      content
      completed
      author{
        id
        username
      }
    }
  }
`;
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



const NewTask = props => {
  
    const [data, { loading, error }] = useMutation(NEW_TASK, {
        refetchQueries: [{ query: GET_TASKS, query: GET_TODO, query: GET_DONE }]
      });
    if(loading) return <Loading />
    return (
    <React.Fragment>
        {error && <Text>Error!</Text>}
        <TaskForm action={data} navigation={props.navigation} />
    </React.Fragment>
    )
};

NewTask.navigationOptions = {
    title: 'New',
    header: false,
}

export default NewTask;