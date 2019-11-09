export interface IUrlsGroup {
  [key: string]: IUrl[];
}
export interface IUrl {
  url: string;
  name: string;
}

const urls: IUrlsGroup = {
  '日常链接': [
    {
      url: "https://www.baidu.com",
      name: "百度"
    }
  ]
};

export default urls;
