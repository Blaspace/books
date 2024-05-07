import React from "react";

function PopUp({ text, setText }) {
  return (
    <div className="popup">
      <div>
        <p>{text}</p>
        <br />
        <button onClick={() => setText(null)}>Okay</button>
      </div>
    </div>
  );
}

export default PopUp;
