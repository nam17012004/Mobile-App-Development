import React, { createContext, useState, useContext } from 'react';

// Tạo Context
const AuthContext = createContext();

// Provider để quản lý trạng thái người dùng
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Hàm đăng nhập
  const login = (userData) => {
    setUser(userData);
  };

  // Hàm đăng xuất
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook tùy chỉnh để sử dụng Context
export const useAuth = () => useContext(AuthContext);
