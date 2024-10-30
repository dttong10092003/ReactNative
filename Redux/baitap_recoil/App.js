// App.js
import React from 'react';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

const Stack = createStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1">
          <Stack.Screen name="Screen1" component={Screen1} options={{ title: 'Welcome' }} />
          <Stack.Screen name="Screen2" component={Screen2} options={{ title: 'Todo List' }} />
          <Stack.Screen name="Screen3" component={Screen3} options={{ title: 'Manage Task' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
