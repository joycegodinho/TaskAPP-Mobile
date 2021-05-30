import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';

import Screens from './screens';
import getEnvVars from '../config';

const { API_URI } = getEnvVars();
const uri = API_URI;
const cache = new InMemoryCache();

const client = new ApolloClient ({
    uri,
    cache,
    resolvers: {}
  });

const Main = () => {
    return (
        <ApolloProvider client={client}>
          <Screens /> 
        </ApolloProvider>
      
    );
  };
  

export default Main;