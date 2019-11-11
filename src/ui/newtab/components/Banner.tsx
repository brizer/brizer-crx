import React, { FunctionComponent, useState } from "react";
import { Input, Select } from "antd";
const { Search, Group: InputGroup } = Input;
const { Option } = Select;

import styles from "./Banner.less";
import search from "../data/search";

interface IBannerProps {}

const Banner: FunctionComponent<any> = (props: IBannerProps) => {
  const [SearchInfo, setSearchInfo] = useState(search);
  const [CurSearch, setCurSearch] = useState(SearchInfo[0]);

  function gotoSearch(str: string) {
    const { link } = CurSearch;
    const name = str;
    const url = link.replace('${name}',name);
    window.open(`${url}`);
  }

  function changeSelect(value: string) {
    const cur = SearchInfo.find(v => v.label === value);
    setCurSearch({
      enable:true,
      label: cur.label,
      placeholder: cur.placeholder,
      link: cur.link
    });
  }
  return (
    <div className={styles.contain}>
      <InputGroup>
        <Select onChange={changeSelect} defaultValue={SearchInfo[0].label}>
          {SearchInfo.map(k => k.enable && (
            <Option key={k.label} value={k.label}>
              {k.label}
            </Option>
          ))}
        </Select>
        <Search
          className={styles.search}
          placeholder={CurSearch.placeholder}
          enterButton="搜索"
          onSearch={value => gotoSearch(value)}
        />
      </InputGroup>
    </div>
  );
};

export default Banner;
