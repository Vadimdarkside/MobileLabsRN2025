import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import Logo from './src/components/Logo';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './src/screens/HomeScreen';
import NewsScreen from './src/screens/NewsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <>
      <Logo></Logo>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
          <Tab.Screen name='News' component={NewsScreen}></Tab.Screen>
          <Tab.Screen name='Profile' component={ProfileScreen}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
      <View style={{alignItems:"center"}}><Text>Бондар Вадим ІПЗ-21-2</Text></View>
    </>
  );
}


