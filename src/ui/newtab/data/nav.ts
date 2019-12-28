export interface INavs {
    [key:string]:INav
}

export interface INav {
    title: string,
    route: string,
}

const navs:INavs = {
    nav1:{
        title:'主页',
        route:'/'
    },
    nav2:{
        title:'信息流',
        route:'/info'
    },
    nav3:{
        title:'Github汇总',
        route:'/open'
    }
}


export default navs;