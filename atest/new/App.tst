// home screen

import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal, TextInput, ScrollView, StyleSheet } from "react-native";
import { Ionicons, AntDesign } from '@expo/vector-icons';

const WaiterDashboard = () => {
  const [showLeavePopup, setShowLeavePopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.profileMenu}>
          <Image
            style={styles.profileImage}
            source={{ uri: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" }}
          />
          <TouchableOpacity>
            <AntDesign name="bars" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.userText}>Charan <Text style={styles.waveEmoji}>👋</Text></Text>
        <Text style={styles.restaurantText}>Restaurant Name: ARS</Text>
      </View>

      {/* Profile Section */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileSection}>
          <Text style={styles.profileTitle}>Your Profile</Text>
          <View style={styles.profileCard}>
            <View style={styles.profileInfo}>
              <Image
                style={styles.profileCardImage}
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHByb2ZpbGV8fDB8fHx8MTYyNzk4NzI5OA&ixlib=rb-1.2.1&q=80&w=100",
                }}
              />
              <View>
                <Text style={styles.profileName}>Charan V</Text>
                <Text style={styles.profileRole}>Owner</Text>
              </View>
            </View>
            <View style={styles.profileTags}>
              <Text style={styles.tag}>Full-Time</Text>
              <Text style={styles.tag}>Experienced</Text>
            </View>
            <View style={styles.profileFooter}>
              <Text>5/5 Rating</Text>
              <Text>vijayawada, India</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <Text style={styles.quickActionTitle}>Quick Actions</Text>
          <View style={styles.grid}>
            <TouchableOpacity
              style={styles.quickActionCard}
              onPress={() => setShowSuccessPopup(true)}
            >
              <Ionicons name="calendar-outline" size={32} color="white" />
              <Text style={styles.quickActionText}>Attendance</Text>
              <Text style={styles.quickActionSubText}>Punch In / Punch Out</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.quickActionCard}
              onPress={() => setShowLeavePopup(true)}
            >
              <Ionicons name="document-text-outline" size={32} color="white" />
              <Text style={styles.quickActionText}>Apply Leave</Text>
              <Text style={styles.quickActionSubText}>Request time off</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickActionCard}>
              <Ionicons name="checkmark-done-outline" size={32} color="white" />
              <Text style={styles.quickActionText}>Check Attendance</Text>
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

      {/* Apply Leave Modal */}
      <Modal transparent={true} visible={showLeavePopup}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Apply Leave</Text>
              <TouchableOpacity onPress={() => setShowLeavePopup(false)}>
                <Text style={styles.closeButton}>&times;</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalBody}>
              <TextInput style={styles.input} placeholder="EMP ID" />
              <TextInput style={styles.input} placeholder="EMP Name" />
              <TextInput style={styles.input} placeholder="Number of Days" keyboardType="numeric" />
              <TextInput style={styles.input} placeholder="Reason" />
              <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Success Modal */}
      <Modal transparent={true} visible={showSuccessPopup}>
        <View style={styles.modalOverlay}>
          <View style={styles.successModal}>
            <View style={styles.modalHeader}>
              <Text style={styles.successTitle}>SUCCESS</Text>
              <TouchableOpacity onPress={() => setShowSuccessPopup(false)}>
                <Text style={styles.closeButton}>&times;</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.successBody}>
              <View style={styles.successIcon}>
                <Ionicons name="checkmark-circle-outline" size={40} color="white" />
              </View>
              <Text>Your attendance is saved</Text>
              <TouchableOpacity style={styles.doneButton}>
                <Text style={styles.doneButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default WaiterDashboard;

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
    marginTop: 45,
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
    fontSize: 24,
    fontWeight: "bold",
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
    backgroundColor: "#4b5563",
    borderRadius: 16,
    padding: 16,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  profileCardImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  profileRole: {
    fontSize: 14,
    color: "white",
  },
  profileTags: {
    flexDirection: "row",
    marginBottom: 16,
  },
  tag: {
    backgroundColor: "#374151",
    color: "white",
    fontSize: 12,
    padding: 4,
    borderRadius: 8,
    marginRight: 8,
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
    backgroundColor: "#10b981",
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
    backgroundColor: "#10b981",
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  doneButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});


