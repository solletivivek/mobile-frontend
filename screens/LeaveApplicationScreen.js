// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   FlatList,
//   StyleSheet,
//   Modal,
//   TouchableOpacity,
//   Alert,
//   Platform,
// } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const App = () => {
//   const [leaves, setLeaves] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [empId, setEmpId] = useState('');
//   const [name, setName] = useState('');
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [reason, setReason] = useState('');
//   const [showStartPicker, setShowStartPicker] = useState(false);
//   const [showEndPicker, setShowEndPicker] = useState(false);

//   // Function to calculate the total number of days
//   const calculateDays = (start, end) => {
//     const startDate = new Date(start);
//     const endDate = new Date(end);
//     const timeDifference = endDate - startDate;
//     const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)) + 1;
//     return dayDifference;
//   };

//   // Fetch leaves (dummy data for now)
//   const fetchLeaves = () => {
//     const dummyLeaves = [
//       {
//         empId: '0012',
//         name: 'Vivek',
//         status: 'Approved',
//         reason: 'Vacation',
//         start_date: '2024-10-01',
//         end_date: '2024-10-05',
//       },
//       {
//         empId: '0013',
//         name: 'Ravi',
//         status: 'Pending',
//         reason: 'Sick Leave',
//         start_date: '2024-10-10',
//         end_date: '2024-10-12',
//       },
//     ];
//     setLeaves(dummyLeaves);
//   };

//   const handleLeaveSubmit = () => {
//     const newLeave = {
//       empId: empId,
//       name: name,
//       status: 'Pending',
//       reason: reason,
//       start_date: startDate,
//       end_date: endDate,
//     };

//     setLeaves([...leaves, newLeave]);
//     setModalVisible(false);
//     Alert.alert('Success', 'Leave requested successfully!');
//   };

//   useEffect(() => {
//     fetchLeaves();
//   }, []);

//   // Show date pickers
//   const onStartDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || startDate;
//     setShowStartPicker(Platform.OS === 'ios');
//     setStartDate(currentDate);
//   };

//   const onEndDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || endDate;
//     setShowEndPicker(Platform.OS === 'ios');
//     setEndDate(currentDate);
//   };

//   const renderLeaveItem = ({ item }) => (
//     <View style={styles.leaveCard}>
//       <View style={styles.leaveHeader}>
//         <Text style={styles.leaveStatus}>
//           {item.status === 'Approved'
//             ? 'Approved'
//             : item.status === 'Pending'
//             ? 'Pending'
//             : 'Rejected'}
//         </Text>
//         <Text style={styles.leaveReason}>Reason: {item.reason}</Text>
//       </View>
//       <View style={styles.leaveBody}>
//         <Text>Employee ID: {item.empId}</Text>
//         <Text>Name: {item.name}</Text>
//         <Text>Total Days: {calculateDays(item.start_date, item.end_date)}</Text>
//         <Text>From: {new Date(item.start_date).toLocaleDateString()}</Text>
//         <Text>To: {new Date(item.end_date).toLocaleDateString()}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Leave Application</Text>
//         <TouchableOpacity style={styles.reqbut} onPress={() => setModalVisible(true)}>
//           <Text style={styles.buttonText}>Request +</Text>
//         </TouchableOpacity>
//       </View>

//       <FlatList
//         data={leaves}
//         renderItem={renderLeaveItem}
//         keyExtractor={(item, index) => index.toString()}
//         ListEmptyComponent={<Text>No leaves found.</Text>}
//       />

//       {/* Modal for Leave Request */}
//       <Modal visible={modalVisible} animationType="slide" transparent={true}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>New Leave Request</Text>

//             <TextInput
//               placeholder="Employee ID (Ex: 012)"
//               style={styles.input}
//               value={empId}
//               onChangeText={setEmpId}
//             />
//             <TextInput
//               placeholder="Name (Ex: Vivek)"
//               style={styles.input}
//               value={name}
//               onChangeText={setName}
//             />

//             {/* Start Date Picker */}
//             <TouchableOpacity onPress={() => setShowStartPicker(true)}>
//               <Text style={styles.input}>
//                 {startDate ? startDate.toLocaleDateString() : 'Select Start Date'}
//               </Text>
//             </TouchableOpacity>
//             {showStartPicker && (
//               <DateTimePicker
//                 value={startDate}
//                 mode="date"
//                 display="default"
//                 onChange={onStartDateChange}
//               />
//             )}

//             {/* End Date Picker */}
//             <TouchableOpacity onPress={() => setShowEndPicker(true)}>
//               <Text style={styles.input}>
//                 {endDate ? endDate.toLocaleDateString() : 'Select End Date'}
//               </Text>
//             </TouchableOpacity>
//             {showEndPicker && (
//               <DateTimePicker
//                 value={endDate}
//                 mode="date"
//                 display="default"
//                 onChange={onEndDateChange}
//               />
//             )}

//             <TextInput
//               placeholder="Reason"
//               style={styles.input}
//               value={reason}
//               onChangeText={setReason}
//             />
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
//                 <Text style={styles.buttonText}>Cancel</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={handleLeaveSubmit} style={styles.submitButton}>
//                 <Text style={styles.buttonText}>Submit</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f3f3f3',
//     padding: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     marginTop: 40,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   leaveCard: {
//     backgroundColor: '#fff',
//     padding: 16,
//     marginVertical: 8,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   leaveHeader: {
//     marginBottom: 8,
//   },
//   leaveStatus: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   leaveReason: {
//     fontSize: 14,
//     color: '#666',
//   },
//   leaveBody: {
//     marginTop: 8,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//     width: 300,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   input: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 16,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   submitButton: {
//     backgroundColor: '#04764E',
//     padding: 10,
//     borderRadius: 8,
//   },
//   reqbut: {
//     backgroundColor: '#04764E',
//     padding: 10,
//     borderRadius: 8,
//   },
//   cancelButton: {
//     backgroundColor: '#ccc',
//     padding: 10,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default App;



//charan
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  Modal,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const LeaveApplicationScreen = () => {
  const [leaves, setLeaves] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [reason, setReason] = useState('');
  const [isStartPickerVisible, setStartPickerVisible] = useState(false);
  const [isEndPickerVisible, setEndPickerVisible] = useState(false);
  const [empid, setEmpid] = useState('');
  const [serverURL, setServerURL] = useState('');

  useEffect(() => {
    const fetchStoredData = async () => {
      const storedEmpid = await AsyncStorage.getItem('empid');
      const storedServerURL = await AsyncStorage.getItem('serverURL');
        setEmpid(storedEmpid);
        setServerURL(storedServerURL);
        fetchLeaves(storedEmpid, storedServerURL);
      
    };
    fetchStoredData();
  }, []);

  const fetchLeaves = async (empid, serverURL) => {
    try {
      const response = await fetch(`http://${serverURL}/api/manageEmployee/attendance/leave/${empid}`);
      const data = await response.json();
      setLeaves(data);
    } catch (error) {
      console.error('Error fetching leaves:', error);
    }
  };

  const calculateDays = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const timeDifference = endDate - startDate;
    return Math.ceil(timeDifference / (1000 * 3600 * 24)) + 1;
  };

  const handleLeaveRequest = async () => {
    const formData = {
      employee_id: empid,
      start_date: startDate.toISOString().split('T')[0],
      end_date: endDate.toISOString().split('T')[0],
      reason,
    };
    console.log('Leave request data:', formData);

    try {
      const response = await fetch(`http://${serverURL}/api/manageEmployee/attendance/leave/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setPopupVisible(false);
        fetchLeaves(empid, serverURL);
        Alert.alert('Success', 'Leave requested successfully!');
        return;
      }
    } catch (error) {
      console.error('Error requesting leave:', error);
      Alert.alert('Error', 'Failed to request leave.');
    }
  };

  const renderLeaveItem = ({ item }) => {
    const totalDays = calculateDays(item.start_date, item.end_date);
    
    // Determine status color and background
    let statusColor, backgroundColor;
    switch (item.status.toLowerCase()) {
      case 'approved':
        statusColor = 'white'; // Text color
        backgroundColor = '#04764E'; // Light green background
        break;
      case 'declined':
        statusColor = 'red'; // Text color
        backgroundColor = 'rgba(255, 0, 0, 0.1)'; // Light red background
        break;
      case 'pending':
      default:
        statusColor = 'black'; // Text color
        backgroundColor = 'rgba(0, 0, 255, 0.1)'; // Light blue background
    }
  
    return (
      <View style={[styles.leaveCard, { borderColor: 'skyblue' }]}>
        <Text style={[styles.leaveStatus, { color: statusColor, backgroundColor }]}>
          {item.status}
        </Text>
        <View style={styles.leaveDetails}>
          <Text style={styles.leaveReason}>Reason: {item.reason}</Text>
          <Text style={styles.totalDays}>Total Days: {totalDays} Days</Text>
        </View>
        <View style={styles.dateRow}>
          <Text>From: {new Date(item.start_date).toLocaleDateString()}</Text>
          <Text>To: {new Date(item.end_date).toLocaleDateString()}</Text>
        </View>
      </View>
    );
  };
  
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Leave Application</Text>
        <TouchableOpacity style={styles.requestButton} onPress={() => setPopupVisible(true)}>
          <Text style={styles.requestButtonText}>Request +</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={leaves}
        renderItem={renderLeaveItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.leaveList}
      />

      {/* Popup for Requesting a New Leave */}
      <Modal visible={isPopupVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Request Leave</Text>
            
            <TouchableOpacity onPress={() => setStartPickerVisible(true)}>
              <TextInput
                style={styles.input}
                placeholder="Start Date"
                value={startDate.toDateString()}
                editable={false}
              />
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isStartPickerVisible}
              mode="date"
              onConfirm={(date) => {
                setStartDate(date);
                setStartPickerVisible(false);
              }}
              onCancel={() => setStartPickerVisible(false)}
            />
            
            <TouchableOpacity onPress={() => setEndPickerVisible(true)}>
              <TextInput
                style={styles.input}
                placeholder="End Date"
                value={endDate.toDateString()}
                editable={false}
              />
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isEndPickerVisible}
              mode="date"
              onConfirm={(date) => {
                setEndDate(date);
                setEndPickerVisible(false);
              }}
              onCancel={() => setEndPickerVisible(false)}
            />
            
            <TextInput
              style={styles.input}
              placeholder="Reason for leave"
              value={reason}
              onChangeText={setReason}
            />
            
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={() => setPopupVisible(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={handleLeaveRequest}>
                <Text style={styles.modalButtonText}>Submit</Text>
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
    backgroundColor: '#F3F4F6',
    padding: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  requestButton: {
    backgroundColor: '#04764E', // Theme color
    borderRadius: 30, // Bulgy edges
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 5,
  },
  requestButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  leaveList: {
    flexGrow: 1,
  },

    leaveCard: {
      backgroundColor: '#FFFFFF',
      padding: 15,
      borderRadius: 20,
      borderWidth: 1, // Add border width
      borderColor: '#04764E', // Sky blue border
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
      alignItems: 'center', // Center items
    },
    leaveStatus: {
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 10,
      paddingLeft: 15, // Add padding for better spacing
        paddingRight: 15, // Add padding for better spacing
      textAlign: 'center', // Center text
      padding: 8, // Add padding for better visibility
      borderRadius: 15, // Rounded corners for background
    },
    leaveDetails: {
      marginVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#D1D5DB',
      paddingBottom: 10,
      alignItems: 'center', // Center items
    },
    totalDays: {
      marginTop: 5,
      fontWeight: 'bold',
      textAlign: 'center', // Center text
    },
    dateRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
      width: '100%', // Ensure it uses full width
      paddingHorizontal: 10, // Padding for better spacing
    },


  leaveReason: {
    marginVertical: 5,
    color: '#4B5563',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: '85%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1F2937',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    backgroundColor: '#F8F8F8',
    color: '#1F2937',
    fontWeight: 'bold',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  modalButton: {
    backgroundColor: '#04764E', // Theme color
    borderRadius: 30, // Bulgy edges
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 5,
    flex: 1,
    marginHorizontal: 5, // Space between buttons
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 2,
  },
});

export default LeaveApplicationScreen;
