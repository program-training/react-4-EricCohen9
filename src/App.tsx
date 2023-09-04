import "./App.css";
// import { Example } from "./components/Example/Example";
import React from "react";
import { UserContextProvider } from "./components/contextProvider/contextProvider";
import { ChildComponent } from "./components/Grandpa/Grandpa";
const App:React.FC=()=> {
  return (
    <>
      <div>
  <UserContextProvider>
    <ChildComponent/>
  </UserContextProvider>
</div>
    </>
  );
}

export default App;
