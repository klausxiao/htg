
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
import Header from '../page/header';

import Fade from './fade';

const  WINWIDTH = Dimensions.get('window').width;
const  WINHEIGHT = Dimensions.get('window').height;



export  default class lbs extends  Component{
    constructor(props){
        super(props);
        this.state={

        };
    }


    //上滑导航渐隐
    _next(){
        this.props.navigator.push({
            name:'fade',
            component:Fade,
            params:{

            }
        })
    }




    render(){
        return(
            <View style={{flex:1,backgroundColor:'#e6e6e6'}}>
                <Header title='测试页面' Bcolor={'red'} Tcolor={'blue'}/>


                <TouchableOpacity onPress={this._next.bind(this)} style={{width:WINWIDTH,height:WINHEIGHT*0.1,backgroundColor:c,justifyContent:'center',alignItems:'center'}}>
                    <Text>导航渐隐</Text>
                </TouchableOpacity>


            </View>


        )
    }



}


