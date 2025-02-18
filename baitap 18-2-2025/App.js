import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    if (phoneRegex.test(phone)) {
      setErrorMessage("");
    } else {
      setErrorMessage("Số điện thoại không đúng định dạng. Vui lòng nhập lại");
    }
  };

  const handleKeyPress = (key) => {
    if (key === "⌫") {
      setPhoneNumber((prev) => prev.slice(0, -1));
    } else {
      setPhoneNumber((prev) => prev + key);
    }
    validatePhoneNumber(phoneNumber + key);
  };

  return (
    <View style={styles.phoneFrame}>
      {/* Thanh trạng thái */}
      <View style={styles.statusBar}>
        <Text style={styles.time}>5:18</Text>
        <View style={styles.statusIcons}>
          <View style={styles.signalBar} />
          <View style={styles.wifiIcon} />
          <View style={styles.batteryIcon} />
        </View>
      </View>

      {/* Nội dung chính */}
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Đăng nhập</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Nhập số điện thoại</Text>
          <Text style={styles.subtitle}>
            Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản OneHousing Pro
          </Text>

          <View style={[styles.inputContainer, errorMessage ? styles.inputError : null]}>
            <TextInput
              style={styles.input}
              value={phoneNumber}
              editable={false} // Không cho nhập bằng bàn phím thật
            />
          </View>
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bàn phím số */}
      <View style={styles.keyboard}>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "0", "⌫"].map((key) => (
          <TouchableOpacity key={key} style={styles.key} onPress={() => handleKeyPress(key)}>
            <Text style={styles.keyText}>{key}</Text>
          </TouchableOpacity>
        ))}
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
  header: {
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  inputContainer: {
    marginTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    paddingBottom: 5,
  },
  input: {
    fontSize: 20,
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
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
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
    backgroundColor: "#eee",
    paddingVertical: 10,
  },
  key: {
    width: "30%",
    margin: 5,
    paddingVertical: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  keyText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default LoginScreen;
