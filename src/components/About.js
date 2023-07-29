import React, { useState } from "react";

export default function About(props) {
  // const [mystyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let mystyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "grey" : "white",
  };

  return (
    <div className="container" style={mystyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>This is my first React App. </strong>It is a simple React
              App where the user can input some text and perform simple
              operation on them like converting the whole text from small to
              capital letters or vice-versa. Also the user can keep track of
              number of letters or words in the text.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
