import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Game from './Screens/Game';
import Statistic from './Screens/Statistic';
import styled from 'styled-components';
import SettingsButton from './components/SettingsButton';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState } from 'react';

const Stack = createStackNavigator();

export default function App() {
  const [tasksProgress, setTasksProgress]=useState(
    [
      { id: '1', text: "Зробити 10 кліків", count:0,need:10, completed: false },
      { id: '2', text: "Зробити подвійний клік 5 разів",count:0,need:5, completed: false },
      { id: '3', text: "Утримувати об'єкт 3 секунди", count:false,need:true, completed: false },
      { id: '4', text: "Перетягнути об'єкт", count:false,need:true, completed: false },
      { id: '5', text: "Зробити свайп вправо",count:false,need:true, completed: false },
      { id: '6', text: "Зробити свайп вліво", count:false,need:true, completed: false },
      { id: '7', text: "Змінити розмір об'єкта",count:false,need:true, completed: false },
      { id: '8', text: "Отримати 100 очок",count:0,need:100, completed: false },
    ]
  );

  const updateTaskProgress = (taskId, increment = 1) => {
    setTasksProgress((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id !== taskId) return task;
        if (typeof task.count === "number") {
          const newCount = task.count + increment;
          return {
            ...task,
            count: newCount,
            completed: newCount>=task.need?true:false,
          };
        }
        if (task.need === true) {
          return {
            ...task,
            count: true,
            completed: true,
          };
        }
        return task;
      })
    );
  };
  


  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Game' 
          options={{
            title:"ПотужноМетр",
            headerRight:()=>(<SettingsButton title="headerRight"/>)
          }}
          children={() => 
            <Game onTaskProgress={updateTaskProgress} />}
          ></Stack.Screen>
          <Stack.Screen name='Statistic'
          options={{
            gestureEnabled:false,
          }}
          children={() => 
            <Statistic tasksProgressList={tasksProgress} />}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

