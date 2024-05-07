import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import books from "../data/Books";
import SubHeader from "../component/SubHeader";
import Nav from "../component/Nav";
import AllBooks from "../component/AllBooks";
import BooksAd from "../component/BooksAd";
import Footer from "../component/Footer";

function SingleCategory() {
  const [newBooks, setNewBooks] = useState([]);
  const [trim, setTrim] = useState(10);

  const params = useParams();
  useEffect(() => {
    const i = books.filter((value) => value.category === params.name);
    setNewBooks(i);
  }, [params]);

  const ads = [
    {
      img: require("../public/hero.jpeg"),
      text: "Get inspiring books from Joyce Meyer",
      url: "",
    },
    {
      img: require("../public/hero.jpeg"),
      text: "Get inspiring books from Joyce Meyer",
      url: "",
    },
    {
      img: require("../public/hero.jpeg"),
      text: "Get inspiring books from Joyce Meyer",
      url: "",
    },
  ];
  return (
    <div>
      <Nav />
      <SubHeader text={`Books on ${params.name}`} />
      <AllBooks books={newBooks.slice(0, trim)} />
      {newBooks.length > 10 && trim <= 10 && (
        <div className="no-search">
          <div className="no-search-con">
            <h3
              onClick={() => setTrim(100)}
              style={{
                color: "green",
                cursor: "pointer",
                marginLeft: "30px",
              }}
            >
              See More Books
            </h3>
          </div>
        </div>
      )}
      {trim > 10 && (
        <div className="no-search">
          <div className="no-search-con">
            <h3
              onClick={() => setTrim(10)}
              style={{
                color: "green",
                cursor: "pointer",
                marginLeft: "30px",
              }}
            >
              See Less Books
            </h3>
          </div>
        </div>
      )}
      <BooksAd ads={ads} />
      <div className="no-search">
        <div className="no-search-con">
          <hr />
          <h2>You might also be interested in</h2>
        </div>
      </div>
      <AllBooks books={books.slice(0, 10)} />
      <br />
      <Footer />
    </div>
  );
}

export default SingleCategory;
