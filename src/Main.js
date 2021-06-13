import React, { useState, useCallback } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, Text, View, Button, TouchableOpacity, StatusBar } from 'react-native';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import * as SecureStore from 'expo-secure-store';

import Screens from './screens'
import getEnvVars from '../config';

const { API_URI } = getEnvVars();
const uri = API_URI;
const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri })

const authLink = setContext( async (_, { headers }) => {
  return { 
      headers: {
          ...headers,
          authorization: (await SecureStore.getItemAsync('token') || '')
      }
  };
});

const client = new ApolloClient ({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {}
});






const Main = () => {


  return (
      <ApolloProvider client={client}>
        <StatusBar 
          backgroundColor='#b0c5e6'  
          barStyle='light-content' 
        />
        <Screens /> 
      </ApolloProvider>
    
  );
};

export default Main;