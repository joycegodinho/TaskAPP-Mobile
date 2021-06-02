import React,{ useState, useCallback, useEffect } from 'react';
import { RefreshControl, StyleSheet, SafeAreaView, ScrollView, Text, View, Button, TouchableOpacity } from 'react-native';
import { useMutation, gql } from '@apollo/client';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

const DELETE_TASK = gql`
  mutation deleteTask ($id: ID!) {
    deleteTask(id: $id)
  }
`;

const DeleteTask = props => {
  const [deleteTask] = useMutation(DELETE_TASK, {
    variables: {
      id: props.taskId
    },
    refetchQueries: [{ query: GET_TASKS, GET_DONE, GET_TODO }]
  });

 

  return (
    <TouchableOpacity
        onPress={() => {deleteTask(); props.navigation.navigate('Feed')}
        } 
    >
        <MaterialCommunityIcons color='#616161' name="circle-off-outline" size={17}/>
    </TouchableOpacity>
  )
};

export default DeleteTask;