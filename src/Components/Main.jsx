import React, { useState } from "react";
import ChooseLang from "./ChooseLang";
import Editor from "./Editor";
import InputOutput from "./InputOutput";

function Main() {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (content) => {
    setEditorContent(content);
    console.log(content);
  };

  return (
    <>
      <div className="main-page">
        <ChooseLang />
        <Editor onEditorChange={handleEditorChange} />
        {/* Step 3: Pass the state down to InputOutput as a prop */}
        <InputOutput editorContent={editorContent} />
      </div>
    </>
  );
}

export default Main;
