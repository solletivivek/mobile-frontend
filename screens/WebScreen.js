import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const WebScreen = ({ route }) => {
  const { url } = route.params; // Get the URL from route parameters

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url }} // Use the URL passed as a prop
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  webview: {
    flex: 1,
  },
});

export default WebScreen;
