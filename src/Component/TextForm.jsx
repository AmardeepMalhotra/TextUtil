import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Convert to uppercase successfully!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Convert to lowercase successfully!", "success");
  };
  const handleClear = () => {
    let newText = " ";
    setText(newText);
    props.showAlert(" Text Cleared successfully!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const submitData = (event) => {
    // console.log("Submit Textmessage.");
    setText(event.target.value);
    props.showAlert(" Submit successfully!", "success");
  };
  let [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#041d4c" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-2">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#2d4e8e" : "white",
              color: props.mode === "dark" ? "white" : "#041d4c",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Upercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear Text
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-1"
          onClick={submitData}
        >
          Submit
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#041d4c" }}
      >
        <h3>Your text summary</h3>
        <p>
          <code> {text.split(" ").length}</code> words and
          <code>{text.length} </code>
          characters
        </p>
        <p>
          <code>{0.008 * text.split(" ").length}</code> Minutes read
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
