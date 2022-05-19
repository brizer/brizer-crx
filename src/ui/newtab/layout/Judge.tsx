import React, { FunctionComponent, useState } from "react";
import { Select, Input, Button } from "antd";
import { mockInfo } from "../data/judge";
const { Option } = Select;
const { TextArea } = Input;
interface IJudgeProps {}
const Judge: FunctionComponent = (props: IJudgeProps) => {
  const [result ,setResult] = useState(()=>Array(mockInfo.length).fill(''));
  const handleChange = (value, index) => {
    const txt = [...result];
    txt[index] = value;
    setResult(txt);
  }
  const copy = (text:string) => {
    const textareaC = document.createElement('textarea');
    textareaC.setAttribute('readonly', 'readonly'); //设置只读属性防止手机上弹出软键盘
    textareaC.value = text;
    document.body.appendChild(textareaC); //将textarea添加为body子元素
    textareaC.select();
    var res = document.execCommand('copy');
    document.body.removeChild(textareaC);//移除DOM元素
    return res;
  }
  return (
    <React.Fragment>
      {mockInfo.map((step, index) => {
        return (
          <div>
            <Select
              style={{ width: '100%' }}
              onChange={(event)=>{handleChange(event,index)}}
            >
              {step.map((info) => {
                return <Option value={info}>{info}</Option>;
              })}
            </Select>
          </div>
        );
      })}
    <TextArea
        value={result.join('')}
        placeholder="Controlled autosize"
      />
      <Button type="primary" onClick={()=>copy(result.join(''))}>复制</Button>
    </React.Fragment>
  );
};

export default Judge;
