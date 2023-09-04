type UserData = string;
interface UserContextType {
  user: UserData;
  setUser: React.Dispatch<React.SetStateAction<UserData>>;
}
interface UserContextProviderProps {
  children: React.ReactNode;
}
import React, { createContext, useState } from "react";
export const UserContext = createContext<UserContextType | null>(null);
export const UserContextProvider: React.FC<UserContextProviderProps> = (
  props
) => {
  const [user, setUser] = useState<UserData>("hello world");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
