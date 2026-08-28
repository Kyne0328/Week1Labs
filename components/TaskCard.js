import { View, Text, StyleSheet } from 'react-native';

export default function TaskCard({ title, done }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{done ? 'Done' : 'Pending'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 12, marginVertical: 6, backgroundColor: '#EEF2F8', borderRadius: 8 },
  title: { fontWeight: 'bold', fontSize: 16 },
});
