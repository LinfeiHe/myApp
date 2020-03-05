import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class More extends Component {

  render() {
    const { number, description} = this.props
    const no_img = require('../../../assert/images/no.png')
    return (
      <View className='more-content'>
        <View className='more-content-cell'>
            <Image className='no-img' src={no_img} />
            <View className='text-cell'>
                <View><Text>员工编号</Text></View>
                <View><Text className='text'>{number}</Text></View>
            </View>
        </View>
        <View className='more-content-cell'>
            <Image className='no-img' src={no_img} />
            <View className='text-cell'>
                <View><Text>个性签名</Text></View>
                <View><Text className='text'>{description}</Text></View>
            </View>
        </View>
      </View>
    )
  }
}