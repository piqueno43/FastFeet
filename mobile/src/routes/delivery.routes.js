import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '~/pages/Dashboard';
import DeliveryDetail from '~/pages/Delivery/Detail';
import DeliveryConfirm from '~/pages/Delivery/Confirm';

import ProblemNew from '~/pages/Problem/New';
import ProblemDetails from '~/pages/Problem/Details';

const Stack = createStackNavigator();

export default function New() {
  return (
    <Stack.Navigator
      keyboardHandlingEnabled={false}
      screenOptions={({ navigation }) => ({
        headerLeft: () => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          );
        },
        headerLeftContainerStyle: {
          marginLeft: 40,
        },
        headerStyle: {
          backgroundColor: '#7d40e7',
          elevation: 0,
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      })}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Detalhes da encomenda',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DeliveryDetail"
        component={DeliveryDetail}
        options={{
          title: 'Detalhes da encomenda',
        }}
      />
      <Stack.Screen
        name="DeliveryConfirm"
        component={DeliveryConfirm}
        options={{
          title: 'Confirmar entrega',
          unmountOnBlur: true,
        }}
      />
      <Stack.Screen
        name="ProblemNew"
        component={ProblemNew}
        options={{ title: 'Informar problema' }}
      />
      <Stack.Screen
        name="ProblemDetails"
        component={ProblemDetails}
        options={{ title: 'Visualizar problemas' }}
      />
    </Stack.Navigator>
  );
}
