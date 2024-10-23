import { StyleSheet, Platform, View, Text, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}> Pomodoro </Text>
        <Button title="My button" />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 32,
    fontWeight:"bold",
  },
});
