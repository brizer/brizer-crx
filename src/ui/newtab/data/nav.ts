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
        title:'导航',
        route:'/url'
    }
}


export default navs;