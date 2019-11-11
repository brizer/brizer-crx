export interface ISearch {
    enable:boolean;
    label:string
    placeholder:string,
    link:string
}

type ISearchList = ISearch[];

const searchList:ISearchList = [
    {
        enable:true,
        label:'我的标星库',
        placeholder:'在github我的标星项目中搜索',
        link:'https://github.com/brizer?tab=stars&utf8=%E2%9C%93&q=&q=${name}'
    },
    {
        enable:true,
        label:'源码分析库',
        placeholder:'在github我的源码阅读库中搜索',
        link:'https://github.com/FunnyLiu?utf8=%E2%9C%93&q=${name}&type=&language='
    },
    {
        enable:true,
        label:'npm库',
        placeholder:'在npm官方库中搜索',
        link:'https://www.npmjs.com/search?q=${name}'
    }
]

export default searchList;