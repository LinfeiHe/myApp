import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import ccb from '../../assert/images/ccb.png'

export default class Header extends Component {

  render() {
    const { name, branch } = this.props
    return (
      <View className='header_components'>
        <View className='header_components__logo'>
          <Image className='cbb-img' src={ccb}></Image>
          <Text className='branch'>{branch}</Text>
        </View>
        <View className='header_components__name'><Text >{name}的工作室</Text></View>
      </View>
    )
  }
}