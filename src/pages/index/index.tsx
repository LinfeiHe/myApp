import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem} from '@tarojs/components'
import Card from '../../components/Card'
import GridItem from '../../components/GridItem'
import ProductItem from '../../components/ProductItem'
import LabelTitle from '../../components/LabelTitle'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  skipToDetail({title, description}) {
    Taro.navigateTo({
      url: `/pages/detail/index?title=${title}&description=${description}`
    })
  }


  render() {
    const cardInfo = {
      name: '龚迪娜',
      avator: require('../../assert/images/avatar.jpg'),
      certificates: [
        require('../../assert/images/littleshow.png'),
        require('../../assert/images/littleshow.png'),
        require('../../assert/images/littleshow.png')
      ],
      description: '加油宁波！加油浙江！加油武汉！加油中国🇨🇳！！...'
    }

    const swpierSet = [
      require('../../assert/images/swiper1.jpg'),
      require('../../assert/images/swiper2.png'),
      require('../../assert/images/swiper3.png')
    ]
    const productSet = [
      {title: '代销建信理财睿鑫(2年期)封闭式2020年第6期', description: '业绩比较基准', rate: '4.8', type: '理财'},
      {title: '乾元-安鑫(按日)现金管理类开放式净值产品', description: '七日年化收益率', rate: '3.19', type: '理财'},
      {title: '交银施罗德阿尔法核心混合型证券投资基金', description: '近一年净值增长率', rate: '38.4', type: '基金'},
      {title: '广发科技先锋混合型证券投资基金', description: '近一年净值增长率', rate: '12.65', type: '基金'}
    ]

    const gridSet = [
      {title: '我要优惠', description: '建行龙支付'},
      {title: '我要贷款', description: '随借随还，方便快捷'},
      {title: '信用卡申请', description: '一卡在手，方便所有'},
      {title: '财富体验', description: '财富诊断，合理规划'},
    ]
    return (
      <View className='index'>
       

        <LabelTitle title='热门活动'></LabelTitle>
        <View className='activity'>
        <Swiper className='swiper-container' indicatorColor='#999' indicatorActiveColor='#333' circular indicatorDots autoplay previousMargin='20px' nextMargin='20px'>
          {swpierSet.map(img => (<SwiperItem key={img}><Image mode="widthFix" src={img}/></SwiperItem>))}
        </Swiper>
        </View>

        <LabelTitle title='精选产品'></LabelTitle>
        <View className='product'>
        {productSet.map(item => (
          <ProductItem onClick={this.skipToDetail.bind(this, item)} description={item.description} title={item.title}
           rate={item.rate} type={item.type} key={item.title}></ProductItem>))}
        </View>

        <LabelTitle title='邀您体验'></LabelTitle>
        <View className='grid'>
        {gridSet.map(item => (
          <GridItem onClick={this.skipToDetail.bind(this, item)} description={item.description} title={item.title}
           key={item.title}></GridItem>))}
        </View>
        
      </View>
    )
  }
}
