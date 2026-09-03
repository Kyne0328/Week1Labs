import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function TaskCard({ title, done, onToggle }) {
  return (
    <Pressable onPress={onToggle} style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{done ? '✅ Done' : '⏳ Pending'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { padding: 12, marginVertical: 6, backgroundColor: '#EEF2F8', borderRadius: 8 },
  title: { fontWeight: 'bold', fontSize: 16 },
});
