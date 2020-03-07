import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem} from '@tarojs/components'
import Header from '../../components/Header'
import Card from '../../components/Card'
import GridItem from '../../components/GridItem'
import ProductItem from '../../components/ProductItem'
import LabelTitle from '../../components/LabelTitle'
import More from './more'
import api from '../../service/api'
import './index.scss'

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      seeMore: false,
      cardInfo: {},
      swpierSet: [],
      productSet: [],
      gridSet: []
    }
  }

  setSet(obj) {
    this.setState(obj);
  }

  componentWillMount () {this.getData() }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  goDetail(url){
    Taro.navigateTo({
     url: `/pages/detail/index?url=${url}`
   })
  }

  getData = () =>{
    api.get('/api/mock').then((response) =>{
      console.log(response.data);
      this.setState({
        cardInfo: response.data.cardInfo,
        swpierSet: response.data.swpierSet,
        productSet: response.data.productSet,
        gridSet:response.data.gridSet
      })
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
    const cancel_image = 'https://s2.ax1x.com/2020/03/07/3j680J.png'
    return (
      <View className='page'>
        {this.state.seeMore && 
        <View className='see-more' onClick={this.handleModalClicked}>
          <More number='516670' description={this.state.cardInfo.description}></More>
          <Image className='cancel-img' src={cancel_image} />
        </View>
        }
        <View className='header-card'>
          <Header name='龚迪娜' branch='慈溪虞波支行'></Header>
          <Card  name={this.state.cardInfo.name} avator={this.state.cardInfo.avator} certificates={this.state.cardInfo.certificates} 
          description={this.state.cardInfo.description} setSet={this.setSet.bind(this)}></Card>
        </View>

        <LabelTitle title='热门活动'></LabelTitle>
        <View className='activity'>
        <Swiper className='swiper-container' indicatorColor='#999' indicatorActiveColor='#333' circular indicatorDots autoplay>
          {this.state.swpierSet.map((item) => (<SwiperItem className='swiper-item' key={item.img}><Image mode="widthFix" src={item.img} onClick={this.goDetail.bind(this, item.url)}/></SwiperItem>))}
        </Swiper>
        </View>

        <LabelTitle title='精选产品'></LabelTitle>
        <View className='product'>
        {this.state.productSet.map(item => (
          <ProductItem description={item.description} title={item.title}
           rate={item.rate} type={item.type} key={item.title}></ProductItem>))}
        </View>

        <LabelTitle title='邀您体验'></LabelTitle>
        <View className='grid'>
        {this.state.gridSet.map(item => (
          <GridItem description={item.description} title={item.title}
           key={item.title}></GridItem>))}
        </View>
        
      </View>
  }
}
