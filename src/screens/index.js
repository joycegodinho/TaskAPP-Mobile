import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Feed from './feed';
import Todo from './todo';
import Done from './done';
import TaskScreen from './task'

const FeedStack = createStackNavigator({
    Feed: Feed,
    Task: TaskScreen
});
const TodoStack = createStackNavigator({
    Todo: Todo,
    Task: TaskScreen
});
const DoneStack = createStackNavigator({
    Done: Done,
    Task: TaskScreen
});


const TabNavigator = createBottomTabNavigator({
    FeedScreen: {
        screen: FeedStack,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="home" size={24} color={tintColor} />
            )
        }
    },
    TodoScreen: {
        screen: TodoStack,
        navigationOptions: {
            tabBarLabel: 'To Do',
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="calendar-outline" size={24} color={tintColor} />
            )
        }
    },
    DoneScreen: {
        screen: DoneStack,
        navigationOptions: {
            tabBarLabel: 'Done',
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="calendar-check-outline" size={24} color={tintColor} />
            )
        }
    },
})

export default createAppContainer(TabNavigator)