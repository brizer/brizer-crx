import React, { FunctionComponent, useState } from "react";
import { Table } from "antd";
import useRssInfo from "../../../hooks/useRssInfo";
import rssInfoConfig from "../data/job_rss";

interface IJobsProps {}

const Jobs: FunctionComponent<any> = (props: IJobsProps) => {
  const [rssInfoList, setRssInfoList] = useState([]);
  useRssInfo(rssInfoConfig, setRssInfoList, []);
  const columns = [
    {
      title: "名称",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "描述",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "公司",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "发布日期",
      dataIndex: "pubDate",
      key: "pubDate",
    },
    {
      title: "链接",
      dataIndex: "link",
      key: "link",
      render: (text) => (
        <a target="_blank" href={text}>
          链接
        </a>
      ),
    },
  ];
  function formatList(list) {
    return list && list.flat(2);
  }
  return (
    <div>
      <Table
        bordered
        pagination={{ pageSize: 40 }}
        columns={columns}
        dataSource={formatList(rssInfoList)}
      />
    </div>
  );
};

export default Jobs;
