import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  user: boolean;
  signIn: (password: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_PASSWORD = 'packing1222';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<boolean>(() => {
    return localStorage.getItem('isAdminAuthenticated') === 'true';
  });

  const signIn = (password: string) => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('isAdminAuthenticated', 'true');
      setUser(true);
    } else {
      throw new Error('Invalid password');
    }
  };

  const signOut = () => {
    localStorage.removeItem('isAdminAuthenticated');
    setUser(false);
  };

  const value = {
    user,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}