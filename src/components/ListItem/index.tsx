 import Taro, { Component } from '@tarojs/taro'
 import { View, Text, Image } from '@tarojs/components'
 import './index.scss'
 import star from '../../assert/images/star.png'

 export default class ListItem extends Component {
   skipToDetail(){
     /* 必须得这样写=。= */
     this.props.onClick()
   }
   render() {
     const { title, description } = this.props
     return (
       <View className='list-item' onClick={this.skipToDetail}>
         <View>
           <Image src={star}></Image>
           <Text>{title}</Text>
           <Image src={star}></Image>
         </View>
         <View><Text>{description}</Text></View>
       </View>
     )
   }
 }