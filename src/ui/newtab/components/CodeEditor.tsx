require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

import React, { FunctionComponent, useState } from "react";
import { Button } from "antd";

import { UnControlled as CodeMirror } from "react-codemirror2";
import styles from "./CodeEditor.less";
import "./CodeEditor.css";


interface ICodeEditorProps {
  onRun: Function;
}

const CodeEditor: FunctionComponent<any> = (props: ICodeEditorProps) => {
  const { onRun } = props;
  const [jsCode, setJsCode] = useState("");
  function run() {
    onRun(jsCode);
  }
  return (
    <div style={{ textAlign: "left" }}>
      <h3>javascript</h3>
      <Button onClick={run} type="primary">
        Run
      </Button>
      <CodeMirror
        className={styles.panel}
        value=""
        options={{
          lineNumbers: true,
          mode: "javascript",
          indentUnit: 4,
          indentWithTabs: true,
          theme: "base16-dark"
        }}
        onChange={(editor, data, value) => {
          setJsCode(value);
        }}
      />
    </div>
  );
};

export default CodeEditor;
