import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const Statistic = ({tasksProgressList}) => {

  const renderItem = ({ item }) => (
    <View style={[styles.taskItem, item.completed && styles.completed]}>
      <Text style={styles.taskText}>{item.text} - {item.count}/{item.need}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Завдання</Text>
      <FlatList
        data={tasksProgressList}
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
