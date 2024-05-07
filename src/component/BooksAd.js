import React from "react";
import { useNavigate } from "react-router-dom";

function BooksAd({ ads }) {
  const navigate = useNavigate();
  return (
    <div className="ads">
      <div className="ads-con">
        {ads.map((value, i) => {
          return (
            <div key={i} onClick={() => navigate(value.url)}>
              <section>
                <img src={value.img} alt={value.text} />
              </section>
              <br />
              <p>
                <b>{value.text}</b>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BooksAd;
