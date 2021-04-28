import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text } from 'react-native';
import StackNavigator from './Stack'
const ProfileStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const ContactStack = createStackNavigator();


const Drawer = createDrawerNavigator();

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function ProfileStackNavigator() {
  return (
      <ProfileStack.Navigator initialRouteName="Profile">
        <ProfileStack.Screen name="Profile" component={Profile} />
      </ProfileStack.Navigator>
  );
}

function Settings({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to General Settings"
        onPress={() => navigation.navigate('General Settings')}
      />
    </View>
  );
}
function GeneralSettings({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>GeneralSettings Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function SettingsStackNavigator() {
  return (
      <SettingsStack.Navigator initialRouteName="Settings">
        <SettingsStack.Screen name="Settings" component={Settings} />
         <SettingsStack.Screen name="General Settings" component={GeneralSettings} />
      </SettingsStack.Navigator>
  );
}

function Contact({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contact Us Screen</Text>
    </View>
  );
}

function ContactStackNavigator() {
  return (
      <ContactStack.Navigator initialRouteName="Settings">
        <ContactStack.Screen name="Contact Us" component={Contact} />
      </ContactStack.Navigator>
  );
}

export default function DrawerNavigator() {
  return (
      <Drawer.Navigator  initialRouteName="Home">
        <Drawer.Screen name="Home" component={StackNavigator} />
        <Drawer.Screen name="Profile" component={ProfileStackNavigator} />
        <Drawer.Screen name="Settings" component={SettingsStackNavigator} />
         <Drawer.Screen name="Contact Us" component={ContactStackNavigator} />
      </Drawer.Navigator>
  );
}
