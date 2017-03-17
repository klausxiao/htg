
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Navigator,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Platform,


} from 'react-native';

//页头
import BackHeader from '../page/backHeader';


const  WINWIDTH = Dimensions.get('window').width;
const  WINHEIGHT = Dimensions.get('window').height;



export  default class Fade extends  Component{
    constructor(props){
        super(props);
        //滚动前的颜色
        this.state={
            GRed: 0,
            GGreen: 0,
            GBlue: 0,
            GAlpha: 0,

            WRed: 255,
            WGreen: 255,
            WBlue: 255,
            WAlpha: 1,

            TRed:168,
            TGreen:168,
            TBlue:168,
            TAlpha: 0.5,
        };
    }


    //上滑导航渐隐
    _next(){

    }


    //滚动后的颜色
    onScroll(event) {
        var offsetY = event.nativeEvent.contentOffset.y

        if (offsetY / (WINHEIGHT * 0.15) <= 1) {
            this.setState({
                GRed: (255 * (offsetY / (WINHEIGHT * 0.15))),
                GGreen: (214 * (offsetY / (WINHEIGHT * 0.15))),
                GBlue: (1 * (offsetY / (WINHEIGHT * 0.15))),
                GAlpha: (1 * (offsetY / (WINHEIGHT * 0.15))),
                WRed: (0 * (offsetY / (WINHEIGHT * 0.15))),
                WGreen: (0 * (offsetY / (WINHEIGHT * 0.15))),
                WBlue: (0 * (offsetY / (WINHEIGHT * 0.15))),
                WAlpha: (1 * (offsetY / (WINHEIGHT * 0.15))),
                TRed: (168 * (offsetY / (WINHEIGHT * 0.15))),
                TGreen: (168 * (offsetY / (WINHEIGHT * 0.15))),
                TBlue: (168 * (offsetY / (WINHEIGHT * 0.15))),
                TAlpha: (0 * (offsetY / (WINHEIGHT * 0.15))),

            })
        } else {
            return true
        }
        //回滚的颜色
        if(offsetY== 0){
            this.setState({
                WRed: 255,
                WGreen: 255,
                WBlue: 255,
                WAlpha: 1,
                TRed:168,
                TGreen:168,
                TBlue:168,
                TAlpha: 0.5,
            })
        }
    }




    render(){
        return(
            <View style={{flex:1,backgroundColor:'#e6e6e6'}}>
                <BackHeader title={'123'} Bcolor={'rgba(' + this.state.WRed + ',' + this.state.WGreen + ',' + this.state.WBlue + ',' + this.state.WAlpha + ')'} Tcolor='#696969' navigator={this.props.navigator}/>
            <ScrollView onScroll={this.onScroll.bind(this)} scrollEventThrottle={0.5}>

                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>56556565565</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>787878787878</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>9090909090909</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>asdads</Text>
                    <Text>1212121212121</Text>


            </ScrollView>

            </View>


        )
    }



}


