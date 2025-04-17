import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Game from './Screens/Game';
import Statistic from './Screens/Statistic';
import styled from 'styled-components';
import SettingsButton from './components/SettingsButton';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Game' component={Game}
        options={{
          title:"ПотужноМетр",
          headerRight:()=>(<SettingsButton title="headerRight"/>)
        }}
        ></Stack.Screen>
        <Stack.Screen name='Statistic' component={Statistic}
        options={{
          gestureEnabled:false,
        }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

