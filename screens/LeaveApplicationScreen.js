import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  const [leaves, setLeaves] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [empId, setEmpId] = useState('');
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [reason, setReason] = useState('');
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  // Function to calculate the total number of days
  const calculateDays = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const timeDifference = endDate - startDate;
    const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)) + 1;
    return dayDifference;
  };

  // Fetch leaves (dummy data for now)
  const fetchLeaves = () => {
    const dummyLeaves = [
      {
        empId: '0012',
        name: 'Vivek',
        status: 'Approved',
        reason: 'Vacation',
        start_date: '2024-10-01',
        end_date: '2024-10-05',
      },
      {
        empId: '0013',
        name: 'Ravi',
        status: 'Pending',
        reason: 'Sick Leave',
        start_date: '2024-10-10',
        end_date: '2024-10-12',
      },
    ];
    setLeaves(dummyLeaves);
  };

  const handleLeaveSubmit = () => {
    const newLeave = {
      empId: empId,
      name: name,
      status: 'Pending',
      reason: reason,
      start_date: startDate,
      end_date: endDate,
    };

    setLeaves([...leaves, newLeave]);
    setModalVisible(false);
    Alert.alert('Success', 'Leave requested successfully!');
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  // Show date pickers
  const onStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartPicker(Platform.OS === 'ios');
    setStartDate(currentDate);
  };

  const onEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndPicker(Platform.OS === 'ios');
    setEndDate(currentDate);
  };

  const renderLeaveItem = ({ item }) => (
    <View style={styles.leaveCard}>
      <View style={styles.leaveHeader}>
        <Text style={styles.leaveStatus}>
          {item.status === 'Approved'
            ? 'Approved'
            : item.status === 'Pending'
            ? 'Pending'
            : 'Rejected'}
        </Text>
        <Text style={styles.leaveReason}>Reason: {item.reason}</Text>
      </View>
      <View style={styles.leaveBody}>
        <Text>Employee ID: {item.empId}</Text>
        <Text>Name: {item.name}</Text>
        <Text>Total Days: {calculateDays(item.start_date, item.end_date)}</Text>
        <Text>From: {new Date(item.start_date).toLocaleDateString()}</Text>
        <Text>To: {new Date(item.end_date).toLocaleDateString()}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Leave Application</Text>
        <TouchableOpacity style={styles.reqbut} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Request +</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={leaves}
        renderItem={renderLeaveItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text>No leaves found.</Text>}
      />

      {/* Modal for Leave Request */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>New Leave Request</Text>

            <TextInput
              placeholder="Employee ID (Ex: 012)"
              style={styles.input}
              value={empId}
              onChangeText={setEmpId}
            />
            <TextInput
              placeholder="Name (Ex: Vivek)"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />

            {/* Start Date Picker */}
            <TouchableOpacity onPress={() => setShowStartPicker(true)}>
              <Text style={styles.input}>
                {startDate ? startDate.toLocaleDateString() : 'Select Start Date'}
              </Text>
            </TouchableOpacity>
            {showStartPicker && (
              <DateTimePicker
                value={startDate}
                mode="date"
                display="default"
                onChange={onStartDateChange}
              />
            )}

            {/* End Date Picker */}
            <TouchableOpacity onPress={() => setShowEndPicker(true)}>
              <Text style={styles.input}>
                {endDate ? endDate.toLocaleDateString() : 'Select End Date'}
              </Text>
            </TouchableOpacity>
            {showEndPicker && (
              <DateTimePicker
                value={endDate}
                mode="date"
                display="default"
                onChange={onEndDateChange}
              />
            )}

            <TextInput
              placeholder="Reason"
              style={styles.input}
              value={reason}
              onChangeText={setReason}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLeaveSubmit} style={styles.submitButton}>
                <Text style={styles.buttonText}>Submit</Text>
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
    backgroundColor: '#f3f3f3',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  leaveCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  leaveHeader: {
    marginBottom: 8,
  },
  leaveStatus: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  leaveReason: {
    fontSize: 14,
    color: '#666',
  },
  leaveBody: {
    marginTop: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitButton: {
    backgroundColor: '#04764E',
    padding: 10,
    borderRadius: 8,
  },
  reqbut: {
    backgroundColor: '#04764E',
    padding: 10,
    borderRadius: 8,
  },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
