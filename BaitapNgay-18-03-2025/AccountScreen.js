import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useAuth } from '../context/AuthContext';

const AccountScreen = ({ navigation }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigation.replace('Login');
  };

  return (
    <View style={styles.phoneFrame}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <View style={styles.signalBar} />
          <View style={styles.wifiIcon} />
          <View style={styles.batteryIcon} />
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.name}>{user?.name || 'Guest'}</Text>
        <Text style={styles.role}>Mobile Developer</Text>
        <Text style={styles.description}>
          I have above 5 years of experience in native mobile apps development, now I am learning React Native
        </Text>
        <TouchableOpacity onPress={handleLogout} style={styles.button}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phoneFrame: {
    width: 389,
    height: 692,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 20,
    backgroundColor: "white",
    overflow: "hidden",
    alignSelf: 'center',
    marginTop: 50,
  },
  statusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 5,
    height: 30,
    alignItems: "center",
    backgroundColor: "white",
  },
  time: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statusIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  signalBar: {
    width: 18,
    height: 10,
    backgroundColor: "black",
    borderRadius: 2,
    marginRight: 5,
  },
  wifiIcon: {
    width: 16,
    height: 10,
    backgroundColor: "black",
    borderRadius: 2,
    marginRight: 5,
  },
  batteryIcon: {
    width: 22,
    height: 12,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    marginTop: 10,
  },
  role: {
    color: 'blue',
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default AccountScreen;