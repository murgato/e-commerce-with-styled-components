import React from "react";
import "./App.css";
import Routes from "./routes";
import Navbar from "./components/navBar";
import Sidebar from "./components/SiberBar/Index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <Routes />
      </div>
    </div>
  );
}

export default App;
