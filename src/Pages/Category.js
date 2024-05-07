import React, { useEffect, useState } from "react";
import Nav from "../component/Nav";
import books from "../data/Books";
import { AiFillBook } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";

function Category() {
  const [cat, setCat] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let i = [];
    books.forEach((value) => {
      let j = value.category;
      if (!i.includes(j)) {
        i.push(j);
      }
    });
    setCat(i);
  }, []);
  return (
    <div>
      <Nav />
      <div className="category">
        <div className="category-con">
          <h1>Categories</h1>
          <br />
          {cat.map((v, i) => {
            return (
              <div key={i} onClick={() => navigate(`../category/${v}`)}>
                <AiFillBook size={40} color="orangered" />
                <p>
                  <b>Books on {v.toLowerCase()}</b>
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

export default Category;
