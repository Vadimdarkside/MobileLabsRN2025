
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

const themes = {
  dark:{
    name:"dark",
    colorBg:"#1C202C",
    colorTab: "#12141C",
    barStyleProp:"light-content",
    colorMainText:"white",
    colorButton:"#303649",
  },
  light:{
    name:"light",
    colorBg:"#fff",
    colorTab: "#fff",
    barStyleProp:"dark-content",
    colorMainText:"black",
    colorButton:"#D0D0D0",
  }
} 

const Tab = createBottomTabNavigator();

export default function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme =()=>{
    setTheme((prev)=>prev==="dark"?"light":"dark")
  }

  return (
    <>
    <ThemeProvider theme={themes[theme]}>
      <StatusBar backgroundColor={themes[theme].colorBg} barStyle={themes[theme].barStyleProp}></StatusBar>
      <NavigationContainer>
        <Tab.Navigator screenOptions={
          ({route})=>({
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor:themes[theme].colorMainText,
            tabBarInactiveTintColor:"#4B5664",
            tabBarStyle:{backgroundColor: themes[theme].colorTab, height:60},
            tabBarIcon:({focused})=>{
              let icon;
              let isProfile;
              if(route.name == 'store')
              {
                if(focused && theme == "dark")
                  icon = require("./assets/shopping-bag-light.png");
                else icon = require("./assets/shopping-bag-dark.png");
                if(focused && theme == "light")
                  icon = require("./assets/shopping-bag-dark.png");
              }
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
          <Tab.Screen name='profile' children={() => 
            <Profile toggleTheme={toggleTheme} theme={themes[theme]} />}>
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    </>
   
  );
}


const Icon = styled(Image)`
  margin-top: 20;
  width: 35;
  height: 35;
  object-fit: center;
  ${(props)=>props.isProfile && "border-radius: 50px;"}
`;