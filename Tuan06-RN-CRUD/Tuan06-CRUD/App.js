import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen01 from './src/screens/Screen01';
import Screen02 from './src/screens/Screen02';
import Screen03 from './src/screens/Screen03';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen01">
        <Stack.Screen name="Screen01" component={Screen01} options={{headerShown: false}} />
        <Stack.Screen name="Screen02" component={Screen02} options={{headerShown: false}} />
        <Stack.Screen name="Screen03" component={Screen03} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
