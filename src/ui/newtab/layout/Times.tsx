import React, { FunctionComponent, useState } from "react";
import moment from "moment";
import ms from "ms";
import { Timeline, Card } from "antd";
import { timeList } from "../data/times";

moment.locale('zh-cn');
window.moment = moment;
interface ITimeprops {}

const Times: FunctionComponent<any> = (props: ITimeprops) => {
  const now = moment.now();
  return (
    <div>
      <Timeline mode="left" style={{textAlign:'left'}}>
        {timeList.reverse().map((k, i) => (
          <Timeline.Item key={i}>
            {k.des} {k.date}
          </Timeline.Item>
        ))}
      </Timeline>
      <div>
      {timeList.reverse().map((k, i) => {

        const isFeature = moment(k.date).diff(now)>0?true:false;
        
        return (
           <Card
           key={i}
           title={`距离${k.des}`}
           style={{ width: 300, marginBottom:30,marginRight:20,color:isFeature?'blue':'red',display:'inline-block' }}
         >
           <p>{isFeature?'还有大概':'已经过去大概'}：{moment(`${k.date}`, "YYYYMMDD").fromNow(true)}</p>
           <p>{`具体天数：${isFeature?ms(moment(`${k.date}`).diff(moment(new Date())),{long:true}):ms(moment(+new Date()).diff(moment(`${k.date}`)),{long:true})}`}</p>
         </Card>
        )})}
       
      </div>
    </div>
  );
};

export default Times;
