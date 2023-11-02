import React, { useState } from "react";
import AceEditor from "react-ace";
import axios from "axios";
// import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-c_cpp";
// import "ace-builds/src-noconflict/mode-java";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

function CodeEditor({ onEditorChange }) {
  const sample = `/*
  **************************************************
  *      Welcome to CodeStalker ,                  *
  *      Found by Gurjot Singh                     *
  *                                                *
  *                                                *
  **************************************************

  write your c++ code here    
  */
  `;
  const [code, setCode] = useState(sample);

  const handleChange = (newContent) => {
    // When the editor content changes, call onEditorChange
    onEditorChange(newContent);
    setCode(newContent);
  };

  async function run() {
    const language = "C++"; // Update the language as needed
    const input = ""; // You can add input data if needed

    try {
      const response = await axios.post("http://localhost:5000/compile", {
        code,
        language,
        input,
      });

      if (response.data.success) {
        // Compilation and execution were successful
        console.log("Output:", response.data.output);
      } else {
        // Compilation or execution failed, handle the error
        console.error("Compilation/Execution Error:", response.data.error);
      }
    } catch (error) {
      console.error("Network Error:", error);
    }
  }

  return (
    <AceEditor
      // mode="javascript"
      mode="c_cpp"
      // mode="java"
      theme="monokai"
      value={code}
      onChange={handleChange}
      name="codeEditor"
      editorProps={{ $blockScrolling: true }}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
      // width="100%"
      // height="100%"
    />
  );
}

export default CodeEditor;
