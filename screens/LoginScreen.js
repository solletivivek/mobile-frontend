//charan
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For local storage

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ip, setIp] = useState('');
  const [port, setPort] = useState('');

  useEffect(() => {
    const checkLogin = async () => {
      const empid = await AsyncStorage.getItem('empid');
      if (empid) {
        navigation.navigate('Dashboard'); // Navigate to the dashboard if empid exists
      }
    };
    checkLogin();
  }, [navigation]);

  const handleLogin = async () => {
    // Construct the server URL using IP and port
    const serverURL = `http://${ip}:${port}/api/manageEmployee/verifyemployeecredentials`;

    try {
      const response = await fetch(serverURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });


      if (response.status === 200) {
        const data = await response.json();
        await AsyncStorage.setItem('empid', data.id.toString());
        await AsyncStorage.setItem('empMobile', data.username);
        await AsyncStorage.setItem('empUsername', data.username);
        await AsyncStorage.setItem('serverURL', `${ip}:${port}`);
        navigation.navigate('Dashboard'); // Navigate to dashboard after successful login
      } else {
        Alert.alert("Invalid username or password");
      }
    } catch (error) {
      Alert.alert("Error occurred during login");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>Enter your Mobile Number and Password</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Mobile Number"
        value={username}
        onChangeText={setUsername}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter a password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Enter IP Address"
        value={ip}
        onChangeText={setIp}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Port"
        value={port}
        onChangeText={setPort}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Not registered yet? <Text style={styles.linkText}>Create an Account</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 15,
    borderRadius: 25, // Rounded edges
    backgroundColor: '#f9f9f9', // Light background for input
  },
  button: {
    backgroundColor: '#04764E', // Button color
    borderRadius: 25, // Rounded edges for the button
    paddingVertical: 15, // Vertical padding for the button
    alignItems: 'center', // Center the text inside the button
    marginVertical: 10, // Margin for spacing
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 18, // Font size for the button text
    fontWeight: 'bold', // Bold text
  },
  registerText: {
    marginTop: 20,
    textAlign: 'center',
  },
  linkText: {
    fontWeight: 'bold',
  },
});

export default LoginScreen;
