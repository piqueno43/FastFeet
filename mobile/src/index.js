import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import { store, persistor } from './store';

import App from './App';

export default function Index() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <PersistGate persistor={persistor}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <App />
          </PersistGate>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
