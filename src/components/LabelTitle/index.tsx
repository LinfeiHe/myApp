import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class LabelTitle extends Component {

  render() {
    const { title } = this.props
    const star = 'https://s2.ax1x.com/2020/03/07/3j6jjU.png'
    return (
      <View className='title_components'>
        <Image className='title_components__logo' src={star}></Image>
        <Text>{title}</Text>
        <Image className='title_components__logo' src={star}></Image>
      </View>
    )
  }
}