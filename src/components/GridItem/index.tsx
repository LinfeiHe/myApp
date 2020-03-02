 import Taro, { Component } from '@tarojs/taro'
 import { View, Text } from '@tarojs/components'
 import './index.scss'

 export default class GridItem extends Component {

   render() {
     const { title, description } = this.props
     return (
       <View className='grid-item'>
         <View className='grid-title'><Text>{title}</Text></View>
         <View className='grid-description'><Text>{description}</Text></View>
       </View>
     )
   }
 }