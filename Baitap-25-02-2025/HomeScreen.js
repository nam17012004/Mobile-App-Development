import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.phoneFrame}>
      {/* Thanh trạng thái giả lập */}
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <View style={styles.signalBar} />
          <View style={styles.wifiIcon} />
          <View style={styles.batteryIcon} />
        </View>
      </View>

      {/* Nội dung màn hình Home */}
      <View style={styles.container}>
        <Text style={styles.headerText}>Chào mừng bạn đến HomeScreen!</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Đăng xuất</Text>
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
    backgroundColor: "#fff",
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    backgroundColor: "red",
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
