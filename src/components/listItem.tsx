 //listItem.tsx
 import Taro, { Component } from '@tarojs/taro'
 import { View, Text } from '@tarojs/components'
 import './listItem.scss'
 export default class ListItem extends Component {
   skipToDetail(){
     /* 必须得这样写=。= */
     this.props.onClick()
   }
   render() {
     const { title, description } = this.props
     return (
       <View className='list-item' onClick={this.skipToDetail}>
         <View><Text>{title}</Text></View>
         <View><Text>{description}</Text></View>
       </View>
     )
   }
 }