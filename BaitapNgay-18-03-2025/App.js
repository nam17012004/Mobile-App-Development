import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider, useAuth } from './context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from './screens/LoginScreen';
import ExplorerScreen from './screens/ExplorerScreen';
import AccountScreen from './screens/AccountScreen';

const Stack = createStackNavigator();

// Component điều hướng chính
const RootNavigator = () => {
  const auth = useAuth(); // Kiểm tra AuthContext
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser && auth?.setUser) {
          auth.setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ AsyncStorage:", error);
      }
      setIsLoading(false);
    };

    checkLoginStatus();
  }, []);

  // Hiển thị màn hình chờ nếu đang tải dữ liệu
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack.Navigator>
      {auth?.user ? (
        <>
          <Stack.Screen name="Explorer" component={ExplorerScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
