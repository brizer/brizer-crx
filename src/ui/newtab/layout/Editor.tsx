import React, { FunctionComponent, useState } from "react";
import { before } from "@tomato-js/function";
import CodeEditor from "../components/CodeEditor";

interface IEditorProps {
  
}

const Editor: FunctionComponent<any> = (props: IEditorProps) => {
  const [output,setOutput] = useState('');
  function onRun(jsCode:string){
    eval(jsCode);
  }
  (window as any).log = before(console.log,(v)=>{
    const { args } = v;
    const value = args[0];
    setOutput(value);
  })
  return (
    <div style={{textAlign:"left"}}>
      <h1>Editor</h1>
      <CodeEditor onRun={onRun}/>
      <h2>console output:</h2>
      <p>
        {output}
      </p>
    </div>
  );
};

export default Editor;
