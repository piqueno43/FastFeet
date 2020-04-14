import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '~/routes/delivery.routes';
import Profile from '~/pages/Profile';

const Tab = createBottomTabNavigator();

export default function DashboardTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Entregas') {
            iconName = 'reorder';
          } else if (route.name === 'Perfil') {
            iconName = 'account-circle';
          }

          return <Icon name={iconName} size={20} color={color} />;
        },
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#7D40E7',
        inactiveTintColor: 'rgba(0,0,0,0.6)',
        style: { backgroundColor: '#fff' },
      }}
    >
      <Tab.Screen
        name="Entregas"
        component={Dashboard}
        options={{ unmountOnBlur: true }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{ tabBarLabel: 'Meu perfil' }}
      />
    </Tab.Navigator>
  );
}
