import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.baseStyle, styles.text, { fontStyle: "normal" }]}>
        Hello world!
      </Text>
      <Text style={{ fontStyle: "italic", color: "grey" }}>
        This is my amazing new feature!!!
      </Text>
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
  baseStyle: {
    fontStyle: "italic",
  },
  text: {
    color: "red",
    fontSize: 40,
    fontWeight: "bold",
  },
});
