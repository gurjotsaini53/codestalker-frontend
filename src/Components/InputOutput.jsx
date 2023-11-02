import React from "react";
import { useState } from "react";
import axios from "axios";
const InputOutput = ({ editorContent }) => {
  let code = editorContent;
  const [output, setOutput] = useState("");
  async function Run() {
    const payLoad = {
      language: "cpp",
      code,
    };
    const { data } = await axios.post("http://localhost:3000/run", payLoad);

    setOutput(data.output);
  }
  return (
    <>
      <div id="input-output-container">
        <div className="btn-controls ">
          <button type="button" class="btn btn-success" onClick={Run}>
            RUN
          </button>
          <button type="button" class="btn btn-primary">
            Download
          </button>
        </div>

        <div id="input">
          <h1>Input</h1>
          <textarea name="" id="" className="inp-out-textarea"></textarea>
        </div>
        <div id="output">
          <h1>Output</h1>
          <textarea
            name=""
            id=""
            className="inp-out-textarea"
            value={output}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default InputOutput;
