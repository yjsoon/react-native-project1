import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.fillerContainer}></View>

      <View style={styles.titleContainer}>
        <Text style={[styles.baseStyle, styles.text, { fontStyle: "normal" }]}>
          Hello world!
        </Text>
        <Text
          style={[styles.baseStyle, { fontStyle: "italic", color: "grey" }]}
        >
          This is my amazing new feature!!!
        </Text>
      </View>

      <View style={styles.fillerContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0",
    alignItems: "center",
    justifyContent: "center",
  },
  baseStyle: {
    fontStyle: "italic",
    textAlign: "center",
  },
  text: {
    color: "red",
    fontSize: 40,
    fontWeight: "bold",
  },
  fillerContainer: {
    backgroundColor: "blue",
    width: "50%",
    flex: 1,
  },
  titleContainer: {
    backgroundColor: "orange",
    width: "90%",
    flex: 2,
    justifyContent: "center",
    margin: 20,
    borderRadius: 100,
  },
});
