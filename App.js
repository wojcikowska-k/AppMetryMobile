import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./components/header";
import { Main } from "./components/main";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Main />
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
});
