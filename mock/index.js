const delay = require('mocker-api/utils/delay');
const mockjs=require('mockjs');
const data= {
    'GET /api/user': {
        id: 1,
        username: 'kenny',
        sex: 6
    },  
    'GET /api/hi':(req,res)=>{
        res.json(
            {
                id:1,
                //query 方法获取Get参数,如 /api/hi?name=tony
                username:req.query["name"],
            }
        )
    },
    //可以直接使用mockjs生成mock数据
    'GET /api/mock':{
        cardInfo:{
            name: '龚迪娜',
            avator: 'https://ftp.bmp.ovh/imgs/2020/03/03e73893b41a112e.jpg',
            certificates: [
              'https://s2.ax1x.com/2020/03/07/3j6L90.png',
              'https://s2.ax1x.com/2020/03/07/3j6L90.png',
              'https://s2.ax1x.com/2020/03/07/3j6L90.png'
            ],
            description: '加油宁波！加油浙江！加油武汉！加油中国🇨🇳！！...'
        },
        swpierSet: [
            {img: 'https://ftp.bmp.ovh/imgs/2020/03/0a50cfa279331346.jpg', url: '1'},
            {img: 'https://ftp.bmp.ovh/imgs/2020/03/894f8f88627a87e9.png', url: '2'},
            {img: 'https://ftp.bmp.ovh/imgs/2020/03/d65f43ef4c9f61ae.png', url: '3'}
        ],
        productSet: [
            {title: '代销建信理财睿鑫(2年期)封闭式2020年第6期', description: '业绩比较基准', rate: '4.8', type: '理财'},
            {title: '乾元-安鑫(按日)现金管理类开放式净值产品', description: '七日年化收益率', rate: '3.19', type: '理财'},
            {title: '交银施罗德阿尔法核心混合型证券投资基金', description: '近一年净值增长率', rate: '38.4', type: '基金'},
            {title: '广发科技先锋混合型证券投资基金', description: '近一年净值增长率', rate: '12.65', type: '基金'}
        ],
        gridSet: [
            {title: '我要优惠', description: '建行龙支付'},
            {title: '我要贷款', description: '随借随还，方便快捷'},
            {title: '信用卡申请', description: '一卡在手，方便所有'},
            {title: '财富体验', description: '财富诊断，合理规划'}
        ]
    }
}
//使用delay方法可以延迟返回数据
module.exports=delay(data,1000);