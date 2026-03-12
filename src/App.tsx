import Dashboard from "./pages/dashboard/Dashboard";
import Navbar from "./navbar/Navbar";
import { useState } from "react";

function App() {
  const [coinId, setCoinId] = useState("");

  return (
    <>
      <Navbar onSelectCoin={setCoinId}/>
      <Dashboard coinId={coinId}/>
    </>
  );
}

export default App;
