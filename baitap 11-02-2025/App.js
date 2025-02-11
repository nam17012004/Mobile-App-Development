import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Component giả lập thanh trạng thái trên Web
const StatusBarWeb = () => {
  if (Platform.OS !== 'web') return null; // Chỉ hiển thị trên Web

  return (
    <View style={styles.statusBar}>
      <Text style={styles.statusText}>5:18</Text>
      <View style={styles.statusIcons}>
        <Text>📶 WiFi 🔋</Text> {/* Biểu tượng đơn giản, có thể thay bằng icon */}
      </View>
    </View>
  );
};

// Component Button
const ColorButton = ({ title, color, onPress }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: color }]} 
      onPress={() => onPress(color)}
    >
      <Text style={[styles.text, { color: getTextColor(color) }]}>{title}</Text>
    </TouchableOpacity>
  );
};

// Hàm chọn màu chữ để dễ nhìn trên nền sáng/tối
const getTextColor = (bgColor) => {
  return ['yellow', 'white', 'lightgray'].includes(bgColor) ? 'black' : 'white';
};

// Component chính
const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('green');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <StatusBarWeb />
      <View style={[styles.phoneContainer, { backgroundColor }]}>
        <Text style={[styles.title, { color: getTextColor(backgroundColor) }]}>
          {backgroundColor.toUpperCase()}
        </Text>
        <ColorButton title="BLUE" color="blue" onPress={setBackgroundColor} />
        <ColorButton title="BROWN" color="brown" onPress={setBackgroundColor} />
        <ColorButton title="YELLOW" color="yellow" onPress={setBackgroundColor} />
        <ColorButton title="RED" color="red" onPress={setBackgroundColor} />
        <ColorButton title="BLACK" color="black" onPress={setBackgroundColor} />
      </View>
    </SafeAreaView>
  );
};

// Style
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000', 
  },
  statusBar: {
    width: 360, // Độ rộng bằng màn hình điện thoại
    height: 24, // Chiều cao thanh trạng thái
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  statusText: {
    color: 'white',
    fontWeight: 'bold',
  },
  statusIcons: {
    color: 'white',
  },
  phoneContainer: {
    width: 360,
    height: 700, 
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: 200,
    padding: 15,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  }
});

export default App;
