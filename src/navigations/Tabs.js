import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Messages() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Messages!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
      <Tab.Navigator initialRouteName="Feed">
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Messages" component={Messages} />
      </Tab.Navigator>
  );
}
