import React from "react";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<h2>login</h2>} />
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<h2>error</h2>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
