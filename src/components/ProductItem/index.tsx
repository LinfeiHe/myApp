import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class ProductItem extends Component {
  goDetail({title, description}){
    Taro.navigateTo({
     url: `/pages/detail/index?title=${title}&description=${description}`
   })
  }

  render() {
    const { title, description, rate, type } = this.props
    return (
      <View className='product-item'  onClick={this.goDetail.bind(this, {title, description})}>
        <View className='product-type'><Text className='tip-right'>{type}</Text></View>
        <View className='product-rate'><Text>{rate}</Text><Text className='percent'>%</Text></View>
        <View className='product-description'><Text>{description}</Text></View>
        <View className='product-title'><Text>{title}</Text></View>
      </View>
    )
  }
}