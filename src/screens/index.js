import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TabViewVertical } from 'react-native-vertical-tab-view'

import Feed from './feed';
import Todo from './todo';
import Done from './done';
import TaskScreen from './task';

import New from './newtask';
import Edit from './edit'

import AuthLoading from './authloading';
import SignIn from './signin';
import SignUp from './signup';
import Settings from './settings';

// navigation stacks

const FeedStack = createStackNavigator({
    Feed: Feed,
    Task: TaskScreen,
    New: New,
    Edit: Edit
});
const TodoStack = createStackNavigator({
    Todo: Todo,
    Task: TaskScreen
});
const DoneStack = createStackNavigator({
    Done: Done,
    Task: TaskScreen
});
const AuthStack = createStackNavigator({
    SignIn: SignIn,
    SignUp: SignUp
});
const SettingsStack = createStackNavigator({
    Settings: Settings,
});

// navigation tabs
const TabNavigator = createMaterialTopTabNavigator({
    


    
    FeedScreen: {
        screen: FeedStack,
        navigationOptions: {
            
            tabBarLabel: 'Home',
            alignItems: 'bottom',
            
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="home-outline" size={28} color={tintColor} />
            ),
            tabBarOptions: {
                showIcon: true,
                labelStyle: { fontSize: 12 },
                tabStyle: { height: 70 },
                style: { backgroundColor: 'powderblue' },
            }
            
        },

        
    },
    TodoScreen: {
        screen: TodoStack,
        navigationOptions: {
            tabBarLabel: 'To Do',
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="calendar-heart" size={24} color={tintColor} />
            ),
            tabBarOptions: {
                showIcon: true,
                labelStyle: { fontSize: 12 },
                tabStyle: { height: 70 },
                style: { backgroundColor: 'powderblue' },    
            }
        }
    },
    DoneScreen: {
        screen: DoneStack,
        navigationOptions: {
            tabBarLabel: 'Done',
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="calendar-check-outline" size={24} color={tintColor} />
            ),
            tabBarOptions: {
                showIcon: true,
                labelStyle: { fontSize: 12 },
                tabStyle: { height: 70 },
                style: { backgroundColor: 'powderblue' },  
            }
        }
    },
    Settings: {
        screen: SettingsStack,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="account-settings-outline" size={28} color={tintColor} />
            ),
            tabBarOptions: {
                showIcon: true,
                labelStyle: { fontSize: 12 },
                tabStyle: { height: 70 },
                style: { backgroundColor: 'powderblue' },
            }
        }
    },
})

// swich screens navigation 

const SwitchNavigator = createSwitchNavigator (
    {
        AuthLoading: AuthLoading,
        Auth: AuthStack,
        App: TabNavigator
    },
    {
        initialRouteName: 'AuthLoading'
    }
)


export default createAppContainer(SwitchNavigator);