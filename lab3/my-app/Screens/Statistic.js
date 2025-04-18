import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const initialTasks = [
  { id: '1', text: "Зробити 10 кліків", completed: false },
  { id: '2', text: "Зробити подвійний клік 5 разів", completed: false },
  { id: '3', text: "Утримувати об'єкт 3 секунди", completed: false },
  { id: '4', text: "Перетягнути об'єкт", completed: false },
  { id: '5', text: "Зробити свайп вправо", completed: false },
  { id: '6', text: "Зробити свайп вліво", completed: false },
  { id: '7', text: "Змінити розмір об'єкта", completed: false },
  { id: '8', text: "Отримати 100 очок", completed: false },
];

const Statistic = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const renderItem = ({ item }) => (
    <View style={[styles.taskItem, item.completed && styles.completed]}>
      <Text style={styles.taskText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Завдання</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Statistic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  taskItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  taskText: {
    fontSize: 16,
  },
  completed: {
    backgroundColor: "#d4edda",
  },
});
