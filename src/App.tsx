import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-slate-50 w-full h-full">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
