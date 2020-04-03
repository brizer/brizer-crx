import React, { FunctionComponent, useState } from "react";
import { Table } from "antd";
import useFetchInfo from "../../../hooks/useFetchInfo";
import infoConfig from "../data/compareInfo";

interface IComparsionProps {}

const Comparsion: FunctionComponent<any> = (props: IComparsionProps) => {
  const [infoList, setInfoList] = useState([]);
  useFetchInfo(infoConfig, setInfoList, []);
  const columns = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "我的数据",
      dataIndex: "myNumber",
      key: "myNumber"
    },
    {
      title: "当前数据",
      dataIndex: "number",
      key: "number"
    },
    {
      title: "数据来源",
      dataIndex: "link",
      key: "link",
      render: text => (
        <a target="_blank" href={text}>
          链接
        </a>
      )
    },
    {
      title: "历史价格",
      dataIndex: "historyLink",
      key: "historyLink",
      render: text => (
        <a target="_blank" href={text}>
          链接
        </a>
      )
    }
  ];
  function formatList(list) {
    return list && list.flat(2);
  }
  return (
    <div>
      <Table columns={columns} dataSource={formatList(infoList)} />
    </div>
  );
};

export default Comparsion;
