import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem} from '@tarojs/components'
import GridItem from '../../components/GridItem'
import LabelTitle from '../../components/LabelTitle'
import './index.scss'
import img1 from '../../assert/images/swiper1.jpg'
import img2 from '../../assert/images/swiper2.png'
import img3 from '../../assert/images/swiper3.png'

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
    const listSet = [
      {title: '标题一', description: '描述一'},
      {title: '标题二', description: '描述二'},
      {title: '标题三', description: '描述三'},
    ]
    return (
      <View className='index'>
        <Swiper indicatorDots autoplay>
          {[img1, img2, img3].map(img => (<SwiperItem key={img}><Image src={img}/></SwiperItem>))}
        </Swiper>
        {listSet.map(item => (
          <LabelTitle title={item.title}></LabelTitle>))}
        {listSet.map(item => (
          <GridItem onClick={this.skipToDetail.bind(this, item)} description={item.description} title={item.title}
           key={item.title}></GridItem>))}
      </View>
    )
  }
}
