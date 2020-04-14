import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '~/routes/dashboard.routes';
import SignIn from '~/pages/SignIn';

const Stack = createStackNavigator();

export default function createRouter(signed) {
  return (
    <Stack.Navigator initialRouteName={signed ? 'App' : 'SignIn'}>
      {signed ? (
        <>
          <Stack.Screen
            name="App"
            component={Dashboard}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}
