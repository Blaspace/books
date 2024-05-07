import React, { useState, useEffect } from "react";
import Nav from "../component/Nav";
import SubHeader from "../component/SubHeader";
import { useParams } from "react-router-dom";
import AllBooks from "../component/AllBooks";
import books from "../data/Books";
import Footer from "../component/Footer";

function SingleAuthor() {
  const [newBooks, setNewBooks] = useState([]);
  const params = useParams();
  useEffect(() => {
    const i = books.filter((value) => value.author === params.author);
    setNewBooks(i);
  }, [params]);
  return (
    <div>
      <Nav />
      <SubHeader text={`Books by ${params.author}`} />
      <AllBooks books={newBooks} />
      <br />
      <Footer />
    </div>
  );
}

export default SingleAuthor;
