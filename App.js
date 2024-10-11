// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { StatusBar } from 'react-native';

// // Import screens
// import DashboardScreen from './screens/DashboardScreen';
// import LeaveApplicationScreen from './screens/LeaveApplicationScreen';
// import CalendarScreen from './screens/CalendarScreen';
// import SplashScreen from './screens/SplashScreen'; // Add your SplashScreen
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import LoginScreen from './screens/LoginScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Set a timeout for 3 seconds to simulate the splash screen
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000); // 3 seconds

//     return () => clearTimeout(timer); // Clean up the timer
//   }, []);

//   return (
//     <NavigationContainer> 
//       <StatusBar backgroundColor="#fff" barStyle="dark-content" />
//       <Stack.Navigator initialRouteName="Splash">
//         {isLoading ? (
//           // Show SplashScreen as the initial screen
//           <Stack.Screen
//             name="Splash"
//             component={SplashScreen}
//             options={{ headerShown: false }} // Hide the header for the splash screen
//           />
//         ) : (
//           <>
//           <Stack.Screen
//               name="Login"
//               component={LoginScreen}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="Dashboard"
//               component={DashboardScreen}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="Leave"
//               component={LeaveApplicationScreen}
//               options={{title: 'Leave Application'}}
//             />
//             <Stack.Screen
//               name="Cal"
//               component={CalendarScreen}
//               options={{ title: 'Attendance' }}
//             />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;




//charan
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WebScreen from './screens/WebScreen'; // Import your WebScreen component

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Web" component={WebScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Open Website"
        onPress={() => navigation.navigate('Web', { url: 'http:/192.168.31.48:8898/mobile/qtsemployee/index.html' })} // Replace with your URL
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default App;
