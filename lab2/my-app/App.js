
import { Text, View, StatusBar, Image} from 'react-native';
import styled, { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Community from "./src/screens/Community"
import Chat from "./src/screens/Chat"
import Safety from "./src/screens/Safety"
import Profile from "./src/screens/Profile"
import Store from './src/screens/Store';
import { useState } from 'react';



const Icon = styled(Image)`

  margin-top: 20px;
  width: 35px;
  height: 35px;
  object-fit: center;
  ${(props)=>props.isProfile && "border-radius: 50px;"}
`;

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <>
      <StatusBar backgroundColor="#1C202C" barStyle='light-content'></StatusBar>
      <NavigationContainer>
        <Tab.Navigator screenOptions={
          ({route})=>({
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor:"white",
            tabBarInactiveTintColor:"#4B5664",
            tabBarStyle:{backgroundColor: "#12141C", height:60},
            tabBarIcon:({focused})=>{
              let icon;
              let isProfile;
              if(route.name == 'store')
                icon = focused ? require("./assets/shopping-bag-light.png") : require("./assets/shopping-bag-dark.png")
              else if(route.name == 'community')
                icon = focused ? require("./assets/user-light.png") : require("./assets/user-dark.png")
              else if(route.name == 'chat')
                icon = focused ? require("./assets/chat-light.png") : require("./assets/chat-dark.png")
              else if(route.name == 'safety')
                icon = focused ? require("./assets/security-light.png") : require("./assets/security-dark.png")
              else if(route.name == 'profile'){
                icon = focused ? require("./assets/profile.jpg") : require("./assets/profile.jpg")
                isProfile = true;
              }
                return(
                  <Icon isProfile={isProfile} source={icon}/>
              )
            }
          })
        }>
          <Tab.Screen name='store' component={Store}></Tab.Screen>
          <Tab.Screen name='community' component={Community}></Tab.Screen>
          <Tab.Screen name='chat' component={Chat}></Tab.Screen>
          <Tab.Screen name='safety' component={Safety}></Tab.Screen>
          <Tab.Screen name='profile' component={Profile}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </>
   
  );
}


