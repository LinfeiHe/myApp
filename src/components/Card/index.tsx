import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class Card extends Component {

  render() {
    const { name, avator, certificates, description } = this.props
    const call_image = require('../../assert/images/call.png')
    return (
      <View className='card_components'>
        <View className='left'>
          <View className='avator'><Image className='avator-image' src={avator} /></View>
          <View className='name'><Text>{name}</Text><Text className='position'>客户经理</Text></View>
        </View>
        
        <View className='right'>
          <View className='call'><Image className='call-img' src={call_image} /></View>
          <View><Text>资格认证证书</Text></View>
          <View className='certificates'>{certificates.map(item => (<Image className='cer-image'  src={item} />))}</View>
          <View className='description'><Text>{description}</Text></View>
        </View>
      </View>
    )
  }
}