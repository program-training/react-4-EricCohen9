import "./App.css";
// import { Example } from "./components/Example/Example";
import React from "react";
import { UserContextProvider } from "./components/contextProvider/contextProvider";
import { ChildComponent } from "./components/Grandpa/Grandpa";
import { ThemeContextProvider } from "./components/themeContext/themeContext";
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";
import { UserListProvider } from "./components/UserContext/UserContext";
import { UserList } from "./components/UserContext/UserContext";
import { Header } from "./components/Header/Header";
const App = () => {
  return (
    <>
      <div>
        {/* <UserContextProvider>
            <ChildComponent />
          </UserContextProvider> */}

        {/* <ThemeContextProvider>
          <ThemeSwitcher></ThemeSwitcher>
        </ThemeContextProvider> */}
          <UserListProvider>
            <Header></Header>
          </UserListProvider>

        
      </div>
    </>
  );
};

export default App;
