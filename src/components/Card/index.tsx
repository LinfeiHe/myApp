import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class Card extends Component {

  render() {
    const { name, avator, certificates, description } = this.props
    const call_image = require('../../assert/images/call.png')
    return (
      <View className='card_components'>
        <View className='person'>
          <View className='avator'><Image className='avator-image' src={avator} /></View>
          <View className='name'><Text>{name}</Text><Text className='position'>客户经理</Text></View>
        </View>
        
        <View className='certificates'>
            <Text>资格认证证书</Text>
            {certificates.map(item => (<Image className='cer-image'  src={item} />))}
            <Text className='description'>{description}</Text>
        </View>
        
        <View className='call'>
            <Image src={call_image} />
        </View>
      </View>
    )
  }
}