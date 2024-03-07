import { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter } from "react-router-dom";
import Blogs from "./components/Blogs";

function App() {
  return (
    <BrowserRouter>
      <>
        <div className="main-container">
          <Homepage />
          <Blogs />
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
