import React, { useState } from "react";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="App-wrapper h-screen w-screen flex items-center justify-center ">
      {show ? <CreateAccount setShow={setShow} /> : <Login setShow={setShow} />}
    </div>
  );
};

export default App;
