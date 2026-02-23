import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Entry from "./components/Entry";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Entry />
      </main>
    </>
  );
}

export default App;
