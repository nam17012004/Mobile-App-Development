import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ScanScreen = () => {
  return (
    <View style={styles.container}>
      {/* Nút Back */}
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      
      {/* Ảnh sản phẩm và hiệu ứng scan */}
      <View style={styles.scanArea}>
        <Image
          source={{ uri: "https://example.com/juice.png" }}
          style={styles.productImage}
        />
      </View>
      
      {/* Thông tin sản phẩm */}
      <View style={styles.productInfo}>
        <Image
          source={{ uri: "https://example.com/juice_icon.png" }}
          style={styles.productIcon}
        />
        <Text style={styles.productName}>Lauren’s</Text>
        <Text style={styles.productTitle}>Orange Juice</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8EDE3",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },
  scanArea: {
    marginTop: 100,
    width: 300,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: 200,
    height: 350,
    resizeMode: "contain",
  },
  productInfo: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    position: "absolute",
    bottom: 50,
    width: "90%",
    justifyContent: "space-between",
  },
  productIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
  },
  addButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 10,
  },
});

export default ScanScreen;
