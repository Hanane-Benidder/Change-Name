import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Louis");
  const handleClick = () => {
    setName("Marry");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Hello {name} </Text>
      <View style={styles.header}>
        <Button title="Change Name" onPress={handleClick} />
      </View>
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
    color: "aqua",

    fontSize: 40,
  },
  header: {
    backgroundColor: "yellow",
    fontWeight: "bold",
    marginTop: 50,
  },
});
