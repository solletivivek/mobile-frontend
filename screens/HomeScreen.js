import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [url, setUrl] = useState('');

  const handleNavigate = () => {
    // Validate the URL
    if (url.trim() === '') {
      alert('Please enter a URL.');
      return;
    }
    navigation.navigate('WebView', { url });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter URL</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a URL..."
        value={url}
        onChangeText={setUrl}
        keyboardType="url"
      />
      <TouchableOpacity style={styles.button} onPress={handleNavigate}>
        <Text style={styles.buttonText}>Go</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#04764E',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#04764E',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
