import React, { useEffect, useState } from "react";
import books from "../data/Books";
import Nav from "../component/Nav";
import { AiFillProfile } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";

function Authors() {
  const [author, setAuthor] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let i = [];
    books.forEach((v) => {
      if (!i.includes(v.author) && v.author !== "") {
        i.push(v.author);
      }
    });
    const y = i.filter((v) => {
      const x = books.filter((j) => j.author === v);
      return x.length >= 5;
    });
    setAuthor(y);
  }, []);
  return (
    <div>
      <Nav />
      <div className="category">
        <div className="category-con">
          <h1>Authors</h1>
          <br />
          {author.map((v, i) => {
            return (
              <div key={i} onClick={() => navigate(`../../author/${v}`)}>
                <AiFillProfile size={40} />
                <p>
                  <b>{v} books</b>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default Authors;
