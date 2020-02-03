export interface IUrlsGroup {
  [key: string]: IUrl[];
}
export interface IUrl {
  url: string;
  name: string;
}

const urls: IUrlsGroup = {
  '日常': [
    {
      url: "http://cloud-i.netease.com/vpn",
      name: "网易vpn"
    },
    {
      url: "https://brizer.github.io/urls/zh/api.html",
      name: "awesome-url"
    },
    {
      url: "https://github.com/FunnyLiu",
      name: "源码分析库"
    },
    {
      url: "https://omnipotent-front-end.github.io/",
      name: "基础知识库"
    },
    {
      url: "https://github.com/omnipotent-front-end/blog",
      name: "github博客"
    },
    {
      url: "https://blog.csdn.net/mevicky",
      name: "CSDN博客"
    }
  ],
  '常用开源快速导航': [
    {
      url: 'https://github.com/brizer/multi-repo-git',
      name: 'mrgx'
    },
    {
      url: 'https://github.com/brizer/http-mocker',
      name: 'http-mocker'
    },
    {
      url: 'https://github.com/Linjovi/yoso',
      name: 'yoso'
    },
    {
      url: 'https://github.com/WebRookieSyb/rollup-to-nej',
      name: 'rollup-to-nej'
    }
  ]
};

export default urls;
