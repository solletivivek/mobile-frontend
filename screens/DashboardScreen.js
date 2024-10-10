// // import React from 'react';
// // import { View, Text, Button, StyleSheet } from 'react-native';

// // const DashboardScreen = ({ navigation }) => {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Dashboard</Text>
// //       <Button
// //         title="Go to Leave Application"
// //         onPress={() => navigation.navigate('LeaveApplication')}
// //       />
// //       <Button
// //         title="Go to Calendar"
// //         onPress={() => navigation.navigate('Calendar')}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     padding: 16,
// //     backgroundColor: '#f3f3f3',
// //   },
// //   title: {
// //     fontSize: 24,
// //     marginBottom: 20,
// //   },
// // });

// // export default DashboardScreen;


// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, Image, Modal, ScrollView, StyleSheet } from "react-native";
// import { Ionicons, AntDesign } from '@expo/vector-icons';

// const WaiterDashboard = ({ navigation }) => {
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);

//   return (
//     <View style={styles.container}>
//       {/* Header Section */}
//       {/* <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <View style={styles.profileMenu}>
//           <Image
//             style={styles.profileImage}
//             source={{ uri: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" }}
//           />
//           <TouchableOpacity>
//             <AntDesign name="bars" size={24} color="black" />
//           </TouchableOpacity>
//         </View>
//       </View> */}

//       {/* Welcome Section */}
//       <View style={styles.welcomeSection}>
//         <Text style={styles.welcomeText}>Welcome Back!</Text>
//         <Text style={styles.userText}>Charan <Text style={styles.waveEmoji}>👋</Text></Text>
//         <Text style={styles.restaurantText}>Restaurant Name: ARS</Text>
//       </View>

//       {/* Profile Section */}
//       <ScrollView style={styles.scrollView}>
//         <View style={styles.profileSection}>
//           <Text style={styles.profileTitle}>Your Profile</Text>
//           <View style={styles.profileCard}>
//             <View style={styles.profileInfo}>
//               <Image
//                 style={styles.profileCardImage}
//                 source={{
//                   uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHByb2ZpbGV8fDB8fHx8MTYyNzk4NzI5OA&ixlib=rb-1.2.1&q=80&w=100",
//                 }}
//               />
//               <View>
//                 <Text style={styles.profileName}>Charan V</Text>
//                 <Text style={styles.profileRole}>Owner</Text>
//               </View>
//             </View>
//             <View style={styles.profileTags}>
//               <Text style={styles.tag}>Full-Time</Text>
//               <Text style={styles.tag}>Experienced</Text>
//             </View>
//             <View style={styles.profileFooter}>
//               <Text>5/5 Rating</Text>
//               <Text>vijayawada, India</Text>
//             </View>
//           </View>
//         </View>

//         {/* Quick Actions */}
//         <View style={styles.quickActions}>
//           <Text style={styles.quickActionTitle}>Quick Actions</Text>
//           <View style={styles.grid}>
//             <TouchableOpacity
//               style={styles.quickActionCard}
//               onPress={() => setShowSuccessPopup(true)}
//             >
//               <Ionicons name="calendar-outline" size={32} color="white" />
//               <Text style={styles.quickActionText}>Attendance</Text>
//               <Text style={styles.quickActionSubText}>Punch In / Punch Out</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//   style={styles.quickActionCard}
//   onPress={() => navigation.navigate('LeaveApplication')}
// >
//   <Ionicons name="document-text-outline" size={32} color="white" />
//   <Text style={styles.quickActionText}>Apply Leave</Text>
//   <Text style={styles.quickActionSubText}>Request time off</Text>
// </TouchableOpacity>


//             <TouchableOpacity style={styles.quickActionCard}>
//               <Ionicons name="checkmark-done-outline" size={32} color="white" />
//               <Text style={styles.quickActionText}>Check Attendance</Text>
//               <Text style={styles.quickActionSubText}>Track attendance</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.quickActionCard}>
//               <Ionicons name="time-outline" size={32} color="white" />
//               <Text style={styles.quickActionText}>Shift Schedule</Text>
//               <Text style={styles.quickActionSubText}>View your roster</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>

//       {/* Success Modal */}
//       <Modal transparent={true} visible={showSuccessPopup}>
//   <View style={styles.modalOverlay}>
//     <View style={styles.successModal}>
//       <View style={styles.modalHeader}>
//         <Text style={styles.successTitle}>SUCCESS</Text>
//         <TouchableOpacity onPress={() => setShowSuccessPopup(false)}>
//           <Text style={styles.closeButton}>&times;</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.successBody}>
//         <View style={styles.successIcon}>
//           <Ionicons name="checkmark-circle-outline" size={40} color="white" />
//         </View>
//         <Text style={styles.successMessage}>Your attendance is saved</Text>
//         <TouchableOpacity style={styles.doneButton} onPress={() => setShowSuccessPopup(false)}>
//           <Text style={styles.doneButtonText}>Done</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   </View>
// </Modal>
//     </View>
//   );
// };

// export default WaiterDashboard;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fafafd",
//     padding: 10,
//     paddingLeft:20,
//     paddingRight:20,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
   
   
//   },
//   backButton: {
//     padding: 8,
//   },
//   profileMenu: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   profileImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
//   welcomeSection: {
//     backgroundColor: "white",
//     borderRadius: 16,
//     padding: 16,
//     marginBottom: 16,
//   },
//   welcomeText: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   userText: {
//     fontSize: 18,
//     color: "#000",
//   },
//   waveEmoji: {
//     fontSize: 18,
//     color: "#fbbf24",
//   },
//   restaurantText: {
//     fontSize: 16,
//   },
//   profileSection: {
//     paddingBottom: 16,
//   },
//   profileTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   profileCard: {
//     backgroundColor: "#4b5563",
//     borderRadius: 16,
//     padding: 16,
//   },
//   profileInfo: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   profileCardImage: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//     marginRight: 16,
//   },
//   profileName: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "white",
//   },
//   profileRole: {
//     fontSize: 14,
//     color: "white",
//   },
//   profileTags: {
//     flexDirection: "row",
//     marginBottom: 16,
//   },
//   tag: {
//     backgroundColor: "#374151",
//     color: "white",
//     fontSize: 12,
//     padding: 4,
//     borderRadius: 8,
//     marginRight: 8,
//   },
//   profileFooter: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   quickActions: {
//     paddingBottom: 16,
//   },
//   quickActionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   grid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   quickActionCard: {
//     backgroundColor: "#04764E",
//     width: "48%",
//     borderRadius: 16,
//     padding: 16,
//     marginBottom: 16,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   quickActionText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   quickActionSubText: {
//     color: "white",
//     fontSize: 12,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.5)",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   successModal: {
//     backgroundColor: "white",
//     borderRadius: 16,
//     padding: 16,
//     width: 300,
//     alignItems: "center",
//   },
//   successTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   closeButton: {
//     fontSize: 24,
//     color: "#e3342f",
//     alignSelf: "flex-end",
//   },
//   successBody: {
//     alignItems: "center",
//   },
//   successIcon: {
//     backgroundColor: "#10b981",
//     borderRadius: 50,
//     padding: 16,
//     marginBottom: 16,
//   },
//   doneButton: {
//     backgroundColor: "#4b5563",
//     borderRadius: 8,
//     padding: 8,
//     marginTop: 16,
//   },
//   doneButtonText: {
//     color: "white",
//     fontSize: 16,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   successModal: {
//     backgroundColor: "white",
//     padding: 24,
//     borderRadius: 16,
//     width: '80%', // Responsive width
//     maxWidth: 350, // Max width for large screens
//     alignItems: "center",
//   },
//   modalHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: '100%',
//     marginBottom: 16,
//   },
//   successTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   closeButton: {
//     fontSize: 24,
//     color: "#e3342f",
//   },
//   successBody: {
//     alignItems: "center",
//   },
//   successIcon: {
//     width: 64,
//     height: 64,
//     backgroundColor: "#04764E", // Custom green color
//     borderRadius: 32,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   successMessage: {
//     textAlign: "center",
//     marginBottom: 24,
//     fontSize: 16,
//   },
//   doneButton: {
//     backgroundColor: "#04764E", // Custom green color
//     borderRadius: 8,
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     width: '100%',
//   },
//   doneButtonText: {
//     color: "white",
//     fontSize: 16,
//     textAlign: "center",
//   },
// });


//charan
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal, TextInput, ScrollView, StyleSheet } from "react-native";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WaiterDashboard =  ({ navigation }) => {
  const [showLeavePopup, setShowLeavePopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [employee, setEmployee] = useState(null);
  const [restaurantName, setRestaurantName] = useState('');
  const [attendanceStatus, setAttendanceStatus] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [serverURL, setServerURL] = useState('');
  const [empid, setEmpid] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const server = await AsyncStorage.getItem('serverURL');
      const employeeId = await AsyncStorage.getItem('empid');

      if (server && employeeId) {
        setServerURL(server);
        setEmpid(employeeId);
        fetchEmployeeDetails(server, employeeId);
      } else {
        alert("Server URL or Employee ID not found");
        navigation.navigate('Login');
      }
    };

    fetchData();
  }, []);

  const fetchEmployeeDetails = async (server, employeeId) => {
    const response = await fetch(`http://${server}/api/manageEmployee/getemployee/${employeeId}`);
    if (response.status === 200) {
      const data = await response.json();
      setEmployee(data);
      fetchRestaurantName(server);
    } else {
      alert("Failed to fetch employee details");
    }
  };

  const fetchRestaurantName = async (server) => {
    const response = await fetch(`http://${server}/api/restaurantData/restaurantName/`);
    if (response.status === 200) {
      const data = await response.json();
      setRestaurantName(data.value);
      checkTodaysAttendance(server);
    } else {
      alert("Failed to fetch restaurant details");
    }
  };

  const checkTodaysAttendance = async (server) => {
    const empid = await AsyncStorage.getItem('empid');
    const response = await fetch(`http://${server}/api/manageEmployee/attendance/checkTodaysAttendance/${empid}?randid=${Math.random()}`);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      if (data.length === 0) {
        setAttendanceStatus("Punch IN");
      } else if (data[0].check_out == null) {
        setAttendanceStatus("Punch OUT");
      } else {
        setAttendanceStatus("Saved For Today");
      }
    } else {
      alert("Failed to fetch attendance details");
    }
  };

  const handleAttendance = async (isPunchIn) => {
    const endpoint = isPunchIn 
      ? `http://${serverURL}/api/manageEmployee/attendance/checkinToday/`
      : `http://${serverURL}/api/manageEmployee/attendance/checkoutToday/`;

    if (attendanceStatus === "Saved For Today") {
        setShowSuccessPopup(true);
        return;
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ employee_id: empid })
    });

    if (response.status === 200) {
      setShowSuccessPopup(true);
      setAttendanceStatus(isPunchIn ? "Punch OUT" : "Saved For Today");
    } else {
      alert("Failed to punch in or out");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
       
       
      </View>

      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>QuickTap Employee</Text>
        <Text style={styles.restaurantText}>Restaurant Name: {restaurantName}</Text>
      </View>
      {/* Profile Section */}
      <ScrollView style={styles.scrollView}>
            <View style={styles.profileSection}>
            <Text style={styles.profileTitle}>Your Profile</Text>
            <View style={styles.profileCard}>
                <View style={styles.profileInfo}>
                <View style={styles.profileCardImage}>
  {/* You can add any additional content here if needed */}
</View>
                <View>
                    <Text style={styles.profileName}>{employee?.name}</Text>
                    <Text style={styles.profileRole}>{employee?.role}</Text>
                </View>
                </View>
                <View style={styles.profileTags}>
                <Text style={styles.tag}>{employee?.mobile}</Text>
                <Text style={styles.tag}>{employee?.id}</Text>
                </View>
                <View style={styles.profileFooter}>
                <Text>5/5 Rating</Text>
                <Text>Vijayawada, India</Text>
                </View>
            </View>
            </View>

            {/* Quick Actions */}
            <View style={styles.quickActions}>
            <Text style={styles.quickActionTitle}>Quick Actions</Text>
            <View style={styles.grid}>
            <TouchableOpacity
              style={styles.quickActionCard}
              onPress={() => handleAttendance(attendanceStatus === "Punch IN")}
            >
              <Ionicons name="calendar-outline" size={32} color="white" />
              <Text style={styles.quickActionText}>{attendanceStatus}</Text>
              <Text style={styles.quickActionSubText}>Punch In / Punch Out</Text>
            </TouchableOpacity>

                <TouchableOpacity
                style={styles.quickActionCard}
                onPress={() => navigation.navigate('Leave')}
                >
                <Ionicons name="document-text-outline" size={32} color="white" />
                <Text style={styles.quickActionText}>Apply Leave</Text>
                <Text style={styles.quickActionSubText}>Request time off</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.quickActionCard} onPress={() => navigation.navigate('Cal')}>
                <Ionicons name="checkmark-done-outline" size={32} color="white" />
                <Text style={styles.quickActionText}>Check My Attendance</Text>
                <Text style={styles.quickActionSubText}>Track attendance</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.quickActionCard}>
                <Ionicons name="time-outline" size={32} color="white" />
                <Text style={styles.quickActionText}>Shift Schedule</Text>
                <Text style={styles.quickActionSubText}>View your roster</Text>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>

      

      

      {/* Success Modal */}
      <Modal transparent={true} visible={showSuccessPopup}>
        <View style={styles.modalOverlay}>
          <View style={styles.successModal}>
            <View style={styles.modalHeader}>
            <Ionicons name="checkmark-circle-outline" size={60} color="#04764E" />              
            </View>
            <View style={styles.successBody}>
              <Text>Your Attendance is saved</Text>
              <TouchableOpacity style={styles.doneButton} onPress={() => setShowSuccessPopup(false)}>
                <Text style={styles.doneButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafd",
        padding: 16,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
        marginTop: 20,
    },
    backButton: {
        padding: 8,
    },
    profileMenu: {
        flexDirection: "row",
        alignItems: "center",
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    welcomeSection: {
        backgroundColor: "white",
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: "bold",
        paddingBottom: 10,
    },
    userText: {
        fontSize: 18,
        color: "#000",
    },
    waveEmoji: {
        fontSize: 18,
        color: "#fbbf24",
    },
    restaurantText: {
        fontSize: 16,
    },
    profileSection: {
        paddingBottom: 16,
    },
    profileTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 16,
    },
    profileCard: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        borderColor: "#04764E",
        shadowColor: "#04764E",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.84,
        elevation: 10,
    },
    profileInfo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    profileCardImage: {
    width: 48, // Match the width of the original image
    height: 48, // Match the height of the original image
    backgroundColor: '#04764E', // Set background color
    borderRadius: 50, // Make it circular if needed
    justifyContent: 'center', // Center any content inside
    alignItems: 'center', // Center any content inside
    marginRight: 16, // Add some margin to the right
  },
    profileName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    },
    profileRole: {
        fontSize: 14,
        color: "#000",
    },
    profileTags: {
        flexDirection: "row",
        marginBottom: 16,
        marginHorizontal: -4,
    },
    tag: {
        backgroundColor: "#04764E",
        color: "white",
        fontSize: 12,
        padding: 4,
        borderRadius: 8,
        marginRight: 10,
        paddingLeft: 8,
        paddingRight: 8,
    },
    profileFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    quickActions: {
        paddingBottom: 16,
    },
    quickActionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 16,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    quickActionCard: {
        backgroundColor: "#04764E",
        width: "48%",
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    quickActionText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },
    quickActionSubText: {
        color: "white",
        fontSize: 12,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "white",
        borderRadius: 16,
        padding: 16,
        width: 300,
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    closeButton: {
        fontSize: 24,
        fontWeight: "bold",
        color: "red",
    },
    modalBody: {
        marginBottom: 16,
    },
    input: {
        backgroundColor: "#f3f4f6",
        borderRadius: 8,
        padding: 8,
        marginBottom: 16,
    },
    submitButton: {
        backgroundColor: "#10b981",
        borderRadius: 8,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    submitButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    successModal: {
        backgroundColor: "white",
        borderRadius: 16,
        padding: 16,
        width: 300,
        alignItems: "center",
    },
    successTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 16,
    },
    successBody: {
        alignItems: "center",
    },
    successIcon: {
        backgroundColor: "#10b981",
        borderRadius: 50,
        padding: 16,
        marginBottom: 16,
    },
    doneButton: {
        backgroundColor: "#04764E",
        borderRadius: 18,
        padding: 14,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
        paddingHorizontal: 32,
    },
    doneButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    });

export default WaiterDashboard;
