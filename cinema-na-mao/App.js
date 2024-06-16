import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Destaque from './screens/destaque';
import Busca from './screens/busca';
import Indicacao from './screens/indicacao';
import Contato from './screens/contato';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Destaque"
        activeColor="#a52a2a"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#CCCCCC' }}
      >
        <Tab.Screen
          name="Destaque"
          component={Destaque}
          options={{
            tabBarLabel: 'Destaques',
            tabBarIcon: ({ color }) => (
              <Ionicons name="star-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Busca"
          component={Busca}
          options={{
            tabBarLabel: 'Buscar Filme',
            tabBarIcon: ({ color }) => (
              <Ionicons name="search-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Indicacao"
          component={Indicacao}
          options={{
            tabBarLabel: 'Indicações',
            tabBarIcon: ({ color }) => (
              <Ionicons name="thumbs-up-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Contato"
          component={Contato}
          options={{
            tabBarLabel: 'Contato',
            tabBarIcon: ({ color }) => (
              <Ionicons name="mail-outline" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
