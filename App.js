import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import DashboardScreen from './screens/DashboardScreen';
import LeaveApplicationScreen from './screens/LeaveApplicationScreen';
import CalendarScreen from './screens/CalendarScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{ title: 'Dashboard' }}
        />
        <Stack.Screen 
          name="LeaveApplication" 
          component={LeaveApplicationScreen} 
          options={{ title: 'Leave Application' }}
        />
        <Stack.Screen 
          name="Calendar" 
          component={CalendarScreen} 
          options={{ title: 'Attendance Calendar' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

