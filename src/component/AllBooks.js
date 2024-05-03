import React from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { MdOutlineDownload } from "react-icons/md";

function AllBooks({ books }) {
  return (
    <div className="allbooks">
      {books.map((value, index) => {
        return (
          <div key={index}>
            <section>
              <FaRegFilePdf size={40} color="orangered" />
              <span>
                <p>{value.name.slice(0, 60)}</p>
                <p>
                  <b>{value.author}</b>
                </p>
              </span>
            </section>
            <a href={value.url} download={value.name} className="dbtn">
              <MdOutlineDownload size={20} className="downloadbtn" />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default AllBooks;
