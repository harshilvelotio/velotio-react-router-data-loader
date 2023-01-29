import React, { useCallback, useContext, useMemo, useState } from "react";

type AuthContextValues = {
  isAuthenticated: boolean;
  login: VoidFunction;
  logout: VoidFunction;
};

export const AuthContext = React.createContext<AuthContextValues>({
  isAuthenticated: false,
  login: () => null,
  logout: () => null,
});

type AuthContextProviderProps = { children: React.ReactNode };

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback(() => setIsAuthenticated(true), []);

  const logout = useCallback(() => setIsAuthenticated(false), []);

  const values = useMemo(
    () => ({ isAuthenticated, login, logout }),
    [isAuthenticated, login, logout]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const values = useContext(AuthContext);

  if (!values) {
    throw Error("Component not a child of AuthContext");
  }

  return values;
}
