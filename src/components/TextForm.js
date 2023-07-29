import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase.", "success");
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase.", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  let [text, setText] = useState("Enter Text Here");
  return (
    <>
      <div
        className="mb-3"
        style={{ color: props.mode == "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="mybox"
            id="mybox"
            cols="30"
            rows="10"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode == "dark" ? "grey" : "white",
              color: props.mode == "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode == "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters.
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Your Text to preview"}</p>
      </div>
    </>
  );
}
