 import Taro, { Component } from '@tarojs/taro'
 import { View, Text } from '@tarojs/components'
 import './index.scss'

 export default class GridItem extends Component {

   goDetail({title, description}){
     Taro.navigateTo({
      url: `/pages/detail/index?title=${title}&description=${description}`
    })
   }

   render() {
     const { title, description } = this.props
     return (
       <View className='grid-item' onClick={this.goDetail.bind(this, {title, description})}>
         <View className='grid-content'>
           <View className='grid-title'><Text>{title}</Text></View>
           <View className='grid-description'><Text>{description}</Text></View>
         </View>
       </View>
     )
   }
 }