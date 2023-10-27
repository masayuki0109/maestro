import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function Home() {
  const params = useLocalSearchParams();
  const { email } = params;
  function handleLogin() {
    router.replace({ pathname: "/", params: { isLogout: true } });
  }

  return (
    <>
      <Text style={styles.text}>{email}さんこんにちは</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>ログアウト</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    marginTop: 40,
    backgroundColor: "#6200ee",
    padding: 10,
    borderRadius: 4,
    width: "60%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
