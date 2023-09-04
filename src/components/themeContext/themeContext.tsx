import React, { createContext, useState } from "react";
type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};
interface ThemeContextProviderProps {
  children: React.ReactNode;
}
export const themeContext = createContext<ThemeContextType | undefined>(
  undefined
);
export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = (
  props
) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </themeContext.Provider>
  );
};
