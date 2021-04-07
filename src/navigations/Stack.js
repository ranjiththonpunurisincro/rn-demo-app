import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Tabs'



const Stack = createStackNavigator();

function StackNavigator() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
  );
}

export default StackNavigator;
