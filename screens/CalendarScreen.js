import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';

const CalendarScreen = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [eventList, setEventList] = useState([]);

  const serverURL = "yourServerURL"; // Replace with your server URL
  const selectedEmployeeId = "yourEmpID"; // Replace with employee ID or fetch it

  useEffect(() => {
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
  }, [currentDate]);

  // Generate Calendar for the current month
  const generateCalendar = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = (firstDay.getDay() + 6) % 7; // Adjust to start from Monday

    const startDate = new Date(year, month, 1).toISOString().split('T')[0];
    const endDate = new Date(year, month + 1, 0).toISOString().split('T')[0];

    fetchAttendanceData(year, month + 1, startDate, endDate, daysInMonth, startingDay);
  };

  // Fetch attendance data from server and update the state
  const fetchAttendanceData = (year, month, startDate, endDate, daysInMonth, startingDay) => {
    fetch(`http://${serverURL}/api/manageEmployee/attendance/getattendance/${selectedEmployeeId}/from/${startDate}/to/${endDate}`)
      .then(response => response.json())
      .then(data => {
        setAttendanceRecords(data);
      })
      .catch(error => {
        Alert.alert("Error", "Failed to fetch attendance data.");
      });
  };

  // Show events when a day is clicked
  const showDayEvents = (year, month, day) => {
    const selectedRecord = attendanceRecords.find(record => {
      const recordDate = new Date(record.check_in);
      return recordDate.getFullYear() === year && recordDate.getMonth() + 1 === month && recordDate.getDate() === day;
    });

    if (selectedRecord) {
      const events = [];
      if (selectedRecord.check_in) {
        events.push(`Check-in: ${new Date(selectedRecord.check_in).toLocaleTimeString()}`);
      }
      if (selectedRecord.check_out) {
        events.push(`Check-out: ${new Date(selectedRecord.check_out).toLocaleTimeString()}`);
      }
      setEventList(events);
    } else {
      setEventList(['No attendance data available.']);
    }
    setSelectedDay(day);
  };

  const renderCalendarDays = () => {
    const days = [];
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = (firstDay.getDay() + 6) % 7;

    // Blank days before first of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(<View key={`blank-${i}`} style={styles.blankDay} />);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const attendance = attendanceRecords.find(record => {
        const recordDate = new Date(record.check_in);
        return recordDate.getDate() === day;
      });

      let dayStyle = [styles.day];
      if (attendance) {
        dayStyle.push(attendance.check_out ? styles.attendedDay : styles.partialDay);
      }

      days.push(
        <TouchableOpacity
          key={day}
          style={dayStyle}
          onPress={() => showDayEvents(currentDate.getFullYear(), currentDate.getMonth() + 1, day)}
        >
          <Text>{day}</Text>
        </TouchableOpacity>
      );
    }

    return days;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Attendance Calendar</Text>
      </View>

      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}>
          <Text style={styles.navText}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.currentMonth}>
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </Text>
        <TouchableOpacity onPress={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}>
          <Text style={styles.navText}>&gt;</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.weekDays}>
        <Text style={styles.weekDay}>Mo</Text>
        <Text style={styles.weekDay}>Tu</Text>
        <Text style={styles.weekDay}>We</Text>
        <Text style={styles.weekDay}>Th</Text>
        <Text style={styles.weekDay}>Fr</Text>
        <Text style={styles.weekDay}>Sa</Text>
        <Text style={styles.weekDay}>Su</Text>
      </View>

      <View style={styles.calendarGrid}>{renderCalendarDays()}</View>

      <View style={styles.eventList}>
        <Text style={styles.eventTitle}>
          {selectedDay ? `Events on ${selectedDay}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}` : 'Select a day'}
        </Text>
        {eventList.map((event, index) => (
          <Text key={index} style={styles.eventItem}>
            {event}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    padding: 16,
  },
  header: {
    backgroundColor: '#04764E',
    padding: 16,
    borderRadius: 25,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  currentMonth: {
    fontSize: 18,
    fontWeight: '600',
  },
  navText: {
    fontSize: 18,
    color: '#555',
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
  },
  weekDay: {
    fontSize: 14,
    fontWeight: '500',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  blankDay: {
    width: 40,
    height: 40,
    margin: 5,
  },
  day: {
    width: 40,
    height: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
  },
  attendedDay: {
    backgroundColor: '#04764E',
  },
  partialDay: {
    backgroundColor: '#ff9800',
  },
  eventList: {
    marginTop: 20,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  eventItem: {
    fontSize: 14,
    marginVertical: 4,
  },
});

export default CalendarScreen;