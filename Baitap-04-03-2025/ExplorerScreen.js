import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

const ExplorerScreen = ({ navigation }) => {
  const { user } = useAuth();

  return (
    <View style={styles.phoneFrame}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>12:00</Text>
        <View style={styles.statusIcons}>
          <View style={styles.signalBar} />
          <View style={styles.wifiIcon} />
          <View style={styles.batteryIcon} />
        </View>
      </View>
      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search for meals or area" />
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>
        
        {/* Top Categories */}
        <Text style={styles.sectionTitle}>Top Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
          <View style={styles.categoryItem}><Image source={require('../assets/pizza.jpeg')} style={styles.categoryImage} /><Text>Pizza</Text></View>
          <View style={styles.categoryItem}><Image source={require('../assets/pizza.jpeg')} style={styles.categoryImage} /><Text>Burgers</Text></View>
          <View style={styles.categoryItem}><Image source={require('../assets/pizza.jpeg')} style={styles.categoryImage} /><Text>Steak</Text></View>
        </ScrollView>
        
        {/* Popular Items */}
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularContainer}>
          <View style={styles.popularItem}><Image source={require('../assets/pizza.jpeg')} style={styles.popularImage} /><Text>Food 1</Text><Text>By Viet Nam</Text><Text>$1</Text></View>
          <View style={styles.popularItem}><Image source={require('../assets/pizza.jpeg')} style={styles.popularImage} /><Text>Food 2</Text><Text>By Viet Nam</Text><Text>$3</Text></View>
        </ScrollView>
      </View>
      
      {/* Navigate to Account Screen */}
      <TouchableOpacity style={styles.accountButton} onPress={() => navigation.navigate('Account')}>
        <Text style={styles.accountButtonText}>Go to Account</Text>
      </TouchableOpacity>
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
  container: { flex: 1, padding: 20, backgroundColor: 'white', paddingBottom: 50 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  searchInput: { flex: 1, padding: 8, borderWidth: 1, borderRadius: 5 },
  filterButton: { padding: 8, backgroundColor: 'orange', borderRadius: 5, marginLeft: 10 },
  filterText: { color: 'white' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  categoryContainer: { flexDirection: 'row' },
  categoryItem: { alignItems: 'center', marginRight: 15 },
  categoryImage: { width: 80, height: 80, borderRadius: 10 },
  popularContainer: { flexDirection: 'row' },
  popularItem: { alignItems: 'center', marginRight: 15 },
  popularImage: { width: 100, height: 100, borderRadius: 10 },
  accountButton: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    bottom: 50,
    left: '50%',
    transform: [{ translateX: -75 }],
    width: 150,
  },
  accountButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ExplorerScreen;
