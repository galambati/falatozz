import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Menu from "./menu";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Falatozz.hu!</Text>
      <StatusBar style="auto" />
      <Menu/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
