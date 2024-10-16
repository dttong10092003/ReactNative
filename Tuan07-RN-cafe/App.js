import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreens';
import ShopsScreen from './src/screens/ShopsScreen';
import DrinksScreen from './src/screens/DrinksScreen';
import OrdersScreen from './src/screens/OrdersScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ShopsScreen"
          component={ShopsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrinksScreen"
          component={DrinksScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrdersScreen"
          component={OrdersScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
