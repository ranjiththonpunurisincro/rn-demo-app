import React,{useState} from 'react';
import { View, Text, TouchableOpacity ,StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';


function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function Stats() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Stats!</Text>
    </View>
  );
}

function QuickActions() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Quick Actions!</Text>
    </View>
  );
}

function More() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>More!</Text>
    </View>
  );
}

const styles =StyleSheet.create({
  tabBar : { flexDirection: 'row',justifyContent: 'center',alignItems:'center',borderWidth:1,borderColor:'#ffffff',borderStyle:'solid',backgroundColor:'black',margin:5}

})

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{
      position:'absolute',
      backgroundColor:'#1a1e26',
      height:90
    }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const {tabBarLabel,TabBarIcon} =options;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return <TabBarIcon/>;
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

const TabConfig =[
  { 
    name: 'Settings',
    component: Settings,
    options: {
      tabBarIcon:({focused})=>(
        <View style ={{alignItems:'center',justifyContent:'center',top:10}}>
          <Feather name='settings' size={24} color={focused?'#ffffff':'#2c9c95'}/>
          <Text style={{color:focused?'#ffffff':'#2c9c95', fontSize:12}}>Settings</Text>
        </View>
      )
    }
  },
  { 
    name: 'Stats',
    component: Stats,
    options: {
      tabBarIcon: ({focused})=>(
        <View style ={{alignItems:'center',justifyContent:'center',top:10}}>
          <Ionicons name='analytics' size={24} color={focused?'#ffffff':'#2c9c95'}/>
          <Text style={{color:focused?'#ffffff':'#2c9c95', fontSize:12}}>Stats</Text>
        </View>
      )
    }
  },
  { 
    name: 'QuickActions',
    component: QuickActions,
    options: {
      tabBarIcon: ({focused})=>(
        <View style ={{alignItems:'center',justifyContent:'center',top:10}}>
          <MaterialCommunityIcons name='flash-outline' size={24} color={focused?'#ffffff':'#2c9c95'}/>
          <Text style={{color:focused?'#ffffff':'#2c9c95', fontSize:12}}>Quick Actions</Text>
        </View>
      )
    }
  },
  { 
    name: 'More',
    component: More,
    options: {
      tabBarIcon: ({focused})=>(
        <View style ={{alignItems:'center',justifyContent:'center',top:10}}>
          <Feather name='menu' size={24} color={focused?'#ffffff':'#2c9c95'}/>
          <Text style={{color:focused?'#ffffff':'#2c9c95', fontSize:12}}>More</Text>
        </View>
      )
    }
  }
]
// export default function Home() {
//   return (
//       <Tab.Navigator initialRouteName='Stats' tabBar ={(props)=><TabBar {...props}/>}>
//         {TabConfig.map((tab)=>{
//           return (
//             <Tab.Screen
//               name={tab.name}
//               component={tab.component}
//               options={tab.options}
//            />
//           );
//         })}
//       </Tab.Navigator>
//   );
// }

export default function Home() {
  return (
      <Tab.Navigator initialRouteName='Stats' tabBarOptions={{
        showLabel:false,
        style:{
          position:'absolute',
          backgroundColor:'#1a1e26',
          height:90
        }
      }}>
        {TabConfig.map((tab)=>{
          return (
            <Tab.Screen
              name={tab.name}
              component={tab.component}
              options={tab.options}
           />
          );
        })}
      </Tab.Navigator>
  );
}
