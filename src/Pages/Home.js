import React from "react";
import Nav from "../component/Nav";
import Header from "../component/Header";
import books from "../data/Books";
import AllBooks from "../component/AllBooks";

function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <div className="body">
        <AllBooks books={books} />
      </div>
    </div>
  );
}

export default Home;
