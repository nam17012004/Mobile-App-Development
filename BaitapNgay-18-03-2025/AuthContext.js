import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Tạo Context
const AuthContext = createContext();

// Provider để quản lý trạng thái người dùng
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Kiểm tra trạng thái đăng nhập khi ứng dụng khởi động
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ AsyncStorage:", error);
      }
    };

    loadUser();
  }, []);

  // Hàm đăng nhập
  const login = async (userData) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      console.error("Lỗi khi lưu trạng thái đăng nhập:", error);
    }
  };

  // Hàm đăng xuất
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      console.error("Lỗi khi xóa dữ liệu đăng nhập:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook tùy chỉnh để sử dụng Context
export const useAuth = () => useContext(AuthContext);
