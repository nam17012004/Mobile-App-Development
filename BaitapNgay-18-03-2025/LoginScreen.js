import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useAuth } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    if (email && password) {
      const userData = { name: 'Hung Nguyen', email };
      await AsyncStorage.setItem('user', JSON.stringify(userData)); // Lưu vào AsyncStorage
      login(userData);
      navigation.replace('Explorer');
    }
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
        <Text style={styles.title}>Sign In</Text>

        <Text style={styles.label}>Email ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email here!"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password here!"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or sign in with</Text>

        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebookButton}>
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.signUpText}>
          Not yet a member? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
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
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  label: { alignSelf: 'flex-start', marginLeft: 40, fontSize: 16, marginBottom: 5 },
  input: { width: '80%', borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  forgotPassword: { color: 'orange', alignSelf: 'flex-end', marginRight: 40, marginBottom: 20 },
  button: { backgroundColor: 'orange', padding: 10, borderRadius: 5, width: '80%', alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 18 },
  orText: { marginVertical: 15, fontSize: 16 },
  socialButtons: { flexDirection: 'row', gap: 10 },
  googleButton: { backgroundColor: 'white', padding: 10, borderRadius: 5, borderWidth: 1, width: 120, alignItems: 'center' },
  facebookButton: { backgroundColor: 'blue', padding: 10, borderRadius: 5, width: 120, alignItems: 'center' },
  socialText: { color: 'black', fontSize: 16 },
  signUpText: { marginTop: 20, fontSize: 16 },
  signUpLink: { color: 'blue', fontWeight: 'bold' },
});

export default LoginScreen;
