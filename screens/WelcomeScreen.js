import { View, Text, StyleSheet, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emoji}>📱</Text>
        <Text style={styles.title}>Week1Labs</Text>
        <Text style={styles.subtitle}>Built by you, one lab at a time</Text>
      </View>
      <View style={styles.footer}>
        <Button
          title="Open My Tasks"
          onPress={() => navigation.navigate('AddTask')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1B2A4A', justifyContent: 'space-between' },
  header: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emoji: { fontSize: 64, marginBottom: 12 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#FFFFFF' },
  subtitle: { fontSize: 14, color: '#C7D2E8', marginTop: 6 },
  footer: { paddingBottom: 40, alignItems: 'center' },
});
