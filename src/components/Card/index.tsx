import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class Card extends Component {
  seeMore = () =>{
    this.props.setSet(
      {seeMore: true}
    )
  }

  render() {
    const { name, avator, certificates, description} = this.props
    const call_image = 'https://s2.ax1x.com/2020/03/07/3j6YkR.png'
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
          <View className='read-more' onClick={this.seeMore}><Text>查看更多 >></Text></View>
        </View>
      </View>
    )
  }
}