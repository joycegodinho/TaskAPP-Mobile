import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { useMutation, gql } from '@apollo/client';

import TaskForm from '../components/TaskForm';
import Loading from '../components/Loading';

const EDIT_TASK = gql`
  mutation updatetask ($id: ID!, $content: String!, $completed: String) {
    updateTask(id: $id, content: $content, completed: $completed){
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



const EditTask = props => {

    const id = props.navigation.getParam('id');
  
    const [data, { loading, error }] = useMutation(EDIT_TASK, { variables: { id: id },
        refetchQueries: [{ query: GET_TASKS, query: GET_TODO, query: GET_DONE }]
      });
    if(loading) return <Loading />
    return (
    <React.Fragment>
        {error && <Text>Error!</Text>}
        <TaskForm action={data} id={id} formType='Edit' navigation={props.navigation} />
    </React.Fragment>
    )
};

EditTask.navigationOptions = {
    title: 'Edit',
    header: false,
}

export default EditTask;