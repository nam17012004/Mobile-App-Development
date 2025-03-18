import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const HomeScreen = () => {
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
        <Text style={styles.text}>Welcome to Home Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phoneFrame: {
    width: 389,
    height: 692,
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 20,
    backgroundColor: 'white',
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: 50,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 5,
    height: 30,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signalBar: {
    width: 18,
    height: 10,
    backgroundColor: 'black',
    borderRadius: 2,
    marginRight: 5,
  },
  wifiIcon: {
    width: 16,
    height: 10,
    backgroundColor: 'black',
    borderRadius: 2,
    marginRight: 5,
  },
  batteryIcon: {
    width: 22,
    height: 12,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HomeScreen;
