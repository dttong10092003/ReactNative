import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DonutDetailScreen , DonutListScreen } from './src/screens';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DonutList" >
        <Stack.Screen options={{headerShown: false}} name="DonutList" component={DonutListScreen}  />
        <Stack.Screen options={{headerShown: false}} name="DonutDetail" component={DonutDetailScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
