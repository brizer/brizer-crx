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
      url: "https://omnipotent-front-end.github.io/best-code/",
      name: "编码技巧库"
    },
    {
      url: "https://github.com/omnipotent-front-end/blog",
      name: "github博客"
    },
    {
      url: "https://blog.csdn.net/mevicky",
      name: "CSDN博客"
    },
    {
      url: 'http://hao.shejidaren.com/index.html',
      name: '产品设计导航大全'
    },
    {
      url: 'https://chat.openai.com/chat',
      name: 'AI小助手chatGPT'
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
      url: 'https://github.com/tomato-js/tomato',
      name: '@tomato-js'
    },
    {
      url: 'https://github.com/tomato-js/tomato-node',
      name: '@tomato-node'
    },
    {
      url: 'https://github.com/tomato-js/examples',
      name: '@tomato-js/examples'
    },
    {
      url: 'https://github.com/brizer/source-reader',
      name: 'source-reader'
    },
    {
      url: 'https://omnipotent-front-end.github.io/-Design-Patterns-Typescript/#/',
      name: '-Design-Patterns-Typescript'
    },
    {
      url: 'https://github.com/omnipotent-front-end/shares',
      name: 'shares'
    },
    {
      url: 'https://github.com/omnipotent-front-end/Foods',
      name: 'health'
    },
    {
      url: 'https://github.com/brizer/lighthouse-apm',
      name: 'lighthouse-apm'
    },
    {
      url: 'https://github.com/omnipotent-front-end/readList',
      name: 'readList'
    }
  ]
};

export default urls;
