import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

// Import screens
import DashboardScreen from './screens/DashboardScreen';
import LeaveApplicationScreen from './screens/LeaveApplicationScreen';
import CalendarScreen from './screens/CalendarScreen';
import SplashScreen from './screens/SplashScreen'; // Add your SplashScreen
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout for 3 seconds to simulate the splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <NavigationContainer> 
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Splash">
        {isLoading ? (
          // Show SplashScreen as the initial screen
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }} // Hide the header for the splash screen
          />
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;




