import React from "react";
import Driver from "./components/Driver";
import Find from "./components/Find";
import Hero from "./components/Hero";
import { Luxury } from "./components/Luxury";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
    </div>
  );
}

export default App;
