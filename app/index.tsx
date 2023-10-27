import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLogout } = useLocalSearchParams();

  const handleLogin = () => {
    if (email.length === 0 || password.length === 0) {
      Alert.alert("エラー", "メールとパスワードを入力してください。");
    } else {
      router.replace({ pathname: "/Home", params: { email } });
    }
  };

  return (
    <>
      <Text style={styles.title}>ログイン</Text>
      <TextInput
        style={styles.input}
        placeholder="メールアドレス"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="パスワード"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {isLogout && <Text style={{ color: "red" }}>ログアウトしました。</Text>}
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        testID="loginButton"
      >
        <Text style={styles.buttonText}>ログイン</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 14,
    fontSize: 18,
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

export default Login;
