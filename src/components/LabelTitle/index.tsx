import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import star from '../../assert/images/star.png'

export default class LabelTitle extends Component {

  render() {
    const { title } = this.props
    return (
      <View className='title_components'>
        <Image className='title_components__logo' src={star}></Image>
        <Text>{title}</Text>
        <Image className='title_components__logo' src={star}></Image>
      </View>
    )
  }
}