import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskCard from '../components/TaskCard';

export default function AddTaskScreen() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const savedData = await AsyncStorage.getItem('tasks');
        if (savedData !== null) {
          setTasks(JSON.parse(savedData));
        }
      } catch (error) {
        console.error('Failed to load tasks:', error);
      } finally {
        setIsLoaded(true); // Mark initial load as complete
      }
    };

    loadTasks();
  }, []);

  useEffect(() => {
    if (!isLoaded) return; // Prevent saving default/empty state on startup

    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error('Failed to save tasks:', error);
      }
    };

    saveTasks();
  }, [tasks, isLoaded]);

  function handleAddTask() {
    if (taskText.trim() === '') {
      setErrorMessage('Please type a task before adding it.');
      return;
    }

    const newTask = { id: Date.now().toString(), title: taskText, done: false };
    setTasks([...tasks, newTask]);
    setTaskText('');
    setErrorMessage('');
  }

  function handleToggleTask(id) {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add a Task</Text>
      <TextInput
        style={styles.input}
        placeholder="What do you need to do?"
        value={taskText}
        onChangeText={setTaskText}
      />
      {errorMessage !== '' && (
        <Text style={styles.error}>{errorMessage}</Text>
      )}
      <Button title="Add Task" onPress={handleAddTask} />
      <Text>You have {tasks.length} task(s)</Text>
      {tasks.length > 0 && tasks.every((t) => t.done) && (
        <Text style={styles.celebration}>🎉 All done! Great work!</Text>
      )}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            title={item.title}
            done={item.done}
            onToggle={() => handleToggleTask(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No tasks yet — add one above! 👆</Text>
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 16, backgroundColor: '#FFFFFF' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: { borderWidth: 1, borderColor: '#D8DEE9', borderRadius: 8, padding: 10, marginBottom: 10 },
  error: { color: '#B23A48', marginBottom: 10 },
  celebration: { fontSize: 16, fontWeight: 'bold', color: '#1E8A7A', textAlign: 'center', marginVertical: 12 },
  empty: { textAlign: 'center', color: '#6B7280', marginTop: 24 },
  separator: { height: 8 },
  list: { marginTop: 16 },
});
