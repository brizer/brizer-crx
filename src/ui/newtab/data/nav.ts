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
    },
    nav4:{
        title:'编辑器',
        route:'/editor'
    },
    nav5:{
        title:'数据对比',
        route:'/comparsion'
    },
    nav6:{
        title:'时间轴',
        route:'/times'
    },
    nav7:{
        title:'工作',
        route:'/jobs'
    },
    nav8:{
        title: '点评',
        route: '/judge'
    }
}


export default navs;