import React from "react";
import { Button } from "antd";
import { addStyle } from "@tomato-js/element";
import { ExtensionActions } from "definitions";
type StyleType = "outline";
type Startegy = {
  [key in StyleType]: {
    add: string;
    rm: string;
  }
};
const strategy: Startegy = {
  outline: {
    add: "html * {outline:1px solid red}",
    rm: "html * {outline:none}",
  },
};
type StyleProps = {
    actions: ExtensionActions
}
const Style = (props:StyleProps) => {
  const { actions } = props;
  function add(type: StyleType) {
    const cssStr = strategy[type].add;
    actions.addCss(cssStr);
  }
  function rm(type: StyleType) {
    const cssStr = strategy[type].rm;
    actions.addCss(cssStr);
  }
  function edit(){
    actions.openEdit();
  }
  return (
    <div>
      <Button onClick={() => add("outline")} type="primary">
        增加outline
      </Button>
      <Button onClick={() => rm("outline")} type="primary">
        删除outline
      </Button>
      <Button onClick={() => edit()} type="primary">
        开启编辑
      </Button>
    </div>
  );
};

export default Style;
