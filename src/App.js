import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Category from "./Pages/Category";
import SingleCategory from "./Pages/SingleCategory";
import Authors from "./Pages/Authors";
import SingleAuthor from "./Pages/SingleAuthor";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/authors" element={<Authors />} />
      <Route path="/author/:author" element={<SingleAuthor />} />
      <Route path="/category" element={<Category />} />
      <Route path="/category/:name" element={<SingleCategory />} />
      <Route path="search/:query" element={<Search />} />
    </Routes>
  );
}

export default App;
