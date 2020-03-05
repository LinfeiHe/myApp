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
        [{title: '我要优惠', description: '建行龙支付'},
        {title: '我要贷款', description: '随借随还，方便快捷'},
        {title: '信用卡申请', description: '一卡在手，方便所有'},
        {title: '财富体验', description: '财富诊断，合理规划'}]
    }
}
//使用delay方法可以延迟返回数据
module.exports=delay(data,1000);