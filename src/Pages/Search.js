import React, { useEffect, useState } from "react";
import books from "../data/Books";
import { useParams } from "react-router-dom";
import AllBooks from "../component/AllBooks";
import Nav from "../component/Nav";
import SubHeader from "../component/SubHeader";
import BooksAd from "../component/BooksAd";
import Footer from "../component/Footer";

function Search() {
  const [newBooks, setNewBooks] = useState([]);
  const [trim, setTrim] = useState(10);
  const params = useParams();
  useEffect(() => {
    const i = books.filter(
      (value) =>
        value.name
          .toLowerCase()
          .trim()
          .replace("/ /g", "")
          .replace("/_/g", "")
          .replace("/-/g", "")
          .includes(
            params.query
              .toLowerCase()
              .trim()
              .replace("/ /g", "")
              .replace("/_/g", "")
              .replace("/-/g", "")
          ) ||
        value.author
          .toLowerCase()
          .replace("/ /g", "")
          .replace("/_/g", "")
          .replace("/-/g", "")
          .trim()
          .includes(
            params.query
              .toLowerCase()
              .trim()
              .replace("/ /g", "")
              .replace("/_/g", "")
              .replace("/-/g", "")
          ) ||
        value.category
          .toLowerCase()
          .replace("/ /g", "")
          .replace("/_/g", "")
          .trim()
          .includes(
            params.query
              .toLowerCase()
              .trim()
              .replace("/ /g", "")
              .replace("/_/g", "")
              .replace("/-/g", "")
          )
    );
    setNewBooks(i);
  }, [params]);

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
      <SubHeader text={"Your Search Results"} />
      {newBooks.length ? (
        <>
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
        </>
      ) : (
        <div className="no-search">
          <div className="no-search-con">
            <br />
            <br />
            <h2>
              Oops, sorry your search for {params.query} is not available!
            </h2>
            <p>
              <b>
                We have recieve your request and {params.query} will be uploaded
                soon!
              </b>
            </p>
            <br />
            <br />
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
      <AllBooks books={books.slice(0, 20)} />
      <br />
      <Footer />
    </div>
  );
}

export default Search;
