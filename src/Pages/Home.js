import React from "react";
import Nav from "../component/Nav";
import Header from "../component/Header";
import books from "../data/Books";
import AllBooks from "../component/AllBooks";
import BooksAd from "../component/BooksAd";
import Footer from "../component/Footer";

function Home() {
  const ads = [
    {
      img: require("../public/img.jpeg"),
      text: "Get inspiring books from Smith Wigglesworth",
      url: "../../author/Smith Wigglesworth",
    },
    {
      img: require("../public/img1.jpeg"),
      text: "Get inspiring books from Joyce Meyer",
      url: "../../author/Joyce Meyer",
    },
    {
      img: require("../public/img3.jpeg"),
      text: "Browse our Collection of book based on category",
      url: "../../category",
    },
  ];
  return (
    <div>
      <Nav />
      <Header />
      <AllBooks books={books.slice(0, 4)} />
      <BooksAd ads={ads} />
      <AllBooks books={books.slice(10, 20)} />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
