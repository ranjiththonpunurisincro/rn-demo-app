
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './src/navigations/Drawer'

export default function App() {
  return (
    <DrawerNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
