import { useEffect, useState, createContext } from "react";
interface data {
  id: number;
  name: string;
  username: string;
  "email": string,
}
interface UserContextType {
  user: data | null;
  setUser: React.Dispatch<React.SetStateAction<data | null>>;
}
console.log("fjiwwijfwsf");
interface UserContextProviderProps {
  children: React.ReactNode;
}
export const UserList = createContext<UserContextType | null>(null);
export const UserListProvider: React.FC<UserContextProviderProps> = (props) => {
  const [user, setUser] = useState<data | null>(null);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await result.json();
      console.log(data);
      console.log("data");
      setUser(data);
    };
    fetchItems();
  }, []);
  return (
    <div>
      <UserList.Provider value={{ user, setUser }}>
        {props.children}
      </UserList.Provider>
    </div>
  );
};
