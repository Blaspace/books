import React, { useState } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { MdOutlineDownload } from "react-icons/md";
import PopUp from "./PopUp";

function AllBooks({ books }) {
  const [text, setText] = useState(null);
  return (
    <div className="body">
      <div className="allbooks">
        {books.map((value, index) => {
          return (
            <div key={index}>
              <section>
                <FaRegFilePdf size={40} color="orangered" />
                <span>
                  <p>{value.name.slice(0, 40)}</p>
                  <p>
                    <b>{value.author}</b>
                  </p>
                </span>
              </section>
              <a
                href={value.url}
                download={value.name}
                className="dbtn"
                onClick={() => setText(`Downloading ${value.name}`)}
              >
                <MdOutlineDownload size={20} className="downloadbtn" />
              </a>
            </div>
          );
        })}
      </div>
      {text && <PopUp text={text} setText={setText} />}
    </div>
  );
}

export default AllBooks;
