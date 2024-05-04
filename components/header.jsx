import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        App to help with <Text style={styles.highlightedText}>your work</Text>.
      </Text>
      <View style={styles.subContainer}>
        <Text style={styles.subText}>Made for you. With love.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  headerText: {
    marginBottom: 16,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
  },
  highlightedText: {
    color: "#007AFF",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subText: {
    fontSize: 18,
    color: "#808080",
  },
  button: {
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    padding: 8,
  },
});
