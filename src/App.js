import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/author" element={<h1>Author</h1>} />
      <Route path="/category" element={<h1>Category</h1>} />
    </Routes>
  );
}

export default App;
