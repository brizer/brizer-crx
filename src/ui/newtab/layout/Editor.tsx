import React, { FunctionComponent } from "react";
import CodeEditor from "../components/CodeEditor";

interface IEditorProps {
  
}

const Editor: FunctionComponent<any> = (props: IEditorProps) => {
  return (
    <div>
      <h1>Editor</h1>
      <CodeEditor />
    </div>
  );
};

export default Editor;
