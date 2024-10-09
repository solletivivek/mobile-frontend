import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Button
        title="Go to Leave Application"
        onPress={() => navigation.navigate('LeaveApplication')}
      />
      <Button
        title="Go to Calendar"
        onPress={() => navigation.navigate('Calendar')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f3f3f3',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DashboardScreen;
