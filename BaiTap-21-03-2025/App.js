import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const PaymentScreen = ({ navigation }) => {
  return (
    <View style={styles.phoneFrame}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <View style={styles.signalBar} />
          <View style={styles.wifiIcon} />
          <View style={styles.batteryIcon} />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>Checkout</Text>
        <Text style={styles.price}>₹ 1,527</Text>
        <Text style={styles.subText}>Including GST (18%)</Text>
        
        <View style={styles.paymentMethods}>
          <TouchableOpacity style={styles.selectedMethod}>
            <Text style={styles.methodText}>💳 Credit card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.unselectedMethod}>
            <Text style={styles.methodText}> Apple Pay</Text>
          </TouchableOpacity>
        </View>

        <TextInput style={styles.input} placeholder="Card Number" />
        <TextInput style={styles.input} placeholder="Cardholder Name" />
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.halfInput]} placeholder="06 / 2024" />
          <TextInput style={[styles.input, styles.halfInput]} placeholder="CVV / CVC" secureTextEntry />
        </View>
        
        <Text style={styles.footerText}>We will send you an order details to your email after the successful payment</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Success')}>
          <Text style={styles.buttonText}>Pay for the order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.phoneFrame}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <View style={styles.signalBar} />
          <View style={styles.wifiIcon} />
          <View style={styles.batteryIcon} />
        </View>
      </View>
      <View style={styles.container}>
        <Image source={{ uri: 'https://example.com/success-icon.png' }} style={{ width: 100, height: 100 }} />
        <Text style={styles.text}>Payment Success, Yayy!</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Download Invoice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Payment')}>
          <Text style={styles.buttonText}>Back to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 22,
    color: 'green',
    fontWeight: 'bold',
  },
  subText: {
    color: 'gray',
    marginBottom: 15,
  },
  paymentMethods: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  selectedMethod: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
  },
  unselectedMethod: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 10,
  },
  methodText: {
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  halfInput: {
    width: '48%',
  },
  footerText: {
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
