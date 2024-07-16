import { createContext, PropsWithChildren } from "react";

const AuthContext = createContext({});

export default function AuthProvider({ children }: PropsWithChildren) {
  return <AuthContextProvider value={{}}>{children} </AuthContextProvider>;
}
