/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from './src/navigation/AuthNavigator';
import { getStateFromPath, NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import { createStore } from 'redux';
import rootReducers from './src/reducers';
import { Provider } from 'react-redux';


const store = createStore(rootReducers);



const App = ({ navigation }) => {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
        <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
