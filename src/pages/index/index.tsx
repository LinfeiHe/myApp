import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem} from '@tarojs/components'
import Header from '../../components/Header'
import Card from '../../components/Card'
import GridItem from '../../components/GridItem'
import ProductItem from '../../components/ProductItem'
import LabelTitle from '../../components/LabelTitle'
import More from './more'
import './index.scss'

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      seeMore: false
    }
  }

  setSet(obj) {
    this.setState(obj);
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  goDetail(url){
    Taro.navigateTo({
     url: `/pages/detail/index?url=${url}`
   })
  }

  handleModalClicked = () =>{
    this.setState({
      seeMore: false
    })
  }


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
      {img: require('../../assert/images/swiper1.jpg'), url: '1'},
      {img: require('../../assert/images/swiper2.png'), url: '2'},
      {img: require('../../assert/images/swiper3.png'), url: '3'}
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

    const cancel_image = require('../../assert/images/cancel.png')
    return (
      <View className='page'>
        {this.state.seeMore && 
        <View className='see-more' onClick={this.handleModalClicked}>
          <More number='516670' description={cardInfo.description}></More>
          <Image className='cancel-img' src={cancel_image} />
        </View>
        }
        <View className='header-card'>
          <Header name='龚迪娜' branch='慈溪虞波支行'></Header>
          <Card  name={cardInfo.name} avator={cardInfo.avator} certificates={cardInfo.certificates} description={cardInfo.description} setSet={this.setSet.bind(this)}></Card>
        </View>

        <LabelTitle title='热门活动'></LabelTitle>
        <View className='activity'>
        <Swiper className='swiper-container' indicatorColor='#999' indicatorActiveColor='#333' circular indicatorDots autoplay previous-margin='15px' next-margin='15px'>
          {swpierSet.map((item) => (<SwiperItem className='swiper-item' key={item.img}><Image mode="widthFix" src={item.img} onClick={this.goDetail.bind(this, item.url)}/></SwiperItem>))}
        </Swiper>
        </View>

        <LabelTitle title='精选产品'></LabelTitle>
        <View className='product'>
        {productSet.map(item => (
          <ProductItem description={item.description} title={item.title}
           rate={item.rate} type={item.type} key={item.title}></ProductItem>))}
        </View>

        <LabelTitle title='邀您体验'></LabelTitle>
        <View className='grid'>
        {gridSet.map(item => (
          <GridItem description={item.description} title={item.title}
           key={item.title}></GridItem>))}
        </View>
        
      </View>
  }
}
