import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    if (phoneRegex.test(phone)) {
      setErrorMessage("");
      return true;
    } else {
      setErrorMessage("Số điện thoại không đúng định dạng. Vui lòng nhập lại");
      return false;
    }
  };

  const handleKeyPress = (key) => {
    if (key === "⌫") {
      setPhoneNumber((prev) => prev.slice(0, -1));
    } else {
      setPhoneNumber((prev) => prev + key);
    }
  };

  const handleContinue = () => {
    if (validatePhoneNumber(phoneNumber)) {
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.phoneFrame}>
      {/* Thanh trạng thái */}
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <View style={styles.signalBar} />
          <View style={styles.wifiIcon} />
          <View style={styles.batteryIcon} />
        </View>
      </View>

      {/* Nội dung */}
      <View style={styles.container}>
        <Text style={styles.headerText}>Đăng nhập</Text>

        <Text style={styles.title}>Nhập số điện thoại</Text>
        <TextInput
          style={[styles.input, errorMessage ? styles.inputError : null]}
          value={phoneNumber}
          editable={false}
        />
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>

        <View style={styles.keyboard}>
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "⌫"].map((key) => (
            <TouchableOpacity key={key} style={styles.key} onPress={() => handleKeyPress(key)}>
              <Text style={styles.keyText}>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 2,
    fontSize: 20,
    marginTop: 10,
    padding: 5,
  },
  inputError: {
    borderBottomColor: "red",
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#0057FF",
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  key: {
    width: "30%",
    margin: 5,
    padding: 15,
    backgroundColor: "#ddd",
    alignItems: "center",
    borderRadius: 8,
  },
  keyText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default LoginScreen;
