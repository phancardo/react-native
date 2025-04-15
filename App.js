import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.tasksWarpper}>
        <Text style= {styles.sectionTitle}>
          Today's task
        </Text>
        <View style={styles.items}>
          <Task></Task>
          <Task></Task>
          <Task></Task>
        
     </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77B',
  
  },
  tasksWarpper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {},
});
