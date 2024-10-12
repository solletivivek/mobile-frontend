import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview'; // Using expo-webview

const WebViewScreen = ({ route }) => {
  const { url } = route.params; // Get URL from the route

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: url }} style={{ flex: 1 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewScreen;
